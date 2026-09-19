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
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto bg-[#FAFAFA]">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#111111]">JUST DROPPED</h2>
        
        {/* Tabs */}
        <div className="flex gap-8 border-b border-neutral-200">
          <button 
            onClick={() => setActiveTab("ALL")}
            className={`pb-2 text-sm tracking-widest font-medium uppercase transition-colors relative ${activeTab === "ALL" ? "text-black" : "text-neutral-400 hover:text-black"}`}
          >
            All
            {activeTab === "ALL" && <span className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-black" />}
          </button>
          <button 
            onClick={() => setActiveTab("MEN")}
            className={`pb-2 text-sm tracking-widest font-medium uppercase transition-colors relative ${activeTab === "MEN" ? "text-black" : "text-neutral-400 hover:text-black"}`}
          >
            Men
            {activeTab === "MEN" && <span className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-black" />}
          </button>
          <button 
            onClick={() => setActiveTab("WOMEN")}
            className={`pb-2 text-sm tracking-widest font-medium uppercase transition-colors relative ${activeTab === "WOMEN" ? "text-black" : "text-neutral-400 hover:text-black"}`}
          >
            Women
            {activeTab === "WOMEN" && <span className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-black" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
