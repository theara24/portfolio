'use client';
import CanvasLoader from '@/app/components/Loader';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import WebGLCanvas from '@/app/components/WebGLCanvas';
import WebGLFallback from '@/app/components/WebGLFallback';

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <WebGLCanvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      fallback={<WebGLFallback message="3D Earth model not supported" />}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </WebGLCanvas>
  );
};

export default EarthCanvas;
