"use client";

import { motion } from "framer-motion";

const statement = "PREMIUM QUALITY • MODERN FIT • TIMELESS STYLE • DESIGNED FOR EVERYDAY • ";
const words = statement.repeat(4);

export default function Marquee() {
  return (
    <div className="w-full bg-[#111111] text-[#FAFAFA] overflow-hidden py-4 border-y border-neutral-800">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="whitespace-nowrap font-sans text-xs md:text-sm tracking-[0.2em]"
      >
        <span>{words}</span>
      </motion.div>
    </div>
  );
}
