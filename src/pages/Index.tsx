import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/LanguageSwitch";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <LanguageSwitch />
      <HeroSection />
      <AboutSection />
      <VideoPortfolio />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;