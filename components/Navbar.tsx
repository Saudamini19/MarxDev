"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ComingSoonModal } from "@/components/ui/coming-soon-modal";

export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about", // Hash link
    },
    {
      name: "Team",
      link: "#team", // Hash link
    },
    {
      name: "Our Journey",
      link: "#journey", // Hash link
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Function to handle smooth scrolling to sections
  const handleScrollTo = (hash: string) => {
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname !== '/') {
      // Navigate to home page with the hash so it scrolls after load
      router.push(`/${hash}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <Navbar initiallyVisible={false} onVisibilityChange={setVisible}>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems 
            items={navItems} 
            onItemClick={(e: React.MouseEvent, item: typeof navItems[0]) => {
              e.preventDefault();
              handleScrollTo(item.link);
            }} 
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              as="button"
              variant="secondary"
              visible={false}
              className="!text-white hover:!text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleScrollTo(item.link)}
                className="relative w-full text-left text-white/90 hover:text-white py-2"
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                as="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const footer = document.querySelector('footer input');
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      (footer as HTMLInputElement).focus({ preventScroll: true });
                    }
                  }, 300);
                }}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}