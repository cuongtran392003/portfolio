"use client";
import React, { useEffect } from 'react';
import { useStore } from '@/lib/store';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Initial render matching to avoid flash if possible, 
  // though Next.js might flash without a blocking script. That's fine for this scale.
  return <>{children}</>;
};
