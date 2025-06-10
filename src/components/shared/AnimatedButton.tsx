
"use client";

import Link, { type LinkProps as NextLinkProps } from 'next/link';
import { motion, type MotionProps } from 'framer-motion';
import { ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

// Props for the Link version of AnimatedButton
interface AnimatedLinkVariantProps 
  extends Omit<ShadcnButtonProps, 'asChild' | 'type' | 'children' | 'variant' | 'size'>, // Omit Shadcn specifics handled by className
          Omit<NextLinkProps, 'href' | 'children' | 'legacyBehavior' | 'passHref' | 'className'>, // Omit NextLink specifics we handle
          Partial<Pick<MotionProps, 'whileHover' | 'whileTap' | 'transition'>> { // Make motion props optional here
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: ShadcnButtonProps['variant']; // explicitly include for styling
  size?: ShadcnButtonProps['size']; // explicitly include for styling
}

// Props for the Button version of AnimatedButton
interface AnimatedButtonVariantProps 
  extends ShadcnButtonProps, 
          Partial<Pick<MotionProps, 'whileHover' | 'whileTap' | 'transition'>> { // Make motion props optional here
  href?: undefined;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

type AnimatedButtonProps = AnimatedLinkVariantProps | AnimatedButtonVariantProps;

const MotionNextLink = motion(Link);

const AnimatedButton = ({
  children,
  href,
  className,
  icon: Icon,
  iconPosition = 'right',
  variant = "default", // Default ShadCN variant for styling
  size = "default",    // Default ShadCN size for styling
  ...rest // Remaining props which could be for motion, Link, or HTML attributes
}: AnimatedButtonProps) => {

  const defaultMotionProps = {
    whileHover: { scale: 1.05, boxShadow: "0px 0px 15px hsl(var(--primary))" },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  // Extract motion props from rest, using defaults if not provided
  const {
    whileHover = defaultMotionProps.whileHover,
    whileTap = defaultMotionProps.whileTap,
    transition = defaultMotionProps.transition,
    ...otherProps // Props not related to motion's direct animation config
  } = rest as MotionProps & Record<string, any>;


  const finalMotionProps = { whileHover, whileTap, transition };

  const buttonContent = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  const calculatedButtonClasses = cn(
    "relative overflow-hidden group rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80",
    "inline-flex items-center justify-center",
    "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground", // Specific AnimatedButton styling
    size === 'sm' && 'px-3 py-1.5 text-xs',
    size === 'lg' && 'px-8 py-3 text-base',
    size === 'default' && 'px-6 py-2.5',
    className
  );

  if (href) {
    // otherProps will contain valid LinkProps (like scroll, target, rel)
    // and valid HTMLAnchorAttributes (like onClick, id, aria-*)
    // It should not contain ButtonHTMLAttributes like 'type' due to AnimatedLinkVariantProps definition.
    const linkSpecificProps = otherProps as Omit<NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

    return (
      <MotionNextLink
        href={href}
        className={calculatedButtonClasses}
        {...finalMotionProps} // Motion animation props
        {...linkSpecificProps} // Spread valid link/anchor attributes
      >
        {buttonContent}
      </MotionNextLink>
    );
  }

  // Regular button: otherProps will be ButtonHTMLAttributes
  const { type = "button", ...buttonSpecificProps } = otherProps as ShadcnButtonProps;

  return (
    <motion.button
      type={type}
      className={calculatedButtonClasses}
      {...finalMotionProps} // Motion animation props
      {...buttonSpecificProps} // Spread valid button attributes
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;
