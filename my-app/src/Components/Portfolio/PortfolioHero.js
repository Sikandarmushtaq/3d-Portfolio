import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import * as THREE from "three";

import PortfolioRobot from "./PortfolioRobot.js";
import "./PortfolioHero.css";

function StudioEnvironment() {
  const { gl, scene, invalidate } = useThree();

  useEffect(() => {
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(gl);

    const environment = pmrem.fromScene(room);

    scene.environment = environment.texture;
    scene.environmentIntensity = 0.25;

    room.dispose();
    pmrem.dispose();

    invalidate();

    return () => {
      scene.environment = null;
      environment.dispose();
    };
  }, [gl, scene, invalidate]);

  return null;
}

export default function PortfolioHero() {
  const sectionRef = useRef(null);
  const invalidateRef = useRef(null);
  const visibleRef = useRef(true);

  const pointerRef = useRef({
    x: 0,
    y: 0,
    inside: false,
  });

  const handlePointerMove = (event) => {
    const section = sectionRef.current;

    if (!section) return;

    const rect = section.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 2 - 1;

    const y =
      1 - ((event.clientY - rect.top) / rect.height) * 2;

    pointerRef.current.x = Math.max(-1, Math.min(1, x));
    pointerRef.current.y = Math.max(-1, Math.min(1, y));
    pointerRef.current.inside = true;

    invalidateRef.current?.();
  };

  const handlePointerLeave = () => {
    pointerRef.current.x = 0;
    pointerRef.current.y = 0;
    pointerRef.current.inside = false;

    invalidateRef.current?.();
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          invalidateRef.current?.();
        }
      },
      {
        threshold: 0.04,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="portfolio-hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="portfolio-studio-glow" />

      <div className="portfolio-hero-inner">
        <div className="portfolio-hero-left">
          <h1>
            <span>Building</span>
            <span>Meaningful</span>
            <span>Digital</span>
            <span>Experiences</span>
          </h1>
        </div>

        <div className="portfolio-robot-stage">
          <Canvas
            frameloop="demand"
            dpr={[1, 1.3]}
            camera={{
              position: [0, 0, 8.6],
              fov: 32,
              near: 0.1,
              far: 100,
            }}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            onCreated={({ gl }) => {
              gl.toneMappingExposure = 0.95;
            }}
          >
            <ambientLight
              color="#ffffff"
              intensity={0.45}
            />

            <directionalLight
              position={[-4, 5, 6]}
              color="#ffffff"
              intensity={1.3}
            />

            <directionalLight
              position={[4, 2.5, 3]}
              color="#aec5e8"
              intensity={0.75}
            />

            <directionalLight
              position={[1, -1, 4]}
              color="#ffffff"
              intensity={0.25}
            />

            <StudioEnvironment />

            <Suspense fallback={null}>
              <PortfolioRobot
                pointerRef={pointerRef}
                visibleRef={visibleRef}
                invalidateRef={invalidateRef}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="portfolio-hero-right">
          <p>
            SOFTWARE ENGINEERING
            <br />
            BUILT AROUND REAL
            <br />
            BUSINESS PROBLEMS.
          </p>
        </div>
      </div>
    </section>
  );
}