import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar, Users, Heart, Camera, Mail, Phone, MapPin, Instagram, ArrowRight, Star, Award, Target, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "No Food Wastage Initiative",
      description: "A comprehensive program to reduce food waste in our community through education, redistribution, and sustainable practices. We partner with local restaurants, hotels, and events to rescue surplus food and distribute it to those in need.",
      impact: "500+ meals saved monthly",
      image: "https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Community Health Camps",
      description: "Free medical checkups, health screenings, and awareness programs conducted in underserved communities. Our team of volunteer doctors and medical students provide essential healthcare services to those who need it most.",
      impact: "2000+ people served annually",
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Inclusive Community Events",
      description: "Creating accessible and welcoming events that bring together people from all backgrounds. We organize cultural festivals, sports tournaments, and educational workshops that celebrate diversity and promote unity.",
      impact: "15+ events annually",
      image: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  const events = [
    {
      title: "Annual Fundraising Gala",
      date: "March 15, 2025",
      description: "Join us for an evening of entertainment, networking, and fundraising for our community projects.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Youth Leadership Workshop",
      date: "April 22, 2025",
      description: "Empowering young leaders with skills and knowledge to make a positive impact in their communities.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Environmental Cleanup Drive",
      date: "May 8, 2025",
      description: "Community-wide initiative to clean and beautify our local parks and waterways.",
      image: "https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const leadership = [
    {
      name: "Vinoth Siranjeevi",
      position: "President",
      description: "Leading with passion and dedication to serve our community",
      image: "https://www.instagram.com/vinodhchiranjeevi_fp/?hl=en-gb?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Vignesh Sundaram",
      position: "Vice President",
      description: "Coordinating projects and building community partnerships",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Baiju",
      position: "Secretary",
      description: "Managing communications and organizing events",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                Rotaract Chennai
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Projects', 'Events', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-teal-500 to-orange-400"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Rotaract Club of</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Chennai Celebrities
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Empowering young leaders to create positive change in our community through service, fellowship, and leadership development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Discover Our Mission
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              About Our Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded on the principles of service above self, we are a dynamic community of young professionals 
              dedicated to making a lasting impact in Chennai and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide service to others, promote integrity, and advance world understanding, 
                    goodwill, and peace through our fellowship of business, professional, and community leaders.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Together, we see a world where people unite and take action to create lasting change 
                    across the globe, in our communities, and in ourselves.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Service, fellowship, diversity, integrity, and leadership are the core values that guide 
                    every action we take and every project we undertake.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm">Active Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                  <p className="text-purple-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years of Service' },
              { number: '50+', label: 'Projects Completed' },
              { number: '5000+', label: 'Lives Impacted' },
              { number: '25+', label: 'Partner Organizations' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              Our Signature Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming communities through innovative solutions and sustainable impact initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.impact}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-2 transform duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Gallery Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              Events & Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our upcoming events and relive memorable moments from our community activities
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center">
              <Calendar className="mr-3 w-8 h-8 text-purple-600" />
              Upcoming Events
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="text-purple-600 font-semibold mb-2">{event.date}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center">
              <Camera className="mr-3 w-8 h-8 text-purple-600" />
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img 
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Join Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-teal-500 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Join Our Community
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Ready to make a difference? Connect with us and become part of our mission to serve the community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  placeholder="Tell us about your interest in joining Rotaract..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Instagram Feed */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-200" />
                    <span className="text-white">chennaiceleb@rotaract.org</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-200" />
                    <span className="text-white">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-200" />
                    <span className="text-white">T. Nagar, Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Instagram Feed Simulation */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Instagram className="mr-3 w-6 h-6" />
                  Follow Us on Instagram
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {galleryImages.slice(0, 6).map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <img 
                        src={image}
                        alt={`Instagram ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <button 
                   onClick={() => window.open("https://www.instagram.com/rotaractclubofcelebrities", "_blank")}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors duration-300">
                  @rotaractclubofcelebrities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">Rotaract Chennai</span>
              </div>
              <p className="text-gray-400">
                Empowering young leaders to create positive change in our community through service, fellowship, and leadership development.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-white transition-colors">Events</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Rotaract Club of Chennai Celebrities. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
