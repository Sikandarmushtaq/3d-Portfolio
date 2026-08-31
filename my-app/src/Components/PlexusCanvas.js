import {
  memo,
  useEffect,
  useRef
} from "react";

import "./PlexusCanvas.css";

function PlexusCanvas({
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
  className = "",
}) {
  const canvasRef = useRef(null);

  const propsRef = useRef({});

  propsRef.current = {
    speed,
    mouseRepel,
    repelRadius,
    repelStrength,
    connectDistance,
    lineWidth,
    lineOpacity,
    glow,
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    let animationId = null;
    let dots = [];

    let last = 0;

    let inView = true;
    let tabVisible = true;
    let running = false;

    let width = 1;
    let height = 1;
    let ratio = 1;

    let mx = -99999;
    let my = -99999;

    let smx = -99999;
    let smy = -99999;

    let rect =
      canvas.getBoundingClientRect();

    const glowSprite =
      document.createElement("canvas");

    glowSprite.width = 32;
    glowSprite.height = 32;

    const gctx =
      glowSprite.getContext("2d");

    const gGrad =
      gctx.createRadialGradient(
        16,
        16,
        0,
        16,
        16,
        16
      );

    gGrad.addColorStop(
      0,
      "rgba(255,255,255,1)"
    );

    gGrad.addColorStop(
      0.4,
      "rgba(255,255,255,.45)"
    );

    gGrad.addColorStop(
      1,
      "rgba(255,255,255,0)"
    );

    gctx.fillStyle = gGrad;

    gctx.fillRect(
      0,
      0,
      32,
      32
    );

    const getPixelRatio = () =>
      Math.min(
        window.devicePixelRatio || 1,
        1.5
      );

    const updateRect = () => {
      rect =
        canvas.getBoundingClientRect();
    };

    const getDotTargetCount = (
      w,
      h
    ) => {
      const mobile = w <= 600;

      const divisor =
        mobile
          ? mobileDensity
          : density;

      const cap =
        mobile
          ? mobileMaxDots
          : maxDots;

      return Math.min(
        Math.floor(
          (w * h) / divisor
        ),
        cap
      );
    };

    const makeDot = (
      w = width,
      h = height
    ) => ({
      x: Math.random() * w,
      y: Math.random() * h,

      vx:
        (Math.random() - 0.5) *
        0.75,

      vy:
        (Math.random() - 0.5) *
        0.75,

      size:
        Math.random() * 1.2 +
        0.3,

      alpha:
        Math.random() * 0.5 +
        0.4,

      dx: 0,
      dy: 0,
    });

    const syncDotCount = () => {
      const target =
        getDotTargetCount(
          width,
          height
        );

      while (
        dots.length < target
      ) {
        dots.push(
          makeDot()
        );
      }

      if (
        dots.length > target
      ) {
        dots.length = target;
      }
    };

    const resizeCanvas = () => {
      const parent =
        canvas.parentElement;

      const bounds =
        parent
          ? parent.getBoundingClientRect()
          : canvas.getBoundingClientRect();

      const nextWidth =
        Math.max(
          1,
          Math.round(bounds.width)
        );

      const nextHeight =
        Math.max(
          1,
          Math.round(bounds.height)
        );

      const nextRatio =
        getPixelRatio();

      if (
        nextWidth === width &&
        nextHeight === height &&
        nextRatio === ratio
      ) {
        updateRect();

        return;
      }

      const oldWidth = width;
      const oldHeight = height;

      width = nextWidth;
      height = nextHeight;
      ratio = nextRatio;

      canvas.width =
        Math.round(
          width * ratio
        );

      canvas.height =
        Math.round(
          height * ratio
        );

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      );

      if (
        dots.length &&
        oldWidth > 1 &&
        oldHeight > 1
      ) {
        const scaleX =
          width / oldWidth;

        const scaleY =
          height / oldHeight;

        for (
          let i = 0;
          i < dots.length;
          i++
        ) {
          const dot =
            dots[i];

          dot.x *= scaleX;
          dot.y *= scaleY;

          dot.dx *= scaleX;
          dot.dy *= scaleY;
        }
      }

      syncDotCount();
      updateRect();
    };

    const setPointer = (
      clientX,
      clientY
    ) => {
      mx =
        clientX -
        rect.left;

      my =
        clientY -
        rect.top;

      if (
        smx < -9999
      ) {
        smx = mx;
        smy = my;
      }
    };

    const resetPointer = () => {
      mx = -99999;
      my = -99999;

      smx = -99999;
      smy = -99999;
    };

    const onMouseMove = (e) => {
      setPointer(
        e.clientX,
        e.clientY
      );
    };

    const onTouchStart = (e) => {
      updateRect();

      const touch =
        e.touches[0];

      if (!touch) return;

      setPointer(
        touch.clientX,
        touch.clientY
      );
    };

    const onTouchMove = (e) => {
      const touch =
        e.touches[0];

      if (!touch) return;

      setPointer(
        touch.clientX,
        touch.clientY
      );
    };

    const start = () => {
      if (running) return;

      running = true;

      last =
        performance.now();

      animationId =
        requestAnimationFrame(
          draw
        );
    };

    const stop = () => {
      if (!running) return;

      running = false;

      cancelAnimationFrame(
        animationId
      );
    };

    const updateRunning = () => {
      if (
        inView &&
        tabVisible
      ) {
        start();
      } else {
        stop();
      }
    };

    const BUCKETS = 4;

    const draw = (now) => {
      if (!running) return;

      animationId =
        requestAnimationFrame(
          draw
        );

      const p =
        propsRef.current;

      if (!last) {
        last = now;
      }

      const dt =
        Math.min(
          (now - last) /
            1000,
          0.05
        );

      last = now;

      const ts =
        dt *
        60 *
        p.speed;

      if (
        smx > -9999
      ) {
        smx +=
          (mx - smx) *
          0.2;

        smy +=
          (my - smy) *
          0.2;
      }

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const rr =
        p.repelRadius;

      const rr2 =
        rr * rr;

      for (
        let i = 0;
        i < dots.length;
        i++
      ) {
        const d =
          dots[i];

        d.x +=
          d.vx * ts;

        d.y +=
          d.vy * ts;

        if (
          d.x < -5 ||
          d.x > width + 5
        ) {
          d.vx *= -1;
        }

        if (
          d.y < -5 ||
          d.y > height + 5
        ) {
          d.vy *= -1;
        }

        let px = d.x;
        let py = d.y;

        if (
          p.mouseRepel &&
          smx > -9999
        ) {
          const dx =
            px - smx;

          const dy =
            py - smy;

          const d2 =
            dx * dx +
            dy * dy;

          if (
            d2 < rr2 &&
            d2 > 0.0001
          ) {
            const dist =
              Math.sqrt(d2);

            const push =
              (rr - dist) *
              p.repelStrength;

            px +=
              (dx / dist) *
              push;

            py +=
              (dy / dist) *
              push;
          }
        }

        d.dx = px;
        d.dy = py;
      }

      const cd =
        p.connectDistance;

      const cd2 =
        cd * cd;

      const paths =
        new Array(BUCKETS);

      for (
        let b = 0;
        b < BUCKETS;
        b++
      ) {
        paths[b] =
          new Path2D();
      }

      for (
        let i = 0;
        i < dots.length;
        i++
      ) {
        const a =
          dots[i];

        for (
          let j =
            i + 1;
          j < dots.length;
          j++
        ) {
          const b =
            dots[j];

          const dx =
            a.dx - b.dx;

          const dy =
            a.dy - b.dy;

          const d2 =
            dx * dx +
            dy * dy;

          if (
            d2 < cd2
          ) {
            const dist =
              Math.sqrt(d2);

            const level =
              Math.min(
                BUCKETS - 1,
                Math.floor(
                  (1 -
                    dist /
                      cd) *
                    BUCKETS
                )
              );

            paths[
              level
            ].moveTo(
              a.dx,
              a.dy
            );

            paths[
              level
            ].lineTo(
              b.dx,
              b.dy
            );
          }
        }
      }

      ctx.lineWidth =
        p.lineWidth;

      for (
        let b = 0;
        b < BUCKETS;
        b++
      ) {
        ctx.strokeStyle =
          `rgba(255,255,255,${
            ((b + 0.5) /
              BUCKETS) *
            p.lineOpacity
          })`;

        ctx.stroke(
          paths[b]
        );
      }

      for (
        let i = 0;
        i < dots.length;
        i++
      ) {
        const d =
          dots[i];

        ctx.globalAlpha =
          d.alpha;

        if (p.glow) {
          const r =
            d.size * 4;

          ctx.drawImage(
            glowSprite,
            d.dx - r,
            d.dy - r,
            r * 2,
            r * 2
          );
        } else {
          ctx.fillStyle =
            "#fff";

          ctx.beginPath();

          ctx.arc(
            d.dx,
            d.dy,
            d.size,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    const onVisibility = () => {
      tabVisible =
        !document.hidden;

      updateRunning();
    };

    const io =
      new IntersectionObserver(
        ([entry]) => {
          inView =
            entry.isIntersecting;

          updateRunning();
        },
        {
          rootMargin:
            "100px",
        }
      );

    const resizeObserver =
      new ResizeObserver(() => {
        resizeCanvas();
      });

    resizeCanvas();

    if (!dots.length) {
      syncDotCount();
    }

    io.observe(canvas);

    if (
      canvas.parentElement
    ) {
      resizeObserver.observe(
        canvas.parentElement
      );
    } else {
      resizeObserver.observe(
        canvas
      );
    }

    window.addEventListener(
      "mousemove",
      onMouseMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchstart",
      onTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchmove",
      onTouchMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchend",
      resetPointer,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchcancel",
      resetPointer,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "scroll",
      updateRect,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "mouseleave",
      resetPointer
    );

    document.addEventListener(
      "visibilitychange",
      onVisibility
    );

    updateRunning();

    return () => {
      stop();

      io.disconnect();

      resizeObserver.disconnect();

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      window.removeEventListener(
        "touchstart",
        onTouchStart
      );

      window.removeEventListener(
        "touchmove",
        onTouchMove
      );

      window.removeEventListener(
        "touchend",
        resetPointer
      );

      window.removeEventListener(
        "touchcancel",
        resetPointer
      );

      window.removeEventListener(
        "scroll",
        updateRect
      );

      document.removeEventListener(
        "mouseleave",
        resetPointer
      );

      document.removeEventListener(
        "visibilitychange",
        onVisibility
      );
    };
  }, [
    density,
    maxDots,
    mobileDensity,
    mobileMaxDots,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`plexus-canvas ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default memo(PlexusCanvas);