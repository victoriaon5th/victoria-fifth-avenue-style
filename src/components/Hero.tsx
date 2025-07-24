import { Button } from "@/components/ui/button";
import { Instagram, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background pt-7 md:pt-20 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/2fa1efde-823c-4f71-85c9-76de1e332c1e.png" 
              alt="Victoria on 5th Fashion Styling" 
              className="w-2/3 h-auto rounded-lg shadow-lg mx-auto" 
            />
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center">
            <div className="mb-2">
              <img 
                src="/lovable-uploads/fd5d79e8-06a6-4f64-b7ca-4e8112a8fd32.png" 
                alt="Victoria on 5th Logo" 
                className="h-72 mx-auto" 
              />
            </div>
            
            {/* <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              VICTORIAON5TH
            </h1> */}
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              24/7 Conceirge for Fashion, Styling, Shopping, Sourcing
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              A personalized fashion concierge service offering expert styling,  global luxury sourcing, and exclusive access to hard-to-find pieces—delivered worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="magical-button px-8 py-3 text-lg text-black font-semibold 
                         transition-all duration-300 hover:scale-105 transform 
                         shadow-lg hover:shadow-xl flex items-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart size={20} />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://www.instagram.com/victoriaon5th/', '_blank', 'noopener,noreferrer')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;