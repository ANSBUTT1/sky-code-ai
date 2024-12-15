import React from 'react';
import background from "../assets/background.jpg";

const Information = () => {
    const trendingTechnologies = [
        {
            title: "Artificial Intelligence (AI) & Machine Learning (ML)",
            description:
                "AI and ML are transforming industries with predictive analytics, autonomous systems, and intelligent decision-making.",
        },
        {
            title: "Blockchain",
            description:
                "Blockchain technology offers secure and transparent solutions, revolutionizing finance, supply chain, and digital contracts.",
        },
        {
            title: "5G Technology",
            description:
                "With ultra-fast internet speeds and low latency, 5G is enabling smarter cities and seamless IoT connectivity.",
        },
        {
            title: "Cloud Computing",
            description:
                "Cloud computing provides scalable, on-demand computing resources, powering modern applications and services.",
        },
        {
            title: "Cybersecurity Innovations",
            description:
                "Innovative solutions like AI-driven threat detection ensure data security in an increasingly digital world.",
        },
        {
            title: "AR & VR",
            description:
                "Augmented and Virtual Reality are creating immersive experiences in gaming, education, and retail.",
        },
        {
            title: "Internet of Things (IoT)",
            description:
                "IoT connects devices to the internet, enabling smarter homes, connected supply chains, and better healthcare.",
        },
        {
            title: "Quantum Computing",
            description:
                "Quantum computing harnesses quantum mechanics to solve problems that traditional computers cannot handle.",
        },
    ];
    return (
        <section
            className="bg-fixed  bg-center bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center text-white"
            style={{
                backgroundImage: `url(${background})`,  // Corrected here
            }}
        >
            <div className="container mx-auto py-16 px-8">
                <h2 className="text-4xl font-bold text-center mb-8 font-serif">Trending Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingTechnologies.map((tech, index) => (
                        <div
                            key={index}
                            className="p-6 font-serif bg-darkColor/90 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                            <p className="text-white">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Information;
