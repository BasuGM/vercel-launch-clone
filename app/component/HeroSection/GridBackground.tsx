/**
 * Background component with grid pattern and decorative circles
 * Creates the visual foundation for the hero section
 */
export default function GridBackground() {
  return (
    <div className="absolute inset-0 bg-grid-pattern">
      {/* Decorative circles */}
      <div className="absolute top-10 left-20 w-64 h-64 border border-gray-200 rounded-full"></div>
      <div className="absolute top-40 right-32 w-96 h-96 border border-gray-200 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 border border-gray-200 rounded-full"></div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px);
          background-size: 120px 120px;
        }
      `}</style>
    </div>
  );
}
