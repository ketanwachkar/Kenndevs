
"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from 'react';
import type { Mesh } from 'three';

export type Service3DIconType = 
  | 'Code' | 'Smartphone' | 'Cloud' | 'Brain' 
  | 'PenTool' | 'Database' | 'ShieldCheck' | 'BarChartBig';

interface Service3DIconProps {
  iconType: Service3DIconType;
  size?: number;
  className?: string;
}

interface R3FServiceModules {
  Canvas: React.ComponentType<any>;
  useFrame: (callback: (state: any, delta: number) => void, renderPriority?: number) => void;
}

const AnimatedShape = ({
  iconType,
  size = 1,
  useFrameHook
}: {
  iconType: Service3DIconType;
  size: number;
  useFrameHook: R3FServiceModules['useFrame'];
}) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrameHook((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  const { geometry, color } = useMemo(() => {
    const s = size * 0.6; 
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
        currentColor = 'hsl(200, 70%, 75%)'; 
        break;
      case 'Brain': 
        currentGeometry = <icosahedronGeometry args={[s * 0.7, 1]} />; 
        currentColor = 'hsl(330, 80%, 70%)'; 
        break;
      case 'PenTool': 
        currentGeometry = <coneGeometry args={[s * 0.4, s * 1.2, 16]} />; 
        currentColor = 'hsl(0, 0%, 70%)'; 
        break;
      case 'Database': 
        currentGeometry = <cylinderGeometry args={[s * 0.5, s * 0.5, s * 0.8, 24]} />; 
        currentColor = 'hsl(30, 40%, 60%)'; 
        break;
      case 'ShieldCheck': 
        currentGeometry = <octahedronGeometry args={[s * 0.7]} />; 
        currentColor = 'hsl(120, 60%, 60%)'; 
        break;
      case 'BarChartBig': 
        currentGeometry = <boxGeometry args={[s * 0.3, s * 1.3, s * 0.3]} />; 
        currentColor = 'hsl(39, 100%, 65%)'; 
        break;
      default: 
        currentGeometry = <boxGeometry args={[s, s, s]} />;
    }
    return { geometry: currentGeometry, color: currentColor };
  }, [iconType, size]);


  return (
    <mesh ref={meshRef} scale={1.8}>
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
  const [r3f, setR3f] = useState<R3FServiceModules | null>(null);

  useEffect(() => {
    import('@react-three/fiber').then((fiber) => {
      setR3f({
        Canvas: fiber.Canvas,
        useFrame: fiber.useFrame,
      });
    }).catch(err => console.error("Failed to load R3F for Service3DIcon:", err));
  }, []);

  if (!r3f) {
    return (
      <div 
        className={className} 
        style={{ 
          width: '48px', 
          height: '48px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        aria-label="Loading 3D icon"
      >
        {/* <p className="text-xs">...</p> */}
      </div>
    );
  }

  const { Canvas: R3FCanvas, useFrame: r3fUseFrame } = r3f;

  return (
    <div className={className} style={{ width: '48px', height: '48px' }}>
      <R3FCanvas camera={{ position: [0, 0, 2.5], fov: 50 }} >
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={0.8}/>
        <Suspense fallback={null}>
          <AnimatedShape iconType={iconType} size={size} useFrameHook={r3fUseFrame} />
        </Suspense>
      </R3FCanvas>
    </div>
  );
}
