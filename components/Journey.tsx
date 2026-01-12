import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "October",
      content: (
        <div>
          <div className="mb-8 text-xs font-extralight text-white md:text-sm space-y-2">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Assembled the founding team and established brand identity (Name & Logo)
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Locked in the project scope and launched deep-dive research into WAM
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Codified our startup DNA: defined the mission, vision, and core culture
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/October.png"
              alt="Online Team Meeting"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November",
      content: (
        <div>
          <div className="mb-8 text-xs font-extralight text-white md:text-sm space-y-2">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Launched the official company website
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Delivered Pitch 1: Unveiled our corporate identity and team culture
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Finalized and submitted the initial status report
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Conducted deep-dive market research to identify critical industry gaps
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Architected the initial business model and value proposition
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Submitted November status reports and documentation deliverables
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/TeamWork.jpeg"
              alt="Group Picture of the Team"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December",
      content: (
        <div>
          <div className="mb-8 text-xs font-extralight text-white md:text-sm space-y-2">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Delivered Pitch 2: Presented the business strategy, user persona analysis, and Unique Selling Proposition (USP)
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Solidified the technical foundation: Finalized the tech stack, libraries, and UI wireframes
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Transitioned to execution: Commenced development of core feature modules
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Completed and submitted the December milestone report
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="Christmas.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
     {
      title: "January",
      content: (
        <div>
          <div className="mb-8 text-xs font-extralight text-white md:text-sm space-y-2">
            {/* <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Launched the official company website
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Delivered Pitch 1: Unveiled our corporate identity and team culture
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Finalized and submitted the initial status report
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Conducted deep-dive market research to identify critical industry gaps
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Architected the initial business model and value proposition
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm font-extralight">
                Submitted November status reports and documentation deliverables
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <img
              src="/TeamWork.jpeg"
              alt="Group Picture of the Team"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}