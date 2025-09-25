"use client";
import React, { useEffect } from "react";
import appleStore from "../assets/apple.png";
import playStore from "../assets/Playstore.png";
import phoneImg from "../assets/task-img1.png";
import { Link } from "react-router";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease", 
      once: false, 
    });
  }, []);

  // Animation setup
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="w-full py-16 shadow-[0_10px_20px_-5px_rgba(255,255,255,0.8)] ">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">

        {/* Left Content */}
        <div data-aos="zoom-in-right" className="max-w-50% text-center md:text-left md:pl-4">

          {/* 🔥 Animated Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#212B36] leading-tight">
            
            {/* Line 1 - "All Your Jobs," */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center md:justify-start"
            >
              {"All Your Jobs,".split(" ").map((word, i) => (
                <motion.span key={i} variants={child} className="mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Line 2 - "One Smart App" */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center md:justify-start"
            >
              {"One Smart App".split(" ").map((word, i) => (
                <motion.span key={i} variants={child} className="mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.div>

          </h1>

          <p className="mt-6 text-[#637381] max-w-lg mx-auto md:mx-0">
            Built for business owners, employees, and clients to streamline job
            scheduling, service tracking, and team management in one powerful app.
          </p>

          {/* Store Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            {/* App Store */}
            <Link
              to="#"
              className="flex items-center gap-3 border border-green-500 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
            >
              <img src={appleStore} alt="App Store" className="h-8 w-8" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-600">Download on the</span>
                <span className="text-lg font-semibold text-gray-900">App Store</span>
              </div>
            </Link>

            {/* Google Play */}
            <Link
              to="#"
              className="flex items-center gap-3 border border-green-500 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
            >
              <img src={playStore} alt="Google Play" className="h-8 w-8" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-600">Download on</span>
                <span className="text-lg font-semibold text-gray-900">Google Play</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Content - Phone Image */}
        <div data-aos="zoom-in-left" className="max-w-50% mt-12 md:mt-0 md:mr-6 lg:mr-12 flex justify-center">
          <img src={phoneImg} alt="App preview" className="max-h-[500px] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;