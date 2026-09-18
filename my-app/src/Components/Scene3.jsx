import {
  useEffect,
  useRef
} from "react";

import * as THREE from "three";

import PlexusCanvas from "./PlexusCanvas";

import "./Scene3.css";


const NOISE = `
vec3 mod289(vec3 x){
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x){
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x){
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r){
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v){
  const vec2 C =
    vec2(
      1.0 / 6.0,
      1.0 / 3.0
    );

  const vec4 D =
    vec4(
      0.0,
      0.5,
      1.0,
      2.0
    );

  vec3 i =
    floor(
      v +
      dot(
        v,
        C.yyy
      )
    );

  vec3 x0 =
    v -
    i +
    dot(
      i,
      C.xxx
    );

  vec3 g =
    step(
      x0.yzx,
      x0.xyz
    );

  vec3 l =
    1.0 -
    g;

  vec3 i1 =
    min(
      g.xyz,
      l.zxy
    );

  vec3 i2 =
    max(
      g.xyz,
      l.zxy
    );

  vec3 x1 =
    x0 -
    i1 +
    C.xxx;

  vec3 x2 =
    x0 -
    i2 +
    C.yyy;

  vec3 x3 =
    x0 -
    D.yyy;

  i =
    mod289(i);

  vec4 p =
    permute(
      permute(
        permute(
          i.z +
          vec4(
            0.0,
            i1.z,
            i2.z,
            1.0
          )
        ) +
        i.y +
        vec4(
          0.0,
          i1.y,
          i2.y,
          1.0
        )
      ) +
      i.x +
      vec4(
        0.0,
        i1.x,
        i2.x,
        1.0
      )
    );

  float n_ =
    0.142857142857;

  vec3 ns =
    n_ *
    D.wyz -
    D.xzx;

  vec4 j =
    p -
    49.0 *
    floor(
      p *
      ns.z *
      ns.z
    );

  vec4 x_ =
    floor(
      j *
      ns.z
    );

  vec4 y_ =
    floor(
      j -
      7.0 *
      x_
    );

  vec4 x =
    x_ *
    ns.x +
    ns.yyyy;

  vec4 y =
    y_ *
    ns.x +
    ns.yyyy;

  vec4 h =
    1.0 -
    abs(x) -
    abs(y);

  vec4 b0 =
    vec4(
      x.xy,
      y.xy
    );

  vec4 b1 =
    vec4(
      x.zw,
      y.zw
    );

  vec4 s0 =
    floor(b0) *
    2.0 +
    1.0;

  vec4 s1 =
    floor(b1) *
    2.0 +
    1.0;

  vec4 sh =
    -step(
      h,
      vec4(0.0)
    );

  vec4 a0 =
    b0.xzyw +
    s0.xzyw *
    sh.xxyy;

  vec4 a1 =
    b1.xzyw +
    s1.xzyw *
    sh.zzww;

  vec3 p0 =
    vec3(
      a0.xy,
      h.x
    );

  vec3 p1 =
    vec3(
      a0.zw,
      h.y
    );

  vec3 p2 =
    vec3(
      a1.xy,
      h.z
    );

  vec3 p3 =
    vec3(
      a1.zw,
      h.w
    );

  vec4 norm =
    taylorInvSqrt(
      vec4(
        dot(p0, p0),
        dot(p1, p1),
        dot(p2, p2),
        dot(p3, p3)
      )
    );

  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m =
    max(
      0.6 -
      vec4(
        dot(x0, x0),
        dot(x1, x1),
        dot(x2, x2),
        dot(x3, x3)
      ),
      0.0
    );

  m =
    m *
    m;

  return
    42.0 *
    dot(
      m * m,
      vec4(
        dot(p0, x0),
        dot(p1, x1),
        dot(p2, x2),
        dot(p3, x3)
      )
    );
}
`;


function softTex(
  r,
  g,
  b
) {
  const canvas =
    document.createElement(
      "canvas"
    );

  canvas.width =
    256;

  canvas.height =
    256;

  const context =
    canvas.getContext(
      "2d"
    );

  const gradient =
    context.createRadialGradient(
      128,
      128,
      0,
      128,
      128,
      128
    );

  gradient.addColorStop(
    0,
    `rgba(${r}, ${g}, ${b}, 0.5)`
  );

  gradient.addColorStop(
    0.5,
    `rgba(${r}, ${g}, ${b}, 0.15)`
  );

  gradient.addColorStop(
    1,
    "rgba(0, 0, 0, 0)"
  );

  context.fillStyle =
    gradient;

  context.fillRect(
    0,
    0,
    256,
    256
  );

  const texture =
    new THREE.CanvasTexture(
      canvas
    );

  texture.flipY =
    false;

  return texture;
}


export default function Scene3({
  title = "",
  description = "",
  variant = "development"
}) {
  const canvasRef =
    useRef(null);


  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) {
      return undefined;
    }


    let renderer;


    try {
      renderer =
        new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true
        });
    } catch {
      return undefined;
    }


    const isMobile =
      window.innerWidth <
      768;


    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio ||
          1,
        isMobile
          ? 1.5
          : 2
      )
    );


    renderer.setClearColor(
      0x000000,
      0
    );


    const scene =
      new THREE.Scene();


    scene.fog =
      new THREE.FogExp2(
        variant ===
          "corporate"
          ? 0x10030d
          : 0x100309,
        0.014
      );


    const camera =
      new THREE.PerspectiveCamera(
        60,
        1,
        0.1,
        100
      );


    const disposables =
      [];


    const track =
      (resource) => {
        disposables.push(
          resource
        );

        return resource;
      };


    const shapeGroup =
      new THREE.Group();


    scene.add(
      shapeGroup
    );


    let BASE_Y =
      0;


    let blobFloat =
      0.28;


    const blobUniforms = {
      uTime: {
        value: 0
      },

      uIntensity: {
        value: 0.45
      }
    };


    const blobGeo =
      track(
        new THREE.IcosahedronGeometry(
          2.4,
          32
        )
      );


    const blobMat =
      track(
        new THREE.ShaderMaterial({
          uniforms:
            blobUniforms,

          vertexShader:
            NOISE +
            `
            uniform float uTime;
            uniform float uIntensity;

            varying vec3 vNormal;
            varying vec3 vViewDir;
            varying float vNoise;

            void main() {
              float n1 =
                snoise(
                  position * 0.55 +
                  uTime * 0.22
                );

              float n2 =
                snoise(
                  position * 1.6 -
                  uTime * 0.14
                ) * 0.35;

              float disp =
                (n1 + n2) *
                uIntensity;

              vNoise =
                n1;

              vec3 newPos =
                position +
                normal *
                disp;

              vNormal =
                normalize(
                  normalMatrix *
                  normal
                );

              vec4 mv =
                modelViewMatrix *
                vec4(
                  newPos,
                  1.0
                );

              vViewDir =
                normalize(
                  -mv.xyz
                );

              gl_Position =
                projectionMatrix *
                mv;
            }
          `,

          fragmentShader: `
            uniform float uTime;

            varying vec3 vNormal;
            varying vec3 vViewDir;
            varying float vNoise;

            void main() {
              float fresnel =
                pow(
                  1.0 -
                  max(
                    dot(
                      vNormal,
                      vViewDir
                    ),
                    0.0
                  ),
                  2.0
                );

              vec3 deep =
                vec3(
                  0.408,
                  0.251,
                  0.851
                );

              vec3 mid =
                vec3(
                  0.541,
                  0.361,
                  1.0
                );

              vec3 edge =
                vec3(
                  0.635,
                  0.463,
                  1.0
                );

              vec3 color =
                mix(
                  deep,
                  mid,
                  clamp(
                    vNoise * 0.55 +
                    0.52,
                    0.0,
                    1.0
                  )
                );

              color =
                mix(
                  color,
                  edge,
                  fresnel
                );

              color +=
                edge *
                0.055 *
                sin(
                  uTime *
                  1.4
                );

              gl_FragColor =
                vec4(
                  color,
                  0.94
                );
            }
          `,

          transparent:
            true
        })
      );


    const blob =
      new THREE.Mesh(
        blobGeo,
        blobMat
      );


    shapeGroup.add(
      blob
    );


    const nebGroup =
      new THREE.Group();


    scene.add(
      nebGroup
    );


    const nebTexes = [
      track(
        softTex(
          138,
          92,
          255
        )
      ),

      track(
        softTex(
          182,
          54,
          120
        )
      ),

      track(
        softTex(
          90,
          27,
          57
        )
      )
    ];


    [
      [
        -9,
        4,
        -8,
        14
      ],

      [
        10,
        -5,
        -10,
        16
      ],

      [
        -4,
        -7,
        -6,
        11
      ],

      [
        12,
        6,
        -7,
        10
      ]
    ].forEach(
      (
        data,
        index
      ) => {
        const material =
          track(
            new THREE.SpriteMaterial({
              map:
                nebTexes[
                  index %
                    nebTexes.length
                ],

              transparent:
                true,

              opacity:
                0.2,

              depthWrite:
                false,

              blending:
                THREE
                  .AdditiveBlending
            })
          );


        const sprite =
          new THREE.Sprite(
            material
          );


        sprite.position.set(
          data[0],
          data[1],
          data[2]
        );


        sprite.scale.set(
          data[3],
          data[3],
          1
        );


        sprite.userData.baseY =
          data[1];


        sprite.userData.spd =
          0.2 +
          Math.random() *
            0.3;


        nebGroup.add(
          sprite
        );
      }
    );


    const haloMat =
      track(
        new THREE.SpriteMaterial({
          map:
            track(
              softTex(
                138,
                92,
                255
              )
            ),

          transparent:
            true,

          opacity:
            0.46,

          depthWrite:
            false,

          blending:
            THREE
              .AdditiveBlending
        })
      );


    const halo =
      new THREE.Sprite(
        haloMat
      );


    halo.scale.set(
      12,
      12,
      1
    );


    shapeGroup.add(
      halo
    );


    const layout =
      () => {
        const width =
          window.innerWidth;

        const height =
          window.innerHeight;


        renderer.setSize(
          width,
          height,
          false
        );


        camera.aspect =
          width /
          height;


        camera.position.z =
          camera.aspect <
          1
            ? 9 +
              (
                1 -
                camera.aspect
              ) *
                5.5
            : 9;


        camera.updateProjectionMatrix();


        camera.lookAt(
          0,
          0,
          0
        );


        if (
          camera.aspect <
          1
        ) {
          const scale =
            Math.max(
              0.7,
              camera.aspect *
                1.9
            );


          shapeGroup.scale.setScalar(
            scale
          );


          BASE_Y =
            0;


          blobFloat =
            0.12;
        } else {
          shapeGroup.scale.setScalar(
            1
          );


          BASE_Y =
            0;


          blobFloat =
            0.28;
        }
      };


    let rafId =
      null;

    let running =
      false;

    let elapsed =
      0;

    let lastNow =
      0;


    const loop =
      (now) => {
        if (!running) {
          return;
        }


        rafId =
          requestAnimationFrame(
            loop
          );


        if (!lastNow) {
          lastNow =
            now;
        }


        const delta =
          Math.min(
            (
              now -
              lastNow
            ) /
              1000,
            0.05
          );


        lastNow =
          now;


        elapsed +=
          delta;


        const time =
          elapsed;


        blobUniforms
          .uTime
          .value =
          time;


        blob.rotation.y =
          time *
          0.12;


        blob.rotation.x =
          Math.sin(
            time *
            0.2
          ) *
          0.15;


        shapeGroup.position.y =
          BASE_Y +
          Math.sin(
            time *
            0.5
          ) *
            blobFloat;


        nebGroup
          .children
          .forEach(
            (sprite) => {
              sprite.position.y =
                sprite
                  .userData
                  .baseY +
                Math.sin(
                  time *
                    sprite
                      .userData
                      .spd
                ) *
                  0.8;
            }
          );


        haloMat.opacity =
          0.4 +
          Math.sin(
            time *
            1.1
          ) *
            0.1;


        renderer.render(
          scene,
          camera
        );
      };


    let inView =
      true;

    let tabVisible =
      true;


    const startLoop =
      () => {
        if (running) {
          return;
        }


        running =
          true;

        lastNow =
          0;


        rafId =
          requestAnimationFrame(
            loop
          );
      };


    const stopLoop =
      () => {
        if (!running) {
          return;
        }


        running =
          false;


        if (rafId) {
          cancelAnimationFrame(
            rafId
          );
        }
      };


    const updateRunning =
      () => {
        if (
          inView &&
          tabVisible
        ) {
          startLoop();
        } else {
          stopLoop();
        }
      };


    const onVisibility =
      () => {
        tabVisible =
          !document.hidden;

        updateRunning();
      };


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          inView =
            entry.isIntersecting;

          updateRunning();
        },
        {
          rootMargin:
            "100px"
        }
      );


    const onResize =
      () => {
        layout();
      };


    window.addEventListener(
      "resize",
      onResize
    );


    window.addEventListener(
      "orientationchange",
      onResize
    );


    document.addEventListener(
      "visibilitychange",
      onVisibility
    );


    layout();


    observer.observe(
      canvas
    );


    updateRunning();


    return () => {
      stopLoop();


      observer.disconnect();


      window.removeEventListener(
        "resize",
        onResize
      );


      window.removeEventListener(
        "orientationchange",
        onResize
      );


      document.removeEventListener(
        "visibilitychange",
        onVisibility
      );


      disposables.forEach(
        (resource) => {
          if (
            resource.dispose
          ) {
            resource.dispose();
          }
        }
      );


      renderer.dispose();
    };

  }, [variant]);


  const sceneVariant =
    variant ===
    "corporate"
      ? "corporate"
      : "development";


  return (
    <section
      className={`scene3-hero scene3-hero--${sceneVariant}`}
    >
      <PlexusCanvas
        className="scene3-plexus"
        speed={3.5}
        mouseRepel
        repelRadius={150}
        repelStrength={0.85}
      />


      <canvas
        ref={canvasRef}
        className="scene3-canvas"
      />


      <div
        className="scene3-grain"
        aria-hidden="true"
      />


      <div
        className="scene3-vignette"
        aria-hidden="true"
      />


      <div className="scene3-content">
        <h1 className="scene3-title">
          {title}
        </h1>


        {description && (
          <p className="scene3-description">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}