'use client';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { isWebGLSupported } from '@/app/utils/webgl';
import WebGLFallback from './WebGLFallback';
import WebGLErrorBoundary from './WebGLErrorBoundary';

interface WebGLCanvasProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  [key: string]: any; // For Canvas props
}

const WebGLCanvas: React.FC<WebGLCanvasProps> = ({
  children,
  fallback,
  className = '',
  ...canvasProps
}) => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
  }, []);

  if (webglSupported === null) {
    return (
      <div className={`animate-pulse bg-gray-900/50 rounded-lg ${className}`} />
    );
  }

  if (!webglSupported) {
    return fallback || <WebGLFallback message="3D content not supported" />;
  }

  return (
    <WebGLErrorBoundary
      fallback={
        fallback || <WebGLFallback message="3D content failed to load" />
      }
    >
      <Canvas
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
        }}
        {...canvasProps}
      >
        {children}
      </Canvas>
    </WebGLErrorBoundary>
  );
};

export default WebGLCanvas;
