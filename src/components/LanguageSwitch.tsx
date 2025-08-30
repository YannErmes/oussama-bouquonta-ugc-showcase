import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm border-neutral-200 hover:bg-white hover:shadow-elegant transition-smooth"
    >
      <Languages className="h-4 w-4 mr-2" />
      <span className="font-medium">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitch;