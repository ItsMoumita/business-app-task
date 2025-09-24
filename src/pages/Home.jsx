import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-[#9DFF9933]/50 via-white to-[#9DFF9933]/40'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
        </div>
    );
};

export default Home;