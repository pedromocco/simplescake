import React from "react";

const Background = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="600"
      viewBox="0 0 1440 600"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fdf2f8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#fbcfe8;stop-opacity:1" />
        </linearGradient>
        <pattern
          id="pattern1"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="2" fill="#db2777" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
      <rect width="100%" height="100%" fill="url(#pattern1)" />
    </svg>
  );
};

export default Background;
