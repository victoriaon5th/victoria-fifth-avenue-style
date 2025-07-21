const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/6ba6c8d3-5787-4047-a55e-412af26cbfa9.png" 
              alt="Victoria Rivkin About" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              ABOUT ME
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Victoria Rivkin—a NYC-based personal stylist and shopping expert with 
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;