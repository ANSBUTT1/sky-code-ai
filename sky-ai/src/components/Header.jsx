import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              <Link
                to="/"
                className="group text-[#f5f5f5] hover:text-xl flex flex-col items-center hover:text-[#a64d79] transition-all duration-300"
              >
                Home
                <span className="w-0 group-hover:w-12 h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <Link
                to="/services"
                className="group text-[#f5f5f5] hover:text-xl flex flex-col items-center hover:text-[#a64d79] transition-all duration-300"
              >
                Services
                <span className="w-0 group-hover:w-12 h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
              </Link>
              {/* Submenu for Services */}
              <div className="absolute left-0 hidden group-hover:block bg-[#333] text-white w-48 py-2 rounded-md shadow-lg">
                <Link
                  to="/service1"
                  className="block px-4 py-2 hover:bg-[#a64d79] transition duration-300"
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 hover:bg-[#a64d79] transition duration-300"
                >
                  Service 2
                </Link>
                <Link
                  to="/service3"
                  className="block px-4 py-2 hover:bg-[#a64d79] transition duration-300"
                >
                  Service 3
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/solutions"
                className="group text-[#f5f5f5] hover:text-xl flex flex-col items-center hover:text-[#a64d79] transition-all duration-300"
              >
                Solutions
                <span className="w-0 group-hover:w-12 h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="group text-[#f5f5f5] hover:text-xl flex flex-col items-center hover:text-[#a64d79] transition-all duration-300"
              >
                About
                <span className="w-0 group-hover:w-12 h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="group text-[#f5f5f5] hover:text-xl flex flex-col items-center hover:text-[#a64d79] transition-all duration-300"
              >
                Contact
                <span className="w-0 group-hover:w-12 h-[2px] bg-white transition-all duration-300 ease-in-out"></span>
              </Link>
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
            <Link
              to="/"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/solutions"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[#f5f5f5] hover:text-[#a64d79] transition duration-300"
              onClick={() => {
                setIsMenuOpen(false); // Close menu on item click
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
