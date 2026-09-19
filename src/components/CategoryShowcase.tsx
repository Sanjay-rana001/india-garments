"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-[#FAFAFA] max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Men's Category */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group cursor-pointer relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] flex items-end p-6 md:p-8 rounded-sm w-full"
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-[center_20%] transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/mens_showcase_1789818667090.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
          
          <div className="relative z-20 text-white w-full">
            <h2 className="text-xl md:text-2xl font-serif mb-2">The Men's Edit</h2>
            <div className="flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Magnetic amount={0.5}>
                <span className="text-xs tracking-widest uppercase font-medium inline-block">Explore Collection</span>
              </Magnetic>
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>

        {/* Women's Category */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group cursor-pointer relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] flex items-end p-6 md:p-8 rounded-sm w-full"
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-top transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/womens_showcase_1789818740040.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
          
          <div className="relative z-20 text-white w-full">
            <h2 className="text-xl md:text-2xl font-serif mb-2">The Women's Edit</h2>
            <div className="flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Magnetic amount={0.5}>
                <span className="text-xs tracking-widest uppercase font-medium inline-block">Explore Collection</span>
              </Magnetic>
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
