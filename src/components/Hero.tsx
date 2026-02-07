"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ImageWithLoader } from "@/components/ui/ImageWithLoader";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Background
    gsap.to(bgRef.current, {
      yPercent: 20,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Elegant Entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".hero-badge", 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
    .fromTo(".reveal-text", 
      { y: 100, opacity: 0, rotateX: 10 }, 
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 1.4, ease: "expo.out" }, 
      "-=0.6"
    )
    .fromTo(".hero-desc", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=1.0"
    )
    .fromTo(".hero-btn", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, 
      "-=0.8"
    );

    // Floating animation for ornaments
    gsap.to(".ornament", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-maroon-dark">
      
      {/* Dynamic Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] w-full -top-[10%] pointer-events-none">
         {/* Main Image */}
         {/* Main Image */}
         <div className="absolute inset-0 opacity-60 mix-blend-overlay">
           <ImageWithLoader 
             src="/asset 18.png" 
             alt="Hero Background" 
             fill 
             priority
             className="object-cover"
           />
         </div>
         
         {/* Gradients for depth */}
         <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/80 via-transparent to-maroon-dark/90" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Ornaments (SVGs or refined shapes) */}
      <div className="ornament absolute top-1/4 left-10 md:left-20 w-64 h-64 border border-gold/10 rounded-full blur-[1px] opacity-40 hidden lg:block" />
      <div className="ornament absolute bottom-1/4 right-10 md:right-20 w-48 h-48 border border-gold/10 rounded-full blur-[1px] opacity-40 hidden lg:block" />
      
      {/* Content */}
      <div ref={textRef} className="container relative z-10 flex flex-col items-center justify-center px-4 text-center mt-[-5vh]">
        
        {/* Badge */}
        <div className="hero-badge mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-black/20 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.3em] text-gold uppercase backdrop-blur-sm">
          <span className="h-1 w-1 rounded-full bg-gold" />
          Est. 1956
          <span className="h-1 w-1 rounded-full bg-gold" />
        </div>

        {/* Slogan */}
        <h2 className="reveal-text mb-4 font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-gold-light uppercase drop-shadow-md">
          "Bhakti Mai Laye Shakti"
        </h2>

        {/* Main Heading */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] text-sand tracking-tight drop-shadow-2xl">
          <div className="overflow-hidden">
            <span className="reveal-text block text-gradient-gold pb-4">Divine</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text block text-sand/90 italic font-light mix-blend-overlay">Aromas</span>
          </div>
        </h1>

        {/* Subtitle / Description */}
        <p className="hero-desc mt-8 max-w-xl text-lg md:text-xl text-sand-dark/80 font-light leading-relaxed tracking-wide">
          Experience the sacred art of fragrance. 
          Handrolled incense that purifies your space and elevates your spirit.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <Button 
            size="lg" 
            className="hero-btn h-14 px-10 rounded-full bg-gold text-maroon-dark hover:bg-white hover:text-maroon font-serif text-lg transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
          >
            Shop Collection
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="hero-btn h-14 px-8 rounded-full text-sand hover:text-gold hover:bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 font-serif tracking-wide"
          >
            Our Heritage
          </Button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce cursor-pointer">
        <span className="text-[10px] uppercase tracking-widest text-sand/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
      </div>

    </section>
  );
}
