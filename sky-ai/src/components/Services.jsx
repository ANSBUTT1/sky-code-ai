import React from 'react';

const servicesData = [
    { title: "AI & Machine Learning", description: "Implement AI-driven solutions for automation and decision-making." },
    { title: "Cloud Server Management", description: "Scalable cloud server setups for efficient data handling and storage." },
    { title: "Custom Tech Solutions", description: "Bespoke software solutions tailored to meet your business needs." },
];

const Services = () => {
    return (
        <section className="bg-purple-900 p-8 text-center" id="services">
            <h3 className="text-white text-3xl mb-6">Our Services</h3>
            <div className="flex justify-center flex-wrap gap-4">
                {servicesData.map((service, index) => (
                    <div key={index} className="bg-purple-700 p-6 rounded-lg text-white shadow-lg hover:scale-105 transition-transform">
                        <h4 className="text-xl font-semibold">{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;