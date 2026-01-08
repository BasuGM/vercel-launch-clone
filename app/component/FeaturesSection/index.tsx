import FeaturesGrid from "./FeaturesGrid";

/**
 * Features Section - Showcases Vercel platform capabilities
 * Displays three key features in a grid layout with visual separators
 * Highlights cache control, build performance, and deployment reliability
 */
export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        <FeaturesGrid />
      </div>
    </section>
  );
}
