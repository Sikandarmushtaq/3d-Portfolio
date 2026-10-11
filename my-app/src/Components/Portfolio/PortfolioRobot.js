import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/addons/utils/SkeletonUtils.js";
import * as THREE from "three";

const MODEL_HEIGHT = 4.8;
const MODEL_TOP = 1.8;
const MODEL_ROTATION_Y = 0;

export default function PortfolioRobot({
  pointerRef,
  visibleRef,
  invalidateRef,
}) {
  const gltf = useGLTF("/lisa.glb");
  const { invalidate, gl } = useThree();

  const groupRef = useRef(null);

  const textPosition = useRef({
    x: 256,
    y: 256,
    speedX: 65,
    speedY: 48,
    lastTime: 0,
  });

  const screenData = useMemo(() => {
    const canvas = document.createElement("canvas");

    canvas.width = 512;
    canvas.height = 512;

    const texture = new THREE.CanvasTexture(canvas);

    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    texture.center.set(0.5, 0.5);
    texture.rotation = Math.PI;

    return { canvas, texture };
  }, []);

  const modelData = useMemo(() => {
    const model = clone(gltf.scene);

    const materials = [];
    const bodyMaterials = [];

    const hiddenObjects = [
      "Plane001",
      "Maps",
      "FaceCam",
      "ScreenGlow",
      "Raycaster",
    ];

    hiddenObjects.forEach((name) => {
      const object = model.getObjectByName(name);

      if (object) {
        object.visible = false;
      }
    });

    model.traverse((obj) => {
      if (!obj.isMesh || obj.name === "Screen") return;

      const updateMaterial = (original) => {
        if (!original) return original;

        if (
          obj.name !== "BodyHP" &&
          original.name !== "light_grey"
        ) {
          return original;
        }

        const material = original.clone();

        materials.push(material);

        if (obj.name === "BodyHP") {
          bodyMaterials.push(material);

          material.color.set("#96939A");
          material.metalness = 0;
          material.roughness = 1;
          material.envMapIntensity = 0;

          if (material.clearcoat !== undefined) {
            material.clearcoat = 0;
          }
        } else {
          material.color.set("#A9AAAF");
          material.metalness = 0.05;
          material.roughness = 0.45;
          material.envMapIntensity = 0.35;
        }

        return material;
      };

      if (Array.isArray(obj.material)) {
        obj.material = obj.material.map(updateMaterial);
      } else {
        obj.material = updateMaterial(obj.material);
      }
    });

    const screen = model.getObjectByName("Screen");

    if (screen && screen.isMesh) {
      const material = new THREE.MeshBasicMaterial({
        map: screenData.texture,
        color: "#ffffff",
        side: THREE.DoubleSide,
        toneMapped: false,
      });

      screen.material = material;
      materials.push(material);
    }

    model.updateMatrixWorld(true);

    const tv = model.getObjectByName("TV");
    const body = model.getObjectByName("BodyHP");

    const box = new THREE.Box3();

    if (tv) {
      box.expandByObject(tv);
    }

    if (body) {
      box.expandByObject(body);
    }

    if (box.isEmpty()) {
      box.setFromObject(model);
    }

    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    if (size.y > 0) {
      const scale = MODEL_HEIGHT / size.y;

      model.scale.setScalar(scale);

      model.position.set(
        -center.x * scale,
        MODEL_TOP - box.max.y * scale,
        -center.z * scale
      );
    }

    model.rotation.y = MODEL_ROTATION_Y;

    const movement = [
      {
        name: "torso",
        x: 0.11,
        y: 0.14,
        speed: 3.8,
      },
      {
        name: "neck1",
        x: 0.04,
        y: 0.045,
        speed: 4,
      },
      {
        name: "neck2",
        x: 0.055,
        y: 0.065,
        speed: 4.5,
      },
      {
        name: "head",
        x: 0.14,
        y: 0.19,
        speed: 5,
      },
    ].map((item) => {
      const bone = model.getObjectByName(item.name);

      return {
        ...item,
        bone,
        originalX: bone ? bone.rotation.x : 0,
        originalY: bone ? bone.rotation.y : 0,
      };
    });

    return {
      model,
      materials,
      bodyMaterials,
      movement,
    };
  }, [gltf.scene, screenData]);

  useEffect(() => {
    invalidateRef.current = invalidate;
    invalidate();

    return () => {
      if (invalidateRef.current === invalidate) {
        invalidateRef.current = null;
      }
    };
  }, [invalidate, invalidateRef]);

  useEffect(() => {
    if (!modelData.bodyMaterials.length) return;

    const loader = new THREE.TextureLoader();

    const textures = {};
    const loaded = [];

    let active = true;
    let remaining = 3;
    let failed = false;

    const files = [
      ["color", "/textures/cotton_jersey_diff_2k.jpg"],
      ["normal", "/textures/cotton_jersey_nor_gl_2k.png"],
      ["roughness", "/textures/cotton_jersey_rough_2k.jpg"],
    ];

    files.forEach(([name, path]) => {
      loader.load(
        path,
        (texture) => {
          if (!active) {
            texture.dispose();
            return;
          }

          texture.flipY = false;

          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;

          texture.repeat.set(2.4, 2.4);

          texture.anisotropy = Math.min(
            4,
            gl.capabilities.getMaxAnisotropy()
          );

          if (name === "color") {
            texture.colorSpace = THREE.SRGBColorSpace;
          }

          textures[name] = texture;
          loaded.push(texture);

          remaining--;

          if (remaining === 0 && !failed) {
            modelData.bodyMaterials.forEach((material) => {
              if (!material.isMeshStandardMaterial) return;

              material.map = textures.color;
              material.normalMap = textures.normal;
              material.roughnessMap = textures.roughness;

              material.color.set("#8D8992");

              material.metalness = 0;
              material.roughness = 1;
              material.envMapIntensity = 0;

              material.normalScale.set(0.1, 0.1);

              if (material.clearcoat !== undefined) {
                material.clearcoat = 0;
              }

              material.needsUpdate = true;
            });

            invalidate();
          }
        },
        undefined,
        (error) => {
          failed = true;
          console.error("Texture loading error:", path, error);
        }
      );
    });

    return () => {
      active = false;

      loaded.forEach((texture) => {
        texture.dispose();
      });
    };
  }, [modelData, gl, invalidate]);

  useEffect(() => {
    const { canvas, texture } = screenData;

    const ctx = canvas.getContext("2d");
    const position = textPosition.current;

    if (!ctx) return;

    const drawScreen = () => {
      const now = performance.now();

      const delta = position.lastTime
        ? Math.min((now - position.lastTime) / 1000, 0.05)
        : 0;

      position.lastTime = now;

      if (!visibleRef.current) return;

      const width = canvas.width;
      const height = canvas.height;

      const background = ctx.createRadialGradient(
        256,
        220,
        20,
        256,
        256,
        360
      );

      background.addColorStop(0, "#25212a");
      background.addColorStop(0.5, "#121015");
      background.addColorStop(1, "#030304");

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      for (let y = 0; y < height; y += 6) {
        ctx.fillStyle = "rgba(255,255,255,0.018)";
        ctx.fillRect(0, y, width, 1);
      }

      const scanY = (now * 0.035) % height;

      const scan = ctx.createLinearGradient(
        0,
        scanY - 25,
        0,
        scanY + 25
      );

      scan.addColorStop(0, "rgba(135,100,255,0)");
      scan.addColorStop(0.5, "rgba(135,100,255,0.055)");
      scan.addColorStop(1, "rgba(135,100,255,0)");

      ctx.fillStyle = scan;
      ctx.fillRect(0, scanY - 25, width, 50);

      const text = "SYNCSOLVO";

      ctx.font = "bold 32px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textWidth = ctx.measureText(text).width;

      position.x += position.speedX * delta;
      position.y += position.speedY * delta;

      const minX = textWidth / 2 + 22;
      const maxX = width - textWidth / 2 - 22;

      const minY = 48;
      const maxY = height - 48;

      if (position.x <= minX) {
        position.x = minX;
        position.speedX = Math.abs(position.speedX);
      }

      if (position.x >= maxX) {
        position.x = maxX;
        position.speedX = -Math.abs(position.speedX);
      }

      if (position.y <= minY) {
        position.y = minY;
        position.speedY = Math.abs(position.speedY);
      }

      if (position.y >= maxY) {
        position.y = maxY;
        position.speedY = -Math.abs(position.speedY);
      }

      ctx.save();

      ctx.fillStyle = "#f5f1ff";
      ctx.shadowColor = "#9d78ff";
      ctx.shadowBlur = 14;

      ctx.fillText(text, position.x, position.y);

      ctx.restore();

      const reflection = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      reflection.addColorStop(
        0,
        "rgba(255,255,255,0.055)"
      );

      reflection.addColorStop(
        0.3,
        "rgba(255,255,255,0.012)"
      );

      reflection.addColorStop(
        0.6,
        "rgba(255,255,255,0)"
      );

      ctx.fillStyle = reflection;
      ctx.fillRect(0, 0, width, height);

      texture.needsUpdate = true;
      invalidate();
    };

    drawScreen();

    const interval = window.setInterval(drawScreen, 33);

    return () => {
      window.clearInterval(interval);
    };
  }, [screenData, visibleRef, invalidate]);

  useFrame((state, delta) => {
    if (!visibleRef.current) return;

    const pointer = pointerRef.current;

    const mouseX = pointer.inside ? pointer.x : 0;
    const mouseY = pointer.inside ? pointer.y : 0;

    const dt = Math.min(delta, 0.05);

    let moving = false;

    modelData.movement.forEach((item) => {
      if (!item.bone) return;

      const targetX =
        item.originalX - mouseY * item.x;

      const targetY =
        item.originalY + mouseX * item.y;

      item.bone.rotation.x = THREE.MathUtils.damp(
        item.bone.rotation.x,
        targetX,
        item.speed,
        dt
      );

      item.bone.rotation.y = THREE.MathUtils.damp(
        item.bone.rotation.y,
        targetY,
        item.speed,
        dt
      );

      if (
        Math.abs(item.bone.rotation.x - targetX) > 0.001 ||
        Math.abs(item.bone.rotation.y - targetY) > 0.001
      ) {
        moving = true;
      }
    });

    if (groupRef.current) {
      const group = groupRef.current;

      const targetY = mouseX * 0.1;
      const targetX = -mouseY * 0.045;
      const targetZ = -mouseX * 0.035;

      const targetPosX = mouseX * 0.12;
      const targetPosY = mouseY * 0.055;

      group.rotation.y = THREE.MathUtils.damp(
        group.rotation.y,
        targetY,
        3,
        dt
      );

      group.rotation.x = THREE.MathUtils.damp(
        group.rotation.x,
        targetX,
        3,
        dt
      );

      group.rotation.z = THREE.MathUtils.damp(
        group.rotation.z,
        targetZ,
        3,
        dt
      );

      group.position.x = THREE.MathUtils.damp(
        group.position.x,
        targetPosX,
        3,
        dt
      );

      group.position.y = THREE.MathUtils.damp(
        group.position.y,
        targetPosY,
        3,
        dt
      );

      if (
        Math.abs(group.rotation.y - targetY) > 0.001 ||
        Math.abs(group.rotation.x - targetX) > 0.001 ||
        Math.abs(group.rotation.z - targetZ) > 0.001 ||
        Math.abs(group.position.x - targetPosX) > 0.001 ||
        Math.abs(group.position.y - targetPosY) > 0.001
      ) {
        moving = true;
      }
    }

    if (moving) {
      invalidate();
    }
  });

  useEffect(() => {
    return () => {
      modelData.materials.forEach((material) => {
        material.dispose();
      });

      screenData.texture.dispose();
    };
  }, [modelData, screenData]);

  return (
    <group ref={groupRef}>
      <primitive object={modelData.model} />
    </group>
  );
}

useGLTF.preload("/lisa.glb");