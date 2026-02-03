"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  // Handle mounting animation delays
  useEffect(() => {
    if (isCartOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500); // Wait for exit animation
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  if (!isVisible && !isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const message = `Hello Acharya Products! I would like to order the following:\n\n${items
      .map((item) => `- ${item.name} x${item.quantity} (₹${item.price * item.quantity})`)
      .join("\n")}\n\nTotal: ₹${cartTotal}\n\nPlease confirm availability.`;
    
    const url = `https://wa.me/918928487357?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "relative h-full w-full max-w-md bg-sand shadow-2xl transition-transform duration-500 ease-out transform",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-maroon/10 p-6 bg-white/50 backdrop-blur-sm">
            <h2 className="font-serif text-2xl font-bold text-maroon flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-gold" />
              Your Cart
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 hover:bg-maroon/10 text-maroon transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center opacity-60">
                <ShoppingBag className="h-16 w-16 mb-4 text-gold/50" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">Start adding some divine fragrances!</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-gold/10 shadow-sm relative group overflow-hidden">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-maroon/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-maroon pr-8">{item.name}</h4>
                      <p className="text-sm text-gold-dark font-medium">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-maroon/20 bg-sand/30">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-maroon hover:text-white rounded-full transition-colors w-6 h-6 flex items-center justify-center"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-maroon hover:text-white rounded-full transition-colors w-6 h-6 flex items-center justify-center"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-maroon/10 p-6 bg-white space-y-4">
              <div className="flex justify-between text-lg font-bold text-charcoal">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <p className="text-xs text-charcoal/60 text-center">
                Shipping & taxes calculated at checkout via WhatsApp
              </p>
              <Button 
                onClick={handleWhatsAppCheckout}
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Checkout on WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
