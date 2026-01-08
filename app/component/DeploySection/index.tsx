import { SiVercel } from "react-icons/si";
import GridBorders from "./GridBorders";
import TemplateCard from "./TemplateCard";
import { templates } from "./templatesData";

/**
 * DeploySection component showcasing Next.js deployment templates on Vercel
 * Features a sticky left column with deployment CTA and a grid of template cards
 * Displays 5 curated templates including boilerplate, AI chatbot, platforms kit, ISR blog, and commerce
 */
export default function DeploySection() {

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0 items-start">
          <GridBorders />
          {/* Left Column - Takes 1 column (1/3) */}
          <div className="lg:sticky lg:top-24 px-6 py-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-6 leading-tight font-sans">
              Deploy with <br />
              Next.js on Vercel.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Deploy your Next.js <br />
              application to Vercel with <br />
              zero-config support for
              <br />
              every Next.js feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
                <SiVercel className="w-4 h-4" />
                Deploy Now
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
                All Templates
              </button>
            </div>
          </div>

          {/* Right Column - Takes 2 columns (2/3) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
            {templates.map((template, index) => (
              <TemplateCard key={index} {...template} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
