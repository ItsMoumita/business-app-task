"use client";
import React from "react";
import Lottie from "lottie-react";
import sandyLoader from "../assets/SandyLoading.json"; 

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Lottie Animation */}
      <Lottie 
        animationData={sandyLoader} 
        loop={true} 
        className="w-48 h-48" 
      />

      {/* Loading Text */}
      <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
        Loading <span className="text-[#3BA334]">ScapeSync</span>...
      </p>
    </div>
  );
};

export default Loader;