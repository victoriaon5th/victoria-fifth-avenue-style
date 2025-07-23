import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  const [selectedImage, setSelectedImage] = useState<{clientIndex: number, imageIndex: number} | null>(null);

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

  const nextModalImage = () => {
    if (selectedImage) {
      const currentClient = clients[selectedImage.clientIndex];
      const nextImageIndex = selectedImage.imageIndex === currentClient.images.length - 1 ? 0 : selectedImage.imageIndex + 1;
      setSelectedImage({
        clientIndex: selectedImage.clientIndex,
        imageIndex: nextImageIndex
      });
    }
  };

  const prevModalImage = () => {
    if (selectedImage) {
      const currentClient = clients[selectedImage.clientIndex];
      const prevImageIndex = selectedImage.imageIndex === 0 ? currentClient.images.length - 1 : selectedImage.imageIndex - 1;
      setSelectedImage({
        clientIndex: selectedImage.clientIndex,
        imageIndex: prevImageIndex
      });
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevModalImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextModalImage();
          break;
        case 'Escape':
          event.preventDefault();
          setSelectedImage(null);
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  // Focus the dialog when it opens
  useEffect(() => {
    if (selectedImage !== null) {
      setTimeout(() => {
        const dialogContent = document.querySelector('[role="dialog"]') as HTMLElement;
        dialogContent?.focus();
      }, 100);
    }
  }, [selectedImage]);

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
                    className="w-full h-[400px] object-cover cursor-pointer transition-all duration-300 hover:opacity-90"
                    onClick={() => setSelectedImage({clientIndex, imageIndex: currentIndices[clientIndex]})}
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

        {/* Modal for viewing images */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogOverlay className="bg-black/60" />
          <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 border-0 bg-transparent shadow-none [&>button]:hidden" autoFocus>
            <DialogTitle className="sr-only">Portfolio Gallery</DialogTitle>
            <DialogDescription className="sr-only">View portfolio images. Use arrow keys or navigation buttons to browse.</DialogDescription>
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                tabIndex={-1}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors text-lg leading-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
              >
                ×
              </button>
              
              {/* Navigation buttons */}
              <Button
                variant="outline"
                size="icon"
                tabIndex={-1}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white z-10 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  prevModalImage();
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                tabIndex={-1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white z-10 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  nextModalImage();
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {selectedImage !== null && (
                <div className="text-center">
                  <img 
                    src={clients[selectedImage.clientIndex].images[selectedImage.imageIndex]} 
                    alt={`${clients[selectedImage.clientIndex].name} styled by Victoria`}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                  />
                  <div className="mt-4 text-white">
                    <h3 className="font-serif text-2xl mb-2">
                      {clients[selectedImage.clientIndex].name}
                    </h3>
                    <p className="text-white/90">{clients[selectedImage.clientIndex].photographer}</p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;