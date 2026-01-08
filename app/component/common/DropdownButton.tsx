import { IoChevronDown } from "react-icons/io5";

/**
 * DropdownButton component - Navigation button with optional chevron indicator
 * Features hover state with gray background and rotating chevron animation
 * Used in header navigation for dropdown menus
 */
export default function DropdownButton({
  children,
  hideChevron = false,
}: {
  children: React.ReactNode;
  hideChevron?: boolean;
}) {
  return (
    <button className="group px-3 py-1.5 text-sm text-gray-600 hover:text-black hover:bg-[#EBEBEB] rounded-full flex items-center gap-1 cursor-pointer transition-colors">
      {children}
      {!hideChevron && (
        <IoChevronDown
          size={12}
          className="transition-transform group-hover:rotate-180"
        />
      )}
    </button>
  );
}
