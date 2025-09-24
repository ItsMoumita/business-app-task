
import React from "react";

const UIButton = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2 
        rounded-lg 
        bg-[#3BA334] 
        text-white 
        font-medium 
        text-center 
        cursor-pointer 
        transition 
        duration-300 
        hover:shadow-[7px_5px_56px_-14px_#3BA334] 
        active:scale-95 
        active:shadow-[7px_5px_56px_-10px_#3BA334]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default UIButton;
