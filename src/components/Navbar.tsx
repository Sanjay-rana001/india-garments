"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="text-2xl font-serif tracking-widest uppercase font-bold flex-1 lg:flex-none text-center lg:text-left">
          INDIA
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[13px] tracking-widest font-medium uppercase">
          <a href="#" className="hover:opacity-60 transition-opacity">Men</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Women</a>
          <a href="#" className="hover:opacity-60 transition-opacity">New Arrivals</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Collections</a>
          <a href="#" className="hover:opacity-60 transition-opacity">About</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="hover:opacity-60 transition-opacity hidden md:block">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:opacity-60 transition-opacity hidden md:block">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:opacity-60 transition-opacity hidden md:block">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:opacity-60 transition-opacity relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
