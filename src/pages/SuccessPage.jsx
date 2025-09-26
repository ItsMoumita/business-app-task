
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import firework from "../assets/firework.jpg";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <img src="./public/business-logo.png" alt="logo" className="h-10 mb-6" />
      <div className="text-center">
        <img src={firework}
          alt="fireworks" className="w-35 h-40 mx-40 mb-6" />
        <h2 className="text-2xl font-bold">Account Created Successfully!</h2>
        <p className="text-gray-500 mt-2">Redirecting to login...</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;