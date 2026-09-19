"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white pt-16 sm:pt-0">
      {/* Background Image with slow cinematic zoom */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{
          backgroundImage: "url('/images/hero_indian_1789818652337.jpg')",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-white/80 tracking-[0.25em] text-xs sm:text-sm uppercase mb-4 font-medium"
        >
          A Heritage of Elegance
        </motion.p>
        
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
            className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest uppercase leading-tight font-bold"
          >
            INDIA GARMENTS
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-4 max-w-xs sm:max-w-none"
        >
          <a href="#men" className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-semibold tracking-widest uppercase text-xs rounded-none active:bg-neutral-200 transition-colors shadow-lg">
            Shop Men
          </a>
          <a href="#women" className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/80 text-white font-semibold tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-colors backdrop-blur-xs">
            Shop Women
          </a>
        </motion.div>
      </div>
    </section>
  );
}
