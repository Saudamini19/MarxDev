import DemoOne from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import {WobbleCardDemo} from "@/components/Cards"

export default function Home() {
  return (
    <main className="relative">
      <NavbarDemo />
      <DemoOne />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#001116] via-40% to-[#004A53] p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
          <WobbleCardDemo />
        </div>
      </div>
    </main>
  );
}