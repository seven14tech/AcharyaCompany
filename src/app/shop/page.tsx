"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Filter } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  { id: "1", name: "Sandalwood Supreme", category: "Incense", price: 150, image: "https://images.unsplash.com/photo-1608552093539-75ae74d28362?auto=format&fit=crop&q=80&w=600", rating: 5 },
  { id: "2", name: "Rose Masala Dhoop", category: "Dhoop", price: 120, image: "https://images.unsplash.com/photo-1610452309719-21e13cb9d06b?auto=format&fit=crop&q=80&w=600", rating: 4.8 },
  { id: "3", name: "Pure Camphor Tablets", category: "Camphor", price: 80, image: "https://images.unsplash.com/photo-1608552093539-75ae74d28362?auto=format&fit=crop&q=80&w=600", rating: 4.9 },
  { id: "4", name: "Lavender Luxury Soap", category: "Soaps", price: 250, image: "https://images.unsplash.com/photo-1600863920708-f4634add6e3f?auto=format&fit=crop&q=80&w=600", rating: 4.7 },
  { id: "5", name: "Jasmine Attar", category: "Perfumes", price: 450, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600", rating: 5 },
  { id: "6", name: "Mogra Gold Sticks", category: "Incense", price: 180, image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=600", rating: 4.8 },
  { id: "7", name: "Temple Bloom Dhoop", category: "Dhoop", price: 140, image: "https://images.unsplash.com/photo-1610452309719-21e13cb9d06b?auto=format&fit=crop&q=80&w=600", rating: 4.6 },
  { id: "8", name: "Neem & Tulsi Soap", category: "Soaps", price: 200, image: "https://images.unsplash.com/photo-1600863920708-f4634add6e3f?auto=format&fit=crop&q=80&w=600", rating: 4.9 },
];

const CATEGORIES = ["All", "Incense", "Dhoop", "Camphor", "Soaps", "Perfumes"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-20 bg-sand">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-maroon-dark/90" />
        <div className="container relative z-10 text-center space-y-4">
          <span className="text-gold tracking-[0.3em] text-sm uppercase font-bold animate-pulse-slow">Explore Purity</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Our Collection
          </h1>
          <p className="text-white/70 max-w-xl mx-auto font-light text-lg">
            Discover fragrances that transcend the ordinary and elevate your daily rituals.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 p-4 rounded-full bg-white/40 backdrop-blur-md border border-white/40 shadow-sm max-w-fit mx-auto sticky top-24 z-30">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-maroon text-gold shadow-md scale-105" 
                  : "bg-transparent text-charcoal/70 hover:bg-maroon/5 hover:text-maroon"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-gold/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <Star className="h-3 w-3 text-gold fill-gold" />
                  <span className="text-xs font-bold text-charcoal">{product.rating}</span>
                </div>
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => addToCart(product)}
                    className="bg-white text-maroon hover:bg-gold hover:text-charcoal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 rounded-full px-8 py-6 font-bold"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 relative">
                 <div className="absolute -top-6 right-6 h-12 w-12 rounded-full bg-maroon text-gold flex items-center justify-center shadow-lg border-2 border-white group-hover:bg-gold group-hover:text-maroon transition-colors duration-500">
                    <ShoppingBag className="h-5 w-5" />
                 </div>
                 
                 <div className="mb-2 text-xs font-bold tracking-widest text-gold-dark uppercase">{product.category}</div>
                 <h3 className="font-serif text-xl font-bold text-maroon mb-2">{product.name}</h3>
                 <div className="flex items-center justify-between">
                   <p className="text-lg font-medium text-charcoal">₹{product.price}</p>
                   {/* Decorative dots */}
                   <div className="flex gap-1">
                     <div className="h-1 w-1 rounded-full bg-maroon/20" />
                     <div className="h-1 w-1 rounded-full bg-maroon/40" />
                     <div className="h-1 w-1 rounded-full bg-maroon/60" />
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-charcoal/50">
            <p className="font-serif text-2xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
