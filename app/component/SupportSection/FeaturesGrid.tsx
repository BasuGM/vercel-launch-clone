import { features } from "./featuresData";

/**
 * Features grid component
 * Displays 9 Next.js features in a 3-column responsive grid
 * Each feature includes an icon, title, and description
 */
export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col text-left">
          <div className="w-10 h-10 mb-4 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 shadow-md">
            {feature.icon}
          </div>
          <h3 className="text-base font-semibold text-black mb-3">
            {feature.title}
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
