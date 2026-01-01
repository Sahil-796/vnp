import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-4xl">
        <img
          src="/hero-footer.png"
          alt="background"
          className="h-[70vh] w-full object-cover"
        />

        <div className="absolute top-1/2 left-12 md:left-24 -translate-y-1/2 z-10 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your <br />
            Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
            Crafting superior experiences with precision and innovative design solutions.
          </p>
          <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-lg">
            Get Started Now
          </Button>
        </div>

        <img
          src="/hero-man.png"
          alt="avatar"
          className="absolute h-[55vh] bottom-0 -right-8 object-contain"
        />
      </div>

      <div className="absolute h-[30vh] w-[60vw] -bottom-52 left-1/2 -translate-x-1/2 rounded-4xl bg-secondary flex flex-col gap-8 items-center justify-center p-10">
        <p className="text-center text-xl md:text-2xl font-medium text-secondary-foreground max-w-3xl leading-relaxed">
          Unlock the potential of your business with our comprehensive suite of tools designed to streamline your workflow and boost productivity.
        </p>
        <Button variant="outline" size="lg" className="rounded-full text-lg h-12 px-8 bg-transparent border-secondary-foreground/20 hover:bg-secondary-foreground/5 dark:hover:bg-secondary-foreground/10">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
