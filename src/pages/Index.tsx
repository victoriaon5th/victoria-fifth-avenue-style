import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      
      {/* Footer with Copyright */}
      <footer className="silk-section py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {new Date().getFullYear()} Victoria On 5th. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
