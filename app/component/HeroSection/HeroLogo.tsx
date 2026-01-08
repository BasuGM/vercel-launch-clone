import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

/**
 * Next.js logo display component
 * Renders the Next.js logo with responsive sizing
 */
export default function HeroLogo() {
  return (
    <div className="mb-8 md:mb-12 flex justify-center">
      <Image
        src={getAssetPath("/assets/images/next-logo.svg")}
        alt="Next.js Logo"
        width={80}
        height={80}
        className="w-16 h-16 md:w-24 md:h-24"
      />
    </div>
  );
}
