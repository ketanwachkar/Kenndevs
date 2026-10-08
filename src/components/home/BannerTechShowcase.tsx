"use client";

import { useState, useEffect } from "react";
import { 
  Terminal, Activity, Cpu, Shield, Layers, Code, 
  Sparkles, CheckCircle2, Zap, Server, ArrowUpRight, Copy, Check 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippet = `// KennStack Enterprise Architecture Engine v4.2
import { AIStream, CloudCluster, SecurityShield } from '@kennstack/core';

export async function processEnterpriseTask(payload: Payload) {
  const security = await SecurityShield.verifyZeroTrust(payload);
  if (!security.valid) throw new SecurityError("Unauthorized Access");

  const cluster = await CloudCluster.provisionAutoScaling({
    region: 'us-east-1',
    multiRegionBackup: true,
  });

  const aiInsight = await AIStream.generatePrediction({
    data: payload.stream,
    model: 'kennstack-neural-v2',
  });

  return cluster.deploy({ result: aiInsight, latencyMs: 3.4 });
}`;

export default function BannerTechShowcase() {
  const [activeTab, setActiveTab] = useState<"architecture" | "code" | "metrics">("architecture");
  const [copied, setCopied] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(0);
  const [requestCount, setRequestCount] = useState(148520);

  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group aspect-[16/9] md:aspect-[2/1] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-primary/30 bg-card/60 backdrop-blur-xl shadow-2xl shadow-primary/20 transition-all duration-500 hover:border-primary/60 hover:shadow-primary/30">
      {/* Top OS Window Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/80 border-b border-border/50 text-xs text-muted-foreground select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-80 transition-opacity" />
          <span className="ml-2 font-mono text-[11px] text-foreground/80 hidden sm:inline">
            kennstack-ops-center ~ v4.2.0-release
          </span>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center space-x-1 bg-background/50 p-1 rounded-lg border border-border/40">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1 rounded-md font-medium text-xs transition-all flex items-center gap-1.5 ${
              activeTab === "architecture"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1 rounded-md font-medium text-xs transition-all flex items-center gap-1.5 ${
              activeTab === "code"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">IDE Studio</span>
          </button>

          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-3 py-1 rounded-md font-medium text-xs transition-all flex items-center gap-1.5 ${
              activeTab === "metrics"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Activity className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Live Ops</span>
          </button>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono text-emerald-400 font-medium hidden md:inline">
            OPERATIONAL
          </span>
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-4 md:p-6 h-[calc(100%-3rem)] overflow-y-auto flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full"
            >
              {/* Left Column: Company Value Proposition */}
              <div className="md:col-span-1 space-y-3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Enterprise Software Engineering</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-headline">
                  Engineering the Next Era of Innovation
                </h3>
                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                  We build resilient cloud architectures, bespoke web/mobile platforms, and intelligent AI models tailored for scaling enterprises.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-foreground/80">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md">99.99% Availability</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md">Zero-Trust Security</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md">Sub-10ms Latency</span>
                </div>
              </div>

              {/* Right Columns: Interactive Topology Map */}
              <div className="md:col-span-2 bg-background/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span className="font-mono text-primary flex items-center gap-1">
                    <Server className="h-3.5 w-3.5" /> System Microservices Topology
                  </span>
                  <span className="text-[11px] text-muted-foreground">Click nodes to inspect</span>
                </div>

                <div className="grid grid-cols-3 gap-3 my-auto">
                  {[
                    { title: "Frontend Edge", desc: "Next.js 15 & Global CDN", icon: Layers, status: "Active", latency: "1.2ms" },
                    { title: "Cloud Microservices", desc: "Kubernetes & Auto-Scale", icon: Cpu, status: "Healthy", latency: "4.8ms" },
                    { title: "AI & ML Engine", desc: "Neural Inference Pipeline", icon: Zap, status: "Optimized", latency: "8.1ms" },
                  ].map((node, i) => {
                    const Icon = node.icon;
                    const isSelected = activeNode === i;
                    return (
                      <div
                        key={node.title}
                        onClick={() => setActiveNode(i)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-primary/20 border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                            : "bg-card/40 border-white/10 hover:border-primary/40 hover:bg-card/80"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <Icon className={`h-4 w-4 ${isSelected ? "text-primary" : "text-foreground/70"}`} />
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            {node.latency}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold text-foreground">{node.title}</h4>
                        <p className="text-[11px] text-muted-foreground line-clamp-1">{node.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Node Detail Bar */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-foreground/80">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">LIVE METRICS:</span>
                    <span>Total Requests Handled: <strong className="text-foreground">{requestCount.toLocaleString("en-US")}</strong></span>
                  </div>
                  <span className="text-emerald-400 text-[11px]">✦ Real-Time Data Pipeline</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "code" && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  src/services/enterprise-core.ts
                </span>
                <button
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-foreground/80 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Snippet"}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-emerald-300/90 overflow-x-auto my-auto leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>

              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span className="text-primary">TypeScript 5.4 • Clean Architecture</span>
                <span className="text-muted-foreground">100% Test Coverage</span>
              </div>
            </motion.div>
          )}

          {activeTab === "metrics" && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full my-auto"
            >
              {[
                { label: "Client SLA Uptime", val: "99.99%", sub: "Guaranteed Reliability", icon: CheckCircle2, color: "text-emerald-400" },
                { label: "Avg Execution Speed", val: "< 4.2ms", sub: "Global Edge Routing", icon: Zap, color: "text-primary" },
                { label: "Completed Projects", val: "150+", sub: "Web, Mobile, Cloud, AI", icon: Shield, color: "text-cyan-400" },
                { label: "Client Satisfaction", val: "4.95 / 5", sub: "Enterprise Loved", icon: Sparkles, color: "text-amber-400" },
              ].map(stat => (
                <div key={stat.label} className="p-4 rounded-xl bg-background/50 border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-colors">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div className="mt-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-headline tracking-tight">{stat.val}</div>
                    <div className="text-xs font-semibold text-foreground/90 mt-1">{stat.label}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Banner Info Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-foreground">KennStack Digital Solutions</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline">Custom Web & Mobile Apps, Cloud Engineering & Enterprise AI</span>
          </div>
          <a
            href="/services"
            className="text-primary hover:underline flex items-center gap-1 font-medium transition-all"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
