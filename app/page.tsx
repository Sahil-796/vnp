import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { PlacementBridge } from "@/components/PlacementBridge";

export default function Page() {
  return (
    <>


      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <PlacementBridge />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <Services />
      </div>

      <div className="max-w-[85vw] mx-auto">
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
      </div>
    </>
  );
}
