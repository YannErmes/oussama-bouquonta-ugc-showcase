import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Instagram, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Creative background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">{t("hero.name")}</span>
            <span className="block text-gradient">{t("hero.title")}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={() => window.open('https://wa.me/+212650792723', '_blank')}
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              {t("hero.whatsapp")}
            </Button>
            
            <Button 
              variant="social" 
              size="xl"
              className="group"
              onClick={() => window.open('https://www.instagram.com/oussama_bouqontar1/', '_blank')}
            >
              <Instagram className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              {t("hero.instagram")}
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              {t("hero.scroll")}
            </p>
            <button
              onClick={scrollToAbout}
              className="group cursor-pointer"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8 text-primary animate-bounce group-hover:text-primary/70 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default HeroSection;