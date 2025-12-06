import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Activities from '../components/Activities';
import FAQ from '../components/FAQ';
import JoinUs from '../components/JoinUs';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Courses />
            <Activities />
            <FAQ />
            <JoinUs />
        </>
    );
};

export default Home;
