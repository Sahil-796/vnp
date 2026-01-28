import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { PlacementBridge } from "@/components/PlacementBridge";

// FAQ Schema for home page (must match visible FAQ content!)

export default function Page() {
  return (
    <>


      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <div className="mb-12 md:mb-24 max-w-[85vw] mx-auto">
        <p className="text-center text-muted-foreground mb-8 text-sm font-semibold uppercase tracking-widest">
          Trusted by Top Innovators
        </p>
        <LogoCloud />
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
