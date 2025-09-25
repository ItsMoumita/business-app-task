import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import Testimonials from '../components/Testimonials';
import Accordion from '../components/Accordion';

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-[#9DFF9933]/50 via-white to-[#9DFF9933]/40'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Detail></Detail>
            <Testimonials></Testimonials>
            <Accordion></Accordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;