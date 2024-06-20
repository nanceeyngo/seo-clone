import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import ContactUs from './pages/contact';




const RenderNav = () => {
    return (

        <div>
            <Navbar />

            <Routes>

                <Route path="/" element={<Services />} />
                <Route path="/home" element={<Home title="Home" />} />
                <Route path="/about" element={<About title="About" />} />
                <Route path="/contact-us" element={<ContactUs title="Contact Us" />} />


            </Routes>
        </div>

    );
};

export default RenderNav;
