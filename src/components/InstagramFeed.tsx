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
    "/lovable-uploads/d9a69deb-fa10-4e45-a010-1a2dde76e242.png",
    "/lovable-uploads/5b6c7c5b-2b94-4950-aa99-01ad97de88e9.png",
    "/lovable-uploads/2c1a8056-3b0c-4bdd-a169-1923a534a7f9.png",
    "/lovable-uploads/c7aa7398-aeaa-402d-9128-9da526e03776.png",
    "/lovable-uploads/d4350772-58ae-4545-b1d5-75b0694598e1.png",
    "/lovable-uploads/b5ab16e9-c591-4067-988a-2fa45bb4dcfd.png",
    "/lovable-uploads/89276be0-4957-4be1-949f-97d28d85d6f9.png",
    "/lovable-uploads/d9a69deb-fa10-4e45-a010-1a2dde76e242.png",
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