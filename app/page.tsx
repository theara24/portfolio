import {
  About,
  Contact,
  Experience,
  Education, // Added Education import
  Feedbacks,
  Hero,
  Navbar,
  Skill,
  Works,
  StarsCanvas,
} from './components';
import PageLoaderProvider from './components/PageLoaderProvider';

export default function Home() {
  return (
    <PageLoaderProvider>
      <div className="relative z-0 bg-primary font-sans">
        {/* Hero Section with Background Pattern */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skill />
        <Education /> {/* Added Education section */}
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </PageLoaderProvider>
  );
}
