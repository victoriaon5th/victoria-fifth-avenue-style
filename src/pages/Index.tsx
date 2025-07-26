import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Separator */}
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-border"></div>
      </div>
      
      <Contact />
      
      {/* Footer with Copyright */}
      <footer className="bg-muted py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VictoriaOn5th. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
