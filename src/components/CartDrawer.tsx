"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, Trash2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithLoader } from "@/components/ui/ImageWithLoader";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setIsCartOpen]);

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
          "relative h-full w-full max-w-md bg-gradient-to-b from-[#fff8ea] via-sand to-[#f7ead1] shadow-2xl transition-transform duration-500 ease-out transform border-l border-gold/25",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-maroon/10 p-6 bg-white/65 backdrop-blur-sm">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-12 h-28 w-28 rounded-full bg-maroon/10 blur-2xl" />
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-maroon flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-gold" />
                  Your Cart
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-maroon/60">
                  {itemCount} item{itemCount === 1 ? "" : "s"} selected
                </p>
              </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 hover:bg-maroon/10 text-maroon transition-colors"
              aria-label="Close cart"
            >
              <X className="h-6 w-6" />
            </button>
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center px-6">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm border border-gold/20">
                  <Sparkles className="h-8 w-8 text-gold-dark" />
                </div>
                <p className="text-xl font-serif text-maroon">Your cart is empty</p>
                <p className="mt-2 text-sm text-charcoal/70">
                  Add your favorite fragrances and they will appear here.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-white/85 p-4 shadow-[0_8px_24px_rgba(58,5,11,0.08)] transition-all duration-300 hover:shadow-[0_14px_28px_rgba(58,5,11,0.14)]"
                >
                  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-maroon/10 bg-white">
                    <ImageWithLoader
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="pr-8 font-serif text-base font-bold text-maroon leading-tight">{item.name}</h4>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                        ₹{item.price} each
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-maroon/20 bg-sand/50 px-1 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-maroon hover:text-white"
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-maroon">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-maroon hover:text-white"
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-charcoal">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute right-2 top-2 rounded-full p-2 text-red-400 opacity-0 transition-all hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-maroon/10 bg-white/85 p-5 md:p-6 space-y-4 backdrop-blur-sm">
              <div className="rounded-xl border border-maroon/10 bg-sand/45 p-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-charcoal/75">
                  <span>Items ({itemCount})</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-charcoal/75">
                  <span>Shipping</span>
                  <span className="font-medium text-maroon">Calculated on WhatsApp</span>
                </div>
                <div className="h-px bg-maroon/10" />
                <div className="flex items-center justify-between text-lg font-bold text-charcoal">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-xs text-charcoal/80">
                <ShieldCheck className="h-4 w-4 text-gold-dark" />
                Secure checkout with order confirmation on WhatsApp
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
                <Button 
                onClick={handleWhatsAppCheckout}
                  variant="whatsapp"
                  className="flex-[2] rounded-xl py-6 font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
