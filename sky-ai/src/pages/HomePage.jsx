import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection';
import CTAScetion from '../components/CTAScetion';
import ContactUsForm from '../components/ContactUsForm';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <AboutSection/>
            <Services />
            <PortfolioSection/>
            <TestimonialSection/>
            <CTAScetion/>
            <ContactUsForm/>
        </div>
    );
};

export default HomePage;