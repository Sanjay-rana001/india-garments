"use client";

import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

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
  id,
  name,
  category,
  price,
  image1,
  isNew,
}: ProductCardProps) {
  const { likedIds, toggleWishlist } = useWishlist();
  const isLiked = likedIds.has(id);

  return (
    <div className="group cursor-pointer flex flex-col gap-2.5 sm:gap-3 w-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm">
        {isNew && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-white/95 text-black text-[9px] sm:text-[10px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-semibold shadow-xs">
            New
          </div>
        )}
        
        {/* Wishlist Button with Flying Animation Trigger */}
        <motion.button 
          whileTap={{ scale: 0.75 }}
          onClick={(e) => toggleWishlist(id, e)}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-20 p-2 rounded-full transition-all duration-300 ${
            isLiked 
              ? "bg-white text-red-500 shadow-md opacity-100 scale-110" 
              : "bg-white/80 sm:bg-transparent text-black sm:opacity-0 group-hover:opacity-100 hover:bg-white hover:shadow-md"
          }`}
          aria-label="Add to Wishlist"
        >
          <Heart 
            size={17} 
            className={`transition-all duration-300 ${isLiked ? "fill-red-500 text-red-500" : "hover:text-red-500"}`} 
          />
        </motion.button>

        {/* Product Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-105 z-10"
          style={{ backgroundImage: `url(${image1})` }}
        />

        {/* Quick Add Button */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-20 sm:translate-y-3 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-white/95 backdrop-blur-md text-black py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-widest uppercase font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm rounded-xs">
            <Plus size={13} /> Add
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <span className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider font-medium truncate">{category}</span>
        <h3 className="text-xs sm:text-sm font-medium text-black leading-snug line-clamp-1">{name}</h3>
        <span className="text-xs sm:text-sm font-semibold text-neutral-900 mt-0.5">{price}</span>
      </div>
    </div>
  );
}
