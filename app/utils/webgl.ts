// WebGL utility functions for error handling and fallbacks

export const isWebGLSupported = (): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
};

export const isWebGL2Supported = (): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    return !!gl;
  } catch (e) {
    return false;
  }
};

export const getWebGLContext = (
  canvas: HTMLCanvasElement
): WebGLRenderingContext | null => {
  try {
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (context instanceof WebGLRenderingContext) {
      return context;
    }
    console.warn('WebGL context not available');
    return null;
  } catch (e) {
    console.warn('WebGL context creation failed:', e);
    return null;
  }
};

export const createWebGLFallback = (
  message: string = '3D content not supported'
) => {
  return {
    message,
    className:
      'flex items-center justify-center h-full w-full bg-gray-900/50 rounded-lg',
  };
};
