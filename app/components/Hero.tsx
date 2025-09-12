import { HeroContent } from '@/app/components/canvas/hero-content';

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* Hole Background Animation */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            linear-gradient(to bottom, #1a0933, #0b0a1f)
          `,
          animation: 'holeAnimation 8s ease-in-out infinite',
        }}
      />
      <HeroContent />
    </div>
  );
};

export default Hero;