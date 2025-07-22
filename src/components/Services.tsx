import { useState } from "react"
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, ShoppingBag, Gem, Briefcase } from "lucide-react"

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const clientLoveImages = [
    "/lovable-uploads/e2ba59d6-29c2-4d00-87d1-ac2c3411d8af.png",
    "/lovable-uploads/6c241000-f3d6-4d4c-8a3e-cf11c17cf1a5.png",
    "/lovable-uploads/5f2436de-3cd1-4dc5-8e8b-9d781e37281a.png",
    "/lovable-uploads/68c21a75-0f8d-4ea7-841b-fb1a33aa12c4.png",
    "/lovable-uploads/298b98fc-ebe3-4f21-990f-0c0c8dc9ef1c.png",
    "/lovable-uploads/595977d6-0461-4619-81fa-636a1415f6a4.png",
    "/lovable-uploads/b82d59f8-8a21-4350-9caa-145165ecb778.png",
    "/lovable-uploads/8a12cd36-d9d4-4d84-96b9-95d9b26c60a8.png"
    // "/lovable-uploads/b066f943-8bd8-4621-8fcb-e828f5b07ff3.png"
  ]

  const services = [
    {
      title: "PERSONAL STYLING",
      icon: Crown,
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
                onClick={() => setSelectedImage(image)}
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
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogOverlay className="bg-black/60" />
          <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              {selectedImage && (
                <img 
                  src={selectedImage} 
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