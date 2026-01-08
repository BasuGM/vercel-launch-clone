/**
 * EnterpriseColumn component displaying Vercel Enterprise exploration CTA
 * Promotes interactive product tour, trial, and personalized demo options
 * Includes Explore Enterprise action button
 */
export default function EnterpriseColumn() {
  return (
    <div className="px-6 py-8 relative z-10">
      <h3 className="text-sm md:text-base lg:text-lg font-semibold text-black mb-6 leading-tight font-sans">
        Explore Vercel Enterprise{" "}
        <span className="text-gray-500">
          with an interactive product tour, trial, or a personalized demo.
        </span>
      </h3>

      <button className="px-4 py-2 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
        Explore Enterprise
      </button>
    </div>
  );
}
