"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm text-black border-b border-neutral-100"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden flex items-center justify-center p-2.5 -ml-2 rounded-full transition-all cursor-pointer ${
              scrolled || mobileMenuOpen
                ? "text-black hover:bg-neutral-100"
                : "text-white hover:bg-white/20 bg-black/20 backdrop-blur-xs"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={2.2} className="block" />
            ) : (
              <Menu size={22} strokeWidth={2.2} className="block" />
            )}
          </button>

          {/* Logo */}
          <a href="#" className="text-lg sm:text-2xl font-serif tracking-[0.25em] uppercase font-bold text-center lg:text-left flex-1 lg:flex-none">
            INDIA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.2em] font-medium uppercase">
            <a href="#men" className="hover:opacity-60 transition-opacity py-2">Men</a>
            <a href="#women" className="hover:opacity-60 transition-opacity py-2">Women</a>
            <a href="#new-arrivals" className="hover:opacity-60 transition-opacity py-2">New Arrivals</a>
            <a href="#collections" className="hover:opacity-60 transition-opacity py-2">Collections</a>
            <a href="#about" className="hover:opacity-60 transition-opacity py-2">About</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button className="p-2 hover:opacity-60 transition-opacity hidden sm:block" aria-label="Search">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:opacity-60 transition-opacity hidden sm:block" aria-label="Account">
              <User size={19} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:opacity-60 transition-opacity hidden sm:block" aria-label="Wishlist">
              <Heart size={19} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:opacity-60 transition-opacity relative" aria-label="Cart">
              <ShoppingBag size={19} strokeWidth={1.5} />
              <span className="absolute top-1 right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile App Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 lg:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-[85vw] max-w-sm h-full bg-white text-black p-6 flex flex-col justify-between overflow-y-auto pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Search Bar in Mobile Menu */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search collection..."
                    className="w-full bg-neutral-100 rounded-full py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <Search size={16} className="absolute left-3.5 top-3 text-neutral-400" />
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col gap-1">
                  {[
                    { label: "Men's Edit", href: "#men" },
                    { label: "Women's Edit", href: "#women" },
                    { label: "New Arrivals", href: "#new-arrivals" },
                    { label: "Collections", href: "#collections" },
                    { label: "About Brand", href: "#about" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b border-neutral-100 text-sm font-medium tracking-wider uppercase text-neutral-800 active:text-black"
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={16} className="text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col gap-3">
                <div className="flex justify-around text-xs text-neutral-500 font-medium">
                  <a href="#">Wishlist (0)</a>
                  <a href="#">Account</a>
                  <a href="#">Support</a>
                </div>
                <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest pt-2">
                  © INDIA GARMENTS
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
