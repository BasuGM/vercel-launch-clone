import { HiArrowRight } from "react-icons/hi";

/**
 * Props for the TestimonialCard component
 * Defines the structure for customer testimonial display
 */
export interface TestimonialCardProps {
  logo: string;
  logoAlt: string;
  highlightText: string;
  beforeHighlight: string;
  afterHighlight: string;
  authorName: string;
  authorTitle: string;
  logoHeight?: string;
}

/**
 * TestimonialCard component displaying customer testimonials
 * Shows company logo, quote with highlighted text, and author information
 * @param props - TestimonialCardProps containing logo, quote, and author details
 */
export default function TestimonialCard({
  logo,
  logoAlt,
  highlightText,
  beforeHighlight,
  afterHighlight,
  authorName,
  authorTitle,
  logoHeight = "h-5",
}: TestimonialCardProps) {
  return (
    <div className="relative border border-gray-200 p-8 md:p-12 cursor-pointer transition-all flex flex-col justify-between min-h-[300px] bg-gray-50 hover:bg-white">
      <div>
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt={logoAlt} className={logoHeight} />
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-gray-500 mb-8">
          " {beforeHighlight} <span className="text-black font-semibold">{highlightText}</span>{afterHighlight} "
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-black">{authorName}</div>
          <div className="text-sm text-gray-500">{authorTitle}</div>
        </div>
        <HiArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}
