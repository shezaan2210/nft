import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Initialize the spatial hum sound
  useEffect(() => {
    // Deep space engine thrum
    audioRef.current = new Audio("https://cdn.freesound.org/previews/234/234292_4125860-lq.mp3");
    audioRef.current.volume = 0;
    audioRef.current.loop = true;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate raw percentage (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);

    // AUDIO PHYSICS: Alter the pitch and volume based on how far the card is tilted
    if (audioRef.current) {
      // Calculate total tilt intensity (0 to 1)
      const intensity = Math.abs(normalizedX) + Math.abs(normalizedY);
      
      // Pitch shifts up as the card tilts harder
      audioRef.current.playbackRate = 0.8 + (intensity * 0.4); 
      // Volume increases as you move towards the edges
      audioRef.current.volume = Math.min(0.3, 0.1 + (intensity * 0.2));
    }
  };

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (audioRef.current) {
      // Fade out the hum smoothly instead of cutting it abruptly
      let vol = audioRef.current.volume;
      const fade = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05;
          if(audioRef.current) audioRef.current.volume = vol;
        } else {
          if(audioRef.current) {
            audioRef.current.pause();
            audioRef.current.volume = 0;
          }
          clearInterval(fade);
        }
      }, 50);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full relative z-20">
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;