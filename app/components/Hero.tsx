import { HeroContent } from '@/app/components/canvas/hero-content';

export const Hero = () => {
  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {/* Background: soft radial gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(128,90,255,0.18), transparent 40%)',
            'radial-gradient(circle at 80% 30%, rgba(34,211,238,0.14), transparent 42%)',
            'linear-gradient(to bottom, #0b0a1f 0%, #050816 100%)',
          ].join(','),
        }}
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
