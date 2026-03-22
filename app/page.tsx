import DemoOne from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import {WobbleCardDemo} from "@/components/Cards"
import VisionMissionSection from '@/components/VisionMissionSection';
import {ExpandableCardDemo} from '@/components/Values';
import TeamShowcaseDemo from '@/components/Team';
import {TimelineDemo} from '@/components/Journey';
import { Footer } from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="relative w-full max-w-full">
      <NavbarDemo />
      <DemoOne />

      <div id="about" className="min-h-screen bg-gradient-to-b from-black via-[#001116] via-40% to-[#004A53] py-8 flex flex-col items-center justify-center" style={{ paddingLeft: 'clamp(41px, 10.5vw, 151px)', paddingRight: 'clamp(41px, 10.5vw, 151px)' }}>
        <div className="w-full max-w-7xl mx-auto">
          <WobbleCardDemo />
        </div>
      </div>
      <VisionMissionSection />
      <ExpandableCardDemo />
      <Pricing />
      <TeamShowcaseDemo />
      <div id="journey" className="mb-24 md:mb-32">
        <TimelineDemo />
      </div>
      <Footer />
    </main>
  );
}