import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
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

export default AboutPage;