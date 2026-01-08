import ProductsDropdown from "./ProductsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import DropdownButton from "../common/DropdownButton";

/**
 * NavMenu component displaying the main navigation menu for desktop
 * Includes dropdown menus for Products, Resources, and Solutions, plus Enterprise and Pricing links
 * Hidden on mobile devices
 */
export default function NavMenu() {
  return (
    <div className="hidden md:flex items-center gap-1">
      <div className="relative group">
        <DropdownButton>Products</DropdownButton>
        <ProductsDropdown />
      </div>
      <div className="relative group">
        <DropdownButton>Resources</DropdownButton>
        <ResourcesDropdown />
      </div>
      <div className="relative group">
        <DropdownButton>Solutions</DropdownButton>
        <SolutionsDropdown />
      </div>
      <DropdownButton hideChevron>Enterprise</DropdownButton>
      <DropdownButton hideChevron>Pricing</DropdownButton>
    </div>
  );
}
