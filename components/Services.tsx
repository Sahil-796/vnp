import { Timeline } from "@/components/ui/timeline";
import { SectionTitle } from "@/components/SectionTitle";

export function Services() {
  const data = [
    {
      id: "resume-building",
      title: "Resume Building",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            We craft professional, ATS-optimized resumes that showcase your true potential. Our experts analyze your career history to highlight your strongest achievements, ensuring you stand out in the competitive job market.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
              alt="Resume Building"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "career-counseling",
      title: "Career Counseling",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Navigate your professional journey with confidence. Our personalized career counseling sessions help you identify your strengths, set achievable goals, and create a roadmap for long-term success.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
              alt="Career Counseling"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "interview-prep",
      title: "Interview Prep",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Ace your next interview with our comprehensive preparation services. From mock interviews to behavioral question strategies, we provide the feedback and practice you need to make a lasting impression.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop"
              alt="Interview Preparation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full relative overflow-clip">
      <SectionTitle
        title="Our Services"
        description="We offer a wide range of services to help you achieve your career goals."
      />
      <Timeline data={data} />
    </div>
  );
}
