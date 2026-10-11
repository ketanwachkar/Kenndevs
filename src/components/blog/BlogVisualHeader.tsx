"use client";

import { Code2, Layout, Cloud, Sparkles, Terminal, ArrowRight, Layers } from "lucide-react";

interface BlogVisualHeaderProps {
  slug: string;
}

export default function BlogVisualHeader({ slug }: BlogVisualHeaderProps) {
  if (slug === "future-of-web-development") {
    return (
      <div className="relative w-full h-full min-h-[200px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
        {/* Ambient Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono font-semibold text-foreground">Web Engineering 2026</span>
          </div>
          <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
            Tech Trends
          </span>
        </div>

        {/* IDE Snippet Box */}
        <div className="relative z-10 my-auto p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-emerald-300">
          <div className="text-muted-foreground text-[10px] mb-1 flex items-center gap-1">
            <Terminal className="h-3 w-3 text-primary" /> // React 19 Server Actions & AI Integration
          </div>
          <p className="text-primary font-bold">use server;</p>
          <p className="text-foreground/80">const aiAgent = await StreamAI.init();</p>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
          <span>#NextJS15 #React19 #AI</span>
          <span className="text-emerald-400">5 Min Read ✦</span>
        </div>
      </div>
    );
  }

  if (slug === "mastering-ui-ux-design") {
    return (
      <div className="relative w-full h-full min-h-[200px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layout className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-foreground">Design Systems</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            UI/UX Guide
          </span>
        </div>

        {/* Design Wireframe Widget Preview */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-lg bg-white/5 border border-cyan-500/30 text-center space-y-1">
            <div className="w-full h-2 rounded bg-cyan-400/40" />
            <div className="w-2/3 h-1.5 rounded bg-white/20 mx-auto" />
          </div>
          <div className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-center space-y-1 shadow-lg shadow-primary/20">
            <div className="w-full h-2 rounded bg-primary" />
            <div className="w-3/4 h-1.5 rounded bg-white/40 mx-auto" />
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center space-y-1">
            <div className="w-full h-2 rounded bg-white/20" />
            <div className="w-1/2 h-1.5 rounded bg-white/20 mx-auto" />
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
          <span>#Glassmorphism #MicroAnimations</span>
          <span className="text-cyan-400">7 Min Read ✦</span>
        </div>
      </div>
    );
  }

  // Cloud Native fallback
  return (
    <div className="relative w-full h-full min-h-[200px] bg-slate-950 p-4 font-sans select-none overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:border-primary/40 transition-colors">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Cloud className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-mono font-semibold text-foreground">Cloud Architecture</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          DevOps
        </span>
      </div>

      <div className="relative z-10 my-auto p-3 rounded-lg bg-white/5 border border-emerald-500/20 text-[11px] font-mono space-y-1.5">
        <div className="flex items-center justify-between text-emerald-400">
          <span>Kubernetes Pod Auto-Scaler</span>
          <span>SLA: 99.99%</span>
        </div>
        <div className="w-full h-1.5 rounded bg-white/10 overflow-hidden">
          <div className="w-3/4 h-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>#Kubernetes #AWS #Serverless</span>
        <span className="text-emerald-400">6 Min Read ✦</span>
      </div>
    </div>
  );
}
