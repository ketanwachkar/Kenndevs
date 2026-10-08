"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  size?: 'default' | 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const AnimatedButton = ({
  children,
  href,
  className,
  icon: Icon,
  iconPosition = 'right',
  size = 'default',
  type = 'button',
  disabled = false,
  onClick,
}: AnimatedButtonProps) => {
  const calculatedButtonClasses = cn(
    "relative overflow-hidden group rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80 cursor-pointer select-none",
    "inline-flex items-center justify-center border border-primary/40",
    "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground shadow-lg shadow-primary/20",
    size === 'sm' && 'px-3 py-1.5 text-xs',
    size === 'lg' && 'px-8 py-3 text-base font-semibold',
    size === 'default' && 'px-6 py-2.5',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  const buttonContent = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="inline-block"
      >
        <Link href={href} className={calculatedButtonClasses}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={calculatedButtonClasses}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;
