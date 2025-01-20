import React from 'react';
import { cn } from '../../../lib/utils';
import { motion } from 'motion/react';

const Button = ({ onClick, children, disabled = false, className, type }) => {
  return (
    <motion.button

      type={type}

        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
      
      className={cn(" bg-fgСolor text-bgСolor py-[10px] text-[25px] px-[22px] rounded-[15px] hover:bg-subFgColor disabled:opacity-80 disabled:cursor-not-allowed transition-colors hover:transition-colors", className)}
      onClick={onClick}
      disabled={disabled}
      >
        
      {children}
    </motion.button>
  );
};

export default Button;