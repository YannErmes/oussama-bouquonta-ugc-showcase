import { Video, ShoppingBag, Heart, Star, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      title: t('services.ugc.title'),
      duration: t('services.ugc.duration'),
      description: t('services.ugc.desc'),
      features: [t('services.ugc.feature1'), t('services.ugc.feature2'), t('services.ugc.feature3'), t('services.ugc.feature4')]
    },
    {
      icon: ShoppingBag,
      title: t('services.product.title'),
      duration: t('services.product.duration'),
      description: t('services.product.desc'),
      features: [t('services.product.feature1'), t('services.product.feature2'), t('services.product.feature3'), t('services.product.feature4')]
    },
    {
      icon: Heart,
      title: t('services.lifestyle.title'),
      duration: t('services.lifestyle.duration'),
      description: t('services.lifestyle.desc'),
      features: [t('services.lifestyle.feature1'), t('services.lifestyle.feature2'), t('services.lifestyle.feature3'), t('services.lifestyle.feature4')]
    },
    {
      icon: Star,
      title: t('services.testimonial.title'),
      duration: t('services.testimonial.duration'),
      description: t('services.testimonial.desc'),
      features: [t('services.testimonial.feature1'), t('services.testimonial.feature2'), t('services.testimonial.feature3'), t('services.testimonial.feature4')]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('services.title')}</span> {t('services.title.highlight')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-smooth animate-scale-in border border-neutral-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-2xl mb-4 text-neutral-900">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-neutral-200 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold mb-4">
              {t('services.cta.title')} <span className="text-gradient">{t('services.cta.title.highlight')}</span>?
            </h3>
            <p className="text-neutral-600 mb-6 text-lg">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
