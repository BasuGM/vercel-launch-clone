/**
 * Grid borders component
 * Creates visual grid structure with horizontal and vertical dividing lines
 * Divides the section into three equal columns on desktop view
 */
export default function GridBorders() {
  return (
    <>
      {/* Top horizontal line */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Bottom horizontal line */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-0"></div>

      {/* Left vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-gray-200 z-0"></div>

      {/* Vertical dividing lines */}
      <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-gray-200 z-0"></div>
      <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-gray-200 z-0"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200 z-0"></div>
    </>
  );
}
