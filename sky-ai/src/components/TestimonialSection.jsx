import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Sky Code helped us transform our business with their expert IT solutions. Highly recommended!",
    client: "Client A",
    avatar: "https://via.placeholder.com/80", // Placeholder for client image
  },
  {
    id: 2,
    text: "Professional, reliable, and innovative—Sky Code is a true partner in business growth.",
    client: "Client B",
    avatar: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    text: "Working with Sky Code was an absolute pleasure. Their team exceeded our expectations!",
    client: "Client C",
    avatar: "https://via.placeholder.com/80",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-darkColor to-primaryColor  text-white py-12 sm:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-secondaryColor opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primaryColor opacity-50 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div> */}

      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        {/* Section Title */}
        <h2 className=" text-4xl sm:text-5xl font-extrabold mb-8">
          What Our Clients Say
        </h2>
        <p className="text-white text-lg mb-12">
          Hear from those who trusted us to bring their visions to life.
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === current
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-90 z-0"
              }`}
            >
              <div className="bg-gradient-to-b from-secondaryColor to-primaryColor p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-full mx-auto md:w-4/5 lg:w-3/5">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.client} avatar`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4 sm:mb-6"
                  />
                  <p className="text-gray-100 italic leading-relaxed mb-4 text-xs sm:text-lg">
                    "{testimonial.text}"
                  </p>
                  <h3 className="text-sm sm:text-lg font-semibold text-white">
                    - {testimonial.client}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute z-50 top-1/2 left-4 transform -translate-y-1/2 bg-secondaryColor text-white rounded-full p-3 shadow-lg hover:bg-primaryColor focus:outline-none transition duration-300"
            aria-label="Previous Testimonial"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 bg-secondaryColor text-white rounded-full p-3 shadow-lg hover:bg-primaryColor focus:outline-none transition duration-300"
            aria-label="Next Testimonial"
          >
            →
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-5 h-5  rounded-full transition-transform transform ${
                index === current
                  ? "bg-primaryColor scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
