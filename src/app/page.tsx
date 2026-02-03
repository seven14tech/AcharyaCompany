import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LegacyTrust } from "@/components/LegacyTrust";
import { ProductCategories } from "@/components/ProductCategories";
import { BestSellers } from "@/components/BestSellers";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand/10">
      <Navbar />
      <Hero />
      <LegacyTrust />
      <ProductCategories />
      <BestSellers />
      <WhyChooseUs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
