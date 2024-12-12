import React from "react";
import image from "../assets/hero.png";

const ServicesHero = () => {
  return (
    <section className=" shadow-secondaryColor shadow-glow bg-gradient-to-r from-primary via-light3 to-light2 text-dark1 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
        {/* Text Content */}
        <div className="text-center md:text-left opacity-0 transform transition-all duration-1000 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-wide">
            Transform Your Business with Cutting-Edge IT Solutions
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white">
            Our services are designed to help your business grow, innovate, and
            stay competitive with reliable, scalable IT solutions.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <button
              onClick={() => (window.location.href = "#contact")} // Redirect to contact section
              className="bg-primaryColor shadow-glow text-[#f5f5f5] px-8 py-4 rounded-xl hover:bg-secondaryColor transition-all transform hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#7a2e65] opacity-30 rounded-lg blur-md"></span>
              Get Started
            </button>
            <button
              className="bg-[#6a1e55] shadow-glow text-[#f5f5f5] px-3 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
              aria-label="Learn more about Sky Code"
            >
              <span className="absolute inset-0 bg-[#6a1e55] opacity-30 rounded-xl blur-md"></span>
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
        {/* Hero Image or Illustration */}
        <div className="flex justify-center md:justify-start opacity-0 transform transition-all duration-1000 animate-fadeIn">
          <img
            src={image}
            alt="IT Services Illustration"
            className=" w-full max-w-lg shadow-glow  shadow-primaryColor rounded-lg  transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
