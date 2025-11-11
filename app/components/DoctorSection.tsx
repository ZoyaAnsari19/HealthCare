"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Award, Clock, Users } from 'lucide-react'

// Doctor data structure
const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    department: "Cardiology",
    qualification: "MBBS, MD (Cardiology)",
    experience: "15+ Years",
    visitingHours: "Mon–Sat, 9:00 AM – 6:00 PM",
    bio: "Dr. Mehta is a senior cardiologist specializing in advanced heart care and minimally invasive procedures with expertise in interventional cardiology.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    department: "Neurology",
    qualification: "MBBS, MD, DM (Neurology)",
    experience: "12+ Years",
    visitingHours: "Mon–Fri, 10:00 AM – 5:00 PM",
    bio: "Dr. Sharma specializes in neurological disorders, stroke management, and advanced brain imaging techniques with a patient-centered approach.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    department: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "10+ Years",
    visitingHours: "Mon–Sat, 8:00 AM – 4:00 PM",
    bio: "Dr. Kumar is a compassionate pediatrician dedicated to child healthcare, vaccinations, and developmental assessments with gentle care for young patients.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Ananya Desai",
    department: "Orthopedics",
    qualification: "MBBS, MS (Orthopedics)",
    experience: "18+ Years",
    visitingHours: "Tue–Sun, 11:00 AM – 7:00 PM",
    bio: "Dr. Desai excels in joint replacement surgeries, sports injuries, and arthroscopic procedures with state-of-the-art surgical techniques.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Dr. Kavita Iyer",
    department: "Gynecology",
    qualification: "MBBS, MD (Obstetrics & Gynecology)",
    experience: "14+ Years",
    visitingHours: "Mon–Sat, 9:00 AM – 5:00 PM",
    bio: "Dr. Iyer provides comprehensive women's healthcare including prenatal care, high-risk pregnancies, and minimally invasive gynecological surgeries.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  }
]

export default function DoctorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % doctors.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  const currentDoctor = doctors[currentIndex]

   const handleScroll = () => {
    const section = document.getElementById("appointment");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#E0F7F5] via-[#D4F1EE] to-[#C8EBE7] py-20 px-6 lg:px-20 overflow-hidden" id='doctors'>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B8A9] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00796B] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00B8A9] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Expert Doctors
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            Meet Our Specialist Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00B8A9] to-[#00796B] mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Highly qualified, experienced, and compassionate healthcare professionals
            dedicated to your wellbeing.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#00B8A9]/10">
            <Users className="w-8 h-8 text-[#00B8A9]" />
            <div>
              <p className="font-bold text-2xl text-[#1E293B]">120+</p>
              <p className="text-sm text-slate-600">Certified Specialists</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#00B8A9]/10">
            <Award className="w-8 h-8 text-[#00B8A9]" />
            <div>
              <p className="font-bold text-2xl text-[#1E293B]">98%</p>
              <p className="text-sm text-slate-600">Patient Satisfaction</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[#00B8A9]/10">
            <Clock className="w-8 h-8 text-[#00B8A9]" />
            <div>
              <p className="font-bold text-2xl text-[#1E293B]">24×7</p>
              <p className="text-sm text-slate-600">Medical Support</p>
            </div>
          </div>
        </div>

        {/* Doctor Card */}
        <div className="relative">
          <div
            className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Doctor Image */}
              <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-[#00B8A9]/10 to-[#00796B]/10 flex items-center justify-center p-8 lg:p-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9] to-[#00796B] rounded-3xl blur-2xl opacity-20"></div>
                  <img
                    src={currentDoctor.image}
                    alt={currentDoctor.name}
                    className="relative w-80 h-80 object-cover rounded-3xl shadow-xl ring-4 ring-white"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00B8A9] to-[#00796B] text-white px-6 py-3 rounded-full shadow-lg font-semibold">
                    {currentDoctor.experience}
                  </div>
                </div>
              </div>

              {/* Right Side - Doctor Information */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-[#00B8A9]/10 text-[#00796B] px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  {currentDoctor.department}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-2">
                  {currentDoctor.name}
                </h3>
                
                <p className="text-[#00B8A9] font-semibold text-lg mb-6">
                  {currentDoctor.qualification}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#00B8A9] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1E293B]">Experience</p>
                      <p className="text-slate-600">{currentDoctor.experience} in {currentDoctor.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#00B8A9] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1E293B]">Visiting Hours</p>
                      <p className="text-slate-600">{currentDoctor.visitingHours}</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {currentDoctor.bio}
                </p>

                <button onClick={handleScroll}
                className="bg-gradient-to-r from-[#00B8A9] to-[#00796B] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full lg:w-auto">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#00B8A9] text-[#00B8A9] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous doctor"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#00B8A9] text-[#00B8A9] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next doctor"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {doctors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-[#00B8A9] to-[#00796B]'
                  : 'w-3 h-3 bg-slate-300 hover:bg-[#00B8A9]/50'
              }`}
              aria-label={`Go to doctor ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Doctors CTA */}
        <div className="text-center mt-12">
          <button className="border-2 border-[#00B8A9] text-[#00B8A9] hover:bg-[#00B8A9] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  )
}