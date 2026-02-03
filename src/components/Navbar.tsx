"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-700 ease-in-out border-b",
        scrolled 
          ? "glass-panel py-3 border-white/20" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
           <div className="relative">
             <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col relative z-10">
                <h1 className={cn(
                  "font-serif text-3xl font-bold tracking-tight transition-all duration-300 text-gradient-gold drop-shadow-sm",
                  scrolled ? "scale-90" : "scale-100"
                )}>
                  ACHARYA
                </h1>
                <span className="text-[10px] tracking-[0.4em] text-maroon-light uppercase font-medium text-center opacity-80 group-hover:tracking-[0.5em] transition-all duration-500">
                  Est. 1956
                </span>
              </div>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-10 md:flex items-center">
          {["Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-all hover:text-maroon relative group overflow-hidden tracking-wide uppercase",
                scrolled ? "text-charcoal/90" : "text-maroon/90"
              )}
            >
              {item}
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gold transform -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex text-maroon hover:bg-gold/10 hover:text-maroon-dark rounded-full transition-colors duration-300">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-maroon hover:bg-gold/10 hover:text-maroon-dark rounded-full transition-colors duration-300"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-maroon text-[10px] font-bold text-gold shadow-sm animate-pulse-slow">
                {cartCount}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-maroon rounded-full hover:bg-gold/10">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
