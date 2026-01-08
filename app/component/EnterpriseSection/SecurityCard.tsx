import { HiUser, HiLockClosed, HiShieldCheck } from "react-icons/hi";

/**
 * SecurityCard component displaying Vercel's security features
 * Features a shield pattern background with security icons and enterprise security messaging
 */
export default function SecurityCard() {
  return (
    <div className="relative border border-gray-200 p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[500px]">
      {/* Shield Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="600" height="600" viewBox="0 0 600 600" className="absolute">
          {/* Outermost shield */}
          <path
            d="M300 50 L450 100 L450 300 Q450 450 300 550 Q150 450 150 300 L150 100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          />
          {/* Middle shield */}
          <path
            d="M300 100 L400 140 L400 300 Q400 420 300 500 Q200 420 200 300 L200 140 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          />
          {/* Inner shield */}
          <path
            d="M300 150 L350 180 L350 300 Q350 390 300 450 Q250 390 250 300 L250 180 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          />
        </svg>
      </div>

      {/* Icons */}
      <div className="flex gap-3 relative z-10">
        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md">
          <HiUser className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md">
          <HiLockClosed className="w-5 h-5" />
        </div>
        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md">
          <HiShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* Content and Button */}
      <div className="relative z-10">
        {/* Content */}
        <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
          <span className="text-black">Secure by design.</span>{" "}
          <span className="text-gray-400">
            From automatic HTTPS and SSL encryption to industry-leading DDoS
            mitigation and Firewall, Vercel is your partner in infrastructure
            security.
          </span>
        </h3>

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
          Security
        </button>
      </div>
    </div>
  );
}
