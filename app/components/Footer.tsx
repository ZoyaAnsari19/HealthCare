"use client";

import React, { useState, FormEvent } from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ChevronRight,
  Send
} from 'lucide-react';

interface QuickLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks: QuickLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Appointments', href: '#appointments' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Careers', href: '#careers' }
  ];

  const services: string[] = [
    'General Checkups',
    'Emergency Care',
    'Surgery & Operations',
    'Diagnostics & Imaging',
    'Mental Health Support',
    'Nutrition & Fitness'
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#006d77] via-[#00525d] to-[#003940] text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" fill="white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                  TrueHealthCare
                </h3>
                <p className="text-sm text-cyan-200">Hospital</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering healthier lives through advanced care, compassion, and innovation.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-cyan-300">Subscribe to our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-sm text-cyan-300 animate-pulse">Successfully subscribed!</p>
              )}
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-cyan-300 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start text-gray-300 hover:text-cyan-300 transition-colors duration-300 cursor-pointer group">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-300 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  123 Wellness Avenue, Harmony City, 560001
                </p>
              </div>

              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="text-gray-300 text-sm hover:text-cyan-300 transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@truehealthcare.com" className="text-gray-300 text-sm hover:text-cyan-300 transition-colors break-all">
                  info@truehealthcare.com
                </a>
              </div>

              <div className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-gray-300 text-sm">
                  <p>Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h4 className="text-lg font-bold text-cyan-300 mb-6">Find Us</h4>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-400/30 group">
            <div className="aspect-video bg-gradient-to-br from-teal-900/50 to-cyan-900/50 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267974143325!2d77.59456931482143!3d12.917923190889367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1510a0000001%3A0x9b8e1b7a35678901!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
                title="TrueHealthCare Hospital Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 TrueHealthCare Hospital. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Designed with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
              <span>by TrueHealthCare Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;