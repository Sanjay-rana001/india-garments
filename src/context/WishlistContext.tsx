"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface FlyingHeart {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface WishlistContextType {
  wishlistCount: number;
  likedIds: Set<string>;
  toggleWishlist: (id: string, e: React.MouseEvent) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlistCount: 0,
  likedIds: new Set(),
  toggleWishlist: () => {},
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [flyingHearts, setFlyingHearts] = useState<FlyingHeart[]>([]);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const isCurrentlyLiked = likedIds.has(id);
    const newLiked = new Set(likedIds);

    if (isCurrentlyLiked) {
      newLiked.delete(id);
      setLikedIds(newLiked);
    } else {
      newLiked.add(id);
      setLikedIds(newLiked);

      // Get click position
      const startX = e.clientX;
      const startY = e.clientY;

      // Target top-right navbar wishlist icon position (approximate viewport top right)
      const endX = window.innerWidth > 768 ? window.innerWidth - 130 : window.innerWidth - 75;
      const endY = 32;

      const newHeart: FlyingHeart = {
        id: Date.now() + Math.random(),
        startX,
        startY,
        endX,
        endY,
      };

      setFlyingHearts((prev) => [...prev, newHeart]);

      // Clean up flying heart after animation finishes
      setTimeout(() => {
        setFlyingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 900);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistCount: likedIds.size,
        likedIds,
        toggleWishlist,
      }}
    >
      {children}

      {/* Floating Flying Hearts Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <AnimatePresence>
          {flyingHearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{
                x: h.startX - 12,
                y: h.startY - 12,
                scale: 0.8,
                opacity: 1,
              }}
              animate={{
                x: [h.startX - 12, (h.startX + h.endX) / 2 - 30, h.endX],
                y: [h.startY - 12, h.startY - 80, h.endY],
                scale: [0.8, 1.4, 0.5],
                opacity: [1, 1, 0.9],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute text-red-500 drop-shadow-md"
            >
              <Heart size={24} className="fill-red-500 text-red-500" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
