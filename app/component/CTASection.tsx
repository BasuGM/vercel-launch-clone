import { SiVercel } from "react-icons/si";

function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200 z-0"></div>

      {/* First dividing line at 1/3 */}
      <div className="hidden md:block absolute inset-y-0 left-[33.333%] w-px bg-gray-200 z-0"></div>

      {/* Second dividing line at 2/3 */}
      <div className="hidden md:block absolute inset-y-0 left-[66.666%] w-px bg-gray-200 z-0"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200 z-0"></div>
    </>
  );
}

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0">
          <GridBorders />
          {/* Left Column - Takes 2 columns (2/3) */}
          <div className="lg:col-span-2 px-6 py-8 relative z-10">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 leading-tight font-sans">
              Ready to deploy?{" "}
              <span className="text-gray-500">
                Start building with a free account. Speak to an expert for your{" "}
              </span>
              <span className="text-blue-600 font-medium">Pro</span>
              <span className="text-gray-500"> or </span>
              <span className="text-purple-600 font-medium">Enterprise</span>
              <span className="text-gray-500"> needs.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
                Start Deploying
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* Right Column - Takes 1 column (1/3) */}
          <div className="px-6 py-8 relative z-10">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-black mb-6 leading-tight font-sans">
              Explore Vercel Enterprise{" "}
              <span className="text-gray-500">
                with an interactive product tour, trial, or a personalized demo.
              </span>
            </h3>

            <button className="px-4 py-2 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
              Explore Enterprise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
