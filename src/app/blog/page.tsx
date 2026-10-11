"use client";

import SectionWrapper from '@/components/shared/SectionWrapper';
import BlogPostCard from '@/components/blog/BlogPostCard';
import FadeIn from '@/components/shared/FadeIn';
import CyberBackground from '@/components/shared/CyberBackground';
import { BookOpen, Mail, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const posts = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends & AI Agents in 2026",
    excerpt: "Discover the emerging technologies and agentic AI tools shaping modern web engineering, from Next.js 15 Server Actions to autonomous code assistants.",
    date: "July 15, 2026",
    author: "Jane Doe, Lead Developer",
  },
  {
    slug: "mastering-ui-ux-design",
    title: "Mastering UI/UX: Principles for High-Converting Digital Products",
    excerpt: "A deep dive into micro-interactions, dark glassmorphism, and performance-first UI design patterns that elevate user engagement.",
    date: "July 1, 2026",
    author: "John Smith, UI/UX Lead",
  },
  {
    slug: "demystifying-cloud-native",
    title: "Demystifying Cloud-Native & Kubernetes Auto-Scaling",
    excerpt: "Understand what zero-trust cloud-native architecture means for enterprise resilience, cost optimization, and sub-10ms global routing.",
    date: "June 20, 2026",
    author: "Alice Brown, Cloud Architect",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="relative">
      <CyberBackground />

      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 ring-1 ring-inset ring-primary/30">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Engineering Insights & Tech Radar</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              KennStack <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
              Deep dives, architectural benchmarks, and actionable insights from our senior engineering team on full-stack software, cloud resilience, and AI.
            </p>
          </FadeIn>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <BlogPostCard {...post} />
            </FadeIn>
          ))}
        </div>

        {/* Dynamic Newsletter Box to Fill Blank Space */}
        <FadeIn className="mt-20">
          <div className="relative rounded-3xl overflow-hidden border border-primary/40 bg-card/70 backdrop-blur-xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-8 text-primary/10 pointer-events-none">
              <Sparkles className="w-40 h-40" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                  <Mail className="h-3.5 w-3.5" /> Weekly Engineering Newsletter
                </div>
                <h3 className="text-2xl font-bold text-foreground font-headline">
                  Stay Ahead of Tech Trends
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Join 15,000+ developers receiving our bi-weekly breakdown of cloud architecture blueprints, Next.js performance tips, and AI agent frameworks.
                </p>
              </div>

              <div className="md:col-span-2">
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      className="w-full px-4 py-3 rounded-xl bg-background/80 border border-white/15 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold flex items-center justify-center gap-2">
                    {subscribed ? "Subscribed Successfully! ✨" : (
                      <>
                        <span>Subscribe Free</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-[11px] font-mono text-muted-foreground text-center">
                    No spam ever. Unsubscribe with 1-click.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  );
}
