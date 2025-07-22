import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/71d90199-4b72-4f33-afb4-8319837fb6a0.png" 
            alt="Victoria on 5th Logo" 
            className="h-80 mx-auto" 
          />
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          VICTORIA ON 5TH
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Fashion Concierge
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          NYC-based personal stylist and shopping expert offering curated wardrobe solutions, 
          luxury shopping experiences, and personalized styling for the modern professional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
};

export default Hero;