import React from "react";

const Label = ({ children }) => {
  return (
    <label
      htmlFor="base-input"
      className="block mb-2 text-sm font-medium"
    >
      {children}
    </label>
  );
};

export default Label;
