import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Card className="max-w-lg w-full bg-card border-border shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4">
                <img 
                  src="/lovable-uploads/c2fcb72d-a8d2-47b4-870b-77294a2700c6.png" 
                  alt="Victoria Rivkin" 
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-border"
                />
              </div>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                Victoria Rivkin
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center px-6 pb-6">
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  NYC-based personal stylist and shopping expert with 
                  over five years of experience in the fashion industry. My career spans luxury 
                  retail roles at Neiman Marcus and Saks Fifth Avenue to building a thriving 
                  personal styling business, where I provide curated wardrobe solutions for 
                  clients, models, and creative projects.
                </p>
                
                <p>
                  At my roles at Saks Fifth Avenue and Neiman Marcus, I managed a multi-million-dollar 
                  portfolio, styling high-profile clients, and exceeding sales goals through 
                  personalized recommendations.
                </p>
                
                <p>
                  As an independent stylist, I've collaborated with photographers and sourced 
                  exclusive pieces to create standout looks for events like New York Fashion 
                  Week. My personal shopping and styling services focus on delivering seamless, 
                  high-touch experiences—from boutique access to event styling.
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
    </section>
  );
};

export default About;