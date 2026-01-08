/**
 * Left column sticky header
 * Displays "Vercel's Frontend Cloud" title and introductory description
 * Remains sticky on scroll to maintain context
 */
export default function LeftColumn() {
  return (
    <div className="flex flex-col justify-center px-4 md:px-8 py-12 md:py-16 sticky top-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-8 leading-tight">
        Vercel's
        <br />
        Frontend Cloud.
      </h2>
      <p className="text-base md:text-lg text-gray-600 leading-normal font-medium">
        Providing the developer experience and infrastructure to build, scale,
        and secure a faster, more personalized web.
      </p>
    </div>
  );
}
