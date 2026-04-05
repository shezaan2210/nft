import { useState, useEffect } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
     const [displayText, setDisplayText] = useState('');
   
  useEffect(() => {
 let interval: ReturnType<typeof setInterval>;
 let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((_letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};;

export default ScrambleText;