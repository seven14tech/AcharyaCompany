"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-maroon-dark text-temple-white overflow-hidden">
      {/* Mandala/Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-soft-light" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-maroon-light/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Golden Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      
      <div className="container relative z-10 px-4 py-16 md:px-8 md:py-24 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h3 className="font-serif text-4xl font-bold text-gradient-gold tracking-tight">ACHARYA</h3>
              <span className="text-[10px] tracking-[0.4em] text-gold/70 uppercase">Products • Est 1956</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs text-balance font-light">
              Bringing divine aromas into Indian homes for over six decades. Trusted for purity, quality, and preserving the timeless tradition of prayer and peace.
            </p>
          </div>
          
          {/* Shop Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-normal text-gold border-b border-white/10 pb-2 inline-block">Collection</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {["Incense Sticks", "Dhoop & Cones", "Camphor", "Soaps", "Perfumes", "Gift Sets"].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="hover:text-gold hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-normal text-gold border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <address className="text-sm not-italic opacity-80 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>Acharya Products<br/>Matunga (C), Mumbai<br/>Maharashtra - 400019</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a href="https://wa.me/918928487357" className="hover:text-gold transition-colors">+91 89284 87357</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a href="mailto:info@acharyaproducts.com" className="hover:text-gold transition-colors">info@acharyaproducts.com</a>
              </div>
            </address>
          </div>
          
          {/* Newsletter/Social */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-normal text-gold border-b border-white/10 pb-2 inline-block">Stay Connected</h4>
            <p className="text-sm opacity-70">
              Join our community for spiritual insights and exclusive offers.
            </p>
            
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gold hover:text-maroon hover:border-gold transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs opacity-50 md:flex-row">
          <p>© 2026 Acharya Products. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤</span> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
