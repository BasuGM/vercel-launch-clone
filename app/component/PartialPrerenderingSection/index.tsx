import { useState, useEffect } from "react";
import GridBorders from "./GridBorders";
import BrowserMockup from "./BrowserMockup";
import FeaturesList from "./FeaturesList";

/**
 * PartialPrerenderingSection component showcasing Next.js Partial Prerendering (PPR)
 * Features auto-rotating demo with three states and interactive feature selection
 * Demonstrates static content extraction, prerender fallbacks, and dynamic content streaming
 */
export default function PartialPrerenderingSection() {
  const [selectedFeature, setSelectedFeature] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 md:mb-8 text-center font-sans">
          <span className="text-black">Partial prerendering.</span>{" "}
          <span className="text-gray-400">
            Ultra-quick static edge delivery with fully dynamic capabilities.
          </span>
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <GridBorders />
          <div className="lg:col-span-2">
            <BrowserMockup selectedFeature={selectedFeature} />
          </div>
          <div className="lg:col-span-1 lg:-ml-[3.25rem]">
            <FeaturesList
              selectedFeature={selectedFeature}
              onFeatureSelect={setSelectedFeature}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
