'use client';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as random from 'maath/random';
import { Suspense, useRef, useState } from 'react';
import type { Points as PointProps } from 'three';
import WebGLCanvas from '@/app/components/WebGLCanvas';
import WebGLFallback from '@/app/components/WebGLFallback';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Stars = (props: any) => {
  const ref = useRef<PointProps>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <WebGLCanvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          alpha: true,
        }}
        onCreated={({ gl }: { gl: any }) => {
          gl.setClearColor(0x000000, 0);
        }}
        fallback={<WebGLFallback message="Stars background not supported" />}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </WebGLCanvas>
    </div>
  );
};

export default StarsCanvas;
