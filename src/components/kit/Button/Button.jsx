import s from "./Button.module.css"

import React from 'react';

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}>
        
      {children}
    </button>
  );
};

export default Button;