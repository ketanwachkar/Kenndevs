
"use client";

import { useState, useEffect, type ButtonHTMLAttributes } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Allows passing standard button props like className, etc.
}

const ThemeToggleButton = ({ className, ...props }: ThemeToggleButtonProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to true, useEffect will correct

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      const newIsDark = storedTheme === 'dark';
      setIsDarkMode(newIsDark);
      root.classList.toggle('dark', newIsDark);
    } else {
      // If no stored theme, respect the initial class from HTML (from RootLayout) or system preference
      const initialIsDark = root.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(initialIsDark);
      root.classList.toggle('dark', initialIsDark); // Ensure class matches state
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newIsDark = !prev;
      document.documentElement.classList.toggle('dark', newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return newIsDark;
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn("relative overflow-hidden w-9 h-9", className)}
      {...props}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={isDarkMode ? "moon" : "sun"}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};

export default ThemeToggleButton;
