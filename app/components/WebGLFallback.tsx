'use client';
import React from 'react';

interface WebGLFallbackProps {
  message?: string;
  className?: string;
}

const WebGLFallback: React.FC<WebGLFallbackProps> = ({
  message = '3D content not supported',
  className = 'flex items-center justify-center h-full w-full bg-gray-900/50 rounded-lg',
}) => {
  return (
    <div className={className}>
      <div className="text-center p-8">
        <div className="text-gray-400 text-lg mb-2">🚫</div>
        <p className="text-gray-300 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default WebGLFallback;
