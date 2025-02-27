'use client'

import React from "react";

type InputProps = {
    label?: string;
    setValue:any;
    value:string;
  } & React.InputHTMLAttributes<HTMLInputElement>;
  
  const InputComponent: React.FC<InputProps> = ({ setValue,label, className, ...props }) => {
  console.log('InputComponentlabel>',label)
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <input
        onChange={(e)=>setValue(e.target.value)}
          className={`w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
           "border-gray-300"
          } ${className}`}
          {...props}
        />
      </div>
    );
  };
  
  export const Input=React.memo(InputComponent)
