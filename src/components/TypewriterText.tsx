import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  roles?: string[]; // Array of role names to make bold and colored
}

const TypewriterText = ({ text, speed = 50, delay = 0, className = "", roles = [] }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      timer = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
    };

    const delayTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [text, speed, delay]);

  // Function to render text with special formatting for roles
  const renderFormattedText = () => {
    let result: (string | JSX.Element)[] = [];
    let remainingText = displayedText;
    let key = 0;

    roles.forEach((role) => {
      const parts = remainingText.split(role);
      if (parts.length > 1) {
        result.push(parts[0]);
        result.push(
          <span key={key} className="font-bold text-primary text-lg md:text-xl">
            {role}
          </span>
        );
        remainingText = parts.slice(1).join(role);
        key++;
      }
    });

    result.push(remainingText);

    return result;
  };

  return (
    <span className={className}>
      {roles.length > 0 ? renderFormattedText() : displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypewriterText;
