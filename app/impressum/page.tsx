import { NavbarDemo } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Impressum() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <NavbarDemo />

      <div className="flex-1 bg-gradient-to-b from-[#004750] to-black pt-32 pb-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-white mb-2">
            Impressum
          </h1>
          <p className="text-lg italic font-light tracking-tight text-white/50 mb-12">
            Responsible for content: MarxDev
          </p>

          <div className="space-y-10 text-white/90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h2 className="text-2xl font-extralight tracking-tight text-white mb-4">
                  Address
                </h2>
                <address className="not-italic font-light tracking-tight text-white/75 space-y-1">
                  <p>Chemnitz</p>
                  <p>Saxony, Germany</p>
                </address>
              </section>

              <section>
                <h2 className="text-2xl font-extralight tracking-tight text-white mb-4">
                  Contact Information
                </h2>
                <div className="font-light tracking-tight text-white/75 space-y-1">
                  <p>
                    <a href="mailto:marxdev09111@gmail.com" className="hover:text-white transition-colors underline">
                      marxdev09111@gmail.com
                    </a>
                  </p>
                  <p>Saudamini Tergaonkar</p>
                  <p>+49 15754846422</p>
                </div>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-extralight tracking-tight text-white mb-4">
                Legal Details
              </h2>
              <p className="font-light tracking-tight text-white/75">
                This website is part of a Planspiel Web Engineering project and does not represent a real company or business entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extralight tracking-tight text-white mb-4">
                Copyright
              </h2>
              <p className="font-light tracking-tight text-white/75">
                © 2025 MarxDev. All rights reserved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extralight tracking-tight text-white mb-4">
                Disclaimer
              </h2>
              <div className="font-light tracking-tight text-white/75 space-y-4">
                <p>
                  <span className="text-white">Non-Commercial Use:</span> This website is for educational purposes only and does not conduct real business operations.
                </p>
                <p>
                  <span className="text-white">External Links:</span> We are not responsible for the content of external websites linked here. Responsibility for linked content lies solely with their respective operators.
                </p>
                <p>
                  <span className="text-white">Liability:</span> The content of this website is provided &quot;as is&quot; and without warranties of any kind.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
