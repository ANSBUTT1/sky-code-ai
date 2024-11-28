import React from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className=" rounded-t-lg bg-gradient-to-r from-secondaryColor to-darkColor text-gray-400 py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Icons Section */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src={Logo}
              alt="SkyCode AI Logo"
              className="h-24 mr-4"
            />  
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-gray-300" />
              </a>
            </div>
          </div>
          {/* Navigation Sections */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-end">
            {/* Section 1 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">Workflows</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-gray-300">Management</a></li>
                <li><a href="#team" className="hover:text-gray-300">Reporting</a></li>
                <li><a href="#careers" className="hover:text-gray-300">Support</a></li>
                <li><a href="#blog" className="hover:text-gray-300">Community</a></li>
                <li><a href="#customers" className="hover:text-gray-300">Customers</a></li>
              </ul>
            </div>
            {/* Section 2 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">Important Link</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#help-center" className="hover:text-gray-300">How to Work</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#terms" className="hover:text-gray-300">Our Media</a></li>
                <li><a href="#terms" className="hover:text-gray-300">Privacy</a></li>
              </ul>
            </div>
            {/* Section 3 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <h3 className="text-gray-100 text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#web-dev" className="hover:text-gray-300">Web Design</a></li>
                <li><a href="#design" className="hover:text-gray-300">Development</a></li>
                <li><a href="#ai-solutions" className="hover:text-gray-300">Graphic Design</a></li>
                <li><a href="#consulting" className="hover:text-gray-300">Branding</a></li>
                <li><a href="#consulting" className="hover:text-gray-300">Creative Solution</a></li>
              </ul>
            </div>
            {/* Section 4 */}
            <div className="w-1/2 sm:w-1/4 mb-6">
              <address className="space-y-2">
                <h3 className="text-gray-100 text-lg font-semibold mb-4">Contact Info</h3>
                <p className="hover:text-gray-300">We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</p>
                <p className="hover:text-gray-300">Address: 113 Sassnex, White House, New Jersey, USA</p>
                <p className="hover:text-gray-300">Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
                <p className="hover:text-gray-300">Phone: <a href="tel:+0015481592491">+001 548 159 2491</a></p>
              </address>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900 w-full p-4 flex justify-center items-center">
        <p className="font-semibold text-gray-100 text-lg">&copy; 2024 SkyCode AI. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;