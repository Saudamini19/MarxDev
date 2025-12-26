import DemoOne from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <NavbarDemo />
      <DemoOne />
      
      {/* replace this for other things */}
      <div className="min-h-screen bg-white p-8">
        <div className="container mx-auto">
        </div>
      </div>
    </main>
  );
}