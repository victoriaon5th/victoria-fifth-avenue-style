import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const clients = [
    {
      name: "Rania Benchegra",
      photographer: "📸 Photographer: Iska",
      images: [
        "/lovable-uploads/a8e35b1a-708f-4ba3-9d47-469dd250b7b1.png",
        "/lovable-uploads/d758375f-8c65-4d67-b3da-f982b990c47b.png"
      ]
    },
    {
      name: "Feturi Talaga",
      photographer: "📸 Photographer: Victoria Rivkin",
      images: [
        "/lovable-uploads/0574d088-4aa6-4d51-b3ac-f405e9fafe0f.png",
        "/lovable-uploads/b9ee36f7-5869-4c0f-b57b-4c9265fab020.png"
      ]
    },
    {
      name: "Rebecca Sorkin", 
      photographer: "📸 Photographer: Iska",
      images: [
        "/lovable-uploads/0099d211-ec80-4da3-891a-2acc53c57efc.png",
        "/lovable-uploads/8696787e-c1a3-4155-bda6-db32030c364b.png"
      ]
    },
    {
      name: "Micah Parrish",
      photographer: "📸 Photographer: Jake Sundean",
      images: [
        "/lovable-uploads/1c8fb29d-8b2c-4568-be8c-7901de2f086f.png",
        "/lovable-uploads/1ddff1f2-6361-487f-a694-c7e0cea92bc0.png"
      ]
    }
  ];

  const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0]);

  const nextSlide = (clientIndex: number) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[clientIndex] = newIndices[clientIndex] === 1 ? 0 : 1;
      return newIndices;
    });
  };

  const prevSlide = (clientIndex: number) => {
    setCurrentIndices(prev => {
      const newIndices = [...prev];
      newIndices[clientIndex] = newIndices[clientIndex] === 0 ? 1 : 0;
      return newIndices;
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            PORTFOLIO
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the transformative styling work I've created for clients across NYC, 
            from fashion shoots to personal wardrobe consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {clients.map((client, clientIndex) => (
            <div key={clientIndex} className="relative">
              <div className="overflow-hidden rounded-lg shadow-2xl bg-white p-[15px]">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={client.images[currentIndices[clientIndex]]} 
                    alt={`${client.name} styled by Victoria`}
                    className="w-full h-[400px] object-cover"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 via-black/20 to-transparent p-4">
                    <h3 className="font-serif text-xl text-white mb-1">
                      {client.name}
                    </h3>
                    <p className="text-white/90 text-sm">{client.photographer}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={() => prevSlide(clientIndex)}
              >
                <ChevronLeft className="h-3 w-3" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={() => nextSlide(clientIndex)}
              >
                <ChevronRight className="h-3 w-3" />
              </Button>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {client.images.map((_, imageIndex) => (
                  <button
                    key={imageIndex}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      imageIndex === currentIndices[clientIndex] ? 'bg-gold' : 'bg-muted'
                    }`}
                    onClick={() => {
                      setCurrentIndices(prev => {
                        const newIndices = [...prev];
                        newIndices[clientIndex] = imageIndex;
                        return newIndices;
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;