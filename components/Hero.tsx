import imgBackground from "figma:asset/093c3b7c80f0b103b7a7451de9f80117834dcbda.png";
import imgBusiness3DWavingGoodbyeMan1CloseUp1 from "figma:asset/2c1211090f5946cc0425a31a87ab731a28e78043.png";

export function Hero() {
  return (
    <section className="w-full px-6 md:px-20 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 rounded-[35px] overflow-hidden min-h-[500px] md:min-h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-80">
            <img
              src={imgBackground}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-16">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">
                Go digital with us
              </h1>
              <p className="text-white text-lg md:text-xl max-w-md">
                We have designed hundreds of websites and helped improve their online performance through SEO, SEM and Social Media Marketing
              </p>
              <button className="bg-[#fafafa] text-[#303948] px-8 py-4 rounded-full hover:bg-white transition-colors w-fit">
                See Portfolio
              </button>
            </div>

            {/* Character Image */}
            <div className="flex items-end justify-center lg:justify-end">
              <img
                src={imgBusiness3DWavingGoodbyeMan1CloseUp1}
                alt="Business professional"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
