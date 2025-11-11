"use client";

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';

// Define Event Type
interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  participants: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Morning Yoga Flow",
    description: "Start your day with gentle stretches and breathing exercises to energize body and mind.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop",
    date: "Every Monday & Wednesday",
    time: "6:00 AM - 7:00 AM",
    location: "Garden Area",
    participants: "15 spots left",
    category: "Fitness"
  },
  {
    id: 2,
    title: "Healthy Cooking Class",
    description: "Learn to prepare nutritious, delicious meals with our expert nutritionists and chefs.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=400&fit=crop",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    location: "Community Kitchen",
    participants: "8 spots left",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Mindfulness Meditation",
    description: "Discover peace and clarity through guided meditation and relaxation techniques.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop",
    date: "Tuesday & Thursday",
    time: "5:00 PM - 6:00 PM",
    location: "Wellness Center",
    participants: "20 spots left",
    category: "Mental Health"
  },
  {
    id: 4,
    title: "Fitness Bootcamp",
    description: "High-energy workout sessions designed to build strength, endurance, and confidence.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=400&fit=crop",
    date: "Every Friday",
    time: "7:00 AM - 8:30 AM",
    location: "Outdoor Arena",
    participants: "12 spots left",
    category: "Fitness"
  }
];

  const handleScroll = () => {
    const section = document.getElementById("appointment");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

export default function WellnessEvents() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-white py-20 px-6 lg:px-20 overflow-hidden" id='events'>
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Organic Wave Shape */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="url(#wave-gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Tagline */}
        <div className="text-center mb-4 animate-fadeIn">
          <p className="text-3xl md:text-4xl font-dancing text-teal-600 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-500" />
            Participate. Prevent. Perform.
            <Sparkles className="w-6 h-6 text-cyan-500" />
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-800 mb-4">
            Participate in Health & Wellness
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Join our community events to live healthier and happier.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image Collage */}
          <div className="relative animate-fadeInLeft">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop"
                  alt="Wellness Activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-4 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-teal-800">500+</p>
                    <p className="text-slate-600 font-semibold">Active Members</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-teal-800">50+</p>
                  <p className="text-slate-600 font-semibold text-sm">Weekly Events</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right Side - Event Cards */}
          <div className="space-y-6 animate-fadeInRight">
            {events.map((event, index) => (
              <div
                key={event.id}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Event Image */}
                  <div className="md:w-40 h-48 md:h-auto relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {event.category}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Meta Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4 text-teal-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4 text-teal-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="w-4 h-4 text-teal-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Footer with Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                        {event.participants}
                      </span>
                      <button className="group/btn bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-2">
                        Join Event
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Health?
              </h3>
              <p className="text-teal-50 mb-8 max-w-2xl mx-auto">
                Book a personalized wellness consultation with our experts today and start your journey to a healthier lifestyle.
              </p>
              <button onClick={handleScroll}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 hover:scale-105 transition-all duration-300 shadow-xl">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .font-dancing {
          font-family: 'Dancing Script', cursive;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}