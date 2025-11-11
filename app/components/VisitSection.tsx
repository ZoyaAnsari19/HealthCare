"use client"

import { useState, useRef, useEffect } from 'react'
import { Play, X, Activity, Heart, Building2, Ambulance, Stethoscope, ChevronRight } from 'lucide-react'

// Array of 3 videos to play sequentially
const videos = [
  "/video/video1.mp4",
  "/video/video2.mp4",
  "/video/video3.mp4"
]

export default function HospitalVisit() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    setShowModal(true)
    setIsVideoPlaying(true)
    setCurrentVideoIndex(0)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setIsVideoPlaying(false)
    setCurrentVideoIndex(0)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.src = videos[0] // Reset to first video
    }
  }

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1)
    } else {
      handleCloseModal()
    }
  }

  // Auto-play next video when index changes
  useEffect(() => {
    if (showModal && videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex]
      videoRef.current.play().catch(() => {})
    }
  }, [currentVideoIndex, showModal])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#E0F7F5] via-[#D4F1EE] to-[#C8EBE7] py-20 px-6 lg:px-20 overflow-hidden">
      {/* Floating Medical Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Stethoscope 
          className="absolute top-20 left-10 w-16 h-16 text-[#00BFA6] opacity-10 animate-float"
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        />
        <Heart 
          className="absolute top-40 right-20 w-20 h-20 text-[#007BFF] opacity-10 animate-float"
          style={{ animationDelay: '1s', animationDuration: '7s' }}
        />
        <Building2 
          className="absolute bottom-32 left-1/4 w-24 h-24 text-[#00BFA6] opacity-10 animate-float"
          style={{ animationDelay: '2s', animationDuration: '8s' }}
        />
        <Ambulance 
          className="absolute bottom-20 right-1/3 w-18 h-18 text-[#007BFF] opacity-10 animate-float"
          style={{ animationDelay: '1.5s', animationDuration: '6.5s' }}
        />
        <Activity 
          className="absolute top-1/2 left-12 w-16 h-16 text-[#00BFA6] opacity-10 animate-float"
          style={{ animationDelay: '0.5s', animationDuration: '7.5s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block bg-gradient-to-r from-[#00BFA6]/10 to-[#007BFF]/10 px-6 py-2 rounded-full mb-4">
            <p className="text-[#00BFA6] font-semibold text-sm uppercase tracking-wider">
              Virtual Hospital Tour
            </p>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Take a Virtual Tour of
            <span className="block bg-gradient-to-r from-[#00BFA6] to-[#007BFF] bg-clip-text text-transparent">
              TrueHealthCare Hospital
            </span>
          </h1>
          
          <p className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience world-class healthcare facilities from the comfort of your home. 
            Explore our state-of-the-art infrastructure, meet our dedicated staff, and discover 
            the compassionate care we provide.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00BFA6]/20 via-[#007BFF]/20 to-[#00BFA6]/20 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-4 lg:p-8 shadow-2xl border border-white/50">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=675&fit=crop"
                alt="Hospital Tour Thumbnail"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {!isVideoPlaying && (
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    
                    <div className="relative bg-gradient-to-r from-[#00BFA6] to-[#007BFF] w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </button>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-red-500 px-3 py-1 rounded text-xs font-bold uppercase">Live</div>
                  <p className="text-sm font-semibold">Hospital Virtual Walkthrough • 3:45</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#00BFA6]/5 to-transparent rounded-2xl border border-[#00BFA6]/10">
                <div className="bg-gradient-to-br from-[#00BFA6] to-[#00BFA6]/70 p-3 rounded-xl">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Modern Infrastructure</h3>
                  <p className="text-sm text-slate-600">State-of-the-art facilities with latest medical technology</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#007BFF]/5 to-transparent rounded-2xl border border-[#007BFF]/10">
                <div className="bg-gradient-to-br from-[#007BFF] to-[#007BFF]/70 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Compassionate Care</h3>
                  <p className="text-sm text-slate-600">Patient-centered approach with experienced staff</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#00BFA6]/5 to-transparent rounded-2xl border border-[#00BFA6]/10">
                <div className="bg-gradient-to-br from-[#00BFA6] to-[#007BFF] p-3 rounded-xl">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">24/7 Emergency</h3>
                  <p className="text-sm text-slate-600">Round-the-clock emergency services available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <button className="group bg-gradient-to-r from-[#00BFA6] to-[#007BFF] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-[#00BFA6]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Visit Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105">
            Explore Gallery
          </button>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#00BFA6] to-[#007BFF] bg-clip-text text-transparent mb-2">50+</h3>
            <p className="text-slate-600 font-semibold">Specialist Doctors</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#00BFA6] to-[#007BFF] bg-clip-text text-transparent mb-2">200+</h3>
            <p className="text-slate-600 font-semibold">Hospital Beds</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#00BFA6] to-[#007BFF] bg-clip-text text-transparent mb-2">24/7</h3>
            <p className="text-slate-600 font-semibold">Emergency Care</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#00BFA6] to-[#007BFF] bg-clip-text text-transparent mb-2">15+</h3>
            <p className="text-slate-600 font-semibold">Years Experience</p>
          </div>
        </div> */}
      </div>

      {/* Video Modal - Only ONE <video> element */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={handleCloseModal}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 group z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-scaleIn">
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              autoPlay
              onEnded={handleVideoEnd}
              key={currentVideoIndex} // Force re-render on index change
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  )
}