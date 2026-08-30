import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window;

    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return;
    }

    const moveCursor = (e) => {
      gsap.set(dot, {
        x: e.clientX,
        y: e.clientY,
      });

      gsap.set(ring, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        gsap.to(ring, {
          scale: 1.8,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderColor: "transparent",
          duration: 0.3,
        });

        gsap.to(dot, {
          scale: 0,
          duration: 0.3,
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(255,255,255,0.8)",
          duration: 0.3,
        });

        gsap.to(dot, {
          scale: 1,
          duration: 0.3,
        });
      }
    };

    const handleMouseDown = () => {
      gsap.to(ring, {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const handleMouseUp = () => {
      gsap.to(ring, {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor"
      />

      <div
        ref={dotRef}
        className="cursor-dot"
      />
    </>
  );
}