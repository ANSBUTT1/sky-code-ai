import React from "react";
import video from "../assets/aboutVideo.mp4";

const AboutSection = () => {
  return (
    <section className="flex justify-center md:justify-end items-center h-screen p-4 text-white  sm:py-20 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-fill opacity-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="  sm:mx-8  px-4  relative flex flex-col justify-end items-center">
        <span className="absolute inset-0 bg-[#7a2e65] opacity-40 rounded-lg blur-md"></span>
        <div className="relative w-full max-w-6xl mx-auto py-8 sm:py-12 text-center px-4 flex flex-col justify-center items-center">
          <header>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-shadow-lg">
              About Sky Code
            </h2>
          </header>

          <article>
            <p className=" text-white text-[80%] sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed tracking-wide">
              At Sky Code, we specialize in innovative IT solutions, offering
              cutting-edge technology to elevate your business. Our expert team
              works tirelessly to deliver high-quality services that drive
              growth and success. We empower businesses to scale, optimize, and
              stay ahead in a fast-changing digital landscape.
            </p>
          </article>

          <div className="flex flex-row justify-center gap-6 mt-8">
            <button
              className="bg-[#6a1e55] shadow-glow text-[#f5f5f5] px-3 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
              aria-label="Learn more about Sky Code"
            >
              <span className="absolute inset-0 bg-[#6a1e55] opacity-30 rounded-xl blur-md"></span>
              <span className="relative z-10">Learn More</span>
            </button>

            <button
              className="bg-[#7a2e65] shadow-glow text-[#f5f5f5] px-3 py-3  sm:px-8 sm:py-4 rounded-xl hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
              aria-label="Get in touch with Sky Code"
            >
              <span className="absolute inset-0 bg-[#7a2e65] opacity-30 rounded-xl blur-md"></span>
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
