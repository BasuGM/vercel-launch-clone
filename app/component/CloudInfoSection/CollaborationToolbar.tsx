import {
  IoChatbubbleOutline,
  IoLayersOutline,
  IoShareOutline,
} from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

/**
 * Collaboration toolbar component
 * Displays team collaboration controls with chat, menu, layers, share buttons
 * Includes avatar stack showing team members currently viewing
 */
export default function CollaborationToolbar() {
  return (
    <div className="mt-8 mx-auto flex items-center justify-between bg-white rounded-full border border-gray-200 shadow-sm px-3 py-2 max-w-xs">
      <div className="flex items-center divide-x divide-gray-200">
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <IoChatbubbleOutline className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <HiOutlineMenu className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <IoLayersOutline className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <IoLayersOutline className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="flex items-center -space-x-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-2 ring-white flex items-center justify-center">
          <span className="text-white text-xs font-semibold">J</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-500 ring-2 ring-white flex items-center justify-center">
          <span className="text-white text-xs font-semibold">R</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-red-600 ring-2 ring-white flex items-center justify-center">
          <span className="text-white text-xs font-semibold">H</span>
        </div>
      </div>

      <div className="flex items-center divide-x divide-gray-200">
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors pr-2">
          <IoShareOutline className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 pl-2">
          <HiOutlineMenu className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
