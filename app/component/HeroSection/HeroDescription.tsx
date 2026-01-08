/**
 * Description text component
 * Explains Vercel's relationship with Next.js and core value proposition
 */
export default function HeroDescription() {
  return (
    <p className="text-base md:text-xl text-center mb-6 md:mb-8 max-w-3xl font-['Arial'] font-medium">
      <span className="text-black">Made by the creators of Next.js,</span>{" "}
      <span className="text-gray-600">Vercel is designed</span>
      <br className="hidden md:block" />
      <span className="text-gray-600">to build, scale, and secure your Next.js apps.</span>
    </p>
  );
}
