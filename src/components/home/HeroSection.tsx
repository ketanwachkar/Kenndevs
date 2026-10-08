"use client";

import { useState, useEffect } from 'react';
import AnimatedButton from '@/components/shared/AnimatedButton';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import BannerTechShowcase from '@/components/home/BannerTechShowcase';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = ["Faster.", "Smarter.", "With AI.", "At Scale."];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center py-16">
      <CyberBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Glowing Theme Badge */}
        <FadeIn yOffset={0} duration={0.8}>
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 ring-1 ring-inset ring-primary/30 shadow-lg shadow-primary/20 animate-border-glow">
            <Zap className="h-4 w-4 animate-pulse text-primary" />
            <span>Powering Digital Transformation</span>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </div>
        </FadeIn>

        {/* Dynamic Theme-Aligned Headline */}
        <FadeIn delay={0.2} duration={0.8}>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl font-headline flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
            <span>Build Better,</span>
            
            <span className="inline-block relative min-w-[220px] sm:min-w-[320px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-accent drop-shadow-[0_0_25px_rgba(187,134,252,0.5)]"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.4} duration={0.8}>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
            KennStack translates complex challenges into elegant software solutions. We partner with businesses in <strong className="text-primary font-semibold">Indore, Pune</strong> & globally to innovate, scale, and lead in the digital era.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.6} duration={0.8} className="mt-10 flex items-center justify-center gap-x-6">
          <AnimatedButton href="/services" size="lg" icon={ArrowRight}>
            Explore Services
          </AnimatedButton>
          <Button variant="outline" size="lg" asChild className="text-foreground/80 hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-colors">
            <a href="/contact">Contact Us</a>
          </Button>
        </FadeIn>

        {/* Banner Interactive Operations Hub */}
        <FadeIn delay={0.8} duration={1} className="mt-12 sm:mt-16">
          <BannerTechShowcase />
        </FadeIn>
      </div>
    </div>
  );
};

export default HeroSection;
