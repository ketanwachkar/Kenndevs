
"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import type { Mesh } from 'three';

interface R3FModules {
  Canvas: React.ComponentType<any>;
  useFrame: (callback: (state: any, delta: number) => void, renderPriority?: number) => void;
  Stars: React.ComponentType<any>;
  Box: React.ComponentType<any>; // For fallback
  MeshBasicMaterial: React.ComponentType<any>; // For fallback
}

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

  const geometry = useMemo(() => {
    switch (shapeType) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.7, 32, 16]} />;
      case 'torus':
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

// Simple fallback component for Suspense
const SuspenseFallbackMesh = ({ R3FModules }: { R3FModules: R3FModules | null }) => {
  if (!R3FModules || !R3FModules.Box || !R3FModules.MeshBasicMaterial) return null;
  // This fallback will only render if R3FModules are loaded, but Stars/RotatingShape are not.
  // It's a bit of a placeholder; ideally, Suspense works on its own.
  // For a truly isolated fallback, it might need to be simpler or not rely on R3FModules.
  // However, the primary goal here is to see *something*.
  return (
    <R3FModules.Box args={[1, 1, 1]}>
      <R3FModules.MeshBasicMaterial color="blue" wireframe />
    </R3FModules.Box>
  );
};


export default function Hero3DScene() {
  const [r3f, setR3f] = useState<R3FModules | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei')
    ]).then(([fiber, drei]) => {
      setR3f({
        Canvas: fiber.Canvas,
        useFrame: fiber.useFrame,
        Stars: drei.Stars,
        Box: fiber.Box, // Assuming Box is exported from fiber, might be from drei or geometry tag
        MeshBasicMaterial: fiber.MeshBasicMaterial, // Assuming this is how you'd get it
      });
    }).catch(err => {
      console.error("Failed to load R3F modules for Hero3DScene:", err);
      setLoadError("Failed to load 3D modules. " + (err.message || ''));
    });
  }, []);

  if (loadError) {
    return (
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: 'rgba(255, 0, 0, 0.2)',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          fontSize: '12px'
        }}
        aria-label="Error loading 3D graphics"
      >
        <p>Error loading 3D scene: {loadError}</p>
      </div>
    );
  }
  
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
          background: 'rgba(255, 165, 0, 0.1)', // Orange tint for loading R3F modules
          color: 'white'
        }}
        aria-label="Loading 3D graphics"
      >
        <p>Loading 3D scene modules...</p>
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
      
      <Suspense fallback={<mesh><boxGeometry args={[0.5,0.5,0.5]}/><meshBasicMaterial color="red" wireframe /></mesh>}>
        <R3FStars radius={80} depth={60} count={6000} factor={5} saturation={0} fade speed={1.2} />
        {shapesData.map((shape, i) => (
          <RotatingShape key={i} {...shape} useFrameHook={r3fUseFrame} />
        ))}
      </Suspense>
    </R3FCanvas>
  );
}

