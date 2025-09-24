import React from "react";
import appleStore from "../assets/apple.png";
import playStore from "../assets/Playstore.png";
import phoneImg from "../assets/task-img1.png";
import { Link } from "react-router";

const Hero = () => {
    return (
        <section className="w-full py-16 shadow-[0_10px_20px_-5px_rgba(255,255,255,0.8)] ">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">

                {/* Left Content */}
                <div className="max-w-50% text-center md:text-left md:pl-4">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#212B36] leading-tight">
                        All Your Jobs <br />
                        <span className="text-[#212B36] relative">
                            One Smart App
                        </span>
                    </h1>

                    <p className="mt-6 text-[#637381] max-w-lg mx-auto md:mx-0">
                        Built for business owners, employees, and clients to streamline job
                        scheduling, service tracking, and team management in one powerful app.
                    </p>

                    {/* Store Buttons */}
                    <div className="mt-8 flex  gap-4 justify-center md:justify-start">

                        {/* App Store Button */}
                        <Link
                            to="#"
                            className="flex items-center gap-3 border border-green-500 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                        >
                            <img src={appleStore} alt="App Store" className="h-8 w-8" />
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-xs text-gray-600">Download on the</span>
                                <span className="text-lg font-semibold text-gray-900">App Store</span>
                            </div>
                        </Link>

                        {/* Google Play Button */}
                        <Link
                            to="#"
                            className="flex items-center gap-3 border border-green-500 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                        >
                            <img src={playStore} alt="Google Play" className="h-8 w-8" />
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-xs text-gray-600">Download on</span>
                                <span className="text-lg font-semibold text-gray-900">Google Play</span>
                            </div>
                        </Link>

                    </div>
                </div>

                {/* Right Content (Phone Image) */}
                <div className="max-w-50% mt-12 md:mt-0 md:mr-6 lg:mr-12 flex justify-center">
                    <img src={phoneImg} alt="App preview" className="max-h-[500px] object-contain" />
                </div>
            </div>

            
        </section>
    );
};

export default Hero;
