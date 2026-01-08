/**
 * GridBorders component rendering the grid layout structure
 * Creates horizontal and vertical border lines for the three-column section layout
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

      {/* First dividing line at 1/3 */}
      <div className="hidden md:block absolute inset-y-0 left-[33.333%] w-px bg-gray-200 z-0"></div>

      {/* Second dividing line at 2/3 */}
      <div className="hidden md:block absolute inset-y-0 left-[66.666%] w-px bg-gray-200 z-0"></div>

      {/* Right vertical line */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-gray-200 z-0"></div>
    </>
  );
}
