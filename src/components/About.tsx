import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InstagramFeed from "./InstagramFeed";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            ABOUT ME
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>
        <div className="flex justify-center pb-8">
          <Card className="max-w-4xl w-full bg-card border-border shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4">
                <img 
                  src="/lovable-uploads/c2fcb72d-a8d2-47b4-870b-77294a2700c6.png" 
                  alt="Victoria Rivkin" 
                  className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-border"
                />
              </div>
              <CardTitle className="font-serif text-2xl font-bold text-foreground">
                Victoria Rivkin
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center px-12 pb-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Victoria is the founder of Victoriaon5th, a New York–based luxury sourcing and personal styling brand known for securing hard-to-find designer pieces with speed, discretion, and style.
                </p>
                
                <p>
                With over five years of experience in the fashion industry—including roles at Neiman Marcus and Saks Fifth Avenue—Victoria developed a strong foundation in luxury retail, managing multi-million-dollar portfolios and working closely with high-profile clientele.
                </p>
                
                <p>
                  Now, through Victoriaon5th, she specializes in sourcing rare, sold-out, and highly coveted fashion pieces—from iconic handbags to exclusive runway items. Her trusted global network allows her to track down what others can’t, making her the go-to for stylists, influencers, athletes, and fashion lovers who want the impossible made possible.     
                </p>
                
                <p className="text-foreground font-medium">
                  Whether you're refreshing your wardrobe or preparing for a major event, I'm 
                  here to make fashion effortless and fun. Let's create something unforgettable 
                  together!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Instagram Feed Section with Gray Background */}
      <div className="py-20 bg-marble">
        <div className="container mx-auto px-4">
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
};

export default About;