import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouse} 
      onMouseLeave={reset} 
      // Added z-[60] to ensure the hitbox pierces through all layers
      className="relative inline-flex items-center justify-center cursor-none z-[60]"
    >
      <motion.div animate={{ x, y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Magnetic;