'use client';
import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// TypeScript interface for each team member
interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  themeColor: string;
  linkedIn: string;
}

// Props for the main component
interface TeamShowcaseProps {
  title?: string;
  members: TeamMember[];
  className?: string;
}

const TeamShowcase: React.FC<TeamShowcaseProps> = ({
  title = "Meet The Team",
  members,
  className = "",
}) => {
  // Animation variants for the container to stagger children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each card
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="team"
      className={`w-full min-h-screen text-white py-16 px-4 md:px-8 ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #004249 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Left Aligned */}
        <div className="mb-12">
          <h1 className="text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </div>

        {/* Members Showcase Section */}
        <motion.div
          className="w-full flex justify-start items-end gap-4 md:gap-6 px-4 overflow-x-auto pt-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {members.map((member, index) => (
              <motion.a
                key={member.name}
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[200px] md:max-w-[250px] cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05, zIndex: 40 }}
                style={{ zIndex: members.length - index }}
              >
                <div
                  className={`relative pt-8 pb-4 px-4 rounded-t-[50%] h-[280px] md:h-[350px] flex flex-col items-center justify-between text-center overflow-hidden ${member.themeColor}`}
                >
                  <div className="text-black">
                    <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
                    <p className="text-xs md:text-sm opacity-80">{member.role}</p>
                  </div>
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom"
                    style={{ maxHeight: "85%" }}
                  />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Demo Component
const developers: TeamMember[] = [
  {
    name: "AMAMI",
    role: "Systems Architect",
    imageSrc: "/AmamiAlias.png",
    themeColor: "bg-[#FEFCF7]",
    linkedIn: "https://www.linkedin.com/in/amami-uduwana-3b3b46172/",
  },
  {
    name: "PABASARA",
    role: "Lead Viz Engineer",
    imageSrc: "/PabasaraAlias.png",
    themeColor: "bg-[#DEDCD9]",
    linkedIn: "https://www.linkedin.com/in/pabasara-palihena-91a618211/",
  },
  {
    name: "SAMRAT",
    role: "AI Integration Engineer",
    imageSrc: "/SamratAlias.png",
    themeColor: "bg-[#FDEACC]",
    linkedIn: "https://www.linkedin.com/in/samrat-kamthe-a62545246/",
  },
  {
    name: "SANDEEP",
    role: "Frontend Application Developer",
    imageSrc: "/SandeepAlias.png",
    themeColor: "bg-[#EAE1DA]",
    linkedIn: "https://www.linkedin.com/in/sandeep-shankar-dhange/",
  },
  {
    name: "SAUDAMINI",
    role: "Technical Product Lead",
    imageSrc: "/SaudaminiAlias.png",
    themeColor: "bg-[#F9D4D5]",
    linkedIn: "https://www.linkedin.com/in/saudamini-tergaonkar/",
  },
];

export default function App() {
  return <TeamShowcase members={developers} />;
}