import React, { useState } from "react";
import "@fontsource/poppins"; // Import Poppins font
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // npm install lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-[#000000] via-[#0a0a0a] to-[#1f1f1f] text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-9xl mx-auto px-6 py-11 flex items-center justify-between md:justify-center">
        {/* Logo */}
        <div className="absolute left-6 md:left-10 flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-22 h-auto" />
        </div>

        {/* Centered Menu (Desktop) */}
        <div className="hidden md:flex space-x-10 text-[15px] custom-spacing font-medium tracking-wider">
          <a
            href="#home"
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            HOME
          </a>
          <a
            href="#about"
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            ABOUT
          </a>
          <a
            href="#characters"
           className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            CHARACTERS
          </a>
          <a
            href="#spells"
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            SPELLS
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden hover:text-[#811cf4] transition absolute right-6"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gradient-to-r from-[#000000] via-[#0a0a0a] to-[#1f1f1f] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-end space-y-4 py-4 px-3 font-medium tracking-wider">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            ABOUT
          </a>
          <a
            href="#characters"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            CHARACTERS
          </a>
          <a
            href="#spells"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#811cf4] transition duration-500 hover:scale-120 uppercase"
          >
            SPELLS
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
