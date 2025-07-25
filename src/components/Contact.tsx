import { Mail, Instagram } from "lucide-react";
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
              Whether it's a wardrobe refresh or the hunt for a rare designer piece, Victoria’s goal is to make fashion feel fun, stress-free, and uniquely personal. Her approach blends expertise with ease—so every client walks away feeling confident, elevated, and effortlessly styled.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:victoria@victoriaon5th.com" 
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    victoria@victoriaon5th.com
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
                      <div className="flex">
                        <span className="text-muted-foreground hover:text-gold transition-colors w-32">
                          <a 
                            href="https://instagram.com/victoriaon5th" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            @victoriaon5th
                          </a>
                        </span>
                        <span>Business</span>
                      </div>
                      <div className="flex">
                        <span className="text-muted-foreground hover:text-gold transition-colors w-32">
                          <a 
                            href="https://instagram.com/victoriarivkin" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            @victoriarivkin
                          </a>
                        </span>
                        <span>Personal</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="px-8 py-3" asChild>
                <a href="mailto:victoria@victoriaon5th.com">Start Your Style Journey</a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;