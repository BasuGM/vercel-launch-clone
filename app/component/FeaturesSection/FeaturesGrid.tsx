import GridBorders from "./GridBorders";
import FeatureCard from "./FeatureCard";
import { featuresData } from "./featuresData";

/**
 * Features grid container component
 * Renders all feature cards in a responsive grid layout with border decorations
 */
export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative pb-8 md:pb-12">
      <GridBorders />

      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
