/**
 * WebGL utility functions for detecting and handling WebGL capabilities
 */

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

export const getWebGLInfo = () => {
  if (typeof window === 'undefined') return null;

  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) return null;

    // Type assertion to ensure we have a WebGLRenderingContext
    const webglContext = gl as WebGLRenderingContext;

    return {
      version: webglContext.getParameter(webglContext.VERSION),
      vendor: webglContext.getParameter(webglContext.VENDOR),
      renderer: webglContext.getParameter(webglContext.RENDERER),
      maxTextureSize: webglContext.getParameter(webglContext.MAX_TEXTURE_SIZE),
      maxVertexAttribs: webglContext.getParameter(
        webglContext.MAX_VERTEX_ATTRIBS
      ),
      maxVaryingVectors: webglContext.getParameter(
        webglContext.MAX_VARYING_VECTORS
      ),
    };
  } catch (e) {
    return null;
  }
};

export const createWebGLSafeCanvas = (): HTMLCanvasElement | null => {
  if (typeof window === 'undefined') return null;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', {
      antialias: false,
      alpha: false,
      depth: true,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: 'default',
      failIfMajorPerformanceCaveat: false,
    });

    return gl ? canvas : null;
  } catch (e) {
    return null;
  }
};
