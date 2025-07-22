import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const clients = [
    {
      name: "Rania Benchegra",
      photographer: "📸 Photographer: Iska",
      images: ["/lovable-uploads/cd5c6dc7-c514-41b3-b978-c635ba2114a3.png"]
    },
    {
      name: "Rebecca Sorkin", 
      photographer: "📸 Photographer: Iska",
      images: ["/lovable-uploads/71679c48-5dfc-423e-a1b3-37b6fa272600.png"]
    },
    {
      name: "Micah Parrish",
      photographer: "📸 Photographer: Jake Sundean",
      images: ["/lovable-uploads/bf44a68c-ce4e-43ca-b446-0d8f53be92b1.png"]
    },
    {
      name: "Feturi Talaga",
      photographer: "📸 Photographer: Victoria Rivkin",
      images: ["/lovable-uploads/25f32c3c-0796-40d3-b97b-bfb323cb302f.png"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            CLIENT PORTFOLIO
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the transformative styling work I've created for clients across NYC, 
            from fashion shoots to personal wardrobe consultations.
          </p>
        </div>

        <div className="relative mx-auto w-4/5">
          <div className="overflow-hidden rounded-lg shadow-2xl bg-white p-[15px]">
            <div className="relative">
              <img 
                src={clients[currentIndex].images[0]} 
                alt={`${clients[currentIndex].name} styled by Victoria`}
                className="w-full object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 via-black/20 to-transparent p-6">
                <h3 className="font-serif text-3xl text-white mb-2">
                  {clients[currentIndex].name}
                </h3>
                <p className="text-white/90">{clients[currentIndex].photographer}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;