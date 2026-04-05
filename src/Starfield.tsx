import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const MovingStars = () => {
  const starsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      // Slow, cinematic rotation
      starsRef.current.rotation.y -= delta * 0.02;
      starsRef.current.rotation.x -= delta * 0.01;
      
      // Subtle gravitational breathing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      starsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Stars 
      ref={starsRef}
      radius={100} // Increased spread so they fill the wide screen better
      depth={50} 
      count={8000} // Doubled the particle count
      factor={7} // Cranked up the size/brightness (default was 4)
      saturation={0} 
      fade 
      speed={2} // Slightly faster twinkle
    />
  );
};

const Starfield = () => {
  return (
    <div className="fixed inset-0 z-[15] pointer-events-none mix-blend-screen opacity-100">
      {/* THE FIX: Force inline pointerEvents to 'none' so R3F doesn't block the UI! */}
      <Canvas style={{ pointerEvents: 'none' }} camera={{ position: [0, 0, 1] }}>
        <MovingStars />
      </Canvas>
    </div>
  );
};

export default Starfield;