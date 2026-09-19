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
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
  linkText,
}: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-3 text-[#111111]">{title}</h2>
            <p className="text-sm text-neutral-500">{subtitle}</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-medium tracking-widest uppercase border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors inline-block">
              {linkText}
            </a>
            
            {/* Scroll Buttons */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 border border-neutral-300 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
              >
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 border border-neutral-300 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
              >
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x scroll-smooth" ref={containerRef}>
          {products.map((product) => (
            <div key={product.id} className="min-w-[160px] md:min-w-[200px] lg:min-w-[240px] snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
