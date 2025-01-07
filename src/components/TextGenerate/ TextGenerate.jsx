"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../ultis";

const TextGenerate = ({
  words,
  className,
  filter = true,
  duration = 0.999,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); // Delay the animation to trigger after component mounts
    return () => clearTimeout(timer);
  }, []);

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black font-dela opacity-0"
            style={{
              filter: filter && !isAnimated ? "blur(10px)" : "none",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              filter: filter && isAnimated ? "blur(0px)" : "none",
            }}
            transition={{
              duration: duration,
              delay: idx * 0.2, // Stagger the animations
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-dela", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black font-dela text-7xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerate;