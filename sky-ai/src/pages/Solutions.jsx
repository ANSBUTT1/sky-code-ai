import React from 'react'
import { FaRocket, FaShieldAlt, FaCog, FaUsers, FaChartLine, FaRegHandshake } from 'react-icons/fa' // Additional Icons

const Solutions = () => {
  // Sample solutions data (can be fetched dynamically from an API in real apps)
  const solutionsData = [
    {
      id: 1,
      icon: <FaRocket />,
      title: 'Rapid Integration',
      description: 'Our API offers seamless integration with minimal setup, allowing you to quickly connect and start using it.',
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: 'High Security',
      description: 'With top-notch encryption and compliance with industry standards, we ensure your data is always secure.',
    },
    {
      id: 3,
      icon: <FaCog />,
      title: 'Customizable Features',
      description: 'Adapt our API to fit your business needs with flexible configurations and powerful customization options.',
    },
  ]

  // Sample Testimonial Data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CTO, TechCompany',
      feedback: 'This API completely transformed the way we manage our data. The ease of integration was a huge win for our team!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Developer, WebApp Solutions',
      feedback: 'We love the flexibility and scalability of the API. It allows us to customize our solution exactly as we need.',
    },
  ]

  return (
    <div className=" text-white p-8">
      {/* Solutions Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold leading-tight mb-6">Our API Solutions</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Explore the various ways our API can help streamline your workflows, enhance security, and provide custom
          solutions tailored to your business needs.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {solutionsData.map((solution) => (
          <div
            key={solution.id}
            className="bg-white text-black p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl text-primaryColor mb-6">{solution.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{solution.description}</p>
            <button
              className="bg-primaryColor text-white py-3 px-6 rounded-full text-xl hover:bg-light1 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
              aria-label={`Learn more about ${solution.title}`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="bg-light2 text-dark1 bg-white py-16 mt-16 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-primaryColor mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8 ">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-darkColor p-8 shadow-glow rounded-lg shadow-primaryColor  text-center max-w-md">
              <p className="text-lg italic text-white mb-6">"{testimonial.feedback}"</p>
              <h4 className="font-semibold text-primaryColor">{testimonial.name}</h4>
              <p className="text-sm text-white">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center py-16 mt-16 bg-dark1 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-light1 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaUsers className="text-primaryColor text-5xl mb-6" />
            <h3 className="text-2xl text-black font-semibold mb-4">Scalable User Management</h3>
            <p className="text-lg text-gray-700 mb-6">Manage thousands of users effortlessly with dynamic user roles and permissions.</p>
          </div>
          <div className="bg-light1 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaChartLine className="text-primaryColor text-5xl mb-6" />
            <h3 className="text-2xl text-black  font-semibold mb-4">Real-time Analytics</h3>
            <p className="text-lg text-gray-700 mb-6">Get actionable insights in real-time with our API's built-in analytics tools.</p>
          </div>
          <div className="bg-light1 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaCog className="text-primaryColor text-5xl mb-6" />
            <h3 className="text-2xl text-black  font-semibold mb-4">Advanced Customization</h3>
            <p className="text-lg text-gray-700 mb-6">Easily tweak settings to fit your specific needs with our robust API configuration options.</p>
          </div>
        </div>
      </div>

      {/* Additional Solutions Section */}
      <div className="bg-white text-dark1 py-16 mt-16 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primaryColor mb-8">More Tailored Solutions</h2>
        <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
          We also offer other powerful solutions designed for specific industries. Whether you're in finance, healthcare, or tech,
          our API can help streamline your processes with customized features that meet your unique business requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-light1 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaRegHandshake className="text-primaryColor text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Partnership Solutions</h3>
            <p className="text-lg text-gray-700 mb-6">Collaborate with us to create innovative solutions tailored to your business growth.</p>
          </div>
          <div className="bg-light1 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaShieldAlt className="text-primaryColor text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Data Protection</h3>
            <p className="text-lg text-gray-700 mb-6">Ensure compliance with industry standards while maintaining the highest level of data security.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16 py-16 bg-primaryColor text-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you're looking for a simple solution or a complex integration, we have everything you need to power your application with ease.
        </p>
        <button
          className="bg-light1 text-primaryColor py-3 px-6 rounded-full text-xl hover:bg-light2 focus:outline-none focus:ring-2 focus:ring-light2 transition duration-300"
          aria-label="Start using our API"
        >
          Start Using Our API
        </button>
      </div>
    </div>
  )
}

export default Solutions
