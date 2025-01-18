import React from 'react';
import { cn } from '../../../lib/utils';

const Button = ({ onClick, children, disabled = false, className }) => {
  return (
    <button
      className={cn(" bg-fgСolor text-bgСolor p-[10px] text-[25px] rounded-[15px] hover:bg-subFgColor disabled:opacity-80 disabled:cursor-not-allowed", className)}
      onClick={onClick}
      disabled={disabled}>
        
      {children}
    </button>
  );
};

export default Button;