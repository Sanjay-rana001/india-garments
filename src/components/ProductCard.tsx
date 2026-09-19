"use client";

import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image1: string;
  image2?: string;
  isNew?: boolean;
}

export default function ProductCard({
  name,
  category,
  price,
  image1,
  image2,
  isNew,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        {isNew && (
          <div className="absolute top-4 left-4 z-20 bg-white text-black text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
            New
          </div>
        )}
        
        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-20 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Heart size={20} className="text-black hover:fill-black transition-colors" />
        </button>

        {/* Images with Parallax */}
        <motion.div 
          className="absolute -inset-4 bg-cover bg-top transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10"
          style={{ backgroundImage: `url(${image1})` }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute -inset-4 bg-cover bg-top transition-transform duration-1000 group-hover:scale-105 z-0"
          style={{ backgroundImage: `url(${image2 || image1})` }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Quick Add */}
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-white/90 backdrop-blur-md text-black py-3 text-xs tracking-widest uppercase font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500 uppercase tracking-wider">{category}</span>
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-black leading-snug">{name}</h3>
          <span className="text-sm font-medium">{price}</span>
        </div>
        <div className="flex gap-1 mt-1">
          <div className="w-3 h-3 rounded-full bg-black border border-neutral-200" />
          <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300" />
          <div className="w-3 h-3 rounded-full bg-stone-500 border border-neutral-200" />
        </div>
      </div>
    </div>
  );
}
