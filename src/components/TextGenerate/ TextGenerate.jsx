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

  // Reemplaza "<br />" con un marcador especial para luego separarlo
  let wordsArray = words.split(/(<br \/>)/).filter(Boolean);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); // Delay the animation to trigger after component mounts
    return () => clearTimeout(timer);
  }, []);

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => {
          // Si encontramos el marcador "<br />", lo renderizamos como un <br />
          if (word === "<br />") {
            return <br key={idx} />;
          }
          return (
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
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-dela", className)}>
      <div className="mt-4">
        <div className="max-sm:text-6xl  dark:text-white items-center font-dela text-8xl ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerate;