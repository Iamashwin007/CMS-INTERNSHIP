import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HomePageComponent/HeroSection";
import ServicesSection from "../components/HomePageComponent/ServicesSection";
import FeaturedDoctors from "../components/HomePageComponent/FeaturedDoctors";
import WhyChooseUs from "../components/HomePageComponent/WhyChooseUs";
import Statistics from "../components/HomePageComponent/Statistics";
import AppointmentCTA from "../components/HomePageComponent/AppointmentCTA";
import Testimonials from "../components/HomePageComponent/Testimonials";
import ClinicGallery from "../components/HomePageComponent/ClinicGallery";
import FAQ from "../components/HomePageComponent/FAQ";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturedDoctors />
      <WhyChooseUs />
      <Statistics />
      <AppointmentCTA />
      <Testimonials />
      <ClinicGallery />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;