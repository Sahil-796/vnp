import Hero from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <div className="w-full mt-24">
        <Services />
      </div>
    </main>
  );
}
