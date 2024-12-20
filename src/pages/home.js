// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import HomeSection from '../components/Homeseaction';
import AboutSection from '../components/About';
import ServicesSection from '../components/Services';
import ProjectsSection from '../components/Projects';
import ContactSection from '../components/Contact';
import Footer from '../components/footer';

const Home = () => {
    
    return (
        <div>
            <NavBar/>
            <HomeSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <ContactSection/>
            
            <Footer/>
        </div>
    );
};

export default Home;
