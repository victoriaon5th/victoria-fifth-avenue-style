import { useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramFeed = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Static Instagram post URLs
  const instagramUrls = [
    "https://www.instagram.com/victoriaon5th/p/DLXz7kfunxp/",
    "https://www.instagram.com/victoriaon5th/p/DC7fQA9JsOv/",
    "https://www.instagram.com/victoriaon5th/p/DMXvIjoOw9E/",
    "https://www.instagram.com/victoriaon5th/p/DMQXqvtOWvE/",
    "https://www.instagram.com/victoriaon5th/reel/DML5b2RSOHY/",
    "https://www.instagram.com/victoriaon5th/p/DMIuTnhurQc/",
    "https://www.instagram.com/victoriaon5th/p/DL8EjT4pn2B/",
    "https://www.instagram.com/victoriaon5th/p/DLyIfnlSHtr/"
  ];


  // Fallback images for thumbnails
  const fallbackImages = [
    "/lovable-uploads/498932bd-06fd-4e6c-9bce-d15e257686d3.png",
    "/lovable-uploads/3b5abee3-25b9-4343-913f-0a7c6e9f7212.png",
    "/lovable-uploads/e7ea0813-6ab2-49c2-bab9-e2a71014c55b.png",
    "/lovable-uploads/a7b8095e-305d-4928-bdae-6004bc7ff341.png",
    "/lovable-uploads/f65c6c03-8e04-43a0-aaa8-cf12227481cf.png",
    "/lovable-uploads/bf54ac20-baf3-47e6-8874-d29158b882a9.png",
    "/lovable-uploads/bd57e83c-f850-40f5-9b60-d8fce3d6b778.png",
    "/lovable-uploads/bded2dad-d056-456e-b33b-07879b5bd9dd.png",
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
          FOLLOW MY JOURNEY
        </h3>
        <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        <p className="text-muted-foreground mb-4">Latest from @victoriaon5th</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {instagramUrls.map((url, index) => (
          <div 
            key={index}
            className="cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img 
              src={fallbackImages[index % fallbackImages.length]} 
              alt={`Instagram post ${index + 1}`}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Modal for viewing Instagram posts */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogOverlay className="bg-black/60" />
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 border-0 bg-transparent shadow-none [&>button]:!hidden [&>button]:!opacity-0 [&>button]:!pointer-events-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" autoFocus>
          <DialogTitle className="sr-only">Instagram Feed Gallery</DialogTitle>
          <DialogDescription className="sr-only">View Instagram posts.</DialogDescription>
          <div className="relative">
            <button
              onClick={() => setSelectedImageIndex(null)}
              tabIndex={-1}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors text-lg leading-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
            >
              ×
            </button>
            

            {selectedImageIndex !== null && (
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-4 max-w-md">
                  <InstagramEmbed 
                    url={instagramUrls[selectedImageIndex]} 
                    width={400}
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InstagramFeed;