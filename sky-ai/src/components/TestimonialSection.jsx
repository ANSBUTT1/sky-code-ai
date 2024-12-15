import React from "react";

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
  return (
    <section className="bg-white text-darkColor py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">What Our Clients Say</h2>
        <p className="text-lg mb-12">
          Hear from those who trusted us to bring their visions to life.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-b from-secondaryColor to-primaryColor p-6 sm:p-8 rounded-2xl shadow-2xl"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
