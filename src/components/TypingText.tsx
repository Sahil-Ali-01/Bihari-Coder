import { useEffect, useState } from 'react';

const TypingText = ({ texts, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentText, setCurrentText] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const fullText = texts[currentText];
      if (!deleting) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [charIndex, deleting, currentText, speed, pause, texts]);

  return (
    <span className="text-coder-purple block text-4xl md:text-5xl lg:text-6xl font-bold">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
