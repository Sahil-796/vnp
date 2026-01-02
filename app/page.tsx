import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";

export default function Page() {
  return (
    <div className="max-w-[85vw] mx-auto mt-24">
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
