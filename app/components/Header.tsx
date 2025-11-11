'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Search, User, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HealthcareHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Navigation menu items with route paths
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Departments', path: '#departments' },
    { label: 'Doctors', path: '#doctors' },
    { label: 'Appointments', path: '#appointment' },
    { label: 'About Us', path: '#about' },
    { label: 'Events', path: '#events' },
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Get active menu based on current path
  const activeMenu = menuItems.find(item => item.path === pathname)?.label || 'Home';

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-medium">+91-9876543210</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-medium">24x7 Emergency Services Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Heart className="w-7 h-7 text-white fill-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-teal-400 rounded-xl animate-ping opacity-20"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                  TrueHealthCare
                </h1>
                <span className="text-xs text-teal-600 font-medium">Hospital</span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group ${
                    activeMenu === item.label
                      ? 'text-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transform origin-left transition-transform duration-300 ${
                      activeMenu === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Right CTA Section */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>

              <button className="hidden md:flex p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300">
                <User className="w-5 h-5" />
              </button>

              <Link
                href="#appointment"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeMenu === item.label
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              <Link
                href="#appointment"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book Appointment
              </Link>
              <Link
                href="#login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300"
              >
                <User className="w-5 h-5" />
                Patient Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}