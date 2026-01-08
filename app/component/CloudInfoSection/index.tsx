import GridBorders from "./GridBorders";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

/**
 * Cloud Info Section - Vercel's Frontend Cloud showcase
 * Two-column layout (1/3 left, 2/3 right) with grid borders
 * Demonstrates DX Platform features, collaboration tools, and global infrastructure
 * Includes interactive comment system, team toolbar, and animated deployment terminal
 */
export default function CloudInfoSection() {
  return (
    <section className="px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative pb-8 md:pb-12">
          <GridBorders />
          <div className="md:col-span-1">
            <LeftColumn />
          </div>
          <div className="md:col-span-2">
            <RightColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
