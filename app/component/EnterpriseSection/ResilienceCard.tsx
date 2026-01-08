import { SiNextdotjs, SiVercel } from "react-icons/si";

/**
 * ResilienceCard component highlighting Next.js and Vercel's reliability features
 * Features a diagonal lines background pattern with Next.js and Vercel icons
 */
export default function ResilienceCard() {
  return (
    <div className="relative border border-gray-200 p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[500px]">
      {/* Diagonal Lines Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
              <line x1="-10" y1="10" x2="10" y2="-10" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
              <line x1="30" y1="50" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Icons */}
      <div className="flex gap-3 relative z-10">
        <div className="w-12 h-12 bg-black border border-gray-200 rounded-full flex items-center justify-center shadow-md">
          <SiNextdotjs className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-black border border-gray-200 rounded-full flex items-center justify-center shadow-md">
          <SiVercel className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content and Button */}
      <div className="relative z-10">
        {/* Content */}
        <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
          <span className="text-black">Architected for resilience.</span>{" "}
          <span className="text-gray-400">
            Next.js and Vercel deliver maximum uptime with seamless edge
            caching and revalidation support out of the box.
          </span>
        </h3>

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
          Schedule a demo
        </button>
      </div>
    </div>
  );
}
