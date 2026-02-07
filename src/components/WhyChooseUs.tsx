import { ImageWithLoader } from "@/components/ui/ImageWithLoader";

export function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-sand/20" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/40 px-5 py-2 text-xs font-bold uppercase tracking-widest text-maroon shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-slow" />
              Why Choose Acharya
            </div>
            
            <h2 className="mt-6 font-serif text-5xl font-normal leading-tight text-maroon drop-shadow-sm">
              Why Families Trust <br/> <span className="italic text-gold-dark">Acharya Products</span>
            </h2>
            
            <p className="mt-6 text-lg text-charcoal/80 leading-relaxed font-light">
              For over six decades, we have remained committed to purity. Our rigorous process ensures that every stick, cone, and soap meets the highest standards of spiritual and daily care.
            </p>
            
            <ul className="mt-10 space-y-6">
              {[
                "Carefully selected raw materials for pure aroma",
                "Consistent fragrance quality batch after batch",
                "Decades of industry expertise since 1956",
                "Suitable for daily rituals and special occasions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gold/20 shadow-sm transition-all group-hover:bg-maroon group-hover:border-maroon">
                    <div className="h-2 w-2 rounded-full bg-gold transition-all group-hover:bg-white" />
                  </div>
                  <span className="font-medium text-charcoal/90 text-lg group-hover:text-maroon transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative order-1 lg:order-2">
             {/* Decorative Frames */}
             <div className="absolute top-4 right-4 w-full h-full border border-gold/30 rounded-2xl z-0" />
             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-maroon/5 rounded-full blur-2xl z-0" />
             
             <div className="relative z-10 aspect-square overflow-hidden rounded-2xl shadow-2xl">
                {/* Main Image */}
                {/* Main Image */}
                <ImageWithLoader 
                  src="/ALLINONE.png" 
                  alt="Why Choose Us" 
                  fill 
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-maroon/40 to-transparent mix-blend-multiply"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border-l-4 border-gold">
                  <p className="text-3xl font-serif font-bold text-maroon">60+</p>
                  <p className="text-xs uppercase tracking-wider text-charcoal/70">Years of Legacy</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
