"use client";

import { useEffect, useState } from "react";
import { 
  TrendingUp, ShoppingCart, Heart, ShieldCheck, 
  Server, Lock, Cpu, Zap 
} from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioVisualProps {
  type: "ecommerce" | "healthcare" | "cloud" | "cybersecurity";
}

export default function PortfolioVisual({ type }: PortfolioVisualProps) {
  const [salesVal, setSalesVal] = useState(128450);
  const [pulse, setPulse] = useState(72);
  const [packetPos, setPacketPos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSalesVal(prev => prev + Math.floor(Math.random() * 80) + 20);
      setPulse(prev => 70 + Math.floor(Math.random() * 6));
      setPacketPos(prev => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  if (type === "ecommerce") {
    return (
      <div className="relative w-full h-full min-h-[220px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
        {/* Ambient Grid Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        {/* Dashboard Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShoppingCart className="h-4 w-4" />
            </div>
            <span className="text-xs font-mono font-semibold text-foreground">Global E-Commerce OS</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <TrendingUp className="h-3 w-3" /> +40.2% Revenue
          </span>
        </div>

        {/* Live Sales Chart Bar Visual */}
        <div className="relative z-10 my-3">
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-xs text-muted-foreground">Gross Sales Volume</span>
            <span className="text-lg font-bold font-mono text-foreground">${salesVal.toLocaleString("en-US")}</span>
          </div>

          {/* Animated Growth Bars */}
          <div className="grid grid-cols-8 gap-1.5 items-end h-16 pt-2">
            {[40, 55, 35, 70, 65, 85, 75, 95].map((val, idx) => (
              <div key={idx} className="relative w-full bg-white/5 rounded-t overflow-hidden group/bar">
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className={`w-full ${idx === 7 ? "bg-primary shadow-lg shadow-primary/50" : "bg-primary/50 group-hover/bar:bg-primary"}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Floating Live Order Toast */}
        <div className="relative z-10 flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-foreground/90 font-medium">New Order #9482 (Checkout Completed)</span>
          </div>
          <span className="font-mono text-primary font-bold">$249.00</span>
        </div>
      </div>
    );
  }

  if (type === "healthcare") {
    return (
      <div className="relative w-full h-full min-h-[220px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
              <Heart className="h-4 w-4 animate-pulse" />
            </div>
            <span className="text-xs font-mono font-semibold text-foreground">AI Health Diagnostics</span>
          </div>

          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
            Real-Time ECG Stream
          </span>
        </div>

        {/* Heart Rate Animated Pulse Wave SVG */}
        <div className="relative z-10 my-2 h-20 flex items-center justify-center bg-card/40 rounded-xl border border-white/5 p-2">
          <svg className="w-full h-full text-red-500 overflow-visible" viewBox="0 0 300 60">
            <path
              d="M 0 30 L 40 30 L 50 10 L 60 50 L 70 20 L 80 40 L 90 30 L 150 30 L 160 5 L 170 55 L 180 15 L 190 45 L 200 30 L 300 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]"
            />
          </svg>
        </div>

        {/* Biometric Status Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-muted-foreground">Pulse Rate</span>
            <span className="font-mono font-bold text-red-400">{pulse} BPM</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-muted-foreground">AI Diagnostic</span>
            <span className="font-mono font-bold text-emerald-400">99.4% Normal</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className="relative w-full h-full min-h-[220px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              <Server className="h-4 w-4" />
            </div>
            <span className="text-xs font-mono font-semibold text-foreground">Multi-Cloud Mesh</span>
          </div>

          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Latency: 2.4ms
          </span>
        </div>

        {/* Migrating Topology Mesh */}
        <div className="relative z-10 my-auto py-3 flex items-center justify-around">
          <div className="p-3 rounded-xl bg-card border border-white/10 text-center space-y-1">
            <Server className="h-5 w-5 text-muted-foreground mx-auto" />
            <span className="text-[10px] font-mono block text-muted-foreground">Legacy DB</span>
          </div>

          {/* Animated Connecting Arrow */}
          <div className="relative flex-1 mx-3 h-0.5 bg-gradient-to-r from-muted-foreground/30 via-primary to-emerald-400">
            <div 
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary animate-ping"
              style={{ left: `${packetPos}%` }}
            />
          </div>

          <div className="p-3 rounded-xl bg-primary/20 border border-primary/40 text-center space-y-1 shadow-lg shadow-primary/20">
            <Cpu className="h-5 w-5 text-primary mx-auto" />
            <span className="text-[10px] font-mono block text-primary font-bold">K8s AWS Cluster</span>
          </div>
        </div>

        {/* Security Footer */}
        <div className="relative z-10 flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]">
          <span className="text-muted-foreground flex items-center gap-1">
            <Lock className="h-3 w-3 text-emerald-400" /> SOC2 Type II Certified
          </span>
          <span className="font-mono text-emerald-400 font-bold">100% Migrated</span>
        </div>
      </div>
    );
  }

  // Fallback / Cybersecurity visual
  return (
    <div className="relative w-full h-full min-h-[220px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="text-xs font-mono font-semibold text-foreground">Zero-Trust Shield</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
          Active Defense
        </span>
      </div>

      <div className="relative z-10 my-auto text-center space-y-2 py-4">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-xl shadow-cyan-500/20">
          <Zap className="h-8 w-8 animate-pulse" />
        </div>
        <div className="text-sm font-bold text-foreground">0 Vulnerabilities Detected</div>
        <div className="text-[11px] text-muted-foreground font-mono">1.2M Attack Probes Neutralized</div>
      </div>
    </div>
  );
}
