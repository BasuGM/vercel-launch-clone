"use client";

import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

/**
 * Header component providing the main site navigation
 * Sticky header with logo, navigation menu, auth buttons, and mobile hamburger menu
 * Includes responsive mobile menu with dropdown functionality
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA] border-b border-gray-200">
      <nav className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Left side - Logo and Nav */}
        <div className="flex items-center gap-8">
          <Logo />
          <NavMenu />
        </div>

        {/* Right side - Auth buttons (desktop) */}
        <div className="hidden md:flex">
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
        >
          {mobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} />
    </header>
  );
}
