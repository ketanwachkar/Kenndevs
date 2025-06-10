
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { type ButtonProps } from '@/components/ui/button';
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
  variant = "default", // Not directly used for AnimatedButton's gradient, but part of ButtonProps
  size = "default",
  ...props // other props from ButtonProps like onClick, type, disabled, id, aria-*
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

  const calculatedButtonClasses = cn(
    "relative overflow-hidden group rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80",
    "inline-flex items-center justify-center", // Ensures icon and text are aligned
    "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground", // Specific AnimatedButton styling
    size === 'sm' && 'px-3 py-1.5 text-xs',
    size === 'lg' && 'px-8 py-3 text-base',
    size === 'default' && 'px-6 py-2.5',
    className
  );

  if (href) {
    const { type, disabled, ...anchorProps } = props; // Remove props not valid for <a>

    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          {...motionProps}
          className={calculatedButtonClasses}
          // Spread remaining props that are valid for <a>, like onClick, id, aria-*, target, rel
          {...(anchorProps as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>)}
        >
          {buttonContent}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={calculatedButtonClasses}
      {...props} // Spread all ButtonProps (onClick, type, disabled, etc.)
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;
