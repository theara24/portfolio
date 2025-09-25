'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import WebGLFallback from './WebGLFallback';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if it's a WebGL-related error
    const isWebGLError =
      error.message.includes('WebGL') ||
      error.message.includes('context') ||
      error.message.includes('canvas');

    return {
      hasError: isWebGLError,
      error: isWebGLError ? error : undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <WebGLFallback message="3D content failed to load" />
        )
      );
    }

    return this.props.children;
  }
}

export default WebGLErrorBoundary;
