
import React from "react";
import UIButton from "./UIButton";
import { Link } from "react-router";
import logo from "../assets/business-logo.png";

const Navbar = () => {
    return (
        <nav className="w-full shadow-sm">
            <div className="w-11/12 mx-auto flex items-center justify-between px-4 md:px-6 py-3">
                {/* Logo */}

                <img
                    src={logo}
                    alt="ScapeSync Logo"
                    className="h-12 w-auto"
                />

                {/* Get Started Button */}

                <Link to="/register">
                    <UIButton>Get Started</UIButton>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;