
"use client";

import GlassCard from '@/components/shared/GlassCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  altText?: string; // Added altText prop
  date: string;
  author: string;
}

const BlogPostCard = ({ slug, title, excerpt, imageUrl, altText, date, author }: BlogPostCardProps) => {
  return (
    <GlassCard 
      className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-primary/40 group" // Added group class for image hover effect
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={altText || title} // Use provided altText or fall back to title
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 text-xs text-foreground/70 mb-2">
          <div className="flex items-center space-x-1">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <UserCircle className="h-3.5 w-3.5" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold font-headline text-foreground mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        <Button variant="link" asChild className="text-primary hover:text-accent p-0 self-start mt-auto">
          <Link href={`/blog/${slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </GlassCard>
  );
};

export default BlogPostCard;
