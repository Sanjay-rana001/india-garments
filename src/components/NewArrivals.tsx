"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image1: string;
  image2?: string;
  isNew?: boolean;
}

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  const [activeTab, setActiveTab] = useState<"ALL" | "MEN" | "WOMEN">("ALL");

  return (
    <section id="new-arrivals" className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 max-w-[1600px] mx-auto bg-[#FAFAFA]">
      <div className="flex flex-col items-center mb-8 sm:mb-14 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-[#111111] font-bold tracking-wide">JUST DROPPED</h2>
        
        {/* Tabs */}
        <div className="flex gap-6 sm:gap-10 border-b border-neutral-200 text-xs sm:text-sm">
          {(["ALL", "MEN", "WOMEN"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 tracking-widest font-semibold uppercase transition-colors relative ${activeTab === tab ? "text-black" : "text-neutral-400 hover:text-black"}`}
            >
              {tab}
              {activeTab === tab && <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black" />}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
