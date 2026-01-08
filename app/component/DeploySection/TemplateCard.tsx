import { SiNextdotjs, SiVercel } from "react-icons/si";

/**
 * Props for the TemplateCard component
 * Defines the structure for deployment template card display
 */
export interface TemplateCardProps {
  title: string;
  description: string;
  repo: string;
  icon?: "nextjs" | "vercel" | "isr";
}

/**
 * TemplateCard component displaying a deployable Next.js template
 * Features a corner fold effect, template info, and repository details with appropriate icons
 * @param props - TemplateCardProps containing title, description, repo, and icon type
 */
export default function TemplateCard({
  title,
  description,
  repo,
  icon = "nextjs",
}: TemplateCardProps) {
  const IconComponent =
    icon === "vercel" ? SiVercel : icon === "isr" ? null : SiNextdotjs;

  return (
    <div className="bg-white border border-gray-200 p-6 hover:bg-gray-50 transition-colors cursor-pointer group relative overflow-hidden">
      {/* Corner fold effect */}
      <div className="absolute top-0 right-0">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 0L40 40L0 0L40 0Z" fill="#F5F5F5" />
          <path d="M40 0L40 40L0 0L40 0Z" fill="#E5E5E5" fillOpacity="0.3" />
        </svg>
      </div>

      <h3 className="text-lg font-medium text-black mb-2 font-sans">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-700">
        {icon === "isr" ? (
          <div className="w-5 h-5 border-2 border-black rounded flex items-center justify-center">
            <span className="text-[10px] font-bold">ISR</span>
          </div>
        ) : IconComponent ? (
          <IconComponent className="w-5 h-5" />
        ) : null}
        <span className="font-normal">{repo}</span>
      </div>
    </div>
  );
}
