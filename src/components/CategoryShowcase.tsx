"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CategoryShowcase() {
  return (
    <section className="py-12 sm:py-20 bg-[#FAFAFA] max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Men's Category */}
        <motion.a 
          href="#men"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden h-[240px] sm:h-[360px] md:h-[460px] flex items-end p-5 sm:p-8 rounded-sm w-full block"
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-[center_20%] transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/mens_showcase_1789818667090.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          
          <div className="relative z-20 text-white w-full">
            <h2 className="text-lg sm:text-2xl font-serif mb-1 sm:mb-2 font-medium">The Men's Edit</h2>
            <div className="flex items-center justify-between w-full text-xs tracking-widest uppercase font-medium">
              <span className="inline-block border-b border-white/60 pb-0.5">Explore Collection</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.a>

        {/* Women's Category */}
        <motion.a 
          href="#women"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group relative overflow-hidden h-[240px] sm:h-[360px] md:h-[460px] flex items-end p-5 sm:p-8 rounded-sm w-full block"
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/womens_showcase_1789818740040.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          
          <div className="relative z-20 text-white w-full">
            <h2 className="text-lg sm:text-2xl font-serif mb-1 sm:mb-2 font-medium">The Women's Edit</h2>
            <div className="flex items-center justify-between w-full text-xs tracking-widest uppercase font-medium">
              <span className="inline-block border-b border-white/60 pb-0.5">Explore Collection</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  );
}
