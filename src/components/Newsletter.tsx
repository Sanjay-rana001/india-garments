"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-[#D7C4A5] text-[#111111]">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif mb-3 font-bold tracking-wide"
        >
          STAY IN THE LOOP
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs sm:text-lg font-light mb-8 opacity-85 leading-relaxed max-w-lg"
        >
          New drops, exclusive collections and style inspiration — straight to your inbox.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md flex border-b-2 border-[#111111] pb-2 group"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[#111111]/60 text-xs sm:text-sm tracking-widest font-semibold"
            required
          />
          <button type="submit" className="flex items-center gap-1.5 text-xs sm:text-sm tracking-widest font-bold uppercase hover:opacity-70 transition-all">
            Join Us <ArrowRight size={15} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
