/**
 * Props for the FeatureItem component
 * Defines the structure for individual feature display items
 */
export interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

/**
 * FeatureItem component displaying a single PPR feature with icon and description
 * Supports selection state with visual feedback and click interaction
 * @param props - FeatureItemProps containing icon, title, description, and interaction handlers
 */
export default function FeatureItem({
  icon,
  title,
  description,
  iconBgColor = "bg-gray-100",
  isSelected = false,
  onClick,
}: FeatureItemProps) {
  return (
    <div
      className={`flex gap-4 cursor-pointer ${
        isSelected ? "opacity-100" : "opacity-60 hover:opacity-80"
      } transition-opacity`}
      onClick={onClick}
    >
      <div
        className={`flex-shrink-0 w-10 h-10 ${iconBgColor} rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="flex-1 max-w-[240px]">
        <p className="text-base text-gray-500">
          <span className="font-semibold text-black">{title}</span>{" "}
          {description}
        </p>
      </div>
    </div>
  );
}
