import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Department from './components/Department';
import DoctorSection from './components/DoctorSection';
import Appointment from './components/Appointment';
import VisitSection from './components/VisitSection';
import HealthEvent from './components/HealthEvent';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <VisitSection />
      <Department />
      <DoctorSection />
      <Appointment />
      <HealthEvent />
      <Footer />
    </>
  );
}
