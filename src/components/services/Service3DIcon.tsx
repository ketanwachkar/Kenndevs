
"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import type { Mesh } from 'three';

export type Service3DIconType = 
  | 'Code' | 'Smartphone' | 'Cloud' | 'Brain' 
  | 'PenTool' | 'Database' | 'ShieldCheck' | 'BarChartBig';

interface Service3DIconProps {
  iconType: Service3DIconType;
  size?: number;
  className?: string;
}

const AnimatedShape = ({ iconType, size = 1 }: { iconType: Service3DIconType, size: number }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  const { geometry, color } = useMemo(() => {
    const s = size * 0.6; // Adjusted scale for better fit in card
    let currentGeometry;
    let currentColor = 'hsl(var(--primary))';

    switch (iconType) {
      case 'Code': 
        currentGeometry = <boxGeometry args={[s * 1.5, s, s * 0.4]} />; 
        currentColor = 'hsl(var(--primary))';
        break;
      case 'Smartphone': 
        currentGeometry = <boxGeometry args={[s * 0.6, s * 1.2, s * 0.15]} />; 
        currentColor = 'hsl(var(--accent))';
        break;
      case 'Cloud': 
        currentGeometry = <sphereGeometry args={[s * 0.8, 16, 12]} />; 
        currentColor = 'hsl(200, 70%, 75%)'; // Light Blue
        break;
      case 'Brain': 
        currentGeometry = <icosahedronGeometry args={[s * 0.7, 1]} />; 
        currentColor = 'hsl(330, 80%, 70%)'; // Pinkish
        break;
      case 'PenTool': 
        currentGeometry = <coneGeometry args={[s * 0.4, s * 1.2, 16]} />; 
        currentColor = 'hsl(0, 0%, 70%)'; // Gray
        break;
      case 'Database': 
        currentGeometry = <cylinderGeometry args={[s * 0.5, s * 0.5, s * 0.8, 24]} />; 
        currentColor = 'hsl(30, 40%, 60%)'; // Tan
        break;
      case 'ShieldCheck': 
        currentGeometry = <octahedronGeometry args={[s * 0.7]} />; 
        currentColor = 'hsl(120, 60%, 60%)'; // Greenish
        break;
      case 'BarChartBig': 
        currentGeometry = <boxGeometry args={[s * 0.3, s * 1.3, s * 0.3]} />; 
        currentColor = 'hsl(39, 100%, 65%)'; // Orange
        break;
      default: 
        currentGeometry = <boxGeometry args={[s, s, s]} />;
    }
    return { geometry: currentGeometry, color: currentColor };
  }, [iconType, size]);


  return (
    <mesh ref={meshRef} scale={1.8}> {/* Scale up the mesh for better visibility in small canvas */}
      {geometry}
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.4} 
        roughness={0.3} 
        metalness={0.5} 
      />
    </mesh>
  );
};

export default function Service3DIcon({ iconType, size = 1, className }: Service3DIconProps) {
  return (
    <div className={className} style={{ width: '48px', height: '48px' }}> {/* Container div for sizing */}
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} >
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={0.8}/>
        <Suspense fallback={null}>
          <AnimatedShape iconType={iconType} size={size} />
        </Suspense>
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
