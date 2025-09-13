'use client';

import React from 'react';
import IconCloud from '@/app/components/ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'nextdotjs',
  'nodedotjs',
  'python',
  'docker',
  'git',
  'linux',
  'figma',
  'amazonaws',
  'tailwindcss',
  'postgresql',
  'mongodb',
  'graphql',
  'jest',
  'webpack',
  'redux',
  'firebase',
  'vercel',
  'vite',
  'visualstudiocode',
  'html5',
  'css3',
  'animation',
];

function IconCloudDemo() {
  return (
    <div className="flex items-center justify-center w-full">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
