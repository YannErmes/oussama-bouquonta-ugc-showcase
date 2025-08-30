import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-8">
            {t('contact.title')} <span className="text-gradient">{t('contact.title.highlight')}</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>

          {/* Primary Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div 
              className="group p-8 bg-card rounded-2xl shadow-elegant hover:shadow-hover transition-smooth cursor-pointer border border-border"
              onClick={() => window.open('https://wa.me/+212650792723', '_blank')}
            >
              <div className="p-4 bg-green-500/10 rounded-xl mb-4 mx-auto w-fit group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{t('contact.whatsapp.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('contact.whatsapp.desc')}</p>
              <div className="flex items-center justify-center text-green-500 font-medium group-hover:text-green-600 transition-colors">
                <span>{t('contact.whatsapp.cta')}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              className="group p-8 bg-card rounded-2xl shadow-elegant hover:shadow-hover transition-smooth cursor-pointer border border-border"
              onClick={() => window.open('https://www.instagram.com/oussama_bouqontar1/', '_blank')}
            >
              <div className="p-4 bg-pink-500/10 rounded-xl mb-4 mx-auto w-fit group-hover:bg-pink-500/20 transition-colors">
                <Instagram className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{t('contact.instagram.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('contact.instagram.desc')}</p>
              <div className="flex items-center justify-center text-pink-500 font-medium group-hover:text-pink-600 transition-colors">
                <span>{t('contact.instagram.cta')}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Secondary Contact */}
          <div className="mb-12">
            <p className="text-muted-foreground mb-4">{t('contact.email.prefer')}</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'mailto:oussamabouquontar15@gmail.com'}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              oussamabouquontar15@gmail.com
            </Button>
          </div>

          {/* What to Expect */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
            <h3 className="font-semibold text-xl mb-6">{t('contact.expect.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-medium text-primary mb-2">{t('contact.expect.response.title')}</div>
                <p className="text-muted-foreground">{t('contact.expect.response.desc')}</p>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">{t('contact.expect.consultation.title')}</div>
                <p className="text-muted-foreground">{t('contact.expect.consultation.desc')}</p>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">{t('contact.expect.custom.title')}</div>
                <p className="text-muted-foreground">{t('contact.expect.custom.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;