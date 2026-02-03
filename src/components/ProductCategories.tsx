"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "Incense Sticks", image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=600", desc: "For Divine Calmness" },
  { name: "Dhoop & Cones", image: "https://images.unsplash.com/photo-1610452309719-21e13cb9d06b?auto=format&fit=crop&q=80&w=600", desc: "Rich Earthly Aroma" },
  { name: "Camphor", image: "https://images.unsplash.com/photo-1608552093539-75ae74d28362?auto=format&fit=crop&q=80&w=600", desc: "Pure White Flame" },
  { name: "Soaps", image: "https://images.unsplash.com/photo-1600863920708-f4634add6e3f?auto=format&fit=crop&q=80&w=600", desc: "Handcrafted Wash" },
  { name: "Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600", desc: "Lasting Fragrance" },
];

export function ProductCategories() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".cat-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 bg-sand/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="mb-20 flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left border-b border-gold/20 pb-12">
          <div className="space-y-4">
            <span className="text-gold-dark font-bold tracking-[0.2em] text-sm uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-[1px] bg-gold-dark/50" />
              Our Collection
            </span>
            <h2 className="font-serif text-5xl font-normal text-maroon md:text-6xl drop-shadow-sm">
              Fragrances for <br/><span className="italic text-gold-dark">Every Ritual</span>
            </h2>
            <p className="mt-4 text-charcoal/80 max-w-lg text-lg leading-relaxed">
              Explore our range of time-honored aromatic products, crafted to elevate your spiritual journey.
            </p>
          </div>
          <Link href="/shop" className="group hidden md:flex items-center gap-3 rounded-full border border-maroon/20 px-8 py-4 font-medium text-maroon transition-all hover:bg-maroon hover:text-white hover:border-maroon shadow-sm hover:shadow-xl">
            View All Products <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href="/shop"
              className="cat-card group relative block h-[500px] overflow-hidden rounded-t-[10rem] rounded-b-xl bg-white shadow-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl border border-white/40"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-transparent to-transparent opacity-80 transition-opacity duration-500" />
                
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-white/30 rounded-t-[9rem] rounded-b-lg scale-95 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 transform transition-transform duration-500">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-3 block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{cat.desc}</span>
                <h3 className="font-serif text-4xl font-normal text-white mb-2 group-hover:text-gold-light transition-colors duration-300">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
          
          {/* Explore More Card */}
          <Link
            href="/shop"
            className="cat-card group relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-t-[10rem] rounded-b-xl bg-maroon text-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-maroon-dark border border-gold/10"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arches.png')] opacity-10 transition-opacity group-hover:opacity-20 animate-pulse-slow"></div>
             <div className="relative z-10 p-8 transform transition-transform group-hover:scale-105">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 backdrop-blur-md text-gold border border-gold/30 transition-all group-hover:bg-gold group-hover:text-maroon group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <MoveRight className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-5xl font-normal text-white mb-4">View Full <br/><span className="italic text-gold">Catalog</span></h3>
                <p className="text-white/60 text-lg">Discover 50+ unique fragrances</p>
             </div>
          </Link>
        </div>
        
        <div className="mt-16 flex justify-center md:hidden">
            <Link href="/shop" className="group flex items-center gap-3 rounded-full border border-maroon px-8 py-3 font-medium text-maroon active:bg-maroon active:text-white transition-colors">
                View All Products <MoveRight className="h-4 w-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}
