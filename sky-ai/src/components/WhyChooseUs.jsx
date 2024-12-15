import React from "react";
import {Link} from "react-router-dom"
import why from "../assets/why.jpg";

const WhyChooseUs = () => {
    return (
        <section className="py-16 min-h-screen flex bg-gray-100">
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-4">
                {/* Left Side Content */}
                <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif text-secondaryColor mb-6">
                        Why Choose <span className="text-primaryColor">Us?</span>
                    </h2>
                    <p className="text-base sm:text-lg text-darkColor mb-6">
                        We are committed to delivering exceptional services tailored to your
                        needs. Our expertise, dedication, and innovative solutions set us
                        apart in the industry.
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm sm:text-base">
                        <li><span className="font-semibold">Experienced Team:</span> Our experts bring years of experience to every project.</li>
                        <li><span className="font-semibold">Customer-Centric Approach:</span> We prioritize your satisfaction at every step.</li>
                        <li><span className="font-semibold">Cutting-Edge Technology:</span> Stay ahead with the latest tools and strategies.</li>
                        <li><span className="font-semibold">Proven Track Record:</span> Trusted by numerous clients across diverse industries.</li>
                    </ul>
                    <div className="flex justify-center lg:justify-start items-center mt-8">
                        <Link to='/contact'>
                        <button className="bg-primaryColor hover:bg-primaryColor/70 font-bold shadow-glow shadow-darkColor text-white py-2 px-8 rounded-md">
                            Contact Us
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src={why}
                        alt="Why Choose Us"
                        className="rounded-lg shadow-glow bg-fixed bg-covert shadow-primaryColor w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
