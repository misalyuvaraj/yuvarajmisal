import React from 'react';

const NaukriIcon = ({ size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Blue circular background */}
      <circle cx="32" cy="32" r="28" fill="#2563EB" />
      {/* White dot */}
      <circle cx="44" cy="16" r="5" fill="#ffffff" />
      {/* Stylized ribbon mark */}
      <path
        d="M20 20c8-4 18-1 22 1-8 5-13 9-15 13-2 4-1 9 5 18-9-4-14-9-15-14-1-6 1-14 3-18z"
        fill="#ffffff"
        opacity="0.98"
      />
    </svg>
  );
};

export default NaukriIcon;


