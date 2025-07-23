import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center silk-section">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2">
          <img 
            src="/lovable-uploads/fd5d79e8-06a6-4f64-b7ca-4e8112a8fd32.png" 
            alt="Victoria on 5th Logo" 
            className="h-80 mx-auto drop-shadow-xl" 
          />
        </div>
        
        <h1 className="luxury-heading text-5xl md:text-7xl font-bold mb-6">
          VICTORIAON5TH
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-light italic">
          24/7 Concierge for Fashion, Styling, Shopping, Sourcing
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A personalized fashion concierge service offering expert styling, global luxury sourcing, and exclusive access to hard-to-find pieces—delivered worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg magical-button border-0 text-black font-medium"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;