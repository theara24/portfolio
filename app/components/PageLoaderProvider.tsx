'use client';

import { useState, useCallback, useEffect } from 'react';
import PageLoader from './PageLoader';
import type { ReactNode } from 'react';

interface PageLoaderProviderProps {
  children: ReactNode;
}

export default function PageLoaderProvider({
  children,
}: PageLoaderProviderProps) {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    // Unlock scrolling now that the curtain is lifting
    setLoading(false);
  }, []);

  // Prevent scroll while loader is active, without breaking Lenis
  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      <PageLoader onComplete={handleComplete} />
      {/* The loader slides up revealing this; keep content mounted underneath */}
      {children}
    </>
  );
}
