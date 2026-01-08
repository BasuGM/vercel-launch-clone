import { AnimatePresence } from "framer-motion";
import StaticShellView from "./StaticShellView";
import PrerenderFallbacksView from "./PrerenderFallbacksView";
import DynamicContentView from "./DynamicContentView";

/**
 * BrowserMockup component displaying interactive browser preview of PPR features
 * Shows three different states: static shell, prerender fallbacks, and dynamic content streaming
 * @param selectedFeature - Index of the currently selected feature (0-2)
 */
export default function BrowserMockup({ selectedFeature }: { selectedFeature: number }) {
  return (
    <div className="relative z-10 p-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="h-96 bg-[#FAFAFA] overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedFeature === 0 && <StaticShellView />}
            {selectedFeature === 1 && <PrerenderFallbacksView />}
            {selectedFeature === 2 && <DynamicContentView />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
