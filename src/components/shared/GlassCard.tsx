"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // For other motion props or HTML attributes
}

const GlassCard = ({ children, className, ...rest }: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "glassmorphic rounded-xl p-6 shadow-lg", // Uses glassmorphic utility class from globals.css
        // Additional styling can be added here if needed
        // e.g. bg-[hsla(var(--glass-base-hsl),var(--glass-opacity))] backdrop-blur-md border border-[hsla(var(--glass-border-hsl),var(--glass-border-opacity))]
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
