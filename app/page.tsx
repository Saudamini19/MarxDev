import DemoOne from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <NavbarDemo />
      <DemoOne />
      
      <div className="min-h-screen bg-white p-8">
        <div className="container mx-auto">
          <div className="h-screen"></div>
        </div>
      </div>
    </main>
  );
}