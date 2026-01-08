import { SiNextdotjs, SiVercel } from "react-icons/si";
import { getAssetPath } from "@/lib/utils";
import FeaturesGrid from "./FeaturesGrid";
import GridBorders from "./GridBorders";

/**
 * Support Section - Out-of-the-box Next.js support showcase
 * Displays Next.js + Vercel integration with infinity background
 * Includes heading, description, CTA buttons, and comprehensive features grid
 * Highlights Vercel's deep integration with Next.js and React creators
 */
export default function SupportSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative pb-8 md:pb-12">
          <GridBorders />

          <div className="flex flex-col items-center text-center px-4 py-12 md:py-16 relative z-10">
            {/* Logo Icons */}
            <div className="mb-12 md:mb-16 relative">
              {/* Infinity/Figure-8 Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[170px]">
                <img
                  src={getAssetPath("/assets/images/ellipsed-background.svg")}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Icon Containers */}
              <div className="relative z-10 inline-flex items-center gap-12 px-12 py-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
                  <SiNextdotjs className="w-8 h-8 md:w-9 md:h-9 text-white" />
                </div>
                <span className="text-2xl text-gray-400 font-light">+</span>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
                  <SiVercel className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-8 md:mb-10">
              Out-of-the-box support.
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl leading-relaxed mb-10 md:mb-12">
              No company in the world is more integrated with the creators of
              both Next.js and React than Vercel. Understanding the challenges
              of high-performance teams and applications is our primary role.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
                <SiVercel className="w-4 h-4" />
                Start Deploying
              </button>
              <button className="px-6 py-2.5 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
                Get a Demo
              </button>
            </div>

            {/* Features Grid */}
            <div className="mt-16 md:mt-24 w-full">
              <FeaturesGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
