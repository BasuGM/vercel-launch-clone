import { IoMdRefresh } from "react-icons/io";
import { MdSpeed } from "react-icons/md";
import { TbTriangle } from "react-icons/tb";

/**
 * Feature data interface
 * Type definition for feature information structure
 */
export interface FeatureData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Features data array
 * Contains information about Vercel's key Next.js platform features
 * Includes cache control, build speed, and deployment features
 */
export const featuresData: FeatureData[] = [
  {
    icon: <IoMdRefresh className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    title: "Cache, controlled.",
    description:
      "Define per-component response revalidation that persists across deploys with Vercel's Data Cache.",
  },
  {
    icon: <MdSpeed className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    title: "Fastest Next.js builds.",
    description:
      "Build, test, iterate, and deploy at record, industry-leading speeds with Vercel's Build Pipeline.",
  },
  {
    icon: <TbTriangle className="w-6 h-6 md:w-8 md:h-8 text-black" />,
    title: "Deploy with zero downtime.",
    description:
      "Protect against version skew and cache-related downtime with framework-aware infrastructure.",
  },
];
