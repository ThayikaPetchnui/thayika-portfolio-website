import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box } from "lucide-react";

// Mock Data for your Substance Painter Renders
const ARTWORKS = [
  { id: 1, title: "Arctic Digital AK47", category: "Weapon Skin", url: "/assets/AK47_ArcticDigital3.png" },
  { id: 2, title: "Desert Camo AK47", category: "Weapon Skin", url: "/assets/AK47_Desert.png" },
  { id: 3, title: "Woodland Stripe AK47", category: "Weapon Skin", url: "/assets/AK47_WoodlandStripe1.png" },
  { id: 4, title: "Desert Yellow AK47", category: "Weapon Skin", url: "/assets/AK47_Desert_Yellow.png" },
];

function App() {
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
            <Button variant="ghost" className="text-muted-foreground">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTWORKS.map((art) => (
              <div key={art.id} className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <img 
                  src={art.url} 
                  alt={art.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white/80 mb-1">{art.category}</p>
                  <h3 className="text-xl font-semibold">{art.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-8">About Me</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              My name is Thayika Petchnui. I am from Thailand.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in texturing and material creation. 
              Always eager to learn new technologies and improve my artistic skills.
            </p>
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
              className="text-2xl md:text-3xl font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              pethayika@gmail.com
            </a>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2026 Portfolio. Built with Vite, Tailwind v4 & Shadcn.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
