import React from "react";
import { FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import appleStoreFooter from "../assets/apple-footer.png";
import playStore from "../assets/Playstore.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-[#073B35] text-white py-12 overflow-hidden px-4 md:px-6 ">

      {/* ✅ 1st SVG - Top Right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="433"
        height="134"
        viewBox="0 0 433 134"
        fill="none"
        className="absolute top-0 right-0 z-0 opacity-20"
      >
        <path
          d="M349.813 121.16C408.848 168.289 450.533 65.3761 463.997 8.02822L289.858 -282.478C192.196 -223.29 -2.48875 -80.4737 0.067836 17.2813C3.26356 139.475 79.1714 51.896 170.946 29.8957C262.721 7.89537 276.019 62.2474 349.813 121.16Z"
          fill="#39A432"
        />
      </svg>

      {/* ✅ 2nd SVG - Bottom Right (slightly left beside 3rd) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="379"
        height="156"
        viewBox="0 0 379 156"
        fill="none"
        className="absolute bottom-0 right-60 z-0 opacity-20"
      >
        <path
          d="M61.938 62.0563C0.920934 46.3309 -3.47066 127.815 1.96068 170.522L224.983 319.893C286.957 252.665 403.447 101.771 373.611 36.0209C336.317 -46.1669 299.959 34.3497 232.17 74.6689C164.38 114.988 138.209 81.7131 61.938 62.0563Z"
          fill="#39A432"
        />
      </svg>

      {/* ✅ 3rd SVG - Bottom Most Right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="324"
        viewBox="0 0 134 324"
        fill="none"
        className="absolute top-6 bottom-0 right-0 z-0 opacity-20"
      >
        <path
          d="M33.3927 198.993C-28.7814 216.196 12.3265 290.221 40.6522 325.084L318.605 343.168C335.849 252.394 354.728 60.1586 292.292 17.4159C214.247 -36.0125 226.795 53.4317 189.605 123.459C152.415 193.486 111.11 177.49 33.3927 198.993Z"
          fill="#39A432"
        />
      </svg>

      {/* ✅ Footer Content */}
      <div className="relative z-10 w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* Left Side */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-2">
            <img src="/footer-logo.png" alt="Logo" className="h-20" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-3 md:mt-12 text-xl">
            <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={25} className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <RiTwitterXFill size={25} className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link to="https://www.facebook.com/softvenceagency" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} className="cursor-pointer hover:text-gray-300" />
            </Link>
          </div>
        </div>

        {/* Middle Divider */}
        <p className="text-gray-300 text-sm leading-relaxed w-3/4 lg:w-1/3 mx-auto">
          Your all-in-one platform for job scheduling, employee management, and
          client service built to keep your business running smoothly from anywhere.
        </p>

        {/* Right Side - Store Buttons */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-3 border border-[#347C30] rounded-lg px-4 py-2 hover:bg-green-900 transition"
            >
              <img src={appleStoreFooter} alt="App Store" className="h-8 w-8" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs text-gray-300">Download on the</span>
                <span className="text-sm font-semibold text-white">App Store</span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border border-[#347C30] rounded-lg px-4 py-2 hover:bg-green-900 transition"
            >
              <img src={playStore} alt="Google Play" className="h-8 w-8" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs text-gray-300">Download on</span>
                <span className="text-sm font-semibold text-white">Google Play</span>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="relative z-10 w-11/12 mx-auto border-t border-gray-600 mt-10 pt-3 text-center text-xs text-gray-400">
        © 2021-2025, ScapeSync. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;