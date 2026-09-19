"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Increment quickly to simulate loading
      currentProgress += Math.floor(Math.random() * 8) + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // short pause at 100%
      }
      setProgress(currentProgress);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: isLoading ? "0%" : "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-[#FAFAFA] text-4xl md:text-6xl font-serif tracking-widest uppercase"
        >
          India Garments
        </motion.h1>
      </div>

      <motion.div 
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-[#FAFAFA] text-sm tracking-widest font-medium font-sans"
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
