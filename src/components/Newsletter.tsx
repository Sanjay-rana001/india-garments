"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Magnetic from "./Magnetic";

export default function Newsletter() {
  return (
    <section className="py-24 px-6 bg-[#D7C4A5] text-[#111111]">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          STAY IN THE LOOP.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-light mb-10 opacity-80"
        >
          New drops, exclusive collections and style inspiration — straight to your inbox.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md flex border-b border-[#111111] pb-2 group"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="bg-transparent border-none outline-none flex-1 placeholder:text-[#111111]/50 text-sm tracking-widest font-medium"
            required
          />
          <Magnetic amount={0.3}>
            <button type="submit" className="flex items-center gap-2 text-sm tracking-widest font-bold uppercase hover:opacity-60 transition-transform group-hover:translate-x-2">
              Join Us <ArrowRight size={16} />
            </button>
          </Magnetic>
        </motion.form>
      </div>
    </section>
  );
}
