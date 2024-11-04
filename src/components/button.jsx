import React from 'react';
import './index.css';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
