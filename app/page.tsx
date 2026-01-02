import Hero from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Page() {
  return (
    <main className="w-full">
      <div className="max-w-[85vw] mx-auto mt-24">
        <Hero />
      </div>

      <div className="w-full mt-24">
        <div className="max-w-[85vw] mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We offer a comprehensive suite of tools designed to streamline your workflow
            and enhance collaboration. Discover how we can help you achieve more.
          </p>
        </div>
        <Services />
      </div>
    </main>
  );
}
