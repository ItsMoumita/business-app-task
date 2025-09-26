"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/business-logo.png"; 
import clientImg from "../assets/role-client.png";    
import ownerImg from "../assets/role-owner.png";
import Loader from "../components/Loader";

const UserRole = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
   const [loading, setLoading] = useState(false); 

 const handleSelect = (role) => {
  setSelectedRole(role);


  setTimeout(() => {
    setLoading(true);
    // Redirect after loader shows
    setTimeout(() => {
      navigate("/register", { state: { role } });
    }, 1500);
  }, 1500); 
};

   if (loading) return <Loader />;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-12 mb-6" />

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 text-center">Who Are You?</h2>
      <p className="text-gray-500 text-center mb-12">
        Choose the option that best describes you so we can tailor your experience.
      </p>

      {/* Options */}
      <div className="flex gap-8">
        {/* Client Role */}
        <div
          onClick={() => handleSelect("client")}
          className={`cursor-pointer w-64 h-48 border rounded-lg flex flex-col items-center justify-center p-6 shadow-sm transition 
            ${selectedRole === "client" ? "bg-green-100 border-green-500" : "bg-white border-gray-200"}`}
        >
          <img src={clientImg} alt="client" className="w-16 h-16 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800">I’m a Client</h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Discover services & track projects effortlessly.
          </p>
        </div>

        {/* Business Owner Role */}
        <div
          onClick={() => handleSelect("business_owner")}
          className={`cursor-pointer w-64 h-48 border rounded-lg flex flex-col items-center justify-center p-6 shadow-sm transition 
            ${selectedRole === "business_owner" ? "bg-green-100 border-green-500" : "bg-white border-gray-200"}`}
        >
          <img src={ownerImg} alt="owner" className="w-16 h-16 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800">I’m a Business Owner</h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Manage jobs, staff & clients with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRole;