
"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import type { Mesh } from 'three';
import * as THREE from 'three';

const RotatingShape = ({ position, color, shapeType }: { position: [number, number, number], color: string, shapeType: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<Mesh>(null!);
  useFrame((state, delta) => {
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

export default function Hero3DScene() {
  const shapes = useMemo(() => [
    { position: [-2.5, 0.5, -3], color: 'hsl(var(--primary))', shapeType: 'torus' },
    { position: [2.5, -0.5, -2.5], color: 'hsl(var(--accent))', shapeType: 'sphere' },
    { position: [0, 1, -4], color: '#7F00FF', shapeType: 'box' }, // Violet
  ], []);

  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 60 }} 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="hsl(var(--primary-foreground))" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="hsl(var(--accent))" />
      
      <Stars radius={80} depth={60} count={6000} factor={5} saturation={0} fade speed={1.2} />
      
      {shapes.map((shape, i) => (
        <RotatingShape key={i} {...shape} />
      ))}
    </Canvas>
  );
}
