import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import PlexusCanvas from './PlexusCanvas';   
import './Scene2.css';




export default function Scene2() {
  return (
    <section className="scene2-hero">

      <PlexusCanvas
        speed={3}          // YAHAN SPEED BARHATI / GHATATI HAIN */
        mouseRepel           /* ⬅ mouse repel ON */
        repelRadius={170}    /* ⬅ repel circle ka size */
        repelStrength={0.8}  /* ⬅repel ki strength */
      />

 
   

    </section>
  );
}