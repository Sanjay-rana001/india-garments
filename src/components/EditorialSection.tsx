"use client";

import { motion } from "framer-motion";

export default function EditorialSection() {
  return (
    <section className="relative min-h-[400px] h-[55vh] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-scroll sm:bg-fixed"
        style={{
          backgroundImage: "url('/images/editorial_indian_1789818759116.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 leading-tight font-bold tracking-wide"
        >
          STYLE IS AN ATTITUDE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs sm:text-base font-light mb-6 sm:mb-8 text-white/90 tracking-wider"
        >
          Discover pieces designed to move with you.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#new-arrivals" className="px-6 py-3 sm:px-9 sm:py-3.5 bg-white text-black font-semibold tracking-widest uppercase text-xs hover:bg-neutral-200 transition-colors shadow-md">
            Explore The Edit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
