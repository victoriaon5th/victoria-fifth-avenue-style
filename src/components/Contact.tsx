import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              GET IN TOUCH
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to elevate your style? Let's discuss how we can create your perfect wardrobe 
              and enhance your personal brand through fashion.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:rivkinvictoria@gmail.com" 
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    rivkinvictoria@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a 
                    href="tel:+13478038485" 
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    +1 (347) 803-8485
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Instagram</p>
                  <div className="space-y-1">
                    <a 
                      href="https://instagram.com/victoriaon5th" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-gold transition-colors"
                    >
                      @victoriaon5th
                    </a>
                    <a 
                      href="https://instagram.com/victoriarivkin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-gold transition-colors"
                    >
                      @victoriarivkin
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="px-8 py-3">
                <a href="mailto:rivkinvictoria@gmail.com">Start Your Style Journey</a>
              </Button>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/92bfb58b-5983-4268-b446-4f2b179cfe57.png" 
              alt="Victoria Rivkin Fashion Stylist Logo" 
              className="w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;