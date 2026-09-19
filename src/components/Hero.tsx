"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Background Image with slow cinematic zoom */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('/images/hero_indian_1789818652337.jpg')",
        }}
      />
      
      {/* Subtle Grain Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }}
      />
      
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 tracking-[0.2em] text-sm md:text-base uppercase mb-6"
        >
          A Heritage of Elegance
        </motion.p>
        
        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide"
          >
            INDIA GARMENTS
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 flex gap-6"
        >
          <a href="#men" className="px-8 py-3 bg-white text-black font-medium tracking-widest uppercase text-sm hover:bg-neutral-200 transition-colors">
            Shop Men
          </a>
          <a href="#women" className="px-8 py-3 bg-transparent border border-white text-white font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors">
            Shop Women
          </a>
        </motion.div>
      </div>
    </section>
  );
}
