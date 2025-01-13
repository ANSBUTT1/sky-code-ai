import React from "react";
import { FaCogs } from "react-icons/fa"; // React Icon

// Example data for the three cards
const cardsData = [
  {
    id: 1,
    title: "User Management",
    description: "Easily manage user roles, permissions, and access levels.",
  },
  {
    id: 2,
    title: "Content Moderation",
    description:
      "Efficiently moderate and manage all content across the platform.",
  },
  {
    id: 3,
    title: "Task Automation",
    description:
      "Automate repetitive tasks to save time and improve productivity.",
  },
];

const Management = () => {
  return (
    <div className="p-6 text-center">
     
      <h2 className="text-2xl font-bold mb-6 text-white">Management</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-white text-dark1 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-lg mb-4">{card.description}</p>

            {/* Call to Action Button */}
            <button
              className="bg-secondaryColor text-white py-2 px-4 rounded hover:bg-light1 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
              aria-label={`Learn more about ${card.title}`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
