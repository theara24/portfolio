'use client';
import CanvasLoader from '@/app/components/Loader';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Suspense } from 'react';
import WebGLCanvas from '@/app/components/WebGLCanvas';
import WebGLFallback from '@/app/components/WebGLFallback';

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <WebGLCanvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
      }}
      fallback={<WebGLFallback message="3D Ball not supported" />}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </WebGLCanvas>
  );
};

export default BallCanvas;
