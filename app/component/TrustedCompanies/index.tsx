import CompaniesHeading from "./CompaniesHeading";
import LogoCarousel from "./LogoCarousel";

/**
 * Trusted Companies Section
 * Showcases major companies using Next.js with an infinite scrolling logo carousel
 * Includes heading and animated logo display with fade effects
 */
export default function TrustedCompanies() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <CompaniesHeading />
        <LogoCarousel />
      </div>
    </section>
  );
}
