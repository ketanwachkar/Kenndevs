
"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import type { Mesh } from 'three';
// Note: THREE can often be imported directly if not causing issues, but R3F/Drei specific imports are delayed.
// import * as THREE from 'three'; 

interface R3FModules {
  Canvas: React.ComponentType<any>;
  useFrame: (callback: (state: any, delta: number) => void, renderPriority?: number) => void;
  Stars: React.ComponentType<any>;
}

// Define RotatingShape that uses the dynamically loaded useFrame hook
const RotatingShape = ({
  position,
  color,
  shapeType,
  useFrameHook,
}: {
  position: [number, number, number];
  color: string;
  shapeType: 'box' | 'sphere' | 'torus';
  useFrameHook: R3FModules['useFrame'];
}) => {
  const meshRef = useRef<Mesh>(null!);

  useFrameHook((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  // JSX geometry tags like <boxGeometry /> are intrinsic elements known to R3F's reconciler.
  // They should work correctly once the Canvas from the loaded R3F is rendering.
  const geometry = useMemo(() => {
    switch (shapeType) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.7, 32, 16]} />;
      case 'torus':
        // Using torusKnotGeometry, ensure it's available or use a simpler one if not.
        // For this example, assuming R3F reconciler handles these standard geometries.
        return <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [shapeType]);

  return (
    <mesh position={position} ref={meshRef}>
      {geometry}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.7}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
};

export default function Hero3DScene() {
  const [r3f, setR3f] = useState<R3FModules | null>(null);

  useEffect(() => {
    // Dynamically import R3F and Drei
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei')
    ]).then(([fiber, drei]) => {
      setR3f({
        Canvas: fiber.Canvas,
        useFrame: fiber.useFrame,
        Stars: drei.Stars,
      });
    }).catch(err => console.error("Failed to load R3F modules for Hero3DScene:", err));
  }, []);

  if (!r3f) {
    return (
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: 'transparent' 
        }}
        aria-label="Loading 3D graphics"
      >
        {/* You can add a more sophisticated loader here if desired */}
        {/* <p>Loading 3D...</p> */}
      </div>
    );
  }

  const { Canvas: R3FCanvas, useFrame: r3fUseFrame, Stars: R3FStars } = r3f;

  const shapesData = [
    { position: [-2.5, 0.5, -3] as [number,number,number], color: 'hsl(var(--primary))', shapeType: 'torus' as const },
    { position: [2.5, -0.5, -2.5] as [number,number,number], color: 'hsl(var(--accent))', shapeType: 'sphere' as const },
    { position: [0, 1, -4] as [number,number,number], color: '#7F00FF', shapeType: 'box' as const },
  ];

  return (
    <R3FCanvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="hsl(var(--primary-foreground))" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="hsl(var(--accent))" />
      
      <Suspense fallback={null}>
        <R3FStars radius={80} depth={60} count={6000} factor={5} saturation={0} fade speed={1.2} />
        {shapesData.map((shape, i) => (
          <RotatingShape key={i} {...shape} useFrameHook={r3fUseFrame} />
        ))}
      </Suspense>
    </R3FCanvas>
  );
}
