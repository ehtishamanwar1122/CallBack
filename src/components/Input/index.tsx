'use client'

import React from "react";

type InputProps = {
    label?: string;
    error?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>;
  
  const InputComponent: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <input
          className={`w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  };
  
  export const Input=React.memo(InputComponent)
