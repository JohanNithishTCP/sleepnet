import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import AudienceSection from "@/components/home/AudienceSection";
import ProductsSection from "@/components/home/ProductsSection";
import TechnologySection from "@/components/home/TechnologySection";
import BenefitsSection from "@/components/home/BenefitsSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ProductsSection />
      <TechnologySection />
      <BenefitsSection />
      <TestimonialSection />
    </main>
  );
}
