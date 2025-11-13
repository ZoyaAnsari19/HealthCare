'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Target, 
  Lightbulb, 
  Users, 
  Building2, 
  Activity, 
  Clock, 
  Award,
  ArrowDown,
  CheckCircle2
} from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mission, Vision, Values cards data
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'Deliver exceptional care through empathy and excellence.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Our Vision',
      description: 'To be a global leader in integrated healthcare innovation.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Our Values',
      description: 'Compassion, Integrity, Innovation.',
      gradient: 'from-teal-600 to-teal-700'
    }
  ];

  // Stats data
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '120+', label: 'Expert Doctors' },
    { icon: <Building2 className="w-6 h-6" />, value: '10+', label: 'Specialized Departments' },
    { icon: <Activity className="w-6 h-6" />, value: '5000+', label: 'Happy Patients Served' },
    { icon: <Clock className="w-6 h-6" />, value: '24x7', label: 'Emergency Support' }
  ];

  // Key features/specializations
  const specializations = [
    'Cardiology & Heart Care',
    'Pediatrics & Child Health',
    'Orthopedics & Joint Care',
    'Gynecology & Maternity',
    'Advanced Diagnostics',
    'Surgical Excellence'
  ];

  const handleScroll = () => {
    const section = document.getElementById("appointment");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40 py-20 px-4 sm:px-6 lg:px-20 overflow-hidden"
      id='about'
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/50 backdrop-blur-sm rounded-full mb-4">
            <Award className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">
              About TrueHealthCare Hospital
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Redefining Modern Healthcare
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              with Compassion and Innovation
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <Heart className="w-6 h-6 text-teal-600 fill-teal-100" />
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Side - Images */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Modern hospital facility with medical professionals"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border-2 border-teal-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">25+ Years</p>
                  <p className="text-sm text-gray-600">Healthcare Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold text-teal-700">TrueHealthCare Hospital</span>, 
                we combine modern infrastructure with expert medical professionals to deliver 
                world-class healthcare. Our state-of-the-art facilities feature the latest 
                technology, ensuring accurate diagnosis and effective treatment, with 24x7 
                emergency care available round the clock.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in patient-centered care that goes beyond treating symptoms. Our 
                holistic approach focuses on preventive medicine, wellness programs, and 
                personalized treatment plans that address your complete well-being—physical, 
                mental, and emotional.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive range of specializations includes cardiology, pediatrics, 
                orthopedics, gynecology, advanced diagnostics, surgical excellence, and more. 
                Each department is led by board-certified specialists committed to delivering 
                exceptional outcomes.
              </p>
            </div>

            {/* Specializations Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {specializations.map((spec, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-teal-100/50 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-gradient-to-r from-teal-600 to-cyan-700 rounded-3xl p-8 md:p-12 shadow-2xl mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-teal-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={handleScroll}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Book Appointment</span>
              <ArrowDown className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-teal-200 hover:border-teal-400 hover:scale-105 transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Signature Section */}
          <div className="mt-16 pt-12 border-t border-teal-200/50">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic font-light mb-4">
              "Your health, our priority — every moment, every day."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-teal-500"></div>
              <p className="text-sm text-gray-600 font-medium">
                Dr. Rajesh Kumar, <span className="text-teal-700">Medical Director</span>
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-teal-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
