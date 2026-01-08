/**
 * MobileMenu component displaying the mobile navigation menu
 * Features navigation links and authentication buttons in a collapsible mobile-friendly layout
 * @param isOpen - Boolean indicating if the mobile menu is currently open
 */
export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-b border-gray-200">
      <div className="px-4 py-4 space-y-4">
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
            Products
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
            Resources
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
            Solutions
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
            Enterprise
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors">
            Pricing
          </button>
        </div>
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <button className="w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
            Log In
          </button>
          <button className="w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
            Contact
          </button>
          <button className="w-full px-3 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
