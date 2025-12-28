'use client';

import { motion } from 'framer-motion';

export default function VisionMissionSection() {
  return (
    <section className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Smooth Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #014952 0%, #002A35 25%, #00141E 50%, #000000 100%)'
          }}
        />
        
        {/* Additional gradient layers for smoother transition */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(1, 73, 82, 0.3) 0%, transparent 70%), radial-gradient(ellipse at center, rgba(0, 42, 53, 0.2) 0%, transparent 70%), radial-gradient(ellipse at bottom, rgba(0, 0, 0, 0.3) 0%, transparent 70%)'
          }}
        />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Our Vision and Mission
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl"
          >
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 -z-10">
              {/* Glass base with heavy blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-[120px]" />
              
              {/* Dynamic gradient mesh */}
              <div className="absolute inset-0">
                <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-[spin_25s_linear_infinite] bg-gradient-to-r from-transparent via-white/[0.03] via-20% to-transparent" />
                <div className="absolute -top-1/2 -right-1/2 h-[200%] w-[200%] animate-[spin_30s_linear_infinite_reverse] bg-gradient-to-r from-transparent via-white/[0.02] via-30% to-transparent" />
              </div>
              
              {/* Subtle glow edges */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/[0.05] via-transparent to-cyan-500/[0.05]" />
              
              {/* Main border */}
              <div className="absolute inset-0 rounded-3xl border border-white/[0.12] p-[1px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.15] via-transparent to-white/[0.05]" />
              </div>
            </div>

            {/* Inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/[0.03] via-transparent to-cyan-500/[0.03] blur-xl" />
            </div>

            {/* Content */}
            <div className="relative p-8">
              <h2 className="mb-6 text-4xl font-light tracking-tight text-white sm:text-5xl">
                Vision
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed tracking-tight text-white/90">
                  Our company vision is to become the global benchmark for intelligent system architecture modelling through creativity, Artificial Intelligence (AI), and human-centered design.
                </p>
                <p className="text-lg font-light leading-relaxed tracking-tight text-white/90">
                  Our product aims to enable organizations of all sizes to transform complex system architectures into clear and actionable insights, fostering innovation, efficiency, and collaboration in an increasingly digital world.
                </p>
                <p className="text-lg font-light leading-relaxed tracking-tight text-white/90">
                  It reduces the complexity of system architecture modelling and makes it easier for users to understand and work with, ensuring that advanced system modelling is accessible to everyone.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl"
          >
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 -z-10">
              {/* Glass base with heavy blur */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.04] to-white/[0.01] backdrop-blur-[120px]" />
              
              {/* Dynamic gradient mesh */}
              <div className="absolute inset-0">
                <div className="absolute -top-1/2 -right-1/2 h-[200%] w-[200%] animate-[spin_28s_linear_infinite] bg-gradient-to-r from-transparent via-white/[0.03] via-20% to-transparent" />
                <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-[spin_35s_linear_infinite_reverse] bg-gradient-to-r from-transparent via-white/[0.02] via-30% to-transparent" />
              </div>
              
              {/* Subtle glow edges */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/[0.05] via-transparent to-cyan-500/[0.05]" />
              
              {/* Main border */}
              <div className="absolute inset-0 rounded-3xl border border-white/[0.12] p-[1px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-white/[0.15] via-transparent to-white/[0.05]" />
              </div>
            </div>

            {/* Inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/[0.03] via-transparent to-cyan-500/[0.03] blur-xl" />
            </div>

            {/* Content */}
            <div className="relative p-8">
              <h2 className="mb-6 text-4xl font-light tracking-tight text-white sm:text-5xl">
                Mission
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed tracking-tight text-white/90">
                  Our mission is to improve digital experiences by designing innovative, future-ready web solutions that empower people and businesses worldwide.
                </p>
                <p className="text-lg font-light leading-relaxed tracking-tight text-white/90">
                  We are committed to leveraging AI-driven technologies to streamline complex system design, improve collaboration, minimize errors, and accelerate informed decision-making.
                </p>
                <p className="text-lg font-light leading-relaxed tracking-tight text-white/90">
                  Our system architecture editor, which utilizes the Web Composition Architecture Model (WAM), combines technical excellence, creativity, and user-centered design to make system modelling not only efficient but also engaging and accessible for both technical and non-technical users.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes spin_reverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
        
        /* Smooth gradient transition */
        section {
          background-attachment: fixed;
        }
        
        /* Enhanced glass effect */
        .backdrop-blur-\\[120px\\] {
          backdrop-filter: blur(120px);
        }
        
        /* Smooth animations */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}