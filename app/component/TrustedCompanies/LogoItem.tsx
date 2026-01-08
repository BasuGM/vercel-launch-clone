import Image from "next/image";
import { logos } from "./logos";

/**
 * Individual logo display component
 * Renders a single company logo with grayscale filter and opacity
 */
export default function LogoItem({ logo, keyPrefix }: { logo: typeof logos[0]; keyPrefix: string }) {
  return (
    <div
      key={keyPrefix}
      className="flex-shrink-0 flex items-center justify-center px-12 md:px-16"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="opacity-60 grayscale h-8 md:h-10 w-auto object-contain"
      />
    </div>
  );
}
