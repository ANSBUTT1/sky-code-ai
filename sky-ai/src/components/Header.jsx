import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for the menu toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <header className="bg-[#1a1a1d] p-4 border-b-2 border-[#3b1c32] sticky top-0 z-50 bg-opacity-60">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="logo">
          <img
            src={Logo}
            width={150}
            alt="Logo"
            className="transition-transform duration-300 transform hover:scale-105 relative"
          />
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#f5f5f5] focus:outline-none"
          >
            <HiMenu size={30} /> {/* Show hamburger icon */}
          </button>
        </div>
        {/* Navigation Menu for larger screens */}
        <nav className={`hidden md:block`}>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Aside Bar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-[#444] p-4 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="text-[#f5f5f5] mb-4">
          <HiX size={30} /> {/* Close icon */}
        </button>
        <ul className="space-y-2">
          <li>
            <a
              href="#services"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact" className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;