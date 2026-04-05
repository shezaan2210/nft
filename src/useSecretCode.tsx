import { useState, useEffect } from 'react';

// MUST HAVE 'export default' HERE
const useSecretCode = (secretCode: string) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setInput((prev) => {
        const updated = prev + key;
        if (updated.includes(secretCode.toLowerCase())) {
          setIsUnlocked(true);
          return '';
        }
        return updated.slice(-secretCode.length);
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [secretCode]);

  return { isUnlocked, setIsUnlocked };
};

export default useSecretCode;