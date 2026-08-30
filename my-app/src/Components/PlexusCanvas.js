import { useEffect, useRef } from 'react';
import './PlexusCanvas.css';


export default function PlexusCanvas({
  speed = 1,
  mouseRepel = false,
  repelRadius = 150,
  repelStrength = 0.8,
  connectDistance = 190,
  lineWidth = 0.8,
  lineOpacity = 0.7,
  density = 7000,
  maxDots = 350,
  mobileDensity = 5500,
  mobileMaxDots = 130,
  glow = true,
  className = '',
}) {
  const canvasRef = useRef(null);


  const propsRef = useRef({});
  propsRef.current = {
    speed, mouseRepel, repelRadius, repelStrength,
    connectDistance, lineWidth, lineOpacity, glow,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });

    let animationId = null;
    let dots = [];
    let last = 0;

    let inView = true;
    let tabVisible = true;
    let running = false;

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      animationId = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(animationId);
    };

    const updateRunning = () => {
      if (inView && tabVisible) start();
      else stop();
    };

 
    const glowSprite = document.createElement('canvas');
    glowSprite.width = glowSprite.height = 32;
    const gctx = glowSprite.getContext('2d');
    const gGrad = gctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gGrad.addColorStop(0, 'rgba(255,255,255,1)');
    gGrad.addColorStop(0.4, 'rgba(255,255,255,.45)');
    gGrad.addColorStop(1, 'rgba(255,255,255,0)');
    gctx.fillStyle = gGrad;
    gctx.fillRect(0, 0, 32, 32);

    /* ---- mouse state (canvas-relative) ---- */
    let mx = -99999, my = -99999;
    let smx = -99999, smy = -99999;
    let rect = canvas.getBoundingClientRect();

    const updateRect = () => { rect = canvas.getBoundingClientRect(); };

    const setPointer = (clientX, clientY) => {
      mx = clientX - rect.left;
      my = clientY - rect.top;
      if (smx < -9999) { smx = mx; smy = my; }
    };

    const onMouseMove = (e) => setPointer(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (t) setPointer(t.clientX, t.clientY);
    };
    const onLeave = () => { mx = -99999; my = -99999; smx = -99999; smy = -99999; };

    const getPixelRatio = () => Math.min(window.devicePixelRatio || 1, 1.5);

    const createDots = () => {
      dots = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mobile = width <= 600;

      const divisor = mobile ? mobileDensity : density;
      const cap = mobile ? mobileMaxDots : maxDots;
      const count = Math.min(Math.floor((width * height) / divisor), cap);

      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75,
          size: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.5 + 0.4,
          dx: 0, dy: 0,  
        });
      }
    };

    const resize = () => {
      const ratio = getPixelRatio();
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * ratio;
      canvas.height = h * ratio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      updateRect();
      createDots();
    };


    const BUCKETS = 4;

    const draw = (now) => {
      if (!running) return;
      animationId = requestAnimationFrame(draw);

      const p = propsRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;


      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const ts = dt * 60 * p.speed;

   
      smx += (mx - smx) * 0.2;
      smy += (my - smy) * 0.2;

      ctx.clearRect(0, 0, width, height);

     
      const rr = p.repelRadius;
      const rr2 = rr * rr;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx * ts;
        d.y += d.vy * ts;

        if (d.x < -5 || d.x > width + 5) d.vx *= -1;
        if (d.y < -5 || d.y > height + 5) d.vy *= -1;

        let px = d.x;
        let py = d.y;

        if (p.mouseRepel) {
          const dx = px - smx;
          const dy = py - smy;
          const d2 = dx * dx + dy * dy;  
          if (d2 < rr2 && d2 > 0.0001) {
            const dist = Math.sqrt(d2);
            const push = (rr - dist) * p.repelStrength;
            px += (dx / dist) * push;
            py += (dy / dist) * push;
          }
        }

        d.dx = px;
        d.dy = py;
      }

 
      const cd = p.connectDistance;
      const cd2 = cd * cd;

      const paths = new Array(BUCKETS);
      for (let b = 0; b < BUCKETS; b++) paths[b] = new Path2D();

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.dx - b.dx;
          const dy = a.dy - b.dy;
          const d2 = dx * dx + dy * dy;  
          if (d2 < cd2) {
            const dist = Math.sqrt(d2);
            const level = Math.min(
              BUCKETS - 1,
              Math.floor((1 - dist / cd) * BUCKETS)
            );
            paths[level].moveTo(a.dx, a.dy);
            paths[level].lineTo(b.dx, b.dy);
          }
        }
      }

      ctx.lineWidth = p.lineWidth;
      for (let b = 0; b < BUCKETS; b++) {
        ctx.strokeStyle = `rgba(255,255,255,${((b + 0.5) / BUCKETS) * p.lineOpacity})`;
        ctx.stroke(paths[b]);
      }

    
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        ctx.globalAlpha = d.alpha;
        if (p.glow) {
          const r = d.size * 4;
          ctx.drawImage(glowSprite, d.dx - r, d.dy - r, r * 2, r * 2);
        } else {
          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(d.dx, d.dy, d.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
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

    resize();
    io.observe(canvas);

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('scroll', updateRect, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    updateRunning(); 

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', updateRect);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density, maxDots, mobileDensity, mobileMaxDots]);

  return (
    <canvas
      ref={canvasRef}
      className={`plexus-canvas ${className}`.trim()}
      aria-hidden="true"
    />
  );
}