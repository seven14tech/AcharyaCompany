"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Parallax Background
    gsap.to(bgRef.current, {
      yPercent: 30,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Entrance Animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(".hero-badge", 
      { scale: 0.8, opacity: 0, y: -20 }, 
      { scale: 1, opacity: 1, y: 0, duration: 1.2 }
    )
    .fromTo(".hero-title-line", 
      { y: 120, opacity: 0, rotateX: -45 }, 
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.2, duration: 1.5, ease: "expo.out" }, 
      "-=0.8"
    )
    .fromTo(".hero-desc", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=1.0"
    )
    .fromTo(".hero-btn", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.15, duration: 1 }, 
      "-=0.8"
    );
    
    // Ambient floating for decorative elements
    gsap.fromTo(".ornament-float",
      { y: 0 },
      { y: -15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] w-full -top-[10%] pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629196914168-3a2652305f9e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 brightness-[0.4] saturate-[1.2]" />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-maroon/20 to-transparent mix-blend-overlay" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)]" />
      </div>
      
      {/* Decorative Ornaments */}
      <div className="ornament-float absolute top-20 left-10 md:left-20 h-40 w-40 border-l border-t border-gold/20 opacity-60 hidden md:block rounded-tl-[3rem]" />
      <div className="ornament-float absolute bottom-20 right-10 md:right-20 h-40 w-40 border-r border-b border-gold/20 opacity-60 hidden md:block rounded-br-[3rem]" />

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6 text-center">
        <div className="max-w-5xl space-y-10">
          
          <div className="hero-badge mx-auto inline-flex items-center gap-3 rounded-full border border-gold/30 bg-maroon-dark/40 px-6 py-2 text-xs font-bold tracking-[0.25em] text-gold backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-slow shadow-[0_0_10px_#D4AF37]" />
            Since 1956
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-slow shadow-[0_0_10px_#D4AF37]" />
          </div>
          
          <h1 className="flex flex-col items-center font-serif text-5xl font-normal leading-[1.0] md:text-8xl lg:text-9xl drop-shadow-2xl">
            <span className="hero-title-line block text-gradient-gold pb-2">
              Divine Aromas.
            </span>
            <span className="hero-title-line block text-maroon-dark mix-blend-multiply opacity-90 absolute blur-3xl scale-110">
              Divine Aromas.
            </span>
            <span className="hero-title-line block text-charcoal/90 italic mt-2">
              Timeless Tradition.
            </span>
          </h1>
          
          <p className="hero-desc mx-auto max-w-2xl text-lg text-charcoal/80 md:text-2xl font-light leading-relaxed tracking-wide">
            Crafting India's finest incense, dhoop, and fragrances with 
            <span className="font-serif italic text-maroon font-semibold px-2 text-3xl align-middle">devotion</span> 
            to purify your home and soul.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
            <Button size="xl" className="hero-btn shadow-[0_10px_30px_rgba(107,15,26,0.2)] bg-maroon hover:bg-maroon-dark text-white border border-gold/20 transition-all hover:scale-105 active:scale-95 duration-500 rounded-full px-12">
              Explore Collection
            </Button>
            <Button size="xl" variant="outline" className="hero-btn shadow-lg border-maroon/20 hover:border-gold/50 text-maroon hover:bg-maroon/5 transition-all hover:scale-105 active:scale-95 duration-500 rounded-full px-10">
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
