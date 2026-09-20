import {
  useEffect,
  useMemo,
  useRef
} from "react";

import {
  useFrame,
  useThree
} from "@react-three/fiber";

import {
  QuadraticBezierLine,
  RoundedBox
} from "@react-three/drei";

import * as THREE from "three";


function createFloorShadowTexture() {
  const canvas =
    document.createElement(
      "canvas"
    );

  canvas.width = 512;
  canvas.height = 256;

  const context =
    canvas.getContext(
      "2d"
    );

  const gradient =
    context.createRadialGradient(
      256,
      128,
      8,
      256,
      128,
      232
    );

  gradient.addColorStop(
    0,
    "rgba(7, 7, 10, 0.82)"
  );

  gradient.addColorStop(
    0.22,
    "rgba(12, 10, 18, 0.57)"
  );

  gradient.addColorStop(
    0.42,
    "rgba(42, 26, 76, 0.31)"
  );

  gradient.addColorStop(
    0.61,
    "rgba(100, 59, 196, 0.15)"
  );

  gradient.addColorStop(
    0.8,
    "rgba(118, 72, 228, 0.045)"
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
    canvas.width,
    canvas.height
  );

  const texture =
    new THREE.CanvasTexture(
      canvas
    );

  texture.colorSpace =
    THREE.SRGBColorSpace;

  texture.generateMipmaps =
    false;

  texture.minFilter =
    THREE.LinearFilter;

  texture.magFilter =
    THREE.LinearFilter;

  return texture;
}


function RobotFloorShadow() {
  const texture =
    useMemo(
      () =>
        createFloorShadowTexture(),
      []
    );

  useEffect(
    () =>
      () => {
        texture.dispose();
      },
    [texture]
  );

  return (
    <>
      <mesh
        position={[
          0,
          -1.87,
          0.04
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0
        ]}
        scale={[
          2.45,
          1.08,
          1
        ]}
      >
        <planeGeometry
          args={[
            1.8,
            1.8
          ]}
        />

        <meshBasicMaterial
          map={texture}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>


      <mesh
        position={[
          0,
          -1.875,
          0.02
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0
        ]}
        scale={[
          1.35,
          0.48,
          1
        ]}
      >
        <circleGeometry
          args={[
            1,
            48
          ]}
        />

        <meshBasicMaterial
          color="#141017"
          transparent
          opacity={0.17}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}


function CRTScreen({
  visibleRef
}) {
  const {
    invalidate
  } =
    useThree();


  const canvas =
    useMemo(() => {
      const element =
        document.createElement(
          "canvas"
        );

      element.width = 640;
      element.height = 360;

      return element;
    }, []);


  const context =
    useMemo(
      () =>
        canvas.getContext(
          "2d",
          {
            alpha: false
          }
        ),
      [canvas]
    );


  const texture =
    useMemo(() => {
      const result =
        new THREE.CanvasTexture(
          canvas
        );

      result.colorSpace =
        THREE.SRGBColorSpace;

      result.generateMipmaps =
        false;

      result.minFilter =
        THREE.LinearFilter;

      result.magFilter =
        THREE.LinearFilter;

      return result;
    }, [canvas]);


  const stars =
    useMemo(
      () =>
        Array.from(
          {
            length: 26
          },
          (
            _,
            index
          ) => ({
            x:
              (
                index *
                151
              ) %
              640,

            y:
              (
                index *
                79
              ) %
              360,

            size:
              index % 6 ===
              0
                ? 1.35
                : 0.8,

            opacity:
              0.055 +
              (
                index %
                4
              ) *
                0.022
          })
        ),
      []
    );


  useEffect(() => {
    if (!context) {
      return undefined;
    }


    const draw =
      () => {
        if (
          !visibleRef.current
        ) {
          return;
        }


        const time =
          performance.now() /
          1000;

        const width =
          canvas.width;

        const height =
          canvas.height;


        const background =
          context.createRadialGradient(
            width * 0.47,
            height * 0.43,
            10,
            width * 0.5,
            height * 0.5,
            width * 0.72
          );

        background.addColorStop(
          0,
          "#17151b"
        );

        background.addColorStop(
          0.38,
          "#0c0b0f"
        );

        background.addColorStop(
          0.74,
          "#050506"
        );

        background.addColorStop(
          1,
          "#010101"
        );


        context.fillStyle =
          background;

        context.fillRect(
          0,
          0,
          width,
          height
        );


        stars.forEach(
          (
            star,
            index
          ) => {
            const pulse =
              0.72 +
              Math.sin(
                time *
                  1.1 +
                  index *
                    0.84
              ) *
                0.28;


            context.fillStyle =
              `rgba(255,255,255,${
                star.opacity *
                pulse
              })`;

            context.fillRect(
              star.x,
              star.y,
              star.size,
              star.size
            );
          }
        );


        for (
          let y = 0;
          y < height;
          y += 7
        ) {
          context.fillStyle =
            "rgba(255,255,255,0.019)";

          context.fillRect(
            0,
            y,
            width,
            1
          );
        }


        const scanY =
          (
            time *
            38
          ) %
          (
            height +
            110
          ) -
          55;


        const scan =
          context.createLinearGradient(
            0,
            scanY -
              28,
            0,
            scanY +
              28
          );

        scan.addColorStop(
          0,
          "rgba(126,87,255,0)"
        );

        scan.addColorStop(
          0.5,
          "rgba(137,98,255,0.052)"
        );

        scan.addColorStop(
          1,
          "rgba(126,87,255,0)"
        );


        context.fillStyle =
          scan;

        context.fillRect(
          0,
          scanY -
            28,
          width,
          56
        );


        const text =
          "SYNCSOLVO";

        context.save();

        context.font =
          "700 54px Arial";

        context.textBaseline =
          "middle";

        const textWidth =
          context.measureText(
            text
          ).width;


        const cycle =
          7.2;

        const cycleTime =
          time %
          cycle;


        let textX;


        if (
          cycleTime <
          2
        ) {
          const progress =
            cycleTime /
            2;

          textX =
            width +
            40 -
            progress *
              (
                width /
                  2 +
                textWidth /
                  2 +
                40
              );
        } else if (
          cycleTime <
          4.4
        ) {
          textX =
            (
              width -
              textWidth
            ) /
            2;
        } else {
          const progress =
            (
              cycleTime -
              4.4
            ) /
            (
              cycle -
              4.4
            );

          textX =
            (
              width -
              textWidth
            ) /
              2 -
            progress *
              (
                width /
                  2 +
                textWidth /
                  2 +
                80
              );
        }


        context.fillStyle =
          "#f5f1ff";

        context.shadowColor =
          "#855eff";

        context.shadowBlur =
          16;


        context.fillText(
          text,
          textX,
          height *
            0.53
        );

        context.restore();


        const reflection =
          context.createLinearGradient(
            0,
            0,
            width,
            height
          );

        reflection.addColorStop(
          0,
          "rgba(255,255,255,0.065)"
        );

        reflection.addColorStop(
          0.22,
          "rgba(255,255,255,0.014)"
        );

        reflection.addColorStop(
          0.48,
          "rgba(255,255,255,0)"
        );


        context.fillStyle =
          reflection;

        context.fillRect(
          0,
          0,
          width,
          height
        );


        const vignette =
          context.createRadialGradient(
            width / 2,
            height / 2,
            width *
              0.12,
            width / 2,
            height / 2,
            width *
              0.65
          );


        vignette.addColorStop(
          0.5,
          "rgba(0,0,0,0)"
        );

        vignette.addColorStop(
          1,
          "rgba(0,0,0,0.5)"
        );


        context.fillStyle =
          vignette;

        context.fillRect(
          0,
          0,
          width,
          height
        );


        texture.needsUpdate =
          true;

        invalidate();
      };


    draw();


    const interval =
      window.setInterval(
        draw,
        80
      );


    return () => {
      window.clearInterval(
        interval
      );
    };
  }, [
    canvas,
    context,
    invalidate,
    stars,
    texture,
    visibleRef
  ]);


  useEffect(
    () =>
      () => {
        texture.dispose();
      },
    [texture]
  );


  return (
    <>
      <RoundedBox
        args={[
          1.98,
          1.18,
          0.07
        ]}
        radius={0.105}
        smoothness={3}
        position={[
          0,
          0.03,
          0.483
        ]}
      >
        <meshStandardMaterial
          color="#030304"
          metalness={0.28}
          roughness={0.14}
        />
      </RoundedBox>


      <mesh
        position={[
          0,
          0.03,
          0.525
        ]}
      >
        <planeGeometry
          args={[
            1.78,
            0.98
          ]}
        />

        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>


      <mesh
        position={[
          0,
          0.03,
          0.535
        ]}
      >
        <planeGeometry
          args={[
            1.79,
            0.99
          ]}
        />

        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.065}
          roughness={0.035}
          metalness={0}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}


function TVHead({
  visibleRef
}) {
  return (
    <group>
      <RoundedBox
        args={[
          2.38,
          1.52,
          0.9
        ]}
        radius={0.15}
        smoothness={4}
      >
        <meshPhysicalMaterial
          color="#85878d"
          metalness={0.9}
          roughness={0.19}
          clearcoat={0.82}
          clearcoatRoughness={0.09}
        />
      </RoundedBox>


      <RoundedBox
        args={[
          2.18,
          1.34,
          0.94
        ]}
        radius={0.12}
        smoothness={4}
        position={[
          0,
          0.01,
          0.018
        ]}
      >
        <meshPhysicalMaterial
          color="#29292d"
          metalness={0.66}
          roughness={0.23}
          clearcoat={0.52}
          clearcoatRoughness={0.11}
        />
      </RoundedBox>


      <CRTScreen
        visibleRef={
          visibleRef
        }
      />


      <mesh
        position={[
          1.19,
          -0.08,
          0
        ]}
        rotation={[
          0,
          0,
          Math.PI /
            2
        ]}
      >
        <cylinderGeometry
          args={[
            0.18,
            0.18,
            0.105,
            24
          ]}
        />

        <meshPhysicalMaterial
          color="#18181b"
          metalness={0.88}
          roughness={0.18}
          clearcoat={0.75}
        />
      </mesh>


      <mesh
        position={[
          1.245,
          -0.08,
          0
        ]}
        rotation={[
          0,
          0,
          Math.PI /
            2
        ]}
      >
        <cylinderGeometry
          args={[
            0.105,
            0.105,
            0.055,
            20
          ]}
        />

        <meshPhysicalMaterial
          color="#414147"
          metalness={0.82}
          roughness={0.21}
        />
      </mesh>


      <mesh
        position={[
          0.63,
          -0.61,
          0.485
        ]}
      >
        <sphereGeometry
          args={[
            0.038,
            14,
            14
          ]}
        />

        <meshStandardMaterial
          color="#d58cff"
          emissive="#a950ff"
          emissiveIntensity={1.8}
        />
      </mesh>


      {[
        0.79,
        0.94
      ].map(
        (
          x
        ) => (
          <mesh
            key={x}
            position={[
              x,
              -0.61,
              0.485
            ]}
          >
            <sphereGeometry
              args={[
                0.028,
                12,
                12
              ]}
            />

            <meshPhysicalMaterial
              color="#343438"
              metalness={0.78}
              roughness={0.19}
            />
          </mesh>
        )
      )}


      <QuadraticBezierLine
        start={[
          1.05,
          0.43,
          0.01
        ]}
        mid={[
          1.46,
          0.05,
          0.13
        ]}
        end={[
          1.06,
          -0.67,
          0.03
        ]}
        color="#171719"
        lineWidth={2}
      />


      <QuadraticBezierLine
        start={[
          -1.05,
          0.2,
          0.01
        ]}
        mid={[
          -1.38,
          -0.18,
          0.1
        ]}
        end={[
          -0.82,
          -0.71,
          0.03
        ]}
        color="#18181b"
        lineWidth={2}
      />
    </group>
  );
}


function MechanicalNeck() {
  return (
    <group>
      <mesh
        position={[
          0,
          0.18,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.24,
            0.24,
            0.12,
            32
          ]}
        />

        <meshPhysicalMaterial
          color="#777980"
          metalness={0.92}
          roughness={0.16}
          clearcoat={0.7}
        />
      </mesh>


      <mesh
        position={[
          0,
          0.06,
          0
        ]}
      >
        <torusGeometry
          args={[
            0.225,
            0.032,
            12,
            32
          ]}
        />

        <meshPhysicalMaterial
          color="#26272d"
          metalness={0.94}
          roughness={0.16}
        />
      </mesh>


      <mesh
        position={[
          0,
          -0.04,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.19,
            0.22,
            0.18,
            28
          ]}
        />

        <meshPhysicalMaterial
          color="#17181c"
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>


      <mesh
        position={[
          0,
          -0.15,
          0
        ]}
      >
        <torusGeometry
          args={[
            0.205,
            0.029,
            12,
            32
          ]}
        />

        <meshPhysicalMaterial
          color="#7f8188"
          metalness={0.94}
          roughness={0.16}
        />
      </mesh>
    </group>
  );
}


function RobotBody() {
  return (
    <group>
      <RoundedBox
        args={[
          1.5,
          1.65,
          1.02
        ]}
        radius={0.19}
        smoothness={4}
        position={[
          0,
          -0.95,
          0
        ]}
      >
        <meshPhysicalMaterial
          color="#5d6067"
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.78}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>


      <RoundedBox
        args={[
          1.23,
          1.24,
          0.035
        ]}
        radius={0.1}
        smoothness={3}
        position={[
          0,
          -0.91,
          0.523
        ]}
      >
        <meshPhysicalMaterial
          color="#25272e"
          metalness={0.82}
          roughness={0.19}
          clearcoat={0.7}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>


      <mesh
        position={[
          -0.37,
          -0.88,
          0.548
        ]}
        rotation={[
          0,
          0,
          -0.09
        ]}
      >
        <planeGeometry
          args={[
            0.1,
            0.94
          ]}
        />

        <meshBasicMaterial
          color="#a880ff"
          transparent
          opacity={0.26}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>


      <mesh
        position={[
          0,
          -0.02,
          0
        ]}
      >
        <cylinderGeometry
          args={[
            0.25,
            0.22,
            0.48,
            24
          ]}
        />

        <meshPhysicalMaterial
          color="#17181c"
          metalness={0.92}
          roughness={0.17}
          clearcoat={0.7}
        />
      </mesh>


      <MechanicalNeck />
    </group>
  );
}


export default function PortfolioRobot({
  pointerRef,
  visibleRef,
  invalidateRef
}) {
  const headRef =
    useRef(null);

  const {
    invalidate
  } =
    useThree();


  useEffect(() => {
    invalidateRef.current =
      invalidate;

    invalidate();

    return () => {
      if (
        invalidateRef.current ===
        invalidate
      ) {
        invalidateRef.current =
          null;
      }
    };
  }, [
    invalidate,
    invalidateRef
  ]);


  useFrame((
    _state,
    delta
  ) => {
    if (
      !headRef.current ||
      !visibleRef.current
    ) {
      return;
    }


    const pointer =
      pointerRef.current;


    const targetY =
      pointer.inside
        ? THREE.MathUtils.clamp(
            pointer.x *
              0.38,
            -0.38,
            0.38
          )
        : 0;


    const targetX =
      pointer.inside
        ? THREE.MathUtils.clamp(
            -pointer.y *
              0.12,
            -0.12,
            0.12
          )
        : 0;


    headRef.current.rotation.y =
      THREE.MathUtils.damp(
        headRef.current.rotation.y,
        targetY,
        6.3,
        delta
      );


    headRef.current.rotation.x =
      THREE.MathUtils.damp(
        headRef.current.rotation.x,
        targetX,
        6.3,
        delta
      );


    const moving =
      Math.abs(
        headRef.current.rotation.y -
          targetY
      ) >
        0.001 ||
      Math.abs(
        headRef.current.rotation.x -
          targetX
      ) >
        0.001;


    if (moving) {
      invalidate();
    }
  });


  return (
    <group
      position={[
        0,
        -0.08,
        0
      ]}
      scale={1.04}
    >
      <RobotFloorShadow />

      <RobotBody />


      <group
        ref={headRef}
        position={[
          0,
          0.94,
          0
        ]}
      >
        <TVHead
          visibleRef={
            visibleRef
          }
        />
      </group>
    </group>
  );
}