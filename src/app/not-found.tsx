"use client";

import Link from "next/link";
import CyberBackground from "@/components/shared/CyberBackground";
import AnimatedButton from "@/components/shared/AnimatedButton";
import { ArrowRight, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative isolate min-h-[70vh] flex items-center justify-center py-20">
      <CyberBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 ring-1 ring-inset ring-primary/30">
          <Sparkles className="h-4 w-4" />
          <span>Coming Soon</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-headline text-foreground">
          This page is coming soon
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/75">
          The page you opened is not live yet. We are building it now, so check back shortly.
        </p>
        <div className="mt-8 flex justify-center">
          <AnimatedButton href="/" icon={ArrowRight}>
            Back to Home
          </AnimatedButton>
        </div>
        <p className="mt-6 text-sm text-foreground/50">
          Or visit the{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
