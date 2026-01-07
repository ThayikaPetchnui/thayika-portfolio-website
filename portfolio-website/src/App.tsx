import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";

// Full dataset of all assets
const ALL_ARTWORKS = [
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

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  useEffect(() => {
    document.title = "Thayika - Portfolio";
  }, []);

  // Auto-cycle works
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % ALL_ARTWORKS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentWorkIndex]);

  const nextWork = () => setCurrentWorkIndex((prev) => (prev + 1) % ALL_ARTWORKS.length);
  const prevWork = () => setCurrentWorkIndex((prev) => (prev - 1 + ALL_ARTWORKS.length) % ALL_ARTWORKS.length);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            Available for Freelance
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent">
            Digital craftsmanship.
          </h1>
          <p className="text-xl text-gray-500 md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Specialized in photorealistic texturing and material creation using Substance Painter.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <a href="#work">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="work" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">Selected Works</h2>
            <Button 
              variant="ghost" 
              className="text-muted-foreground cursor-pointer"
              onClick={() => setIsGalleryOpen(true)}
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Main Focused Image */}
            <div 
              className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-lg"
              onClick={() => setSelectedImage(ALL_ARTWORKS[currentWorkIndex].url)}
            >
              <img 
                src={ALL_ARTWORKS[currentWorkIndex].url} 
                alt={ALL_ARTWORKS[currentWorkIndex].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                <p className="text-sm md:text-base font-medium text-blue-300 mb-2">{ALL_ARTWORKS[currentWorkIndex].category}</p>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">{ALL_ARTWORKS[currentWorkIndex].title}</h3>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 px-1">
              {ALL_ARTWORKS.map((art, idx) => (
                <div 
                  key={art.id} 
                  className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
                    idx === currentWorkIndex 
                      ? "ring-2 ring-blue-500 ring-offset-2 scale-95 opacity-100" 
                      : "opacity-40 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0"
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12">
              {ALL_ARTWORKS.map((art) => (
                <div 
                  key={art.id} 
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100 hover:shadow-md transition-all"
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
      <section id="about" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Left Side: Profile Picture */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-100">
                <img 
                  src="/thayika-profile-picture.png" 
                  alt="Thayika" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Side: Information */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About Me</h2>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-900">
                  I'm Thayika, a 3D Artist based in Thailand specializing in photorealistic texturing and material creation.
                </p>
                <p className="text-lg leading-relaxed text-gray-500">
                  With a keen eye for detail and a passion for digital craftsmanship, I transform 3D models into lifelike assets that tell a story. My workflow centers around Substance Painter and modern PBR pipelines, ensuring high-quality results optimized for games and real-time rendering.
                </p>
                <p className="text-lg leading-relaxed text-gray-500">
                  I am constantly exploring new technologies to push the boundaries of my artistic capabilities and am currently available for freelance opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gray-50/50">
        <div className="container mx-auto max-w-3xl text-center px-4">
          <h2 className="text-3xl font-semibold tracking-tight mb-8">Contact</h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xl text-gray-500">
              Feel free to reach out to me via email:
            </p>
            <a 
              href="mailto:pethayika@gmail.com" 
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
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
          <p>© 2026 Thayika.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
