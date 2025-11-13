'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  Smile,
  Stethoscope,
  Activity,
  Users,
  Microscope,
  Building2,
  UserCheck,
  Clock,
  Award,
  ArrowRight
} from 'lucide-react';

export default function DepartmentsSection() {
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

  // Departments data
  const departments = [
    {
      icon: <Heart className="w-10 h-10" />,
      name: 'Cardiology',
      description: 'Advanced heart care, diagnostics, and surgeries for all cardiovascular conditions.',
      gradient: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50'
    },
    {
      icon: <Brain className="w-10 h-10" />,
      name: 'Neurology',
      description: 'Expert treatment for brain, spine, and nervous system disorders with cutting-edge technology.',
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      icon: <Bone className="w-10 h-10" />,
      name: 'Orthopedics',
      description: 'Comprehensive bone, joint, and muscle treatments with advanced surgical solutions.',
      gradient: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-50 to-amber-50'
    },
    {
      icon: <Baby className="w-10 h-10" />,
      name: 'Pediatrics',
      description: 'Compassionate care for children and newborns with specialized pediatric expertise.',
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Eye className="w-10 h-10" />,
      name: 'Ophthalmology',
      description: 'Complete eye care and vision correction with state-of-the-art facilities.',
      gradient: 'from-teal-500 to-emerald-600',
      bgGradient: 'from-teal-50 to-emerald-50'
    },
    {
      icon: <Smile className="w-10 h-10" />,
      name: 'Dentistry',
      description: 'Modern dental solutions for healthy smiles with cosmetic and restorative care.',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50'
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      name: 'General Medicine',
      description: 'Preventive and primary healthcare for all ages with experienced physicians.',
      gradient: 'from-teal-600 to-teal-700',
      bgGradient: 'from-teal-50 to-cyan-50'
    },
    {
      icon: <Activity className="w-10 h-10" />,
      name: 'Oncology',
      description: 'Comprehensive cancer diagnosis and treatment with multidisciplinary care approach.',
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50'
    },
    {
      icon: <Users className="w-10 h-10" />,
      name: 'Gynecology',
      description: "Women's health, maternity, and fertility care with compassionate specialists.",
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50'
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      name: 'Pathology & Diagnostics',
      description: 'Advanced lab and imaging services with accurate and timely results.',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50'
    }
  ];

  // Stats data
  const stats = [
    { icon: <Building2 className="w-6 h-6" />, value: '10+', label: 'Departments' },
    { icon: <UserCheck className="w-6 h-6" />, value: '120+', label: 'Specialists' },
    { icon: <Clock className="w-6 h-6" />, value: '24x7', label: 'Emergency Care' },
    { icon: <Award className="w-6 h-6" />, value: '5000+', label: 'Patients Served' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40 py-20 px-4 sm:px-6 lg:px-20 overflow-hidden"
      id="departments"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/50 backdrop-blur-sm rounded-full mb-4">
            <Building2 className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">
              Our Departments
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Comprehensive Care Across
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              All Specialties
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From preventive care to advanced treatment, we offer world-class medical expertise 
            with state-of-the-art facilities and compassionate care.
          </p>

          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-teal-500 rounded-full"></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-teal-100/50 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dept.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${dept.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {dept.icon}
                </div>

                {/* Department name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {dept.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {dept.description}
                </p>

                {/* Learn More Link */}
                <button className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter Row */}
        {/* <div className={`bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-3xl p-8 md:p-10 shadow-2xl mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-teal-50 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300 overflow-hidden">
            {/* Hover glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            <span className="relative">View All Departments</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <p className="mt-6 text-gray-600 text-sm">
            Need help choosing a department? 
            <button className="text-teal-600 font-semibold hover:text-teal-700 ml-2 underline decoration-dotted underline-offset-4 transition-colors duration-300">
              Contact our specialists
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
