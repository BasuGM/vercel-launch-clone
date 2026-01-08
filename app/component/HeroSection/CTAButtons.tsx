import { SiVercel } from "react-icons/si";

/**
 * Call-to-action buttons component
 * Primary action: Start Deploying, Secondary action: Get a Demo
 */
export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
        <SiVercel className="w-4 h-4" />
        Start Deploying
      </button>
      <button className="px-8 py-3.5 bg-white text-gray-600 hover:text-black text-base font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
        Get a Demo
      </button>
    </div>
  );
}
