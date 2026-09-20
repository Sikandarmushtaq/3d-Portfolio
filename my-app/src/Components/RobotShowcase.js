import {
  Suspense,
  useEffect,
  useRef
} from "react";

import {
  Canvas
} from "@react-three/fiber";

import {
  Environment
} from "@react-three/drei";

import StudioRobot from "./StudioRobot.js";

import "./RobotShowcase.css";

export default function RobotShowcase() {
  const sectionRef = useRef(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          visibleRef.current =
            entry.isIntersecting;
        },
        {
          threshold: 0.02
        }
      );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="robot-showcase"
      ref={sectionRef}
    >
      <div className="robot-showcase-backlight" />

      <Canvas
        className="robot-showcase-canvas"
        dpr={[1, 1.25]}
        camera={{
          position: [0, 0.15, 8.4],
          fov: 31,
          near: 0.1,
          far: 40
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.95} />

        <directionalLight
          position={[-4, 6, 6]}
          intensity={2.7}
          color="#ffffff"
        />

        <directionalLight
          position={[5, 3, 5]}
          intensity={1.6}
          color="#dff8ff"
        />

        <pointLight
          position={[-3, 1.5, 3]}
          intensity={0.5}
          color="#ffffff"
        />

        <pointLight
          position={[3, 1.2, 3]}
          intensity={0.6}
          color="#7cecff"
        />

        <Suspense fallback={null}>
          <Environment
            preset="studio"
            environmentIntensity={0.68}
          />

          <StudioRobot
            visibleRef={visibleRef}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}