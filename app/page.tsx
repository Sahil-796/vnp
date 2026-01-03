import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import HowWeHelp from "@/components/HowWeHelp";
import FAQSection from "@/components/FAQSection";

export default function Page() {
  return (
    <div>

      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
        <Services />
        <Testimonials />
        <FAQSection />
      </div>
      <div>

        <Footer />
      </div>
    </div>
  );
}
