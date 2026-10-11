"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function RouteTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loader pulse on path change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none">
      {/* Top Neon Progress Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-cyan-400 to-purple-500 animate-pulse shadow-[0_0_15px_rgba(187,134,252,0.8)]" />
      
      {/* Floating Eye-Catching Navigation Indicator Badge */}
      <div className="absolute top-3 right-6 bg-card/90 border border-primary/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl flex items-center space-x-2 text-xs font-mono text-primary animate-bounce">
        <Sparkles className="h-3.5 w-3.5 animate-spin text-primary" />
        <span>Loading Experience...</span>
      </div>
    </div>
  );
}
