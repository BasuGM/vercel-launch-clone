import { getAssetPath } from "@/lib/utils";
import SecurityCard from "./SecurityCard";
import ResilienceCard from "./ResilienceCard";
import TestimonialCard from "./TestimonialCard";

/**
 * EnterpriseSection component showcasing enterprise-grade features
 * Displays security and resilience cards followed by customer testimonials from HashiCorp and Sonos
 */
export default function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center mb-8 md:mb-12">
          First-class Enterprise features.
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <SecurityCard />
          <ResilienceCard />
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-0">
          <TestimonialCard
            logo={getAssetPath("/assets/images/hashicorp-logo.svg")}
            logoAlt="HashiCorp"
            beforeHighlight="On-demand ISR speeds up the iteration process across the board"
            highlightText="for all of our sites"
            afterHighlight="."
            authorName="Bryce Kalow"
            authorTitle="Senior Web Engineer"
          />
          <TestimonialCard
            logo={getAssetPath("/assets/images/sonos-logo.svg")}
            logoAlt="Sonos"
            beforeHighlight="It's just a pity we didn't go sooner. Next.js and Vercel make our developers happier, make us"
            highlightText="go to market quicker"
            afterHighlight=", and let us move with utmost confidence."
            authorName="Jonathan Lemon"
            authorTitle="Engineering Manager"
            logoHeight="h-4"
          />
        </div>
      </div>
    </section>
  );
}
