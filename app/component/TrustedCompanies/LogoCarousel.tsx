import { logos } from "./logos";
import LogoItem from "./LogoItem";

/**
 * Infinite scrolling logo carousel component
 * Displays company logos in a continuous horizontal scroll with fade overlays
 * Duplicates logo set for seamless looping animation
 */
export default function LogoCarousel() {
  return (
    <div className="relative overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <LogoItem key={`logo-1-${index}`} logo={logo} keyPrefix={`logo-1-${index}`} />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <LogoItem key={`logo-2-${index}`} logo={logo} keyPrefix={`logo-2-${index}`} />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
