import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    // Custom tension loading logic
    const interval = setInterval(() => {
      // Fast to 80%, slow to 99%, snap to 100%
      if (currentProgress < 80) {
        currentProgress += Math.random() * 10 + 5;
      } else if (currentProgress < 99) {
        currentProgress += Math.random() * 2 + 0.5;
      } else {
        currentProgress = 100;
      }

      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
        // Trigger the exit animation, then tell App.tsx to remove this component
        setTimeout(() => {
          onComplete();
        }, 400); // Small pause at 100% before the door opens
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

// Premium easing curve (fast start, heavy deceleration)
  // Premium easing curve (fast start, heavy deceleration)
  const slideUp: Variants = {
    initial: { y: 0 },
    exit: {
      y: "-100vh",
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[100] bg-background flex flex-col justify-between p-6 sm:p-12 cursor-none overflow-hidden"
    >
      {/* Top HUD */}
      <div className="w-full flex justify-between text-[10px] sm:text-[12px] text-cream/50 uppercase tracking-[0.2em] font-mono">
        <div>System.Init_</div>
        <div className="text-right">
          LAT: 45.92<br/>
          LONG: -12.44
        </div>
      </div>

      {/* Center Massive Counter */}
      <div className="flex flex-col items-center justify-center relative">
        <motion.div 
          className="font-grotesk text-[25vw] sm:text-[20vw] text-cream leading-none tracking-tighter mix-blend-difference"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {progress}
        </motion.div>
        
        {/* Absolute positioned cursive text cutting across the massive number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-condiment text-neon text-[32px] sm:text-[48px] -rotate-2 mix-blend-exclusion">
          Orbis
        </div>
      </div>

      {/* Bottom Progress Bar & Status */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between text-[10px] sm:text-[12px] text-cream/50 uppercase tracking-[0.2em] font-mono">
          <div>Establishing connection...</div>
          <div>{progress}%</div>
        </div>
        
        {/* Full width loading bar */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-neon origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: "circOut", duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;