import { Button } from "@/components/ui/button"; // We will create this dummy button next

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/20">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        <div className="text-sm font-semibold tracking-tight">PORTFOLIO</div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Work</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}