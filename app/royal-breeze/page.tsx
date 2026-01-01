"use client";

import React, { useState } from "react";

// Lightweight inline icons to avoid extra dependencies
const Icon = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    {children}
  </svg>
);

const Phone = (props: { className?: string }) => (
  <Icon {...props}>
    <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72c.12 1.21.5 2.39 1.12 3.48a2 2 0 0 1-.45 2.11L10.5 11.5a16 16 0 0 0 6.99 6.99l1.19-1.26a2 2 0 0 1 2.11-.45c1.09.62 2.27 1 3.48 1.12A2 2 0 0 1 22 16.92z" />
  </Icon>
);
const MapPin = (props: { className?: string }) => (
  <Icon {...props}><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 4 5 4 9c0 7 8 13 8 13s8-6 8-13c0-4-4-7-8-7z"/></Icon>
);
const Clock = (props: { className?: string }) => (
  <Icon {...props}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2"/></Icon>
);
const ChevronRight = (props: { className?: string }) => (
  <Icon {...props}><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></Icon>
);
const Star = (props: { className?: string }) => (
  <Icon {...props}><path stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-5.4 3 1.6-6.1L4 9.7l6.3-.5L12 3.5l1.7 5.7 6.3.5-4.2 4.5 1.6 6.1z"/></Icon>
);
const Shield = (props: { className?: string }) => (
  <Icon {...props}><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.8 9.9-8 11-4.2-1.1-8-6-8-11V6l8-4z"/></Icon>
);
const Award = (props: { className?: string }) => (
  <Icon {...props}><circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 14l-2 6 5-3 5 3-2-6"/></Icon>
);
const Users = (props: { className?: string }) => (
  <Icon {...props}><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/></Icon>
);

export default function RoyalBreezeWebsite() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const fleet = [
    {
      name: "Mercedes-AMG GT",
      category: "Performance Coupe",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      features: ["Electric", "7-Seater", "Premium Interior"]
    },
    {
      name: "BMW iX 2025",
      category: "Electric SUV",
      image: "https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&q=80",
      features: ["Advanced Tech", "Luxury Comfort", "Long Range"]
    },
    {
      name: "Volkswagen Type 2",
      category: "Premium Minivan",
      image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80",
      features: ["Spacious", "12-Seater", "Perfect for Groups"]
    },
    {
      name: "Bugatti Chiron",
      category: "Supercar",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      features: ["V10 Engine", "Exotic", "Track Ready"]
    },
    {
      name: "Range Rover Vogue",
      category: "Executive SUV",
      image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
      features: ["Ultimate Luxury", "Business Class", "Chauffeur Ready"]
    },
    {
      name: "Audi RS 6 Avant",
      category: "Performance Wagon",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
      features: ["Off-Road Capable", "Premium", "Spacious"]
    },
    {
      name: "Porsche 911 Turbo S",
      category: "Sports Car",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
      features: ["Iconic Design", "Performance", "Precision"]
    },
    {
      name: "Bentley Continental GT",
      category: "Grand Tourer",
      image: "https://images.unsplash.com/photo-1566023888936-c08a54b50e81?w=800&q=80",
      features: ["Handcrafted", "W12 Engine", "Ultimate Luxury"]
    },
    {
      name: "Rolls-Royce Ghost",
      category: "Ultra Luxury Sedan",
      image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
      features: ["Bespoke", "Silent Cabin", "Supreme Comfort"]
    }
  ];

  const services = [
    {
      title: "Short-Term Rental",
      description: "Daily and weekly rentals for your business trips or leisure getaways",
      icon: "🚗"
    },
    {
      title: "Long-Term Lease",
      description: "Monthly packages with flexible terms for extended stays",
      icon: "📅"
    },
    {
      title: "Corporate Solutions",
      description: "Tailored fleet solutions for businesses and corporate clients",
      icon: "💼"
    },
    {
      title: "Event Rentals",
      description: "Make your special occasions unforgettable with our luxury fleet",
      icon: "🎉"
    },
    {
      title: "Chauffeur Service",
      description: "Professional drivers available for your convenience",
      icon: "👔"
    },
    {
      title: "Vehicle Sales",
      description: "Premium pre-owned and new vehicles available for purchase",
      icon: "🏆"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Business Executive",
      text: "Outstanding service and immaculate vehicles. Royal Breeze made my business trip to Dubai truly memorable.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Tourist",
      text: "The Mercedes S-Class was perfect for exploring Dubai. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Mohammed Hassan",
      role: "Corporate Client",
      text: "We use Royal Breeze for all our executive transportation needs. Reliability and luxury combined.",
      rating: 5
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif tracking-wide cursor-pointer" onClick={() => scrollToSection("home")}>
              <span className="text-white">ROYAL</span>
              <span className="text-amber-400 ml-2">BREEZE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'fleet', 'services', 'testimonials', 'why-us', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm tracking-widest uppercase hover:text-amber-400 transition-colors duration-300"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
            <a href="tel:+971586412034" className="hidden lg:block bg-amber-400 text-black px-6 py-2 text-sm tracking-wider uppercase hover:bg-amber-500 transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight">
            Luxury Cars.
            <br />
            <span className="text-amber-400">Royal Experience.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
            Dubai Premium Car Rental & Sales
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+971586412034" className="bg-amber-400 text-black px-10 py-4 text-lg tracking-wider uppercase hover:bg-amber-500 transition-all duration-300">
              Call Now
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-10 py-4 text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-400 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-zinc-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'Luxury Vehicles' },
            { number: '24/7', label: 'Available' },
            { number: '100%', label: 'Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif mb-8">About Us</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Royal Breeze Supercar Rental is Dubai's premier destination for luxury vehicle rentals and sales. 
                  We cater to discerning business professionals and leisure travelers who demand nothing but the finest.
                </p>
                <p>
                  Our meticulously maintained fleet represents the pinnacle of automotive excellence. From supercars 
                  that command attention to executive sedans that exude sophistication, every vehicle meets our 
                  exacting standards.
                </p>
                <p>
                  With 24/7 availability and deep expertise in Dubai's luxury landscape, we deliver a seamless, 
                  professional experience that reflects the prestige of our brand and the excellence of our city.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl mb-2">Fully Insured</h3>
                    <p className="text-gray-400 text-sm">Comprehensive coverage on all vehicles</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl mb-2">Award Winning</h3>
                    <p className="text-gray-400 text-sm">Recognized excellence in service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" 
                alt="Luxury Car Interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-center">Our Fleet</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Supercars • SUVs • Sedans • Minivans</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((car, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-black hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-amber-400 text-sm tracking-widest uppercase mb-2">{car.category}</p>
                  <h3 className="text-2xl font-serif mb-4">{car.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-gray-400 border border-gray-700 px-3 py-1">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href="tel:+971586412034" className="text-amber-400 text-sm tracking-wide hover:text-amber-500 transition-colors flex items-center gap-2">
                    Contact for Quote <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-center">Our Services</h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
            Comprehensive luxury vehicle solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-center">Client Testimonials</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">What our clients say about us</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-black p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-serif text-xl mb-1">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-20 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Premium Service', desc: 'White-glove treatment from booking to return', icon: Star },
              { title: 'Well-Maintained Fleet', desc: 'Every vehicle meticulously serviced and inspected', icon: Shield },
              { title: 'Flexible Rentals', desc: 'Daily, weekly, monthly options tailored to you', icon: Award },
              { title: 'Business & Leisure', desc: 'Perfect for corporate events and personal adventures', icon: Users },
              { title: 'Dubai Expertise', desc: 'Local knowledge, luxury standards', icon: MapPin },
              { title: '24/7 Availability', desc: 'Ready to serve you around the clock', icon: Clock }
            ].map((item, index) => {
              const Icon = item.icon as any;
              return (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-6 border-2 border-amber-400 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-20 text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-serif">Phone Numbers</h3>
                </div>
                <div className="space-y-4 ml-10">
                  <a href="tel:+971586412034" className="block text-2xl hover:text-amber-400 transition-colors">
                    +971 58 641 2034
                  </a>
                  <a href="tel:+971502597431" className="block text-2xl hover:text-amber-400 transition-colors">
                    +971 50 259 7431
                  </a>
                  <a href="tel:+971502894253" className="block text-2xl hover:text-amber-400 transition-colors">
                    +971 50 289 4253
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-serif">Availability</h3>
                </div>
                <p className="text-xl ml-10 text-gray-300">24/7 Service</p>
                <p className="text-gray-400 ml-10">12:00 AM – 12:00 AM</p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-serif">Location</h3>
                </div>
                <div className="ml-10 space-y-2">
                  <p className="text-gray-300">Level 3, Convention Tower</p>
                  <p className="text-gray-300">World Trade Centre</p>
                  <p className="text-gray-300">Trade Centre 2, Dubai, UAE</p>
                  <p className="text-sm text-amber-400 mt-4">Near World Trade Centre Metro</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black p-8">
              <h3 className="text-2xl font-serif mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  onClick={() => alert('Thank you for your interest! Please call us directly at +971 58 641 2034 for immediate assistance.')}
                  className="w-full bg-amber-400 text-black py-4 text-lg tracking-wider uppercase hover:bg-amber-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[500px] bg-zinc-800 rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3577378365755!2d55.286631!3d25.222431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-serif mb-6">
                <span className="text-white">ROYAL</span>
                <span className="text-amber-400 ml-2">BREEZE</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Dubai's premier luxury car rental and sales company. Experience the royal treatment with our 
                meticulously maintained fleet of supercars, SUVs, sedans, and minivans.
              </p>
              <div className="flex gap-4">
                <a href="tel:+971586412034" className="bg-amber-400 text-black px-6 py-2 text-sm tracking-wider uppercase hover:bg-amber-500 transition-all duration-300">
                  Call Now
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-serif mb-4">Quick Links</h4>
              <div className="space-y-3">
                {['About', 'Fleet', 'Services', 'Testimonials', 'Contact'].map((link) => (
                  <button 
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-serif mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>Level 3, Convention Tower</p>
                <p>World Trade Centre</p>
                <p>Dubai, UAE</p>
                <p className="text-amber-400 mt-4">24/7 Available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 Royal Breeze Supercar Rental. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
