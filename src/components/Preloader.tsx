"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 3;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
      setProgress(currentProgress);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100%" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 h-[100dvh] w-screen z-[100] bg-[#111111] flex flex-col items-center justify-center px-4 text-center pointer-events-none select-none"
    >
      {/* Centered Brand Title */}
      <div className="overflow-hidden py-2 px-2 max-w-full">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: isLoading ? "0%" : "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="text-[#FAFAFA] text-2xl sm:text-5xl md:text-6xl font-serif tracking-[0.25em] uppercase font-bold text-center leading-normal"
        >
          India Garments
        </motion.h1>
      </div>

      {/* Progress Bar & Percentage */}
      <div className="mt-8 flex flex-col items-center gap-3 w-48 max-w-[70vw]">
        <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#D7C4A5]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.div
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#D7C4A5] text-xs tracking-[0.2em] font-medium font-sans"
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
}
