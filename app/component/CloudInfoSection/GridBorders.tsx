/**
 * Grid borders component
 * Creates visual grid structure dividing section into columns
 * Displays horizontal and vertical dividing lines on desktop view
 */
export default function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200"></div>

      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200"></div>

      {/* Center vertical dividing line */}
      <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-gray-200"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </>
  );
}
