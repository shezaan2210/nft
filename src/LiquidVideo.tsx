import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LiquidShaderMaterial = {
  uniforms: {
    uTexture: { value: null },
    uTime: { value: 0 },
    uHover: { value: 0 }, // 0 to 1 based on hover state
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform float uHover;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Calculate distance from mouse to create a ripple effect
      float dist = distance(uv, uMouse);
      float ripple = sin(dist * 20.0 - uTime * 5.0) * 0.02 * uHover;
      
      // Apply the ripple to the UV coordinates
      vec2 distortedUv = uv + ripple;
      
      // RGB Split / Chromatic Aberration based on hover intensity
      float splitAmount = 0.03 * uHover;
      vec4 colorR = texture2D(uTexture, vec2(distortedUv.x + splitAmount, distortedUv.y));
      vec4 colorG = texture2D(uTexture, distortedUv);
      vec4 colorB = texture2D(uTexture, vec2(distortedUv.x - splitAmount, distortedUv.y));
      
      gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
  `
};

const VideoPlane = ({ url, isHovered, mousePos }: { url: string, isHovered: boolean, mousePos: {x: number, y: number} }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // Create HTML Video Element silently
  const video = useMemo(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.play();
    return vid;
  }, [url]);

  const videoTexture = useMemo(() => new THREE.VideoTexture(video), [video]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Smoothly animate the hover intensity
      materialRef.current.uniforms.uHover.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uHover.value, 
        isHovered ? 1 : 0, 
        0.1
      );
      // Update mouse position for the ripple center
      materialRef.current.uniforms.uMouse.value.set(mousePos.x, 1.0 - mousePos.y); // Invert Y for WebGL
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} /> {/* Fills the R3F viewport */}
      <shaderMaterial 
        ref={materialRef}
        args={[LiquidShaderMaterial]}
        uniforms-uTexture-value={videoTexture}
      />
    </mesh>
  );
};

const LiquidVideo = ({ url }: { url: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize coordinates to 0.0 -> 1.0
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-none z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <VideoPlane url={url} isHovered={isHovered} mousePos={mousePos} />
      </Canvas>
    </div>
  );
};

export default LiquidVideo;