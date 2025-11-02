import React, { useState, useEffect } from 'react';
import { Music, Calendar, Users, Award, ChevronDown, Menu, X, Mail, Phone, MapPin } from 'lucide-react';

export default function GreatMusicLLM() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'ensemble', 'events', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const musicians = [
    { name: 'Elena Rostova', instrument: 'Violin', role: 'Concertmaster', image: '🎻' },
    { name: 'Marcus Chen', instrument: 'Piano', role: 'Principal Pianist', image: '🎹' },
    { name: 'Isabella Moretti', instrument: 'Cello', role: 'Principal Cellist', image: '🎼' },
    { name: 'Alexandre Dubois', instrument: 'Conductor', role: 'Music Director', image: '🎭' }
  ];

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Private Events',
      description: 'Elevate your special occasions with world-class orchestral performances tailored to your vision.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Corporate Functions',
      description: 'Impress clients and celebrate success with sophisticated musical entertainment for your business events.'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Concert Series',
      description: 'Experience our seasonal concert series featuring classical masterpieces and contemporary compositions.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recording Sessions',
      description: 'Professional orchestral recording services for film, television, and commercial productions.'
    }
  ];

  const upcomingEvents = [
    { date: 'Dec 15, 2025', title: 'Winter Gala Concert', venue: 'Symphony Hall' },
    { date: 'Jan 20, 2026', title: 'New Year Chamber Series', venue: 'Grand Theatre' },
    { date: 'Feb 14, 2026', title: "Valentine's Evening", venue: 'Royal Opera House' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Music className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-serif tracking-wide">Great Music LLM</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Ensemble', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm uppercase tracking-widest transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-amber-400'
                      : 'text-slate-300 hover:text-amber-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Ensemble', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-widest text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-purple-950/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl">🎼</div>
          <div className="absolute bottom-40 right-32 text-8xl">🎻</div>
          <div className="absolute top-1/2 left-1/3 text-7xl">🎹</div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight">
            <span className="block text-amber-400">Masterful</span>
            <span className="block">Performances</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light tracking-wide max-w-3xl mx-auto">
            World-class orchestral excellence for your most distinguished occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Book an Event
            </button>
            <button
              onClick={() => scrollToSection('ensemble')}
              className="px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold uppercase tracking-widest transition-all"
            >
              Meet the Ensemble
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-amber-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-amber-400">Our Legacy</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Founded in the heart of New York City, Great Music LLM represents the pinnacle of orchestral artistry. Our ensemble comprises award-winning musicians from the world's most prestigious conservatories and symphony orchestras.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With over two decades of excellence, we have graced the stages of Carnegie Hall, Lincoln Center, and private venues across North America, bringing the transcendent power of classical music to audiences who demand nothing less than perfection.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Every performance is a testament to our commitment to artistic integrity, technical mastery, and the timeless beauty of orchestral music.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-900/40 to-transparent p-8 border border-amber-700/30">
                <div className="text-4xl font-serif text-amber-400 mb-2">25+</div>
                <div className="text-sm uppercase tracking-widest text-slate-400">Years Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-transparent p-8 border border-purple-700/30">
                <div className="text-4xl font-serif text-amber-400 mb-2">500+</div>
                <div className="text-sm uppercase tracking-widest text-slate-400">Performances</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-transparent p-8 border border-purple-700/30">
                <div className="text-4xl font-serif text-amber-400 mb-2">40+</div>
                <div className="text-sm uppercase tracking-widest text-slate-400">World-Class Artists</div>
              </div>
              <div className="bg-gradient-to-br from-amber-900/40 to-transparent p-8 border border-amber-700/30">
                <div className="text-4xl font-serif text-amber-400 mb-2">15+</div>
                <div className="text-sm uppercase tracking-widest text-slate-400">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-amber-400">Our Services</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Bespoke musical experiences crafted for the most discerning clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-amber-400">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ensemble Section */}
      <section id="ensemble" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-amber-400">The Ensemble</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet our distinguished artists, virtuosos who bring passion and precision to every note
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {musicians.map((musician, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-amber-900/30 to-purple-900/30 border border-slate-700/50 p-8 mb-4 group-hover:border-amber-400/50 transition-all">
                  <div className="text-7xl mb-4">{musician.image}</div>
                  <h3 className="text-xl font-serif mb-2 text-amber-400">{musician.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-slate-400 mb-1">{musician.instrument}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500">{musician.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-amber-400">Upcoming Events</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-8 hover:border-amber-400/50 transition-all flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-2 text-amber-400">{event.title}</h3>
                  <p className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.venue}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-right">
                    <div className="text-3xl font-serif text-amber-400">{event.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-amber-400">Get in Touch</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300">
              Let us create an unforgettable musical experience for your event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-slate-800/30 border border-slate-700/50">
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-serif mb-2 text-amber-400">Phone</h3>
              <p className="text-slate-300">+1 (212) 555-0123</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 border border-slate-700/50">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-serif mb-2 text-amber-400">Email</h3>
              <p className="text-slate-300">info@greatmusicllm.com</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 border border-slate-700/50">
              <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-serif mb-2 text-amber-400">Location</h3>
              <p className="text-slate-300">New York, NY</p>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900/50 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-900/50 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Event Type"
                className="w-full bg-slate-900/50 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <textarea
                rows="6"
                placeholder="Tell us about your event..."
                className="w-full bg-slate-900/50 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold uppercase tracking-widest py-4 transition-all transform hover:scale-105"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Music className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-serif tracking-wide">Great Music LLM</span>
          </div>
          <p className="text-slate-400 mb-4">
            Orchestral Excellence Since 2000
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Great Music LLM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}