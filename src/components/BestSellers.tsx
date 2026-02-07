"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ImageWithLoader } from "@/components/ui/ImageWithLoader";

const products = [
  {
    name: "Sandalwood Incense",
    price: "₹150",
    rating: 4.8,
    image: "/INCENSESTICKS.png",
    tag: "Best Seller"
  },
  {
    name: "Rose Dhoop Cones",
    price: "₹120",
    rating: 4.9,
    image: "/Dhoop & Cones.png",
    tag: "New"
  },
  {
    name: "Pure Camphor Tablets",
    price: "₹200",
    rating: 5.0,
    image: "/CAMPHOR.png",
    tag: "Essential"
  },
  {
    name: "Jasmine Soap",
    price: "₹80",
    rating: 4.7,
    image: "/SOAPS.png",
    tag: "Popular"
  }
];

export function BestSellers() {
  return (
    <section className="bg-sand/30 py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-maroon md:text-4xl">
            Customer Favorites
          </h2>
          <p className="mt-2 text-charcoal/70">Loved by thousands for their purity and fragrance.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <ImageWithLoader
                   src={product.image}
                   alt={product.name}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 rounded bg-maroon px-2 py-0.5 text-xs font-bold text-white z-20">
                  {product.tag}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg font-bold text-maroon">{product.name}</h3>
                  <div className="flex items-center text-xs font-bold text-gold">
                    <Star className="mr-1 h-3 w-3 fill-current" /> {product.rating}
                  </div>
                </div>
                <p className="text-sm text-charcoal/60 mb-4">Long lasting aroma</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-charcoal">{product.price}</span>
                  <Button size="sm">Add</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
