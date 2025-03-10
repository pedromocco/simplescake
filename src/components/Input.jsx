import React from "react";

const Input = ({placeholder, name, value}) => {
  return (
    <input
      type="text"
      id="base-input"
      placeholder={placeholder}
      name={name}
      value={value}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
    />
  );
};

export default Input;
