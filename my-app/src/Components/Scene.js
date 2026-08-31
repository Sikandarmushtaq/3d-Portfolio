import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import * as THREE from 'three';

import {
  Canvas,
  useFrame,
  useThree,
} from '@react-three/fiber';



const TWO_PI = Math.PI * 2;




function createRandom(seed = 1337) {
  let value = seed >>> 0;

  return () => {
    value += 0x6D2B79F5;

    let t = value;

    t = Math.imul(
      t ^ (t >>> 15),
      t | 1
    );

    t ^=
      t +
      Math.imul(
        t ^ (t >>> 7),
        t | 61
      );

    return (
      (
        t ^ (t >>> 14)
      ) >>> 0
    ) / 4294967296;
  };
}




function useVisible(ref) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: '150px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return visible;
}



const PARTICLE_VERTEX_SHADER = `
  attribute float aSize;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uPixelRatio;

  varying float vDepthAlpha;


  void main() {

    vec3 p = position;


  

    float radius =
      max(
        length(p.xy),
        0.0001
      );



    float rotationSpeed =
      0.024 +
      sin(radius * 0.30) *
      0.008;


    float angle =
      uTime *
      rotationSpeed;


    float c = cos(angle);
    float s = sin(angle);


    p.xy =
      mat2(
        c, -s,
        s,  c
      ) *
      p.xy;




    p.z +=
      sin(
        uTime * 0.34 +
        radius * 0.40
      ) *
      0.24;


  

    p.y +=
      sin(
        uTime * 0.26 +
        p.x * 0.14
      ) *
      0.13;




    p.x +=
      cos(
        uTime * 0.22 +
        p.y * 0.15
      ) *
      0.10;




    vec4 viewPosition =
      modelViewMatrix *
      vec4(p, 1.0);


    vec4 clipPosition =
      projectionMatrix *
      viewPosition;


    vec2 screenPosition =
      clipPosition.xy /
      max(
        clipPosition.w,
        0.0001
      );


  

    vec2 delta =
      screenPosition -
      uMouse;


    float mouseDistance =
      length(delta);


    float repel =
      smoothstep(
        0.34,
        0.0,
        mouseDistance
      ) *
      uMouseStrength;


    vec2 direction =
      normalize(
        delta +
        vec2(0.0001)
      );


    p.xy +=
      direction *
      repel *
      0.22;


 

    float depthFactor =
      clamp(
        (p.z + 10.0) /
        20.0,
        0.15,
        1.0
      );


    p.x +=
      uMouse.x *
      uMouseStrength *
      depthFactor *
      0.15;


    p.y +=
      uMouse.y *
      uMouseStrength *
      depthFactor *
      0.10;



    viewPosition =
      modelViewMatrix *
      vec4(p, 1.0);


    clipPosition =
      projectionMatrix *
      viewPosition;


    float perspective =
      clamp(
        8.0 /
        max(
          -viewPosition.z,
          0.1
        ),
        0.45,
        2.2
      );


    gl_PointSize =
      aSize *
      uPixelRatio *
      perspective;


    gl_Position =
      clipPosition;



    vDepthAlpha =
      clamp(
        1.0 -
        abs(p.z) /
        20.0,
        0.38,
        1.0
      );
  }
`;




const PARTICLE_FRAGMENT_SHADER = `
  precision highp float;

  uniform float uOpacity;

  varying float vDepthAlpha;


  void main() {

    vec2 uv =
      gl_PointCoord -
      vec2(0.5);


    float distanceFromCenter =
      length(uv);


    if (
      distanceFromCenter > 0.5
    ) {
      discard;
    }




    float softEdge =
      smoothstep(
        0.5,
        0.04,
        distanceFromCenter
      );



    float core =
      smoothstep(
        0.20,
        0.0,
        distanceFromCenter
      );


    float alpha =
      (
        softEdge * 0.62 +
        core * 0.58
      ) *
      uOpacity *
      vDepthAlpha;


    gl_FragColor =
      vec4(
        1.0,
        1.0,
        1.0,
        alpha
      );
  }
`;




export function BackgroundParticles({
  innerRef,
  materialRef,
  opacity = 0.82,
}) {

  const particleData = useMemo(() => {

    const isSmallScreen =
      typeof window !== 'undefined' &&
      window.innerWidth < 768;




    const count =
      isSmallScreen
        ? 1900
        : 4200;


    const positions =
      new Float32Array(
        count * 3
      );


    const sizes =
      new Float32Array(
        count
      );


    const random =
      createRandom(
        20260831
      );


    const arms = 5;


    for (
      let i = 0;
      i < count;
      i++
    ) {

      const i3 =
        i * 3;



      if (random() < 0.78) {

        const normalizedRadius =
          Math.pow(
            random(),
            0.72
          );


        const radius =
          1.7 +
          normalizedRadius *
          14.5;


        const arm =
          i % arms;


        const armAngle =
          (
            arm / arms
          ) *
          TWO_PI;


        const angle =
          armAngle +
          radius * 0.48 +
          (
            random() - 0.5
          ) *
          0.95;


        positions[i3] =
          Math.cos(angle) *
          radius;


        positions[i3 + 1] =
          Math.sin(angle) *
          radius *
          0.52 +
          (
            random() - 0.5
          ) *
          1.25;


        positions[i3 + 2] =
          (
            random() - 0.5
          ) *
          (
            4.8 +
            radius * 0.38
          );

      } else {

     

        positions[i3] =
          (
            random() - 0.5
          ) *
          31;


        positions[i3 + 1] =
          (
            random() - 0.5
          ) *
          15;


        positions[i3 + 2] =
          (
            random() - 0.5
          ) *
          18;
      }


     

      sizes[i] =
        1.25 +
        Math.pow(
          random(),
          3.2
        ) *
        5.4;
    }


    return {
      positions,
      sizes,
    };

  }, []);


  const uniforms = useMemo(
    () => ({

      uTime: {
        value: 0,
      },


      uMouse: {
        value:
          new THREE.Vector2(
            0,
            0
          ),
      },


      uMouseStrength: {
        value: 0,
      },


      uPixelRatio: {
        value: 1,
      },


      uOpacity: {
        value: opacity,
      },

    }),
    [opacity]
  );


  return (
    <points
      ref={innerRef}
      frustumCulled={false}
    >

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"

          count={
            particleData
              .positions
              .length / 3
          }

          array={
            particleData
              .positions
          }

          itemSize={3}
        />


        <bufferAttribute
          attach="attributes-aSize"

          count={
            particleData
              .sizes
              .length
          }

          array={
            particleData
              .sizes
          }

          itemSize={1}
        />

      </bufferGeometry>


      <shaderMaterial
        ref={materialRef}

        uniforms={uniforms}

        vertexShader={
          PARTICLE_VERTEX_SHADER
        }

        fragmentShader={
          PARTICLE_FRAGMENT_SHADER
        }

        transparent

        depthWrite={false}

        depthTest

        blending={
          THREE.AdditiveBlending
        }

        toneMapped={false}
      />

    </points>
  );
}



export function AnimatedBackgroundParticles({
  mouseEffect = false,
  opacity = 0.82,
}) {

  const pointsRef =
    useRef();


  const materialRef =
    useRef();


  const mouseTargetRef =
    useRef(
      new THREE.Vector2(
        0,
        0
      )
    );


  const smoothMouseRef =
    useRef(
      new THREE.Vector2(
        0,
        0
      )
    );


  useFrame((state) => {

    const material =
      materialRef.current;


    if (!material) return;


    const time =
      state.clock.elapsedTime;


  

    material.uniforms
      .uTime.value =
      time;


    material.uniforms
      .uPixelRatio.value =
      Math.min(
        state.gl.getPixelRatio(),
        1.5
      );




    if (mouseEffect) {

      mouseTargetRef.current.set(
        state.pointer.x,
        state.pointer.y
      );

    } else {

      mouseTargetRef.current.set(
        0,
        0
      );
    }


    smoothMouseRef.current.lerp(
      mouseTargetRef.current,
      0.045
    );


    material.uniforms
      .uMouse.value.copy(
        smoothMouseRef.current
      );


   

    material.uniforms
      .uMouseStrength.value =
      THREE.MathUtils.lerp(
        material.uniforms
          .uMouseStrength
          .value,

        mouseEffect
          ? 1
          : 0,

        0.065
      );




    if (pointsRef.current) {

      pointsRef.current.rotation.z =
        time *
        0.007;


      pointsRef.current.rotation.x =
        Math.sin(
          time * 0.12
        ) *
        0.018;


      pointsRef.current.position.x =
        Math.sin(
          time * 0.18
        ) *
        0.16;


      pointsRef.current.position.y =
        Math.cos(
          time * 0.15
        ) *
        0.11;
    }

  });


  return (
    <BackgroundParticles
      innerRef={pointsRef}
      materialRef={materialRef}
      opacity={opacity}
    />
  );
}




function CubeParticles({
  innerRef,
}) {

  const positions =
    useMemo(() => {

      const points = [];


      const size =
        1.05;


      const half =
        size / 2;


      const density =
        typeof window !==
          'undefined' &&
        window.innerWidth < 768
          ? 11
          : 16;


      const random =
        createRandom(101);


      for (
        let face = 0;
        face < 6;
        face++
      ) {

        for (
          let x = 0;
          x < density;
          x++
        ) {

          for (
            let y = 0;
            y < density;
            y++
          ) {

            const px =
              -half +
              (
                x /
                (
                  density - 1
                )
              ) *
              size;


            const py =
              -half +
              (
                y /
                (
                  density - 1
                )
              ) *
              size;


            let point;


            switch (face) {

              case 0:
                point = [
                  px,
                  py,
                  half,
                ];
                break;


              case 1:
                point = [
                  px,
                  py,
                  -half,
                ];
                break;


              case 2:
                point = [
                  -half,
                  px,
                  py,
                ];
                break;


              case 3:
                point = [
                  half,
                  px,
                  py,
                ];
                break;


              case 4:
                point = [
                  px,
                  half,
                  py,
                ];
                break;


              default:
                point = [
                  px,
                  -half,
                  py,
                ];
            }


            point[0] +=
              (
                random() - 0.5
              ) *
              0.009;


            point[1] +=
              (
                random() - 0.5
              ) *
              0.009;


            point[2] +=
              (
                random() - 0.5
              ) *
              0.009;


            points.push(
              ...point
            );
          }
        }
      }


      return new Float32Array(
        points
      );

    }, []);


  return (
    <group
      ref={innerRef}

      position={[
        -1.35,
        0,
        -1.5,
      ]}
    >

      <points>

        <bufferGeometry>

          <bufferAttribute
            attach="attributes-position"

            count={
              positions.length /
              3
            }

            array={positions}

            itemSize={3}
          />

        </bufferGeometry>


        <pointsMaterial
          color="#ffffff"

          size={0.018}

          sizeAttenuation

          transparent

          opacity={0.75}

          depthWrite={false}

          blending={
            THREE.AdditiveBlending
          }
        />

      </points>

    </group>
  );
}




function SphereParticles({
  innerRef,
}) {

  const positions =
    useMemo(() => {

      const count =
        typeof window !==
          'undefined' &&
        window.innerWidth < 768
          ? 500
          : 900;


      const radius =
        0.68;


      const array =
        new Float32Array(
          count * 3
        );


      const goldenAngle =
        Math.PI *
        (
          3 -
          Math.sqrt(5)
        );


      for (
        let i = 0;
        i < count;
        i++
      ) {

        const y =
          1 -
          (
            i /
            (
              count - 1
            )
          ) *
          2;


        const radiusAtY =
          Math.sqrt(
            Math.max(
              0,
              1 -
              y * y
            )
          );


        const theta =
          goldenAngle *
          i;


        const i3 =
          i * 3;


        array[i3] =
          Math.cos(theta) *
          radiusAtY *
          radius;


        array[i3 + 1] =
          y *
          radius;


        array[i3 + 2] =
          Math.sin(theta) *
          radiusAtY *
          radius;
      }


      return array;

    }, []);


  return (
    <group
      ref={innerRef}

      position={[
        1.35,
        0,
        -1.5,
      ]}
    >

      <points>

        <bufferGeometry>

          <bufferAttribute
            attach="attributes-position"

            count={
              positions.length /
              3
            }

            array={positions}

            itemSize={3}
          />

        </bufferGeometry>


        <pointsMaterial
          color="#ffffff"

          size={0.018}

          sizeAttenuation

          transparent

          opacity={0.75}

          depthWrite={false}

          blending={
            THREE.AdditiveBlending
          }
        />

      </points>

    </group>
  );
}




function CenterParticle({
  innerRef,
}) {

  return (
    <group
      ref={innerRef}

      position={[
        0,
        0,
        -1.8,
      ]}
    >

      <mesh>

        <sphereGeometry
          args={[
            0.018,
            8,
            8,
          ]}
        />


        <meshBasicMaterial
          color="#ffffff"
        />

      </mesh>

    </group>
  );
}




function ResponsiveRig({
  children,
}) {

  const groupRef =
    useRef();


  const size =
    useThree(
      (state) =>
        state.size
    );


  useLayoutEffect(() => {

    const group =
      groupRef.current;


    if (!group) return;


    const aspect =
      size.width /
      Math.max(
        size.height,
        1
      );


   

    if (aspect >= 0.95) {

      group.scale.setScalar(
        1
      );


      group.position.set(
        0,
        0.4,
        0
      );


      return;
    }



    const scale =
      THREE.MathUtils.clamp(
        aspect / 1.35,
        0.42,
        1
      );


    group.scale.setScalar(
      scale
    );


    const responsiveY =
      0.15 +
      (
        1 - scale
      ) *
      0.42;


    group.position.set(
      0,
      responsiveY,
      0
    );

  }, [size]);


  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
}



function GeometryAnimations({
  cubeRef,
  sphereRef,
  centerRef,
  moveRef,
  scrollProgressRef,
}) {

  useFrame((state) => {

    const time =
      state.clock.elapsedTime;



    if (cubeRef.current) {

      cubeRef.current.rotation.y =
        time *
        0.10;


      cubeRef.current.rotation.x =
        Math.sin(
          time * 0.22
        ) *
        0.045;


      cubeRef.current.rotation.z =
        Math.sin(
          time * 0.16
        ) *
        0.018;


      cubeRef.current.position.y =
        Math.sin(
          time * 0.55
        ) *
        0.045;
    }


  

    if (sphereRef.current) {

      sphereRef.current.rotation.y =
        -time *
        0.085;


      sphereRef.current.rotation.x =
        Math.sin(
          time * 0.20
        ) *
        0.04;


      sphereRef.current.rotation.z =
        Math.sin(
          time * 0.13
        ) *
        0.012;


      sphereRef.current.position.y =
        Math.sin(
          time * 0.48 +
          1
        ) *
        0.045;
    }




    if (centerRef.current) {

      centerRef.current.position.y =
        Math.sin(
          time * 0.65
        ) *
        0.035;
    }


  

    if (moveRef.current) {

      /* Mouse */

      const targetRotationY =
        state.pointer.x *
        0.035;


      const targetRotationX =
        -state.pointer.y *
        0.025;


      moveRef.current.rotation.y =
        THREE.MathUtils.lerp(
          moveRef.current
            .rotation.y,

          targetRotationY,

          0.025
        );


      moveRef.current.rotation.x =
        THREE.MathUtils.lerp(
          moveRef.current
            .rotation.x,

          targetRotationX,

          0.025
        );


   

      const progress =
        scrollProgressRef
          ?.current ?? 0;


      const targetY =
        progress *
        3.25;


      moveRef.current.position.y =
        THREE.MathUtils.lerp(
          moveRef.current
            .position.y,

          targetY,

          0.065
        );
    }

  });


  return null;
}




function SceneContent({
  scrollProgressRef,
}) {

  const cubeRef =
    useRef();


  const sphereRef =
    useRef();


  const centerRef =
    useRef();


  const moveRef =
    useRef();


  return (
    <>

     

      <AnimatedBackgroundParticles
        mouseEffect={true}
      />


      <GeometryAnimations
        cubeRef={cubeRef}

        sphereRef={sphereRef}

        centerRef={centerRef}

        moveRef={moveRef}

        scrollProgressRef={
          scrollProgressRef
        }
      />


      <ResponsiveRig>

        <group ref={moveRef}>

          <CubeParticles
            innerRef={cubeRef}
          />


          <SphereParticles
            innerRef={sphereRef}
          />


          <CenterParticle
            innerRef={centerRef}
          />

        </group>

      </ResponsiveRig>

    </>
  );
}




export default function Scene() {

  const wrapRef =
    useRef(null);


  const scrollProgressRef =
    useRef(0);


  const scrollRafRef =
    useRef(null);


  const scenePageTopRef =
    useRef(0);


  const visible =
    useVisible(wrapRef);




  useEffect(() => {

    const calculateSceneTop =
      () => {

        const element =
          wrapRef.current;


        if (!element) return;


        const rect =
          element.getBoundingClientRect();


        scenePageTopRef.current =
          window.scrollY +
          rect.top;
      };


    const updateScrollProgress =
      () => {

        scrollRafRef.current =
          null;


        const distance =
          Math.max(
            window.innerHeight *
            0.9,
            1
          );


        const traveled =
          window.scrollY -
          scenePageTopRef.current;


        scrollProgressRef.current =
          THREE.MathUtils.clamp(
            traveled /
            distance,
            0,
            1
          );
      };


    const requestUpdate =
      () => {

        if (
          scrollRafRef.current !==
          null
        ) {
          return;
        }


        scrollRafRef.current =
          window.requestAnimationFrame(
            updateScrollProgress
          );
      };


    const handleResize =
      () => {

        calculateSceneTop();

        requestUpdate();
      };


    calculateSceneTop();

    updateScrollProgress();


    window.addEventListener(
      'scroll',
      requestUpdate,
      {
        passive: true,
      }
    );


    window.addEventListener(
      'resize',
      handleResize
    );


    return () => {

      window.removeEventListener(
        'scroll',
        requestUpdate
      );


      window.removeEventListener(
        'resize',
        handleResize
      );


      if (
        scrollRafRef.current !==
        null
      ) {

        window.cancelAnimationFrame(
          scrollRafRef.current
        );
      }
    };

  }, []);


  return (
    <div
      ref={wrapRef}

      style={{
        width: '100%',
        height: '100%',
      }}
    >

      <Canvas
        dpr={[
          1,
          1.25,
        ]}

        camera={{
          position: [
            0,
            0.1,
            7.5,
          ],

          fov: 42,

          near: 0.1,

          far: 100,
        }}

        gl={{
          antialias: false,

          alpha: true,

          powerPreference:
            'high-performance',
        }}

        frameloop={
          visible
            ? 'always'
            : 'never'
        }

        performance={{
          min: 0.5,
        }}

        style={{
          touchAction:
            'pan-y',
        }}
      >

        <color
          attach="background"

          args={[
            '#000000',
          ]}
        />


        <SceneContent
          scrollProgressRef={
            scrollProgressRef
          }
        />

      </Canvas>

    </div>
  );
}