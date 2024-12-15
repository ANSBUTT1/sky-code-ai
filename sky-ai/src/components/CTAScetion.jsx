import React from 'react'
import {Link} from "react-router-dom"

const CTASection = () => {
  return (
    <section className=" text-white py-24 relative overflow-hidden">
      {/* Decorative Background Elements
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary opacity-30 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4 animate__animated animate__fadeIn animate__delay-2s"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primaryColor opacity-30 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 animate__animated animate__fadeIn animate__delay-2s"></div> */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight animate__animated animate__fadeInUp animate__delay-1s">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-lg sm:text-xl mb-10 text-gray-200 animate__animated animate__fadeInUp animate__delay-1s">
          Contact us today and start your project with Sky Code. We’ll help you achieve your goals with tailored solutions.
        </p>

        {/* Call to Action Button */}
        <Link to='/contact'>
        <button
              onClick={() => (window.location.href = "#contact")} // Redirect to contact section
              className="bg-[#6a1e55] font-semibold shadow-glow text-[#f5f5f5] px-8 py-4 rounded-xl   hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#6a1e55] opacity-30 rounded-lg blur-md"></span>
              Get in Touch
            </button>

            </Link>
      </div>
    </section>
  )
}

export default CTASection;
