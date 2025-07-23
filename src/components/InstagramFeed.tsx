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
    "/lovable-uploads/a4143735-3468-435b-ae94-2c9cbf11b9bb.png",
    "/lovable-uploads/595977d6-0461-4619-81fa-636a1415f6a4.png",
    "/lovable-uploads/298b98fc-ebe3-4f21-990f-0c0c8dc9ef1c.png",
    "/lovable-uploads/718369cc-9717-4d75-b906-813b25d8fcdf.png",
    "/lovable-uploads/6ba6c8d3-5787-4047-a55e-412af26cbfa9.png",
    "/lovable-uploads/8a12cd36-d9d4-4d84-96b9-95d9b26c60a8.png",
    "/lovable-uploads/bf44a68c-ce4e-43ca-b446-0d8f53be92b1.png",
    "/lovable-uploads/c2fcb72d-a8d2-47b4-870b-77294a2700c6.png",
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
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 border-0 bg-transparent shadow-none [&>button]:hidden" autoFocus>
          <DialogTitle className="sr-only">Instagram Feed Gallery</DialogTitle>
          <DialogDescription className="sr-only">View Instagram posts. Use arrow keys or navigation buttons to browse.</DialogDescription>
          <div className="relative">
            <button
              onClick={() => setSelectedImageIndex(null)}
              tabIndex={-1}
              className="absolute top-2 right-2 z-10 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors text-lg leading-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
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