import { Instagram, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Brand */}
          <h3 className="font-heading text-2xl font-bold mb-4">
            Oussama <span className="text-primary">Bouqontar</span>
          </h3>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            {t('footer.description')}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => window.open('https://www.instagram.com/oussama_bouqontar1/', '_blank')}
              className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/+212650792723', '_blank')}
              className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = 'mailto:oussamabouquontar15@gmail.com'}
              className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
