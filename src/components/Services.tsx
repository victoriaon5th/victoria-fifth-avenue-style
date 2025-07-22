import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shirt, ShoppingBag, Gem, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"

const Services = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  
  const clientLoveImages = [
    "/lovable-uploads/a477d5d4-4b52-43e3-be3b-0f3c2c44da86.png",
    "/lovable-uploads/2badeae8-75f7-4120-aa3d-a5cab29c2a77.png",
    "/lovable-uploads/abac7632-0abe-454a-bff6-a092d3ebb85c.png",
    "/lovable-uploads/9505aab6-1e22-4aed-aa6f-5e00c552f778.png",
    "/lovable-uploads/126b21ec-cc0c-442f-9433-6419ed75178b.png",
    "/lovable-uploads/718369cc-9717-4d75-b906-813b25d8fcdf.png",
    "/lovable-uploads/a4143735-3468-435b-ae94-2c9cbf11b9bb.png",
    "/lovable-uploads/0fb9a1fc-ec76-4e1e-b357-f729b2af3141.png"
  ]

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === clientLoveImages.length - 1 ? 0 : prevIndex! + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === 0 ? clientLoveImages.length - 1 : prevIndex! - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          setSelectedImageIndex(null);
          break;
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const services = [
    {
      title: "PERSONAL STYLING",
      icon: Shirt,
      description:
        "24/7 guidance for any desired peronsal style with curating looks for your lifestyle, body type, and personal brand\
         that fit any need, want, budget, and body-type."
    },
    {
      title: "SHOPPING CONCEIRGE", 
      icon: ShoppingBag,
      description:
        "Take the effort, knowledge, and time needed away by trusting me to handle all your shopping needs that'll fit the\
         aesthitics, brands, budget, and trends for any ocasion or as long/often as you need."
    },
    {
      title: "EXCLUSIVE SOURCING",
      icon: Gem,
      description: "I make hard-to-find items easy to find for you to enjoy from luxury brands to rare collectables with my access/network to exclusive designers, owners, and traders."
    },
    {
      title: "WARDROBE CONSULTING",
      icon: Briefcase,
      description: "Complete wardrobe analysis and strategic styling solutions for your day-day and/or special ocasions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            SERVICES OFFERED
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-gold mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Client Love Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              CLIENT LOVE
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {clientLoveImages.map((image, index) => (
              <div 
                key={index}
                className="cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Client testimonial ${index + 1}`}
                  className="w-24 h-32 md:w-32 md:h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for viewing images */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogOverlay className="bg-black/60" />
          <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 border-0 bg-transparent shadow-none [&>button]:hidden" autoFocus>
            <DialogTitle className="sr-only">Client Love Gallery</DialogTitle>
            <DialogDescription className="sr-only">View client testimonial images. Use arrow keys or navigation buttons to browse.</DialogDescription>
            <div className="relative">
              <button
                onClick={() => setSelectedImageIndex(null)}
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
                onClick={(e) => {
                  const dialogContent = e.currentTarget.closest('[role="dialog"]') as HTMLElement;
                  prevImage();
                  setTimeout(() => {
                    dialogContent?.focus();
                  }, 0);
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                tabIndex={-1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white z-10 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
                onClick={(e) => {
                  const dialogContent = e.currentTarget.closest('[role="dialog"]') as HTMLElement;
                  nextImage();
                  setTimeout(() => {
                    dialogContent?.focus();
                  }, 0);
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {selectedImageIndex !== null && (
                <img 
                  src={clientLoveImages[selectedImageIndex]} 
                  alt="Client testimonial"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;