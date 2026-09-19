"use client";

import { motion } from "framer-motion";

export default function EditorialSection() {
  return (
    <section className="relative h-[60vh] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Background with parallax effect via fixed attachment (pseudo-parallax) or standard cover */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/editorial_indian_1789818759116.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif mb-4 leading-tight"
        >
          STYLE IS <br/> AN ATTITUDE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg font-light mb-8"
        >
          Discover pieces designed to move with you.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#" className="px-10 py-4 bg-white text-black font-medium tracking-widest uppercase text-sm hover:bg-black hover:text-white transition-colors duration-300">
            Explore The Edit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
