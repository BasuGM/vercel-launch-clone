import { HiOutlineCube, HiOutlineClock, HiOutlineServer } from "react-icons/hi";
import FeatureItem from "./FeatureItem";

/**
 * FeaturesList component displaying all three PPR features with interactive selection
 * Includes static extraction, prerender fallbacks, and dynamic streaming features
 * @param selectedFeature - Index of the currently selected feature
 * @param onFeatureSelect - Callback function to handle feature selection
 */
export default function FeaturesList({
  selectedFeature,
  onFeatureSelect,
}: {
  selectedFeature: number;
  onFeatureSelect: (index: number) => void;
}) {
  return (
    <div className="relative z-10">
      {/* Features list */}
      <div className="space-y-8">
        <FeatureItem
          icon={
            <HiOutlineCube
              className={`w-6 h-6 ${
                selectedFeature === 0 ? "text-white" : "text-gray-600"
              }`}
            />
          }
          title="Extract and prerender all static content."
          description="Automatically get an optimized HTML page shell."
          iconBgColor={selectedFeature === 0 ? "bg-orange-500" : "bg-gray-100"}
          isSelected={selectedFeature === 0}
          onClick={() => onFeatureSelect(0)}
        />
        <FeatureItem
          icon={
            <HiOutlineClock
              className={`w-6 h-6 ${
                selectedFeature === 1 ? "text-white" : "text-gray-600"
              }`}
            />
          }
          title="Prerender fallbacks of dynamic content."
          description="Leave space in your app for data to flow in."
          iconBgColor={selectedFeature === 1 ? "bg-blue-500" : "bg-gray-100"}
          isSelected={selectedFeature === 1}
          onClick={() => onFeatureSelect(1)}
        />
        <FeatureItem
          icon={
            <HiOutlineServer
              className={`w-6 h-6 ${
                selectedFeature === 2 ? "text-white" : "text-gray-600"
              }`}
            />
          }
          title="Stream in your dynamic content."
          description="Personalize the experience. Define granular loading and error states."
          iconBgColor={selectedFeature === 2 ? "bg-teal-500" : "bg-gray-100"}
          isSelected={selectedFeature === 2}
          onClick={() => onFeatureSelect(2)}
        />
      </div>

      {/* Button */}
      <div className="mt-16 ml-12">
        <button className="inline-flex items-center gap-3 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors font-sans cursor-pointer">
          Learn about PPR
          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-md">
            Experimental
          </span>
        </button>
      </div>
    </div>
  );
}
