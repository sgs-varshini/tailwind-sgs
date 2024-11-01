import React from 'react';

const Input = ({ type = 'text', placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      className={`border p-2 rounded ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
