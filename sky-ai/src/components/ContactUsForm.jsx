import React from "react";
import backgroundVideo from "../assets/aboutVideo.mp4";

const ContactUsForm = () => {
  return (
    <section
      id="contact"
      className="relative px-8 py-20 flex flex-row justify-end items-center h-screen"
    >
      {/* Background video with diagonal cut shape */}
      <video
        src={backgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] clip-diagonal-cut"
      />
      
      <div className="w-1/2 h-full"></div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white font-bold text-4xl mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 focus:shadow-innerGlow shadow-black shadow-glow text-white rounded-lg bg-gradient-to-br from-darkColor to-secondaryColor"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 focus:shadow-innerGlow shadow-black shadow-glow text-white rounded-lg bg-gradient-to-br from-darkColor to-secondaryColor"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 focus:shadow-innerGlow shadow-black shadow-glow text-white rounded-lg bg-gradient-to-br from-darkColor to-secondaryColor"
          ></textarea>
          <button
            type="submit"
            className="bg-[#6a1e55] shadow-glow hover:shadow-innerGlow hover:shadow-black shadow-black text-white font-bold px-8 py-4 rounded-xl hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#6a1e55] opacity-30 rounded-lg blur-md"></span>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
