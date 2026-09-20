import {
  memo,
  useEffect,
  useMemo,
  useRef
} from "react";

import {
  useFrame,
  useThree
} from "@react-three/fiber";

import {
  RoundedBox
} from "@react-three/drei";

import * as THREE from "three";

const GlossBlack = memo(function GlossBlack({
  color = "#05080a"
}) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0.96}
      roughness={0.075}
      clearcoat={1}
      clearcoatRoughness={0.018}
    />
  );
});

const BlackChrome = memo(function BlackChrome() {
  return (
    <meshPhysicalMaterial
      color="#171c20"
      metalness={0.98}
      roughness={0.075}
      clearcoat={1}
      clearcoatRoughness={0.015}
    />
  );
});

const Chrome = memo(function Chrome() {
  return (
    <meshPhysicalMaterial
      color="#c5cdd1"
      metalness={1}
      roughness={0.055}
      clearcoat={1}
      clearcoatRoughness={0.012}
    />
  );
});

const DarkChrome = memo(function DarkChrome() {
  return (
    <meshPhysicalMaterial
      color="#5a6267"
      metalness={1}
      roughness={0.065}
      clearcoat={1}
      clearcoatRoughness={0.015}
    />
  );
});

const Cyan = memo(function Cyan() {
  return (
    <meshStandardMaterial
      color="#d9ffff"
      emissive="#38e8ef"
      emissiveIntensity={2.8}
      toneMapped={false}
    />
  );
});

const Orange = memo(function Orange() {
  return (
    <meshStandardMaterial
      color="#ffc27a"
      emissive="#ff7418"
      emissiveIntensity={3.2}
      toneMapped={false}
    />
  );
});

const White = memo(function White() {
  return (
    <meshStandardMaterial
      color="#ffffff"
      emissive="#f4ffff"
      emissiveIntensity={1.2}
      toneMapped={false}
    />
  );
});

function SoftFloorShadow({
  robotRef
}) {
  const shadowRef =
    useRef(null);

  const texture =
    useMemo(() => {
      const canvas =
        document.createElement(
          "canvas"
        );

      canvas.width = 256;
      canvas.height = 128;

      const context =
        canvas.getContext(
          "2d"
        );

      const gradient =
        context.createRadialGradient(
          128,
          64,
          5,
          128,
          64,
          115
        );

      gradient.addColorStop(
        0,
        "rgba(0,0,0,0.42)"
      );

      gradient.addColorStop(
        0.35,
        "rgba(0,0,0,0.2)"
      );

      gradient.addColorStop(
        0.72,
        "rgba(0,0,0,0.05)"
      );

      gradient.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      context.fillStyle =
        gradient;

      context.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const result =
        new THREE.CanvasTexture(
          canvas
        );

      result.colorSpace =
        THREE.SRGBColorSpace;

      result.minFilter =
        THREE.LinearFilter;

      result.magFilter =
        THREE.LinearFilter;

      result.generateMipmaps =
        false;

      return result;
    }, []);

  useEffect(
    () =>
      () => {
        texture.dispose();
      },
    [texture]
  );

  useFrame(() => {
    if (
      !robotRef.current ||
      !shadowRef.current
    ) {
      return;
    }

    shadowRef.current.position.x =
      robotRef.current.position.x;
  });

  return (
    <mesh
      ref={shadowRef}
      position={[
        0,
        -2.27,
        0.25
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0
      ]}
      scale={[
        2.2,
        0.75,
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
  );
}

const Joint = memo(function Joint({
  scale = 1
}) {
  return (
    <group scale={scale}>
      <mesh>
        <sphereGeometry
          args={[
            0.13,
            18,
            18
          ]}
        />

        <Chrome />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            0.127,
            0.024,
            8,
            24
          ]}
        />

        <GlossBlack />
      </mesh>

      <mesh
        rotation={[
          0,
          Math.PI / 2,
          0
        ]}
      >
        <torusGeometry
          args={[
            0.095,
            0.014,
            8,
            20
          ]}
        />

        <DarkChrome />
      </mesh>
    </group>
  );
});

const MechanicalHand =
  memo(function MechanicalHand({
    side
  }) {
    return (
      <group>
        <RoundedBox
          args={[
            0.2,
            0.15,
            0.18
          ]}
          radius={0.045}
          smoothness={3}
        >
          <Chrome />
        </RoundedBox>

        {[
          -0.07,
          -0.023,
          0.023,
          0.07
        ].map(
          (
            position,
            index
          ) => (
            <group
              key={position}
              position={[
                position,
                -0.15,
                0
              ]}
              rotation={[
                0,
                0,
                side *
                  (
                    index -
                    1.5
                  ) *
                  0.025
              ]}
            >
              <mesh>
                <capsuleGeometry
                  args={[
                    0.014,
                    0.09,
                    3,
                    6
                  ]}
                />

                <Chrome />
              </mesh>

              <mesh
                position={[
                  0,
                  -0.075,
                  0
                ]}
              >
                <capsuleGeometry
                  args={[
                    0.012,
                    0.055,
                    3,
                    6
                  ]}
                />

                <DarkChrome />
              </mesh>
            </group>
          )
        )}
      </group>
    );
  });

const RobotHead =
  memo(function RobotHead({
    headRef
  }) {
    return (
      <group
        ref={headRef}
        position={[
          0,
          1.12,
          0
        ]}
      >
        <RoundedBox
          args={[
            1.5,
            1.18,
            1.08
          ]}
          radius={0.34}
          smoothness={5}
        >
          <GlossBlack />
        </RoundedBox>

        <RoundedBox
          args={[
            1.28,
            0.92,
            1.12
          ]}
          radius={0.27}
          smoothness={5}
          position={[
            -0.01,
            -0.03,
            0.035
          ]}
        >
          <BlackChrome />
        </RoundedBox>

        <RoundedBox
          args={[
            1.01,
            0.37,
            0.055
          ]}
          radius={0.1}
          smoothness={4}
          position={[
            -0.01,
            0.015,
            0.582
          ]}
        >
          <GlossBlack
            color="#010203"
          />
        </RoundedBox>

        <mesh
          position={[
            -0.31,
            0.055,
            0.616
          ]}
        >
          <boxGeometry
            args={[
              0.34,
              0.065,
              0.017
            ]}
          />

          <White />
        </mesh>

        <mesh
          position={[
            0.275,
            0.055,
            0.617
          ]}
        >
          <boxGeometry
            args={[
              0.22,
              0.065,
              0.017
            ]}
          />

          <Orange />
        </mesh>

        <mesh
          position={[
            -0.48,
            0.055,
            0.624
          ]}
        >
          <boxGeometry
            args={[
              0.035,
              0.16,
              0.018
            ]}
          />

          <Orange />
        </mesh>

        <mesh
          position={[
            0.02,
            -0.355,
            0.595
          ]}
        >
          <boxGeometry
            args={[
              0.37,
              0.055,
              0.017
            ]}
          />

          <Cyan />
        </mesh>

        <group
          position={[
            -0.69,
            0.14,
            0
          ]}
          rotation={[
            0,
            0,
            Math.PI / 2
          ]}
        >
          <mesh>
            <cylinderGeometry
              args={[
                0.245,
                0.245,
                0.095,
                28
              ]}
            />

            <GlossBlack />
          </mesh>

          <mesh
            position={[
              0,
              -0.053,
              0
            ]}
          >
            <cylinderGeometry
              args={[
                0.17,
                0.17,
                0.018,
                28
              ]}
            />

            <Chrome />
          </mesh>

          <mesh
            position={[
              0,
              -0.064,
              0
            ]}
          >
            <ringGeometry
              args={[
                0.105,
                0.127,
                28
              ]}
            />

            <White />
          </mesh>
        </group>

        <group
          position={[
            0.69,
            0.14,
            0
          ]}
          rotation={[
            0,
            0,
            Math.PI / 2
          ]}
        >
          <mesh>
            <cylinderGeometry
              args={[
                0.22,
                0.22,
                0.09,
                28
              ]}
            />

            <GlossBlack />
          </mesh>

          <mesh
            position={[
              0,
              0.053,
              0
            ]}
          >
            <torusGeometry
              args={[
                0.135,
                0.025,
                10,
                28
              ]}
            />

            <Orange />
          </mesh>
        </group>

        <RoundedBox
          args={[
            0.34,
            0.13,
            0.17
          ]}
          radius={0.04}
          smoothness={3}
          position={[
            0,
            -0.61,
            0
          ]}
        >
          <DarkChrome />
        </RoundedBox>
      </group>
    );
  });

const RobotTorso =
  memo(function RobotTorso() {
    return (
      <group>
        <RoundedBox
          args={[
            1.02,
            0.75,
            0.7
          ]}
          radius={0.19}
          smoothness={4}
        >
          <GlossBlack />
        </RoundedBox>

        <RoundedBox
          args={[
            0.8,
            0.54,
            0.74
          ]}
          radius={0.14}
          smoothness={4}
          position={[
            0,
            0.025,
            0.035
          ]}
        >
          <BlackChrome />
        </RoundedBox>

        <mesh
          position={[
            -0.185,
            0.1,
            0.412
          ]}
          rotation={[
            0,
            0,
            -0.26
          ]}
        >
          <boxGeometry
            args={[
              0.25,
              0.06,
              0.016
            ]}
          />

          <Cyan />
        </mesh>

        <mesh
          position={[
            0.185,
            0.1,
            0.412
          ]}
          rotation={[
            0,
            0,
            0.26
          ]}
        >
          <boxGeometry
            args={[
              0.25,
              0.06,
              0.016
            ]}
          />

          <Cyan />
        </mesh>

        <mesh
          position={[
            0,
            0.02,
            0.417
          ]}
        >
          <boxGeometry
            args={[
              0.28,
              0.055,
              0.016
            ]}
          />

          <Cyan />
        </mesh>

        <RoundedBox
          args={[
            0.52,
            0.22,
            0.45
          ]}
          radius={0.08}
          smoothness={3}
          position={[
            0,
            -0.49,
            0
          ]}
        >
          <GlossBlack />
        </RoundedBox>

        <mesh
          position={[
            0,
            -0.505,
            0.255
          ]}
        >
          <sphereGeometry
            args={[
              0.09,
              16,
              16
            ]}
          />

          <Chrome />
        </mesh>
      </group>
    );
  });

const RobotArm =
  memo(function RobotArm({
    side,
    shoulderRef,
    elbowRef,
    wristRef
  }) {
    return (
      <group
        ref={shoulderRef}
        position={[
          side * 0.66,
          0.32,
          0
        ]}
        rotation={[
          0,
          0,
          side * -0.22
        ]}
      >
        <Joint
          scale={1.07}
        />

        <group
          position={[
            side * 0.035,
            -0.26,
            0
          ]}
        >
          <mesh>
            <capsuleGeometry
              args={[
                0.095,
                0.32,
                4,
                9
              ]}
            />

            <Chrome />
          </mesh>

          <RoundedBox
            args={[
              0.24,
              0.34,
              0.28
            ]}
            radius={0.075}
            smoothness={3}
          >
            <GlossBlack />
          </RoundedBox>
        </group>

        <group
          ref={elbowRef}
          position={[
            side * 0.015,
            -0.54,
            0
          ]}
        >
          <Joint
            scale={0.9}
          />

          <group
            position={[
              side * 0.045,
              -0.37,
              0
            ]}
            rotation={[
              0,
              0,
              side * 0.08
            ]}
          >
            <mesh>
              <cylinderGeometry
                args={[
                  0.19,
                  0.285,
                  0.66,
                  10
                ]}
              />

              <GlossBlack />
            </mesh>

            <RoundedBox
              args={[
                0.3,
                0.48,
                0.44
              ]}
              radius={0.1}
              smoothness={4}
              position={[
                -side * 0.035,
                -0.03,
                0.025
              ]}
            >
              <BlackChrome />
            </RoundedBox>

            <mesh
              position={[
                side * 0.205,
                0.02,
                0.175
              ]}
            >
              <boxGeometry
                args={[
                  0.045,
                  0.17,
                  0.02
                ]}
              />

              {side > 0
                ? <Orange />
                : <Cyan />}
            </mesh>

            <group
              ref={wristRef}
              position={[
                0,
                -0.405,
                0
              ]}
            >
              <mesh>
                <cylinderGeometry
                  args={[
                    0.075,
                    0.085,
                    0.12,
                    14
                  ]}
                />

                <Chrome />
              </mesh>

              <group
                position={[
                  0,
                  -0.15,
                  0
                ]}
              >
                <MechanicalHand
                  side={side}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  });

const RobotFoot =
  memo(function RobotFoot({
    side
  }) {
    return (
      <group>
        <RoundedBox
          args={[
            0.46,
            0.2,
            0.63
          ]}
          radius={0.085}
          smoothness={4}
        >
          <GlossBlack />
        </RoundedBox>

        <RoundedBox
          args={[
            0.3,
            0.09,
            0.38
          ]}
          radius={0.04}
          smoothness={3}
          position={[
            0,
            0.075,
            0.07
          ]}
        >
          <DarkChrome />
        </RoundedBox>

        <mesh
          position={[
            side * 0.13,
            0.075,
            0.3
          ]}
        >
          <boxGeometry
            args={[
              0.045,
              0.03,
              0.025
            ]}
          />

          <White />
        </mesh>
      </group>
    );
  });

const RobotLeg =
  memo(function RobotLeg({
    side,
    thighRef,
    kneeRef,
    ankleRef
  }) {
    return (
      <group
        ref={thighRef}
        position={[
          side * 0.265,
          -0.66,
          0
        ]}
      >
        <Joint
          scale={0.92}
        />

        <group
          position={[
            0,
            -0.26,
            0
          ]}
        >
          <mesh>
            <capsuleGeometry
              args={[
                0.09,
                0.29,
                4,
                8
              ]}
            />

            <Chrome />
          </mesh>

          <RoundedBox
            args={[
              0.21,
              0.31,
              0.24
            ]}
            radius={0.065}
            smoothness={3}
          >
            <GlossBlack />
          </RoundedBox>
        </group>

        <group
          ref={kneeRef}
          position={[
            0,
            -0.51,
            0
          ]}
        >
          <Joint
            scale={0.86}
          />

          <group
            position={[
              0,
              -0.37,
              0
            ]}
          >
            <mesh>
              <cylinderGeometry
                args={[
                  0.205,
                  0.275,
                  0.67,
                  10
                ]}
              />

              <GlossBlack />
            </mesh>

            <RoundedBox
              args={[
                0.27,
                0.49,
                0.43
              ]}
              radius={0.095}
              smoothness={4}
              position={[
                0,
                -0.015,
                0.025
              ]}
            >
              <BlackChrome />
            </RoundedBox>

            <mesh
              position={[
                0,
                -0.02,
                0.225
              ]}
            >
              <boxGeometry
                args={[
                  0.07,
                  0.18,
                  0.018
                ]}
              />

              {side > 0
                ? <White />
                : <Cyan />}
            </mesh>

            <group
              ref={ankleRef}
              position={[
                0,
                -0.47,
                0.11
              ]}
            >
              <RobotFoot
                side={side}
              />
            </group>
          </group>
        </group>
      </group>
    );
  });

function StudioRobot({
  visibleRef
}) {
  const robotRef =
    useRef(null);

  const bodyRef =
    useRef(null);

  const headRef =
    useRef(null);

  const leftShoulder =
    useRef(null);

  const rightShoulder =
    useRef(null);

  const leftElbow =
    useRef(null);

  const rightElbow =
    useRef(null);

  const leftWrist =
    useRef(null);

  const rightWrist =
    useRef(null);

  const leftThigh =
    useRef(null);

  const rightThigh =
    useRef(null);

  const leftKnee =
    useRef(null);

  const rightKnee =
    useRef(null);

  const leftAnkle =
    useRef(null);

  const rightAnkle =
    useRef(null);

  const facingRef =
    useRef(1);

  const {
    viewport
  } = useThree();

  const config =
    useMemo(
      () => ({
        walkingSpeed: 3.9,
        travelSpeed: 0.31,
        legSwing: 0.34,
        armSwing: 0.28,
        turnSpeed: 5.2
      }),
      []
    );

  useFrame(
    (
      state,
      delta
    ) => {
      if (
        !visibleRef.current ||
        !robotRef.current
      ) {
        return;
      }

      const time =
        state.clock.elapsedTime;

      const dt =
        Math.min(
          delta,
          0.035
        );

      const range =
        Math.min(
          2.65,
          Math.max(
            1,
            viewport.width *
              0.24
          )
        );

      const travelPhase =
        time *
        config.travelSpeed;

      const targetX =
        Math.sin(
          travelPhase
        ) *
        range;

      const velocity =
        Math.cos(
          travelPhase
        );

      if (
        velocity > 0.025
      ) {
        facingRef.current = 1;
      }

      if (
        velocity < -0.025
      ) {
        facingRef.current = -1;
      }

      const facing =
        facingRef.current;

      const movementStrength =
        Math.min(
          1,
          Math.abs(
            velocity
          ) *
            1.45
        );

      const walkCycle =
        time *
        config.walkingSpeed;

      const sin =
        Math.sin(
          walkCycle
        );

      const cos =
        Math.cos(
          walkCycle
        );

      const activeSin =
        sin *
        movementStrength;

      const activeCos =
        cos *
        movementStrength;

      const leftStep =
        Math.max(
          0,
          activeSin
        );

      const rightStep =
        Math.max(
          0,
          -activeSin
        );

      const root =
        robotRef.current;

      root.position.x =
        THREE.MathUtils.damp(
          root.position.x,
          targetX,
          4.4,
          dt
        );

      root.position.y =
        -0.02 +
        Math.abs(
          activeSin
        ) *
          0.025;

      const targetRotationY =
        facing > 0
          ? Math.PI / 2
          : -Math.PI / 2;

      root.rotation.y =
        THREE.MathUtils.damp(
          root.rotation.y,
          targetRotationY,
          config.turnSpeed,
          dt
        );

      root.rotation.z =
        activeSin *
        0.009;

      if (
        bodyRef.current
      ) {
        bodyRef.current.rotation.z =
          -activeSin *
          0.015;

        bodyRef.current.rotation.y =
          activeCos *
          0.012;

        bodyRef.current.position.y =
          Math.abs(
            activeSin
          ) *
          0.012;
      }

      if (
        leftThigh.current &&
        rightThigh.current
      ) {
        leftThigh.current.rotation.x =
          activeSin *
          config.legSwing;

        rightThigh.current.rotation.x =
          -activeSin *
          config.legSwing;
      }

      if (
        leftKnee.current &&
        rightKnee.current
      ) {
        leftKnee.current.rotation.x =
          leftStep *
          0.48;

        rightKnee.current.rotation.x =
          rightStep *
          0.48;
      }

      if (
        leftAnkle.current &&
        rightAnkle.current
      ) {
        leftAnkle.current.rotation.x =
          -leftStep *
          0.16;

        rightAnkle.current.rotation.x =
          -rightStep *
          0.16;
      }

      if (
        leftShoulder.current &&
        rightShoulder.current
      ) {
        leftShoulder.current.rotation.x =
          -activeSin *
          config.armSwing;

        rightShoulder.current.rotation.x =
          activeSin *
          config.armSwing;

        leftShoulder.current.rotation.z =
          0.22 +
          activeCos *
            0.01;

        rightShoulder.current.rotation.z =
          -0.22 -
          activeCos *
            0.01;
      }

      if (
        leftElbow.current &&
        rightElbow.current
      ) {
        leftElbow.current.rotation.x =
          -0.13 +
          rightStep *
            0.16;

        rightElbow.current.rotation.x =
          -0.13 +
          leftStep *
            0.16;
      }

      if (
        leftWrist.current &&
        rightWrist.current
      ) {
        leftWrist.current.rotation.z =
          Math.sin(
            walkCycle +
              0.5
          ) *
          0.05 *
          movementStrength;

        rightWrist.current.rotation.z =
          -Math.sin(
            walkCycle +
              0.5
          ) *
          0.05 *
          movementStrength;
      }

      if (
        headRef.current
      ) {
        const scan =
          Math.sin(
            time *
              0.7
          ) *
          0.12;

        const nod =
          Math.sin(
            time *
              0.42
          ) *
          0.026;

        const tilt =
          Math.sin(
            time *
              0.5
          ) *
          0.012;

        headRef.current.rotation.y =
          THREE.MathUtils.damp(
            headRef.current.rotation.y,
            scan,
            3,
            dt
          );

        headRef.current.rotation.x =
          THREE.MathUtils.damp(
            headRef.current.rotation.x,
            nod,
            3,
            dt
          );

        headRef.current.rotation.z =
          THREE.MathUtils.damp(
            headRef.current.rotation.z,
            tilt,
            3,
            dt
          );
      }
    }
  );

  const responsiveScale =
    viewport.width < 4.8
      ? 0.82
      : viewport.width < 7
      ? 0.94
      : 1.06;

  return (
    <>
      <SoftFloorShadow
        robotRef={
          robotRef
        }
      />

      <group
        ref={robotRef}
        position={[
          0,
          -0.02,
          0
        ]}
        rotation={[
          0,
          Math.PI / 2,
          0
        ]}
        scale={
          responsiveScale
        }
      >
        <group
          ref={bodyRef}
        >
          <RobotTorso />

          <group
            position={[
              0,
              0.615,
              0
            ]}
          >
            <mesh>
              <cylinderGeometry
                args={[
                  0.12,
                  0.145,
                  0.22,
                  20
                ]}
              />

              <Chrome />
            </mesh>

            <mesh
              rotation={[
                Math.PI / 2,
                0,
                0
              ]}
            >
              <torusGeometry
                args={[
                  0.145,
                  0.021,
                  8,
                  24
                ]}
              />

              <GlossBlack />
            </mesh>
          </group>

          <RobotHead
            headRef={
              headRef
            }
          />

          <RobotArm
            side={-1}
            shoulderRef={
              leftShoulder
            }
            elbowRef={
              leftElbow
            }
            wristRef={
              leftWrist
            }
          />

          <RobotArm
            side={1}
            shoulderRef={
              rightShoulder
            }
            elbowRef={
              rightElbow
            }
            wristRef={
              rightWrist
            }
          />

          <RobotLeg
            side={-1}
            thighRef={
              leftThigh
            }
            kneeRef={
              leftKnee
            }
            ankleRef={
              leftAnkle
            }
          />

          <RobotLeg
            side={1}
            thighRef={
              rightThigh
            }
            kneeRef={
              rightKnee
            }
            ankleRef={
              rightAnkle
            }
          />
        </group>
      </group>
    </>
  );
}

export default memo(
  StudioRobot
);