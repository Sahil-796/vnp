"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { SectionTitle } from "./SectionTitle";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity. Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-accent to-primary text-white">
        <Image
          src="/process-1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updatesWork together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/process-2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions. Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary to-secondary text-white">
        <Image
          src="/process-3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions. Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-secondary to-accent text-white">
        <Image
          src="/process-4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
];
export function Services() {
  return (
    <div className="w-full relative">
      <SectionTitle
        badge="Services"
        title="Our Services"
        description="We offer a comprehensive suite of tools designed to streamline your workflow and enhance collaboration. Discover how we can help you achieve more."
        containerClassName="max-w-[85vw] sticky top-24 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 transition-all"
      />
      <StickyScroll content={content} />
    </div>
  );
}
