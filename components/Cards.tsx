"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-md relative z-10"> {/* Increased from max-w-xs to max-w-md */}
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Why we exist
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            You wouldn&#39;t build a skyscraper using a sketch on a napkin, but that is how most software is planned today. We exist to turn chaotic brainstorming into rock-solid engineering plans.
          </p>
        </div>
        <img
          src="/LoginPage.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] hidden lg:block -bottom-10 object-contain rounded-2xl top-12"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <div className="max-w-sm"> {/* Added container with max-w-sm */}
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            What makes us different
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Our tool actually understands your plan and catches your mistakes before you write a single line of code.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-pink lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-lg relative z-10">
 {/* Increased from max-w-sm to max-w-lg */}
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            What we do
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Think of us as the &quot;Autocorrect&quot; for software architecture. You simply describe your idea to our AI, and it instantly draws a perfect, error-free blueprint for you.
          </p>
        </div>
        <img
          src="/Editor.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] hidden lg:block top-8 md:top-16 lg:top-24 -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}