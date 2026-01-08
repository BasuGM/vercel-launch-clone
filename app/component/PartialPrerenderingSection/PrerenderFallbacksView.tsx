import { motion } from "framer-motion";
import ProductGrid from "./ProductGrid";

/**
 * PrerenderFallbacksView component showing the prerender fallbacks state
 * Displays loading skeletons with Suspense boundary indicator and blue theme
 */
export default function PrerenderFallbacksView() {
  return (
    <motion.div
      key="feature-1"
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
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-200"></div>
            <div className="w-5 h-5 rounded-full bg-blue-300"></div>
          </div>
          <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-medium rounded">
            &lt;Suspense&gt;
          </span>
        </div>
      </div>

      {/* Loading Skeletons */}
      <div className="border-2 border-dashed border-gray-300 rounded m-3 p-3 bg-blue-50 flex-shrink-0">
        <div className="space-y-2">
          <div className="h-4 bg-blue-200 rounded-full w-2/5"></div>
          <div className="h-4 bg-blue-200 rounded-full w-4/5"></div>
        </div>
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
