import { useState } from "react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 400);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative flex items-center justify-center px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-black"
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "absolute inset-0 z-0 rounded-full bg-white transition-all duration-500 ease-out",
          isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
        )}
      />
    </a>
  );
};

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#E5E3DF]/50 backdrop-blur-xl supports-[backdrop-filter]:bg-[#E5E3DF]/20">
      <div className="container mx-auto relative flex h-14 items-center px-4 md:px-8">
        <div className="mr-4 text-sm font-semibold tracking-tight">PORTFOLIO</div>
        <div className="flex flex-1 justify-center gap-2">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}