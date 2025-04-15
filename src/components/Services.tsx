import React from 'react';
import { Code, Palette, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-amber-500" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <Palette className="w-12 h-12 text-amber-500" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience."
    },
    {
      icon: <Globe className="w-12 h-12 text-amber-500" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-amber-500" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-300">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;