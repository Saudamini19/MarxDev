"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        active &&
        typeof active === "object"
      ) {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <div className="min-h-0 bg-[#000101] pt-2 pb-4 px-4 md:pt-4 md:pb-8 md:px-8 overflow-hidden">
      {/* Title Section - Removed mx-auto, added ml-24 for large left margin */}
      <div className="ml-12 md:ml-24 lg:ml-36 xl:ml-48 2xl:ml-72">
        <h1 className="text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Core Values
        </h1>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={modalRef}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <button
                    onClick={() => setActive(false)}
                    className="text-black hover:text-gray-700 transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      {/* Cards List - Removed mx-auto, added ml-24 for large left margin */}
      <ul className="ml-0 md:ml-24 lg:ml-36 xl:ml-48 2xl:ml-72 gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-900/50 rounded-xl cursor-pointer transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-300 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Curiosity over compliance",
    title: "Innovation",
    src: "/Innovation.png",
    content: () => {
      return (
        <p className="text-black">
          We are building something that bridges academic research and commercial software. That means we value the experiment as much as the result. We encourage everyone to ask &#34;what if?&#34; rather than just following the spec sheet.
        </p>
      );
    },
  },
  {
    description: "Clarity over comfort",
    title: "Open Communication",
    src: "/OpenCommunication.png",
    content: () => {
      return (
        <p className="text-black">
          We believe honest communication is essential for staying aligned. We actively ensure that every opinion is heard and address concerns openly to maintain strong team cohesion.
        </p>
      );
    },
  },

  {
    description: "The best idea wins, regardless of title",
    title: "Collaboration",
    src: "/Collaboration.png",
    content: () => {
      return (
        <p className="text-black">
          Our product relies on connecting different &#34;realms&#34; and &#34;services&#34;. Our team works the same way. We view our startup as a single ecosystem where the frontend dev, the backend engineer, and the product manager are constantly syncing.
        </p>
      );
    },
  },
  {
    description: "Purpose over process",
    title: "Impact Driven",
    src: "/ImpactDriven.png",
    content: () => {
      return (
        <p className="text-black">
          Our primary motivation is to create a positive, meaningful impact for our end users and stakeholders. This purpose guides us through the noise to achieve successful outcomes.
        </p>
      );
    },
  },
  {
    description: "Ownership over oversight",
    title: "Accountability",
    src: "/Accountability.jpeg",
    content: () => {
      return (
        <p className="text-black">
          Each team member takes full ownership of their tasks. Being accountable is how we maintain a sustainable development process and ensure the absolute quality of our work.
        </p>
      );
    },
  },
];