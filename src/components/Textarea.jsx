import React from "react";

const Textarea = ({ children }) => {
  return (
    <textarea
      id="message"
      rows="10"
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
      placeholder="Dime, ¿Qué es lo que necesitas?"
    >
      {children}
    </textarea>
  );
};

export default Textarea;
