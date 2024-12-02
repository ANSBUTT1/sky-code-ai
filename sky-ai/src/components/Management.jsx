import React from 'react'

const Management = () => {
  return (
    <div className="bg-light2 text-dark1 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Icon */}
      <div className="text-primary text-4xl mb-4">
        <i className="fas fa-cogs"></i> {/* Replace with a React Icon */}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Management</h2>

      {/* Description */}
      <p className="text-lg mb-4">
        Effortlessly manage users, content, and administrative tasks with our intuitive tools.
      </p>

      {/* Call to Action Button */}
      <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-light1 transition duration-200">
        Learn More
      </button>
    </div>
  )
}

export default Management
