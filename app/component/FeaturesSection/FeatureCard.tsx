/**
 * Props interface for individual feature card
 * Defines the structure for icon, title, and description
 */
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Individual feature card component
 * Displays an icon, title, and description in a centered vertical layout
 */
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-12">
      <div className="mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-20 h-12 md:w-24 md:h-14 rounded-full border-4 border-gray-200">
          {icon}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-black mb-4 font-sans">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 max-w-sm font-['Arial'] font-medium">
        {description}
      </p>
    </div>
  );
}
