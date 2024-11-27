import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <footer className=" rounded-t-lg bg-gradient-to-r from-secondaryColor to-darkColor text-gray-400 py-8 px-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <img
              src={Logo}
              alt="SkyCode AI Logo"
              className="h-24 mx-auto md:mx-0 mb-4"
            />
          </div>

          {/* Navigation Sections */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-end">
            {/* Section 1 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-gray-300">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Section 2 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faq" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#help-center" className="hover:text-gray-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            {/* Section 3 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#web-dev" className="hover:text-gray-300">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#design" className="hover:text-gray-300">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#ai-solutions" className="hover:text-gray-300">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="hover:text-gray-300">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            {/* Section 4 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#docs" className="hover:text-gray-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#tutorials" className="hover:text-gray-300">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-gray-300">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-gray-300">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900  w-full p-4 flex justify-center items-center">
        <p className="font-semibold text-gray-100 text-lg">&copy; 2024 SkyCode AI. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
