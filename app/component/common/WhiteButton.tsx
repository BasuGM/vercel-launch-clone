/**
 * WhiteButton component - Secondary action button with white background and border
 * Used for secondary CTAs like "Contact" or "Learn More"
 * Features subtle hover state with gray background
 */
export default function WhiteButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors font-sans cursor-pointer">
      {children}
    </button>
  );
}
