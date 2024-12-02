import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
// import SearchPortal from './components/SearchPortal'; // Import the SearchPortal component
import HomePage from '../src/pages/HomePage'; // Import the HomePage component
import ServicesPage from './pages/ServicesPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
                <Route path="/services" element={<ServicesPage />} /> {/* Route for SearchPortal */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
