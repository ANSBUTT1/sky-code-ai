import React, { useState } from "react";
import project1 from "../assets/temp_image_1732782886494.webp";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    id: 1,
    imgSrc: project1,
    title: "Portfolio",
    description:
      "A beautifully crafted portfolio website with interactive animations and dynamic content.",
      link:"#"
  },
  {
    id: 2,
    imgSrc: project2,
    title: "The ViseFixit",
    description:
      "A robust solution for maintenance services, offering easy scheduling and payment systems.",
      link: "https://thefixit4u.com/",
  },
  {
    id: 3,
    imgSrc: project3,
    title: "Inpath LMS",
    description:
      "A learning management system designed to provide personalized training experiences.",
    link: "https://inpath.us/",
  },
  {
    id: 4,
    imgSrc: project4,
    title: "Wawas Media",
    description:
      "A media platform for creative storytelling and engaging visuals.",
    link: "https://wawsmedia.vercel.app/",
  },
];

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-darkColor to-primaryColor py-20">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-white text-4xl sm:text-5xl mb-12 font-extrabold drop-shadow-lg">
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              onClick={() => openModal(project)}
            >
              <img
                src={project.imgSrc}
                alt={`${project.title} preview`}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-30"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-2xl text-white font-semibold">
                  View Project
                </p>
              </div>
              <p className="absolute bottom-4 left-4 text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
              aria-label="Close Modal"
            >
              ×
            </button>
            <h3
              id="modal-title"
              className="text-2xl font-semibold text-center mb-4 text-gray-800"
            >
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.imgSrc}
              alt={`${selectedProject.title} full view`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg text-gray-600">
              {selectedProject.description}{" "}
              {selectedProject.link && (
                <span className="text-secondaryColor">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    Visit Site
                  </a>
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
