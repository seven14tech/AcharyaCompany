"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 bg-sand">
      {/* Hero Header */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-maroon-dark/95" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 mix-blend-soft-light" />
        <div className="container relative z-10 text-center">
          <h1 className="font-serif text-5xl font-bold text-gold mb-2">
            Contact Us
          </h1>
          <p className="text-white/70">We'd love to hear from you.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-gold/20">
          
          {/* Info Side */}
          <div className="bg-maroon p-10 md:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl translate-y-1/3" />
             
             <div className="relative z-10 space-y-10">
               <div>
                  <h3 className="font-serif text-3xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-white/70 leading-relaxed">
                    Have questions about our products or bulk orders? Reach out to us and we'll guide you through our aromatic collection.
                  </p>
               </div>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                     <MapPin className="h-5 w-5 text-gold" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                     <p className="text-white/70 text-sm">Acharya Products<br/>Matunga (C), Mumbai, Maharashtra 400019</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                     <Phone className="h-5 w-5 text-gold" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Call Us</h4>
                     <p className="text-white/70 text-sm">+91 89284 87357</p>
                     <p className="text-white/50 text-xs mt-1">Mon-Sat, 9am - 7pm</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                     <Mail className="h-5 w-5 text-gold" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Email Us</h4>
                     <p className="text-white/70 text-sm">info@acharyaproducts.com</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-16 bg-white relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply" />
             <form className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal/60">First Name</label>
                    <input type="text" className="w-full border-b border-maroon/20 bg-transparent py-2 focus:border-maroon focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Last Name</label>
                    <input type="text" className="w-full border-b border-maroon/20 bg-transparent py-2 focus:border-maroon focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Email Address</label>
                  <input type="email" className="w-full border-b border-maroon/20 bg-transparent py-2 focus:border-maroon focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal/60">Message</label>
                  <textarea rows={4} className="w-full border-b border-maroon/20 bg-transparent py-2 focus:border-maroon focus:outline-none transition-colors resize-none" placeholder="Tell us what you're looking for..." />
                </div>
                
                <Button className="w-full bg-maroon hover:bg-maroon-dark text-white h-12 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
             </form>
          </div>
        </div>
        
        {/* Simple Map Placeholder */}
        <div className="mt-12 h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-gold/20 grayscale hover:grayscale-0 transition-all duration-700">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.679659424362!2d72.85!3d19.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf216ec74c6b%3A0xa0e7163f4528340!2sMatunga%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </main>
  );
}
