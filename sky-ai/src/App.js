import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
// import SearchPortal from './components/SearchPortal'; // Import the SearchPortal component
import HomePage from '../src/pages/HomePage'; // Import the HomePage component
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactUsForm from './components/ContactUsForm';
import Solutions from './pages/Solutions';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
                <Route path="/services" element={<ServicesPage />} /> {/* Route for SearchPortal */}
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/contact' element={<ContactUsForm/>} /> 
                <Route path='/soltions' element={<Solutions/>}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
