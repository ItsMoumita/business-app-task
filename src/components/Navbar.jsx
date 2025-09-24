
import React from "react";
import UIButton from "./UIButton";

const Navbar = () => {
    return (
        <nav className="w-full shadow-sm">
            <div className="w-11/12 mx-auto flex items-center justify-between px-4 md:px-6 py-3">
                {/* Logo */}

                <img
                    src="/public/business-logo.png"
                    alt="ScapeSync Logo"
                    className="h-12 w-auto"
                />

                {/* Get Started Button */}

                <UIButton onClick={() => alert("Clicked!")}>
                    Get Started
                </UIButton>

            </div>
        </nav>
    );
};

export default Navbar;