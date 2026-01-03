import {
  Briefcase,
  Search,
  Users,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Identifying the needs",
    description:
      "Understanding your needs, qualifications, and ambitions.",
    icon: Briefcase,
  },
  {
    step: "Step 02",
    title: "Hunting for opportunities",
    description:
      "Finding the best roles tailored for you in the market.",
    icon: Search,
  },
  {
    step: "Step 03",
    title: "Career grooming",
    description:
      "We groom and guide you towards the right job.",
    icon: Users,
  },
  {
    step: "Step 04",
    title: "Job landing success",
    description:
      "Finally securing a job that aligns with your ambitions.",
    icon: CheckCircle,
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-20 max-w-xl text-4xl font-semibold text-foreground">
          A personalized{" "}
          <span className="text-primary">road map</span> to secure the
          right job for you.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Base dotted line */}
          <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-border" />

          <div className="grid grid-cols-4 gap-20">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative"
                  style={{
                    transform: `translateY(-${index * 64}px)`,
                  }}
                >
                  {/* Connector elbow */}
                  {index !== 0 && (
                    <div className="absolute -left-20 top-1/2 h-24 w-20">
                      <div className="h-full w-full border-l border-t border-dashed border-border" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Step label */}
                  <span className="mb-2 inline-block text-sm font-medium text-primary">
                    {item.step}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
