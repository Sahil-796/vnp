import imgRectangle26 from "figma:asset/67b14b2bde21a2e574acbf2ceebaadd6ab0481c0.png";
import imgRectangle27 from "figma:asset/aee99dc51d994949e2ff506756dff14b9f7b78b9.png";
import imgRectangle28 from "figma:asset/08cdbee4ad7162dfe6bcf1374648815037e6478a.png";

export function Clients() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-[#303948] text-3xl md:text-4xl">
            Client
          </h2>
          <p className="text-[#303948] text-lg">
            Using Our Experience To Make Your Digital Experience Brighter
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 pt-8">
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src={imgRectangle26} alt="Microsoft" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src={imgRectangle27} alt="Google" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img src={imgRectangle28} alt="Amazon" className="h-12 md:h-14 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
