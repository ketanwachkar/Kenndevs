"use client";

import { useState, useRef } from "react";
import GlassCard from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, type LucideIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  learnMoreLink?: string;
  tags?: string[];
  metricsBadge?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  learnMoreLink = "#",
  tags = ["Enterprise", "Scalable", "High Performance"],
  metricsBadge = "Top Rated",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (!Icon) {
    return (
      <GlassCard className="h-full flex flex-col items-center justify-center text-destructive">
        Error: Icon missing
      </GlassCard>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full rounded-2xl p-[1px] transition-all duration-500 group overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Border & Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(187, 134, 252, 0.4), transparent 80%)`,
        }}
      />

      {/* Main Inner Card */}
      <div className="relative h-full rounded-2xl bg-card/70 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/90 group-hover:shadow-xl group-hover:shadow-primary/10">
        
        {/* Top Header Bar */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-xl ring-1 ring-inset ring-primary/30 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            
            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80 group-hover:border-primary/30 group-hover:text-primary transition-colors flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-primary" />
              {metricsBadge}
            </span>
          </div>

          <h3 className="text-xl font-bold font-headline text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills & CTA */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40 group-hover:border-primary/20 group-hover:text-foreground transition-all"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <Button variant="link" asChild className="text-primary hover:text-accent p-0 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              <Link href={learnMoreLink}>
                Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <span className="text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Ready to deploy →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
