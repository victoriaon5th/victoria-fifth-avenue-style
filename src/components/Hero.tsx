import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/2fa1efde-823c-4f71-85c9-76de1e332c1e.png" 
              alt="Victoria on 5th Fashion Styling" 
              className="w-4/5 max-w-md h-auto rounded-lg shadow-lg" 
            />
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fd5d79e8-06a6-4f64-b7ca-4e8112a8fd32.png" 
                alt="Victoria on 5th Logo" 
                className="h-60 mx-auto lg:mx-0" 
              />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              VICTORIAON5TH
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              24/7 Conceirge for Fashion, Styling, Shopping, Sourcing
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0">
              A personalized fashion concierge service offering expert styling,  global luxury sourcing, and exclusive access to hard-to-find pieces—delivered worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;