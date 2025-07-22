const Services = () => {
  const services = [
    {
      title: "PERSONAL STYLING",
      description:
        "24/7 guidance for any desired peronsal style with curating looks for your lifestyle, body type, and personal brand\
         that fit any need, want, budget, and body-type."
    },
    {
      title: "SHOPPING CONCEIRGE", 
      description:
        "Take the effort, knowledge, and time needed away by trusting me to handle all your shopping needs that'll fit the\
         aesthitics, brands, budget, and trends for any ocasion or as long/often as you need."
    },
    {
      title: "EXCLUSIVE SOURCING",
      description: "I make hard-to-find items easy to find for you to enjoy from luxury brands to rare collectables with my access/network to exclusive designers, owners, and traders."
    },
    {
      title: "WARDROBE CONSULTING",
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
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 bg-background rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl text-gold mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <p className="text-lg text-gold font-medium">
            *THIS COVERS ALL BRANDS AND CATEGORIES*
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Services;