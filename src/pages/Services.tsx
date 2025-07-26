import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Services />
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

export default ServicesPage;