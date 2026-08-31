import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import PlexusCanvas from './PlexusCanvas';
import './Scene3.css';


const NOISE = `
vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}`;


function softTex(r, g, b) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const x = c.getContext('2d');
  const gr = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, `rgba(${r},${g},${b},.5)`);
  gr.addColorStop(.5, `rgba(${r},${g},${b},.15)`);
  gr.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.flipY = false;   /* ⬅️ YE — texture warning fix */
  return tex;
}

export default function Scene3({ title = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (e) { return; }

    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050110, 0.014);

    const camera = new THREE.PerspectiveCamera(60, 1, .1, 100);

    const disposables = [];
    const track = (res) => { disposables.push(res); return res; };


    const shapeGroup = new THREE.Group();
    scene.add(shapeGroup);

    let BASE_Y = -0.6;   /* layout() isay set karega */
    const blobUniforms = { uTime: { value: 0 }, uIntensity: { value: 0.45 } };

    const blobGeo = track(new THREE.IcosahedronGeometry(2.4, 32));
    const blobMat = track(new THREE.ShaderMaterial({
      uniforms: blobUniforms,
      vertexShader: NOISE + `
        uniform float uTime;
        uniform float uIntensity;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying float vNoise;
        void main(){
          float n1 = snoise(position * 0.55 + uTime * 0.22);
          float n2 = snoise(position * 1.6  - uTime * 0.14) * 0.35;
          float disp = (n1 + n2) * uIntensity;
          vNoise = n1;
          vec3 newPos = position + normal * disp;
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(newPos, 1.0);
          vViewDir = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying float vNoise;
        void main(){
          float fresnel = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 2.0);
          vec3 deep = vec3(0.13, 0.06, 0.30);
          vec3 mid  = vec3(0.42, 0.25, 0.85);
          vec3 edge = vec3(0.78, 0.60, 1.00);
          vec3 col = mix(deep, mid, clamp(vNoise * 0.6 + 0.5, 0.0, 1.0));
          col = mix(col, edge, fresnel);
          col += edge * 0.06 * sin(uTime * 1.4);
          gl_FragColor = vec4(col, 0.94);
        }`,
      transparent: true
    }));
    const blob = new THREE.Mesh(blobGeo, blobMat);
    shapeGroup.add(blob);


    const nebGroup = new THREE.Group(); scene.add(nebGroup);
    const nebTexes = [
      track(softTex(124, 58, 237)),
      track(softTex(34, 211, 238)),
      track(softTex(219, 39, 119))
    ];
    [[-9, 4, -8, 14], [10, -5, -10, 16], [-4, -7, -6, 11], [12, 6, -7, 10]].forEach((n, i) => {
      const m = track(new THREE.SpriteMaterial({
        map: nebTexes[i % 3], transparent: true, opacity: .28,
        depthWrite: false, blending: THREE.AdditiveBlending
      }));
      const sp = new THREE.Sprite(m);
      sp.position.set(n[0], n[1], n[2]);
      sp.scale.set(n[3], n[3], 1);
      sp.userData.baseY = n[1];
      sp.userData.spd = .2 + Math.random() * .3;
      nebGroup.add(sp);
    });

    const haloMat = track(new THREE.SpriteMaterial({
      map: track(softTex(139, 92, 246)), transparent: true, opacity: .5,
      depthWrite: false, blending: THREE.AdditiveBlending
    }));
    const halo = new THREE.Sprite(haloMat);
    halo.scale.set(12, 12, 1);
    shapeGroup.add(halo);

 
    let blobFloat = 0.35;   
    const layout = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      renderer.setSize(w, h, false);
      camera.aspect = w / h;

      camera.position.z = camera.aspect < 1
        ? 9 + (1 - camera.aspect) * 5.5
        : 9;
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);

      if (camera.aspect < 1) {
     
        const s = Math.max(0.7, camera.aspect * 1.9);  
        shapeGroup.scale.setScalar(s);

        BASE_Y = 0;            
        blobFloat = 0.12;      
      } else {
   
        shapeGroup.scale.setScalar(1);
        BASE_Y = -0.6;
        blobFloat = 0.35;
      }
    };

  
    let rafId = null;
    let running = false;
    let elapsed = 0;     
    let lastNow = 0;

    function loop(now) {
      if (!running) return;
      rafId = requestAnimationFrame(loop);

      if (!lastNow) lastNow = now;
      const dt = Math.min((now - lastNow) / 1000, 0.05);
      lastNow = now;
      elapsed += dt;

      const t = elapsed;

   
      blobUniforms.uTime.value = t;
      blob.rotation.y = t * .12;
      blob.rotation.x = Math.sin(t * .2) * .15;
      shapeGroup.position.y = BASE_Y + Math.sin(t * .5) * blobFloat;

      /* ---- nebula + halo ---- */
      nebGroup.children.forEach(sp => {
        sp.position.y = sp.userData.baseY + Math.sin(t * sp.userData.spd) * .8;
      });
      haloMat.opacity = .42 + Math.sin(t * 1.1) * .12;

      renderer.render(scene, camera);
    }

  
    let inView = true;
    let tabVisible = true;

    const startLoop = () => {
      if (running) return;
      running = true;
      lastNow = 0;
      rafId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(rafId);
    };

    const updateRunning = () => {
      if (inView && tabVisible) startLoop();
      else stopLoop();
    };

    const onVisibility = () => {
      tabVisible = !document.hidden;
      updateRunning();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updateRunning();
      },
      { rootMargin: '100px' }
    );

    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    layout();         
    io.observe(canvas);
    updateRunning();  


    return () => {
      stopLoop();
      io.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      disposables.forEach(res => res.dispose && res.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <section className="scene3-hero">

    
      <PlexusCanvas
        className="scene3-plexus"
        speed={3.5}
        mouseRepel
        repelRadius={150}
        repelStrength={0.85}
      />

      <canvas ref={canvasRef} className="scene3-canvas" />
      <div className="scene3-grain" aria-hidden="true" />
      <div className="scene3-vignette" aria-hidden="true" />
      <h1 className="scene3-title">{title}</h1>
    </section>
  );
}