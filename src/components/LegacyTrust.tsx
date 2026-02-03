"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ShieldCheck, Home, Star, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Clock,
    title: "65+ Years",
    desc: "Of Heritage & Trust",
  },
  {
    icon: Home,
    title: "Trusted By",
    desc: "Thousands of Homes",
  },
  {
    icon: ShieldCheck,
    title: "Mumbai-Based",
    desc: "Family Business",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "Tested Products",
  },
];

export function LegacyTrust() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".trust-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-maroon md:text-4xl">
            A Legacy of Fragrance Since 1956
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">
            Founded by Mr. K.Y. Acharya, we are built on trust, purity, and consistency.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <div key={idx} className="trust-item flex flex-col items-center text-center p-6 rounded-xl bg-sand/20 hover:bg-sand/40 transition-colors">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand text-maroon shadow-sm">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-maroon">{item.title}</h3>
              <p className="text-sm text-charcoal/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
