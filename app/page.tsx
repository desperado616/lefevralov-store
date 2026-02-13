import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorksSection } from "@/components/WorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="pt-24 md:pt-28 space-y-20 sm:space-y-24 md:space-y-32"
      >
        <Hero />
        <WorksSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

