import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveCursor = (e) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.set(ring, { x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        gsap.to(ring, { scale: 1.8, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'transparent', duration: 0.3 });
        gsap.to(dot, { scale: 0, duration: 0.3 });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        gsap.to(ring, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.8)', duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };

    const handleMouseDown = () => gsap.to(ring, { scale: 0.8, duration: 0.2 });
    const handleMouseUp = () => gsap.to(ring, { scale: 1, duration: 0.2 });

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
    
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.8)',
          pointerEvents: 'none',
          zIndex: 9999999,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />

   
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          pointerEvents: 'none',
          zIndex: 9999999,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}