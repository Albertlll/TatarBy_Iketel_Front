import React from 'react';

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button
      className=" bg-fgСolor text-bgСolor p-[10px] text-[25px] rounded-[15px] hover:bg-subFgColor disabled:opacity-80 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}>
        
      {children}
    </button>
  );
};

export default Button;