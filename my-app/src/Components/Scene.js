import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';



function useVisible(ref) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: '100px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return visible;
}


export function BackgroundParticles({ innerRef }) {
  const positions = useMemo(() => {
    const isSmallScreen = window.innerWidth < 768;
    const count = isSmallScreen ? 1800 : 3600;   /* ⬅️ 5200/2600 → kam */
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 5.5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      array[i3]     = radius * Math.sin(phi) * Math.cos(theta);
      array[i3 + 1] = radius * Math.cos(phi);
      array[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return array;
  }, []);

  return (
    <points ref={innerRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending}   /* ⬅️ bloom ka replacement */
      />
    </points>
  );
}

function CubeParticles({ innerRef }) {
  const positions = useMemo(() => {
    const points = [];
    const size = 1.05;
    const half = size / 2;
    const density = window.innerWidth < 768 ? 11 : 16;   /* ⬅️ 13/20 → 11/16 */
    for (let face = 0; face < 6; face++) {
      for (let x = 0; x < density; x++) {
        for (let y = 0; y < density; y++) {
          const px = -half + (x / (density - 1)) * size;
          const py = -half + (y / (density - 1)) * size;
          let p;
          switch (face) {
            case 0: p = [px, py, half]; break;
            case 1: p = [px, py, -half]; break;
            case 2: p = [-half, px, py]; break;
            case 3: p = [half, px, py]; break;
            case 4: p = [px, half, py]; break;
            default: p = [px, -half, py]; break;
          }
          p[0] += (Math.random() - 0.5) * 0.009;
          p[1] += (Math.random() - 0.5) * 0.009;
          p[2] += (Math.random() - 0.5) * 0.009;
          points.push(...p);
        }
      }
    }
    return new Float32Array(points);
  }, []);

  return (
    <group ref={innerRef} position={[-1.35, 2.5, -1.5]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.018} sizeAttenuation transparent opacity={0.75} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}


function SphereParticles({ innerRef }) {
  const positions = useMemo(() => {
    const count = window.innerWidth < 768 ? 500 : 900; 
    const radius = 0.68;
    const array = new Float32Array(count * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const i3 = i * 3;
      array[i3]     = Math.cos(theta) * radiusAtY * radius;
      array[i3 + 1] = y * radius;
      array[i3 + 2] = Math.sin(theta) * radiusAtY * radius;
    }
    return array;
  }, []);

  return (
    <group ref={innerRef} position={[1.35, 1.9, -1.5]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.018} sizeAttenuation transparent opacity={0.75} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}


function CenterParticle({ innerRef }) {
  return (
    <group ref={innerRef} position={[0, 1.7, -1.8]}>
      <mesh>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}


function ResponsiveRig({ children }) {
  const groupRef = useRef();
  const size = useThree((state) => state.size);

  useLayoutEffect(() => {
    if (!groupRef.current) return;
    const aspect = size.width / size.height;

    if (aspect >= 0.95) {
      groupRef.current.scale.setScalar(1);
      groupRef.current.position.set(0, 0.4, 0);
    } else {
      const s = THREE.MathUtils.clamp(aspect / 1.35, 0.42, 1);
      groupRef.current.scale.setScalar(s);
      groupRef.current.position.y = (1 - s) * 0.9;
    }
  }, [size]);

  return <group ref={groupRef}>{children}</group>;
}


function Animations({ bgRef, cubeRef, sphereRef, centerRef, moveRef }) {
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (bgRef.current) {
      bgRef.current.rotation.y = t * 0.018;
      bgRef.current.rotation.x = Math.sin(t * 0.12) * 0.025;
      bgRef.current.rotation.z = Math.cos(t * 0.08) * 0.015;
      bgRef.current.position.z = Math.sin(t * 0.18) * 0.35;
      bgRef.current.position.x = Math.sin(t * 0.10) * 0.18;
      bgRef.current.position.y = Math.cos(t * 0.13) * 0.12;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.y = t * 0.10;
      cubeRef.current.rotation.x = Math.sin(t * 0.22) * 0.045;
      cubeRef.current.rotation.z = Math.sin(t * 0.16) * 0.018;
      cubeRef.current.position.y = Math.sin(t * 0.55) * 0.045;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y = -t * 0.085;
      sphereRef.current.rotation.x = Math.sin(t * 0.20) * 0.04;
      sphereRef.current.rotation.z = Math.sin(t * 0.13) * 0.012;
      sphereRef.current.position.y = Math.sin(t * 0.48 + 1) * 0.045;
    }
    if (centerRef.current) {
      centerRef.current.position.y = Math.sin(t * 0.65) * 0.035;
    }
    if (moveRef.current) {
      moveRef.current.rotation.y = THREE.MathUtils.lerp(moveRef.current.rotation.y, state.pointer.x * 0.035, 0.025);
      moveRef.current.rotation.x = THREE.MathUtils.lerp(moveRef.current.rotation.x, -state.pointer.y * 0.025, 0.025);
    }
  });
  return null;
}

function SceneContent() {
  const bgRef = useRef();
  const cubeRef = useRef();
  const sphereRef = useRef();
  const centerRef = useRef();
  const moveRef = useRef();

  return (
    <>
      <Animations
        bgRef={bgRef}
        cubeRef={cubeRef}
        sphereRef={sphereRef}
        centerRef={centerRef}
        moveRef={moveRef}
      />
      <BackgroundParticles innerRef={bgRef} />
      <ResponsiveRig>
        <group ref={moveRef}>
          <CubeParticles innerRef={cubeRef} />
          <SphereParticles innerRef={sphereRef} />
          <CenterParticle innerRef={centerRef} />
        </group>
      </ResponsiveRig>
    </>
  );
}

export default function Scene() {
  const wrapRef = useRef(null);
  const visible = useVisible(wrapRef);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        dpr={[1, 1.25]}                        /* ⬅️ 1.35 → 1.25 */
        camera={{ position: [0, 0.1, 7.5], fov: 42, near: 0.1, far: 100 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        frameloop={visible ? 'always' : 'never'}   /* ⬅️ off-screen = zero GPU */
        performance={{ min: 0.5 }}
        style={{ touchAction: 'pan-y' }}
      >
        <color attach="background" args={['#000000']} />
        <SceneContent />
      </Canvas>
    </div>
  );
}