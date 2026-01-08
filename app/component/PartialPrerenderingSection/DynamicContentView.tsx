import { motion } from "framer-motion";
import ProductGrid from "./ProductGrid";

/**
 * DynamicContentView component showing the dynamic content streaming state
 * Displays personalized content with shopping cart and teal theme
 */
export default function DynamicContentView() {
  return (
    <motion.div
      key="feature-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg m-4 bg-white overflow-hidden h-[calc(100%-2rem)] flex flex-col"
    >
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
        <div className="flex-shrink-0">
          <span className="font-semibold text-black text-sm">
            Acme®
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center gap-6 text-gray-600 text-xs">
          <span>Shop All</span>
          <span>Apparel</span>
          <span>Sale</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-2 border-dashed border-teal-400 rounded-md px-2 py-1 flex items-center gap-2">
            <div className="relative">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-[8px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="w-5 h-5 rounded-full bg-teal-600"></div>
          </div>
        </div>
      </div>

      {/* Personalized Banner */}
      <div className="border-2 border-dashed border-teal-400 rounded-lg m-3 p-4 bg-teal-50 flex-shrink-0">
        <p className="text-xs text-gray-700">
          <span className="font-semibold text-black">
            Welcome back, Rauno!
          </span>{" "}
          <span className="text-gray-500">
            Get 40% off your next purchase.
          </span>
        </p>
      </div>

      {/* Content */}
      <div className="px-3 pb-3 text-[9px] flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3 flex-shrink-0">
          <p className="text-gray-600 leading-tight flex-1">
            Welcome to the Acme store, your one-stop destination for all
            your online shopping needs.
          </p>
          <button className="px-2 py-1 border border-gray-300 rounded text-black font-medium whitespace-nowrap text-[9px]">
            Shop Now
          </button>
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </div>
    </motion.div>
  );
}
