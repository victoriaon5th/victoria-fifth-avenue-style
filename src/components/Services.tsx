const Services = () => {
  const services = [
    {
      title: "PERSONAL STYLING",
      description: "Curated looks for your lifestyle, body type, and personal brand"
    },
    {
      title: "PERSONAL SHOPPING", 
      description: "Expert selection and sourcing of pieces that elevate your wardrobe"
    },
    {
      title: "SOURCING",
      description: "Access to exclusive pieces and hard-to-find items from luxury brands"
    },
    {
      title: "WARDROBE CONSULTING",
      description: "Complete wardrobe analysis and strategic styling solutions"
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
        
        <div className="text-center mt-12">
          <p className="text-lg text-gold font-medium">
            *THIS COVERS ALL BRANDS AND CATEGORIES*
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;