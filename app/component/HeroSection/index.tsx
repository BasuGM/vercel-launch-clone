import GridBackground from "./GridBackground";
import HeroLogo from "./HeroLogo";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import CTAButtons from "./CTAButtons";

/**
 * Hero Section - Main landing section of the page
 * Combines grid background, logo, heading, description, and CTA buttons
 * Responsive design with centered content layout
 */
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 md:py-20 px-4 overflow-hidden">
      {/* Decorative background with grid and circles */}
      <GridBackground />
      
      {/* Main content stacked vertically */}
      <div className="relative z-10">
        <HeroLogo />
        <HeroHeading />
        <HeroDescription />
        <CTAButtons />
      </div>
    </section>
  );
}
