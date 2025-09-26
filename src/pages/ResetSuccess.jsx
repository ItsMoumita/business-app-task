
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import firework from "../assets/firework.jpg";

const ResetSuccess = () => {
  const navigate = useNavigate();

  // Auto-redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src="/public/business-logo.png" alt="ScapeSync Logo" className="h-10" />
      </div>

      {/* Center Content */}
      <div className="text-center">
        {/* Fireworks image (replace with Lottie if you want animation 🎆) */}
        <img
          src={firework}
          alt="fireworks"
          className="w-32 h-32 mx-auto mb-6"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Password Changed Successfully!
        </h2>
        <p className="text-gray-500 mt-2">
          Your password has been reset. You can now log in to your account 🚀
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Go To Login
        </button>
      </div>
    </div>
  );
};

export default ResetSuccess;