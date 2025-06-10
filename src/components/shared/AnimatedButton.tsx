
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton = ({ 
  children, 
  href, 
  className, 
  icon: Icon, 
  iconPosition = 'right', 
  variant = "default", 
  size = "default", 
  ...props 
}: AnimatedButtonProps) => {
  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: "0px 0px 15px hsl(var(--primary))" },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  const buttonContent = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  const buttonClasses = cn(
    "relative overflow-hidden group rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80",
    "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground", 
    // ShadCN button size variants
    size === 'sm' && 'px-3 py-1.5 text-xs',
    size === 'lg' && 'px-8 py-3 text-base',
    size === 'default' && 'px-6 py-2.5', // Default px-4 py-2 is a bit small for prominent CTAs
    className
  );
  
  const baseButtonClassName = buttonClasses.split(' ').filter(c => !c.startsWith('bg-') && !c.startsWith('text-') && !c.startsWith('hover:bg-') && !c.startsWith('hover:text-')).join(' ');


  if (href) {
    // passHref is needed if motion.a renders an <a> tag.
    // legacyBehavior is removed.
    return (
      <Link href={href} passHref {...(props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { legacyBehavior?: boolean })}>
        <motion.a
          {...motionProps}
          className={cn(baseButtonClassName, "inline-flex items-center justify-center", className)}
          // Filter out button-specific props not valid for <a>
          // href is handled by Link, type/disabled are not for <a>
          // onClick can be passed if intended for the anchor
          onClick={props.onClick}
          target={props.target}
          rel={props.rel}
        >
          {buttonContent}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={cn(baseButtonClassName, className)}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;
