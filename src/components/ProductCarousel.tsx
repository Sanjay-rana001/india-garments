"use client";

import { useRef } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image1: string;
  image2?: string;
  isNew?: boolean;
}

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  products: Product[];
  linkText: string;
  id?: string;
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  linkText,
  id,
}: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };
  
  return (
    <section id={id} className="py-12 sm:py-20 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-6">
          <div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-serif mb-1 sm:mb-2 text-[#111111] font-bold tracking-wide">{title}</h2>
            <p className="text-xs sm:text-sm text-neutral-500">{subtitle}</p>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0">
            {/* Ultra-stylish View All Link */}
            <a 
              href="#" 
              className="group relative flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-black hover:text-[#9A8258] transition-all duration-300 py-1"
            >
              <span>{linkText.replace(" →", "")}</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black group-hover:bg-[#9A8258] transition-colors duration-300" />
            </a>
            
            {/* Premium Scroll Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black active:scale-90 transition-all duration-300 shadow-2xs group"
                aria-label="Previous Products"
              >
                <ChevronLeft size={18} className="transform group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black active:scale-90 transition-all duration-300 shadow-2xs group"
                aria-label="Next Products"
              >
                <ChevronRight size={18} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div 
          className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth touch-pan-x" 
          ref={containerRef}
        >
          {products.map((product) => (
            <div key={product.id} className="w-[44vw] max-w-[200px] sm:w-[220px] md:w-[260px] flex-shrink-0 snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
