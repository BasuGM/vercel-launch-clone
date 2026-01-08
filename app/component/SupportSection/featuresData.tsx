import { HiChartBar, HiLightningBolt, HiRefresh, HiCog, HiDocumentText, HiGlobe, HiSwitchHorizontal, HiShieldCheck } from "react-icons/hi";
import { MdRocket } from "react-icons/md";

/**
 * Feature item interface
 * Defines structure for individual feature data
 */
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Features data array
 * Contains 9 Next.js platform features with icons, titles, and descriptions
 * Covers observability, configuration, middleware, rendering strategies, APIs, routing, and security
 */
export const features: Feature[] = [
  {
    icon: <HiChartBar className="w-6 h-6" />,
    title: "Advanced observability.",
    description: "Understand Next.js performance with Vercel's Speed Insights and monitoring tools."
  },
  {
    icon: <MdRocket className="w-6 h-6" />,
    title: "Zero configuration.",
    description: "Git push to update your Next.js site and deploy globally in seconds."
  },
  {
    icon: <HiLightningBolt className="w-6 h-6" />,
    title: "Edge Middleware.",
    description: "Run A/B tests, experiment, and feature flag using Vercel Edge Middleware."
  },
  {
    icon: <HiRefresh className="w-6 h-6" />,
    title: "Incremental Static Regeneration (ISR).",
    description: "Globally update content from your headless CMS or database in 300ms without redeploying."
  },
  {
    icon: <HiCog className="w-6 h-6" />,
    title: "Server-Side Rendering (SSR).",
    description: "Autoscaling Serverless Functions to dynamically render your Next.js application."
  },
  {
    icon: <HiDocumentText className="w-6 h-6" />,
    title: "Static Site Generation (SSG).",
    description: "Prerender and automatically cache and distribute generated Next.js pages to every Vercel Edge Network region."
  },
  {
    icon: <HiGlobe className="w-6 h-6" />,
    title: "Create public APIs.",
    description: "Build high-performance APIs that are deployed to every Vercel Edge Network region."
  },
  {
    icon: <HiSwitchHorizontal className="w-6 h-6" />,
    title: "Routing and nested layouts.",
    description: "Create routes using the file system, including support for more advanced routing patterns and UI layouts."
  },
  {
    icon: <HiShieldCheck className="w-6 h-6" />,
    title: "Application security.",
    description: "Create private connections between Serverless Functions and your backend cloud."
  }
];
