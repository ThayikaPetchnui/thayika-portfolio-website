import { useState, useEffect, useRef, type ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, X, ChevronLeft, ChevronRight, Brush, Palette, Layers, Gamepad2, PaintBucket } from "lucide-react";

// Simple fade-in animation component
const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// Text reveal animation component (slides up from masked bottom)
const TextReveal = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div 
        className={`transition-transform duration-1000 ease-out transform ${isVisible ? "translate-y-0" : "translate-y-full"}`} 
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

// Featured assets for the main view
const FEATURED_ARTWORKS = [
  { id: 101, title: "Neon Dragon", category: "Featured Skin", url: "/assets/featured/AK47_NeonDragon.png" },
  { id: 102, title: "Paint Splash", category: "Featured Skin", url: "/assets/featured/AK47_Paint.png" },
  { id: 103, title: "Ocean Paint", category: "Featured Skin", url: "/assets/featured/AK47_PaintOcean.png" },
  { id: 104, title: "Pink Wall", category: "Featured Skin", url: "/assets/featured/AK47_PinkWall.png" },
  { id: 105, title: "Queen", category: "Featured Skin", url: "/assets/featured/AK47_Queen.png" },
  { id: 106, title: "Rainbow", category: "Featured Skin", url: "/assets/featured/AK47_Rainbow.png" },
  { id: 107, title: "Red Zebra", category: "Featured Skin", url: "/assets/featured/AK47_RedZebra.png" },
  { id: 108, title: "Skull Army", category: "Featured Skin", url: "/assets/featured/AK47_SkullArmy.png" },
  { id: 109, title: "Spray Paint", category: "Featured Skin", url: "/assets/featured/AK47_Spray.png" },
  { id: 110, title: "Thunderbird", category: "Featured Skin", url: "/assets/featured/AK47_Thunderbird.png" },
  { id: 111, title: "Water Element", category: "Featured Skin", url: "/assets/featured/AK47_Water.png" },
  { id: 112, title: "XX Design", category: "Featured Skin", url: "/assets/featured/AK47_XX.png" },
  { id: 113, title: "Yellow Abstract", category: "Featured Skin", url: "/assets/featured/AK47_YellowAbstract.png" },
  { id: 114, title: "Yellow Zebra", category: "Featured Skin", url: "/assets/featured/AK47_YellowZebra.png" },
  { id: 115, title: "Skulls", category: "Featured Skin", url: "/assets/featured/Ak47_Skulls.png" },
];

// Regular assets
const REGULAR_ARTWORKS = [
  { id: 1, title: "Arctic Digital AK47", category: "Weapon Skin", url: "/assets/AK47_ArcticDigital3.png" },
  { id: 2, title: "Arctic Stripe 2", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe2.png" },
  { id: 3, title: "Arctic Stripe 3", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe3.png" },
  { id: 4, title: "Arctic Stripe 4", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe4.png" },
  { id: 5, title: "Arctic Stripe 5", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe5.png" },
  { id: 6, title: "Arctic Stripe 6", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe6.png" },
  { id: 7, title: "Arctic Stripe 7", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe7.png" },
  { id: 8, title: "Arctic Stripe 8", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe8.png" },
  { id: 9, title: "Arctic Stripe 9", category: "Weapon Skin", url: "/assets/AK47_ArcticStripe9.png" },
  { id: 10, title: "Desert Camo AK47", category: "Weapon Skin", url: "/assets/AK47_Desert.png" },
  { id: 11, title: "Desert Stripe 11", category: "Weapon Skin", url: "/assets/AK47_DesertStripe11.png" },
  { id: 12, title: "Desert Stripe 12", category: "Weapon Skin", url: "/assets/AK47_DesertStripe12.png" },
  { id: 13, title: "Desert Stripe 13", category: "Weapon Skin", url: "/assets/AK47_DesertStripe13.png" },
  { id: 14, title: "Desert Stripe 14", category: "Weapon Skin", url: "/assets/AK47_DesertStripe14.png" },
  { id: 15, title: "Desert Stripe 15", category: "Weapon Skin", url: "/assets/AK47_DesertStripe15.png" },
  { id: 16, title: "Desert Yellow AK47", category: "Weapon Skin", url: "/assets/AK47_Desert_Yellow.png" },
  { id: 17, title: "Desert Yellow Light", category: "Weapon Skin", url: "/assets/AK47_Desert_Yellowlight.png" },
  { id: 18, title: "Woodland Stripe 1", category: "Weapon Skin", url: "/assets/AK47_WoodlandStripe1.png" },
  { id: 19, title: "Woodland Stripe 3", category: "Weapon Skin", url: "/assets/AK47_WoodlandStripe3.png" },
  { id: 20, title: "Woodland Stripe 4", category: "Weapon Skin", url: "/assets/AK47_WoodlandStripe4.png" },
  { id: 21, title: "Woodland Stripe 5", category: "Weapon Skin", url: "/assets/AK47_WoodlandStripe5.png" },
];

const ALL_ARTWORKS = [...FEATURED_ARTWORKS, ...REGULAR_ARTWORKS];

const SKILLS = [
  { name: "Substance 3D Painter", image: "/adobe-substance-3d-painter-icon.webp" },
  { name: "Photorealistic Texturing", icon: Brush, color: "text-pink-500" },
  { name: "Material Creation", icon: Palette, color: "text-purple-500" },
  { name: "Asset Reskinning", icon: PaintBucket, color: "text-green-500" },
  { name: "PBR Workflows", icon: Layers, color: "text-blue-500" },
  { name: "Export for Game Engines", icon: Gamepad2, color: "text-orange-500" },
  { name: "Export for Unity", image: "/unity-logo-black-and-white.png" },
];

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  useEffect(() => {
    document.title = "Thayika - Portfolio";

    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (link) {
      link.href = '/favicon.svg';
      link.type = 'image/svg+xml';
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/favicon.svg';
      newLink.type = 'image/svg+xml';
      document.head.appendChild(newLink);
    }
  }, []);

  // Auto-cycle works
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % FEATURED_ARTWORKS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentWorkIndex]);

  const nextWork = () => setCurrentWorkIndex((prev) => (prev + 1) % FEATURED_ARTWORKS.length);
  const prevWork = () => setCurrentWorkIndex((prev) => (prev - 1 + FEATURED_ARTWORKS.length) % FEATURED_ARTWORKS.length);

  return (
    <div className="min-h-screen bg-[#E5E3DF] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col gap-12 md:gap-20">
              
              {/* Top: Heading */}
              <div>
                <FadeIn>
                   <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    Available for Freelance
                  </div>
                </FadeIn>
                <TextReveal delay={200}>
                  <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-normal tracking-tighter leading-[0.9] text-black">
                    Digital <br /> craftsmanship.
                  </h1>
                </TextReveal>
              </div>

              {/* Bottom: Image + Text */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <FadeIn delay={500} className="flex-1 max-w-lg pt-2">
                  <p className="text-lg leading-relaxed text-gray-700 font-medium mb-8 text-justify">
                    Specialized in photorealistic texturing and material creation using Substance Painter.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="rounded-full" asChild>
                      <a href="#work">View Projects</a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full" asChild>
                      <a href="#contact">Contact Me</a>
                    </Button>
                  </div>
                </FadeIn>
              </div>

            </div>

            {/* Right Column: Large Image */}
            <div className="lg:col-span-6 relative flex justify-center lg:self-center">
              <FadeIn delay={300} className="w-full">
                {/* iPad Mockup */}
                <div className="relative mx-auto w-full">
                  <div className="relative rounded-[1.5rem] bg-white p-2 shadow-2xl ring-1 ring-gray-900/10">
                    <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                      <img src="/assets/MM4A1_Ronin.png" alt="Main Work" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col gap-6">
            {/* Main Focused Image */}
            <div 
              className="group relative aspect-video w-full max-w-4xl mx-auto cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-lg"
              onClick={() => setSelectedImage(FEATURED_ARTWORKS[currentWorkIndex].url)}
            >
              <img 
                src={FEATURED_ARTWORKS[currentWorkIndex].url} 
                alt={FEATURED_ARTWORKS[currentWorkIndex].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                <p className="text-sm md:text-base font-medium text-blue-300 mb-2">{FEATURED_ARTWORKS[currentWorkIndex].category}</p>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">{FEATURED_ARTWORKS[currentWorkIndex].title}</h3>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 hover:text-white border border-white/10"
                  onClick={(e) => { e.stopPropagation(); prevWork(); }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 hover:text-white border border-white/10"
                  onClick={(e) => { e.stopPropagation(); nextWork(); }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
              <h2 className="text-2xl font-semibold tracking-tight">Selected Works</h2>
              <Button 
                variant="ghost" 
                className="text-muted-foreground cursor-pointer"
                onClick={() => setIsGalleryOpen(true)}
              >
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 px-1">
              {FEATURED_ARTWORKS.map((art, idx) => (
                <div 
                  key={art.id} 
                  className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
                    idx === currentWorkIndex 
                      ? "ring-4 ring-blue-500 ring-offset-2 scale-95" 
                      : "hover:scale-105"
                  }`}
                  onClick={() => setCurrentWorkIndex(idx)}
                >
                  <img 
                    src={art.url} 
                    alt={art.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL GALLERY MODAL */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-in fade-in duration-200">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-white z-10 py-4 border-b border-gray-100">
               <h2 className="text-3xl font-bold tracking-tight">All Works</h2>
               <Button variant="ghost" size="icon" onClick={() => setIsGalleryOpen(false)} className="rounded-full hover:bg-gray-100">
                 <X className="h-6 w-6" />
               </Button>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 pb-12">
              {ALL_ARTWORKS.map((art) => (
                <div 
                  key={art.id} 
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 hover:shadow-md transition-all"
                  onClick={() => setSelectedImage(art.url)}
                >
                  <img 
                    src={art.url} 
                    alt={art.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200 backdrop-blur-sm" 
          onClick={() => setSelectedImage(null)}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white rounded-full" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-8 w-8" />
          </Button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Left Side: Information */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <FadeIn>
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                  Available for Freelance
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About Me</h2>
              </FadeIn>

              <div className="prose prose-lg text-gray-600 space-y-6 mb-10">
                <FadeIn delay={200}>
                  <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-900">
                    I'm Thayika, a <span className="font-bold">Texture Artist</span> based in Thailand specializing in <span className="font-bold">photorealistic texturing</span> and <span className="font-bold">material creation</span>.
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <p className="text-lg leading-relaxed text-gray-500">
                    I specialize exclusively in the texturing phase of production. I focus on texturing existing 3D models and transforming them into lifelike assets using <span className="font-bold text-gray-900">Substance Painter</span> for modern PBR workflows, ensuring high-quality results optimized for games and real-time rendering.
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  <p className="text-lg leading-relaxed text-gray-500">
                    I am constantly exploring new technologies to push the boundaries of my artistic capabilities and am currently available for freelance opportunities.
                  </p>
                </FadeIn>
              </div>

              {/* Skills */}
              <FadeIn delay={450}>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
                  {SKILLS.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default select-none"
                    >
                      {"icon" in skill ? (
                        <skill.icon className={`h-4.5 w-4.5 ${skill.color}`} strokeWidth={2} />
                      ) : "image" in skill ? (
                        <img src={skill.image} alt="" className="h-4.5 w-4.5 object-contain" />
                      ) : null}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Profile Picture */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-100">
                <img 
                  src="/thayika-profile-picture.png" 
                  alt="Thayika" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-3xl text-center px-4">
          <h2 className="text-3xl font-semibold tracking-tight mb-8">Contact</h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xl">
              Feel free to reach out to me via email:
            </p>
            <a 
              href="mailto:pethayika@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-2xl md:text-3xl font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6 md:h-8 md:w-8" />
              pethayika@gmail.com
            </a>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2026 Thayika</p>
        </div>
      </footer>
    </div>
  )
}

export default App
