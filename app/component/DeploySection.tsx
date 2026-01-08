import { SiNextdotjs, SiVercel } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";

function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200 z-0"></div>

      {/* First dividing line at 1/3 */}
      <div className="hidden md:block absolute inset-y-0 left-[33.333%] w-px bg-gray-200 z-0"></div>

      {/* Second dividing line at 2/3 */}
      <div className="hidden md:block absolute inset-y-0 left-[66.666%] w-px bg-gray-200 z-0"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200 z-0"></div>
    </>
  );
}

interface TemplateCardProps {
  title: string;
  description: string;
  repo: string;
  icon?: "nextjs" | "vercel" | "isr";
}

function TemplateCard({
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

export default function DeploySection() {
  const templates = [
    {
      title: "Next.js Boilerplate",
      description: "A Next.js application and a Serverless Function API Route.",
      repo: "examples/nextjs",
      icon: "nextjs" as const,
    },
    {
      title: "Next.js AI Chatbot",
      description:
        "A full-featured, hackable Next.js AI chatbot built by Vercel.",
      repo: "examples/nextjs-ai-chatbot",
      icon: "nextjs" as const,
    },
    {
      title: "Platforms Starter Kit",
      description: "A template for site builders and low-code tools.",
      repo: "vercel/platforms",
      icon: "vercel" as const,
    },
    {
      title: "ISR Blog",
      description:
        "Incremental Static Regeneration blog with Next.js and WordPress.",
      repo: "examples/cms-wordpress",
      icon: "isr" as const,
    },
    {
      title: "Next.js Commerce",
      description: "Starter kit for high-performance ecommerce sites.",
      repo: "vercel/commerce",
      icon: "nextjs" as const,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0 items-start">
          <GridBorders />
          {/* Left Column - Takes 1 column (1/3) */}
          <div className="lg:sticky lg:top-24 px-6 py-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-6 leading-tight font-sans">
              Deploy with <br />
              Next.js on Vercel.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Deploy your Next.js <br />
              application to Vercel with <br />
              zero-config support for
              <br />
              every Next.js feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
                <SiVercel className="w-4 h-4" />
                Deploy Now
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
                All Templates
              </button>
            </div>
          </div>

          {/* Right Column - Takes 2 columns (2/3) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
            {templates.map((template, index) => (
              <TemplateCard key={index} {...template} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
