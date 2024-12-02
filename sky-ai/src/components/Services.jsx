import React, { useState } from "react";

const Services = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const toggleFlip = (index) => {
    const updatedFlipped = [...flipped];
    updatedFlipped[index] = !updatedFlipped[index];
    setFlipped(updatedFlipped);
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div
            className={`relative w-full h-80 p-8 bg-gradient-to-b from-[#6a1e55] to-[#3d0e32] rounded-xl   shadow-glow hover:scale-105 transition-all transform group perspective-1000 ${
              flipped[0] ? "rotate-y-180" : ""
            }`}
            onClick={() => toggleFlip(0)}
          >
            {/* Front of Card */}
            <div className="absolute  inset-0 flex flex-col justify-center items-center bg-[#6a1e55] rounded-xl p-6 group-hover:opacity-100 opacity-100 duration-500 transition-transform transform-style-preserve-3d">
              <h3 className="text-3xl font-semibold text-center mb-4">
                Web Development
              </h3>
              <p className="text-lg text-center mb-6">
                We create scalable and innovative websites tailored to your
                needs.
              </p>
              <button className="text-sm bg-[#6a1e55] text-white py-2 px-4 rounded-lg  shadow-innerGlow transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Back of Card */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-[#6a1e55] to-[#3d0e32] shadow-innerGlow opacity-0 rounded-xl p-8 flex flex-col justify-center items-center transform rotate-y-180 transition-all duration-500 ${
                flipped[0] ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                More about Web Development
              </h3>
              <p className="text-md mb-4 text-center line-clamp-3">
                Our web development services ensure high-performance websites
                with modern designs. We focus on user experience and responsive,
                mobile-first development.
              </p>
              <button
                onClick={() => toggleFlip(0)}
                className="flex justify-center items-center text-sm bg-[#6a1e55] shadow-glow text-[#f5f5f5] px-8 py-4 rounded-xl   hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#7a2e65] opacity-30 rounded-lg blur-md"></span>
                Back
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className={`relative w-full h-80 p-8 bg-gradient-to-b from-[#9b4d73] to-[#602b4f] rounded-xl  shadow-glow hover:scale-105 transition-all transform group perspective-1000 ${
              flipped[2] ? "rotate-y-180" : ""
            }`}
            onClick={() => toggleFlip(2)}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#9b4d73] rounded-xl p-6 group-hover:opacity-100 opacity-100 duration-500 transition-transform transform-style-preserve-3d">
              <h3 className="text-3xl font-semibold text-center mb-4">
                Cloud Solutions
              </h3>
              <p className="text-lg text-center mb-6">
                Helping businesses leverage cloud technology for better
                scalability.
              </p>
              <button className="text-sm bg-[#9b4d73] text-white py-2 px-4 rounded-lg shadow-innerGlow transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Back of Card */}
            <div
              className={` shadow-innerGlow absolute inset-0 bg-gradient-to-b from-[#9b4d73] to-[#602b4f] opacity-0 rounded-xl p-8 flex flex-col justify-center items-center transform rotate-y-180 transition-all duration-500 ${
                flipped[2] ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                More about Cloud Solutions
              </h3>
              <p className="text-lg mb-4 text-center line-clamp-3">
                Our cloud services help businesses improve efficiency,
                scalability, and security while reducing costs.
              </p>
              <button
                onClick={() => toggleFlip(2)}
                className="flex justify-center items-center text-sm bg-[#6a1e55] shadow-glow text-[#f5f5f5] px-8 py-4 rounded-xl   hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#7a2e65] opacity-30 rounded-lg blur-md"></span>
                Back
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className={`relative w-full h-80 p-8 bg-gradient-to-b from-[#7a2e65] to-[#4e1a3e] rounded-xl shadow-glow hover:scale-105 transition-all transform group perspective-1000 ${
              flipped[1] ? "rotate-y-180" : ""
            }`}
            onClick={() => toggleFlip(1)}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#7a2e65] rounded-xl p-6 group-hover:opacity-100 opacity-100 duration-500 transition-transform transform-style-preserve-3d">
              <h3 className="text-3xl font-semibold text-center mb-4">
                App Development
              </h3>
              <p className="text-lg text-center mb-6">
                Building intuitive mobile apps that offer seamless user
                experiences.
              </p>
              <button className="text-sm shadow-innerGlow bg-[#7a2e65] text-white py-2 px-4 rounded-lg  transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Back of Card */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-[#7a2e65] to-[#4e1a3e] opacity-0 shadow-innerGlow rounded-xl p-8 flex flex-col justify-center items-center transform rotate-y-180 transition-all duration-500 ${
                flipped[1] ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                More about App Development
              </h3>
              <p className="text-lg mb-4 text-center line-clamp-3">
                Our mobile app development services focus on creating apps that
                drive engagement and provide the best user experience across
                multiple platforms.
              </p>
              <button
                onClick={() => toggleFlip(1)}
                className="flex justify-center items-center text-sm bg-[#6a1e55] shadow-glow text-[#f5f5f5] px-8 py-4 rounded-xl   hover:bg-[#9f5c7b] transition-all transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#7a2e65] opacity-30 rounded-lg blur-md"></span>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
