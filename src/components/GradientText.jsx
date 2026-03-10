import React from 'react';

export function GradientText({ children, className = "" }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-pink-300 ${className}`}>
      {children}
    </span>
  );
}
