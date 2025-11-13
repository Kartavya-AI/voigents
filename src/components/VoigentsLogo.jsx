import React from 'react';

const VoigentsLogo = ({ size = 24, color = "#FF6B35", className = "" }) => {
  const scale = size / 32;
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer decorative frame (rotated square with extended corners) */}
      <path 
        d="M16 2L22 6L26 12L30 16L26 20L22 26L16 30L10 26L6 20L2 16L6 12L10 6L16 2Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner square with rounded corners */}
      <rect 
        x="10" 
        y="10" 
        width="12" 
        height="12" 
        rx="2" 
        stroke={color} 
        strokeWidth="1.5"
        fill="none"
      />
      {/* Microphone - rounded top with grille */}
      <ellipse 
        cx="16" 
        cy="14" 
        rx="3" 
        ry="2.5" 
        stroke={color} 
        strokeWidth="1.5"
        fill="none"
      />
      {/* Grille lines */}
      <line x1="14" y1="14" x2="18" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13.5" y1="13" x2="18.5" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13.5" y1="15" x2="18.5" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Microphone stand */}
      <line x1="16" y1="16.5" x2="16" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="20" x2="18" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default VoigentsLogo;

