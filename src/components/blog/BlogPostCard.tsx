"use client";

import GlassCard from '@/components/shared/GlassCard';
import BlogVisualHeader from '@/components/blog/BlogVisualHeader';
import Link from 'next/link';
import { ArrowRight, CalendarDays, UserCircle, Sparkles } from 'lucide-react';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  altText?: string;
  date: string;
  author: string;
}

const BlogPostCard = ({ slug, title, excerpt, date, author }: BlogPostCardProps) => {
  return (
    <GlassCard 
      className="flex flex-col overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 group rounded-2xl border border-white/10"
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <BlogVisualHeader slug={slug} />
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center space-x-4 text-xs text-foreground/70 mb-3 font-mono">
            <div className="flex items-center space-x-1">
              <CalendarDays className="h-3.5 w-3.5 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <UserCircle className="h-3.5 w-3.5 text-primary" />
              <span>{author}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold font-headline text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
            <Link href={`/blog/${slug}`}>
              {title}
            </Link>
          </h3>

          <p className="text-foreground/75 text-sm mb-6 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </div>

        {/* Upgraded Eye-Catching Read Article Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-primary/10 hover:bg-primary border border-primary/40 text-primary hover:text-primary-foreground font-semibold text-xs transition-all duration-300 shadow-md shadow-primary/10 group/btn"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary group-hover/btn:text-primary-foreground" />
              Read Full Article
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
};

export default BlogPostCard;
