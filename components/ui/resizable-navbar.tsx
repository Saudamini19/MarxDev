"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  initiallyVisible?: boolean;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ 
  children, 
  className, 
  initiallyVisible = true
}: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(initiallyVisible);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px) saturate(180%)" : "blur(0px)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 10,
        background: visible 
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)" 
          : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        // Liquid glass effect
        visible && "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-['']",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 transition-colors duration-300",
            visible 
              ? "text-[#525252] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" 
              : "text-[#F2F5FA] hover:text-white dark:text-[#F2F5FA] dark:hover:text-white"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          <span className="relative z-20 transition-colors duration-300">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px) saturate(180%)" : "blur(0px)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 10,
        background: visible 
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)" 
          : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        // Liquid glass effect
        visible && "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-['']",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 px-4 py-8 backdrop-blur-xl",
            "border border-white/20 shadow-[0_8px_32px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(255,_255,_255,_0.1)_inset]",
            "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:content-['']",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  visible = true,
}: {
  isOpen: boolean;
  onClick: () => void;
  visible?: boolean;
}) => {
  return isOpen ? (
    <IconX 
      className={cn(
        "size-6 transition-colors duration-300",
        visible ? "text-[#525252] hover:text-gray-900 dark:text-gray-300" : "text-[#F2F5FA] hover:text-white dark:text-[#F2F5FA]"
      )} 
      onClick={onClick} 
    />
  ) : (
    <IconMenu2 
      className={cn(
        "size-6 transition-colors duration-300",
        visible ? "text-[#525252] hover:text-gray-900 dark:text-gray-300" : "text-[#F2F5FA] hover:text-white dark:text-[#F2F5FA]"
      )} 
      onClick={onClick} 
    />
  );
};

export const NavbarLogo = ({ visible = true }: { visible?: boolean }) => {
  return (
        <a
        href="#"
        className={cn(
            "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-[#F2F5FA] hover:text-white dark:text-[#F2F5FA] dark:hover:text-white transition-colors duration-300"
        )}
        >
      <img
        src="/favicon.ico"
        alt="logo"
        width={30}
        height={30}
        className="transition-opacity duration-300"
      />
      <span className="font-medium transition-colors duration-300">MarxDev</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as = "a",
  children,
  className,
  variant = "primary",
  visible = true,
  ...props
}: {
  as?: "a" | "button";
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient" | "glass";
  href?: string;
  visible?: boolean;
} & React.HTMLAttributes<HTMLElement>) => {
  
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-300 inline-block text-center";

  const variantStyles = {
    primary: cn(
      "bg-white shadow-[0_4px_20px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(255,_255,_255,_0.2)_inset]",
      visible ? "text-[#525252] hover:text-gray-900" : "text-white hover:text-white"
    ),
    secondary: cn(
      "bg-transparent shadow-none backdrop-blur-sm",
      visible 
        ? "text-[#525252] hover:text-gray-900 dark:text-gray-300" 
        : "text-[#F2F5FA] hover:text-white dark:text-[#F2F5FA]",
      "border border-white/20 hover:border-white/40"
    ),
    dark: "bg-gray-900 text-white shadow-[0_4px_20px_rgba(0,_0,_0,_0.2),_0_0_0_1px_rgba(255,_255,_255,_0.1)_inset] hover:bg-gray-800",
    gradient:
      "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-[0_4px_20px_rgba(59,_130,_246,_0.3)] hover:from-blue-600 hover:to-purple-700",
    glass: cn(
      "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl",
      "border border-white/20 shadow-[0_8px_32px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(255,_255,_255,_0.1)_inset]",
      visible 
        ? "text-[#525252] hover:text-gray-900" 
        : "text-[#F2F5FA] hover:text-white",
      "hover:border-white/40 hover:from-white/30 hover:to-white/10"
    ),
  };

  // Create the props object based on the component type
  const componentProps = {
    className: cn(baseStyles, variantStyles[variant], className),
    ...(as === "a" && href ? { href } : {}),
    ...props,
  };

  const Component = as;

  return (
    <Component {...componentProps}>
      {children}
    </Component>
  );
};