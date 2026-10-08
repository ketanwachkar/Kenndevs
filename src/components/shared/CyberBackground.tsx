"use client";

import { useEffect, useState } from "react";

export default function CyberBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden select-none">
      {/* Dynamic Cursor Light Spotlight */}
      {isMounted && (
        <div
          className="absolute rounded-full transition-transform duration-100 ease-out opacity-25 dark:opacity-30 blur-3xl pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "450px",
            height: "450px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)",
          }}
        />
      )}

      {/* Cybernetic Grid Lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* Moving Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-[140px] animate-pulse [animation-delay:2s]" />

      {/* Animated Laser Scanning Line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scanline" />
    </div>
  );
}
