import React from "react";
import image from "../assets/hero-section.png";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-l from-[#a64d79] to-[#1a1a1d] flex items-center justify-center text-center relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center absolute inset-0 bg-gradient-to-l from-[#a64d79] to-[#3b1c32] opacity-50 blur-lg"></div>
      <div className="hero-content p-8 sm:p-16 relative z-10  grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-content text-left md:text-left flex flex-col gap-4 lg:gap-8">
          <h2 className="text-4xl md:text-4xl lg:text-5xl text-[#f5f5f5] mb-4">
            <span className="text-[#a64d79]  shadow-black animate-pulse">
              Intelligent{" "}
            </span>
            and Cloud-Hosted Software{" "}
            <span className="text-[#a64d79]  shadow-black animate-pulse">
              Platform
            </span>
          </h2>
          <p className="text-gray-300 mb-6 text-md lg:text-3xl text-wrap ">
            Unlock your business's potential with AI-powered cloud solutions for
            seamless integration, enhanced productivity, and unmatched growth.
          </p>
          <div className="flex">
            <button
              onClick={() => (window.location.href = "#contact")} // Redirect to contact section
              className="bg-[#6a1e55] text-[#f5f5f5] px-6 py-3 rounded-lg shadow-lg hover:shadow-glow transition-transform transform hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#6a1e55] opacity-30 rounded-lg blur-md"></span>
              Write to Us
            </button>
            <button
              onClick={() => (window.location.href = "#contact")} // Redirect to contact section
              className="bg-[# 7a2e65] text-[#f5f5f5] px-6 py-3 rounded-lg shadow-lg hover:shadow-glow transition-transform transform hover:scale-105 relative overflow-hidden ml-4"
            >
              <span className="absolute inset-0 bg-[#7a2e65] opacity-30 rounded-lg blur-md"></span>
              Talk to Us
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <img src={image} width={900} alt="hero-section" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
