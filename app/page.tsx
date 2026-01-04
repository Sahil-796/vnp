import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import HowWeHelp from "@/components/HowWeHelp";
import FAQSection from "@/components/FAQSection";

export default function Page() {
  return (
    <div>
      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <Services />

      <div className="max-w-[85vw] mx-auto">
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
