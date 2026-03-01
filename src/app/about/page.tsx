"use client";

import { ImageWithLoader } from "@/components/ui/ImageWithLoader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-sand overflow-hidden">
      <Navbar />
      {/* Hero */}
      <section className="relative h-[68vh] flex items-center justify-center overflow-hidden">
        <div className="hero-glow top-20 left-10 h-48 w-48 bg-gold/20 float-slow" />
        <div className="hero-glow bottom-8 right-6 h-56 w-56 bg-maroon/15 soft-pulse" />
        <div className="absolute inset-0 z-0">
           <ImageWithLoader 
             src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
             alt="Traditional Incense"
             fill
             priority
             className="object-cover brightness-50 sepia-[0.3]"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-sand via-maroon/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center space-y-6 px-4">
          <div className="fade-up inline-block border border-gold/50 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 backdrop-blur-md">
            Since 1956
          </div>
          <h1 className="fade-up fade-up-delay-1 font-serif text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Our Legacy
          </h1>
          <p className="fade-up fade-up-delay-2 text-white/80 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A journey of devotion, purity, and the eternal quest for the perfect fragrance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 fade-up">
               <h2 className="font-serif text-4xl text-maroon font-bold">The Acharya Standard</h2>
               <div className="w-20 h-1 bg-gold"></div>
               <p className="text-charcoal/80 text-lg leading-relaxed">
                 Founded in 1956, Acharya Products began with a simple mission: to bring the purest fragrances of India into every home. What started as a small family endeavor in Mumbai has grown into a trusted name synonymous with quality and tradition.
               </p>
               <p className="text-charcoal/80 text-lg leading-relaxed">
                 We believe that fragrance is not just a scent, but a bridge to the divine. Every stick of incense, every cone of dhoop we craft is done so with the utmost care, ensuring that your rituals remain pure and your home remains peaceful.
               </p>
            </div>
            <div className="relative h-[500px] border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 fade-up fade-up-delay-1">
               <ImageWithLoader 
                 src="https://images.unsplash.com/photo-1629196914168-3a2652305f9e?q=80&w=2070&auto=format&fit=crop"
                 alt="Making Process"
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl z-[-1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section py-24 bg-maroon text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 mix-blend-soft-light" />
        <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-center font-serif text-4xl mb-16 text-gold">Milestones of Fragrance</h2>
           
           <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold before:to-transparent">
              
              <div className="timeline-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-maroon shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <div className="h-3 w-3 rounded-full bg-gold" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-gold/50 transition-colors duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-gold">1956</div>
                  </div>
                  <div className="text-white/90">
                    Calculated beginnings in Matunga, Mumbai with a single signature Incense.
                  </div>
                </div>
              </div>

              <div className="timeline-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-maroon shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <div className="h-3 w-3 rounded-full bg-gold" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-gold/50 transition-colors duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-gold">1980s</div>
                  </div>
                  <div className="text-white/90">
                    Expanded to Dhoop and Camphor, becoming a household name in Maharashtra.
                  </div>
                </div>
              </div>

              <div className="timeline-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-maroon shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <div className="h-3 w-3 rounded-full bg-gold" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-gold/50 transition-colors duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-gold">2026</div>
                  </div>
                  <div className="text-white/90">
                    Digitizing tradition. Acharya Products launches its global online presence.
                  </div>
                </div>
              </div>
              
           </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
