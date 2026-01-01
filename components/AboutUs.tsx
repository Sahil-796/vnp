import svgPaths from "../imports/svg-0eodk97dhm";
import { ArrowRight } from "lucide-react";

export function AboutUs() {
  return (
    <section className="w-full px-6 md:px-20 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#14213d] rounded-[35px] overflow-hidden p-8 md:p-16 shadow-xl">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1024">
              <g clipPath="url(#clip0_1_1691)">
                <g>
                  <path d={svgPaths.p156f9180} fill="white" fillOpacity="0.2" />
                  <path d={svgPaths.p156f9180} fill="url(#paint0_linear_1_1691)" fillOpacity="0.2" />
                </g>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1691" x1="37.5" x2="720.012" y1="-30.5" y2="1024">
                  <stop stopColor="white" stopOpacity="0.1" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_1_1691">
                  <rect fill="white" height="1024" width="1440" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-white text-3xl md:text-4xl">
                We are experienced
              </h2>
              <p className="text-white text-lg opacity-90">
                We have been around for a long time since 2010, thousands of products have been created, we are always here to provide new innovations for you
              </p>
            </div>

            <div className="flex justify-end">
              <button className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
