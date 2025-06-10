"use client";

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<any> {
  children: ReactNode;
  as?: ElementType;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
}

const FadeIn = ({
  children,
  as: Component = 'div',
  duration = 0.5,
  delay = 0,
  yOffset = 20,
  className,
  ...props
}: FadeInProps) => {
  return (
    <motion.div
      as={Component}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
