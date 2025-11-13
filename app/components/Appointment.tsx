"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  FileText,
  CheckCircle,
  Heart,
  Stethoscope,
  Cross,
  Award,
  Shield,
  Clock3,
} from "lucide-react";

// Define Doctor Type
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

// Mock doctors data
const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    specialization: "Cardiologist",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Neurologist",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    specialization: "Pediatrician",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Dr. Ananya Desai",
    specialization: "Orthopedic",
    experience: "18+ Years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop",
  },
];

// Time slots
const timeSlots: string[] = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    concern: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setErrors((prev) => ({ ...prev, doctor: "" }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!selectedTime) newErrors.time = "Time slot is required";
    if (!selectedDoctor) newErrors.doctor = "Please select a doctor";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: "", email: "", phone: "", date: "", concern: "" });
        setSelectedDoctor(null);
        setSelectedTime("");
      }, 3000);
    }
  };

  // Helper to get today's date in YYYY-MM-DD format
  const getTodayDate = (): string => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <section className="relative min-h-screen bg-white bg-gradient-to-br from-white via-blue-50/30 to-teal-50/40 py-20 px-4  py-16 px-6 lg:px-20 overflow-hidden" id="appointment">
      {/* Floating Background Icons */}
      <Heart className="absolute top-20 left-10 w-24 h-24 text-[#2AA7FF] opacity-5 animate-pulse" />
      <Stethoscope
        className="absolute top-40 right-20 w-32 h-32 text-[#00D9A5] opacity-5 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <Cross
        className="absolute bottom-32 left-1/4 w-20 h-20 text-[#2AA7FF] opacity-5 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <Heart
        className="absolute bottom-20 right-1/3 w-16 h-16 text-[#00D9A5] opacity-5 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#2AA7FF] font-semibold text-sm uppercase tracking-wider mb-3">
            Book Your Visit
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Schedule an Appointment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2AA7FF] to-[#00D9A5] mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Choose your preferred doctor and select a convenient time slot for your consultation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Doctor Selection - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50 sticky top-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-[#2AA7FF]" />
                Select Your Doctor
              </h3>
              {errors.doctor && (
                <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-lg">
                  {errors.doctor}
                </p>
              )}
              <div className="space-y-4">
                {doctorsData.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={() => handleDoctorSelect(doctor)}
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      selectedDoctor?.id === doctor.id ? "scale-105" : "hover:scale-102"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-4 border-2 transition-all duration-300 ${
                        selectedDoctor?.id === doctor.id
                          ? "border-[#2AA7FF] shadow-lg shadow-[#2AA7FF]/20"
                          : "border-transparent hover:border-blue-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-20 h-20 rounded-xl object-cover ring-4 ring-white shadow-md"
                          />
                          {selectedDoctor?.id === doctor.id && (
                            <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#2AA7FF] to-[#00D9A5] rounded-full p-1">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 text-lg">{doctor.name}</h4>
                          <p className="text-[#2AA7FF] font-semibold text-sm">
                            {doctor.specialization}
                          </p>
                          <p className="text-slate-500 text-xs mt-1">{doctor.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointment Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#00D9A5]" />
                Your Information
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-gradient-to-br from-[#2AA7FF] to-[#00D9A5] rounded-full p-6 mb-6 animate-pulse">
                    <CheckCircle className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-800 mb-3">Success!</h4>
                  <p className="text-slate-600 text-center max-w-md">
                    Your appointment has been booked successfully. We'll send you a confirmation email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                          errors.fullName ? "border-red-400" : "border-slate-200"
                        } focus:border-[#2AA7FF] focus:outline-none transition-all duration-300 bg-white/80`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                            errors.email ? "border-red-400" : "border-slate-200"
                          } focus:border-[#2AA7FF] focus:outline-none transition-all duration-300 bg-white/80`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                            errors.phone ? "border-red-400" : "border-slate-200"
                          } focus:border-[#2AA7FF] focus:outline-none transition-all duration-300 bg-white/80`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Selected Doctor Display */}
                  {selectedDoctor && (
                    <div className="bg-gradient-to-r from-[#2AA7FF]/10 to-[#00D9A5]/10 rounded-xl p-4 border-2 border-[#2AA7FF]/20">
                      <p className="text-sm text-slate-600 mb-1">Selected Doctor</p>
                      <p className="font-bold text-slate-800">{selectedDoctor.name}</p>
                      <p className="text-sm text-[#2AA7FF]">{selectedDoctor.specialization}</p>
                    </div>
                  )}

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Appointment Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={getTodayDate()}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                          errors.date ? "border-red-400" : "border-slate-200"
                        } focus:border-[#2AA7FF] focus:outline-none transition-all duration-300 bg-white/80`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      <Clock className="inline w-4 h-4 mr-1" />
                      Select Time Slot *
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setSelectedTime(time);
                            setErrors((prev) => ({ ...prev, time: "" }));
                          }}
                          className={`py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                            selectedTime === time
                              ? "bg-gradient-to-r from-[#2AA7FF] to-[#00D9A5] text-white shadow-lg"
                              : "bg-white border-2 border-slate-200 text-slate-600 hover:border-[#2AA7FF]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                    )}
                  </div>

                  {/* Concern */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Describe Your Concern (Optional)
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <textarea
                        name="concern"
                        value={formData.concern}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#2AA7FF] focus:outline-none transition-all duration-300 bg-white/80 resize-none"
                        placeholder="Tell us about your symptoms or health concerns..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00B8A9] to-[#00796B] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#2AA7FF]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Book Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-10">
            Why Choose TrueHealthCare Hospital?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#00B8A9] to-[#00796B] text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Expert Doctors</h4>
              <p className="text-slate-600">
                Highly qualified specialists with 10+ years of experience in their respective fields.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#00B8A9] to-[#00796B] text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Advanced Care</h4>
              <p className="text-slate-600">
                State-of-the-art medical equipment and cutting-edge treatment procedures.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-[#00B8A9] to-[#00796B] text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock3 className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">24/7 Support</h4>
              <p className="text-slate-600">
                Round-the-clock emergency services and patient care for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
