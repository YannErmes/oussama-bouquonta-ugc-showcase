import { Button } from "@/components/ui/button";
import { Video, Camera, Heart, MessageSquare, ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Video,
      title: t("services.service1.title"),
      duration: t("services.service1.duration"),
      description: t("services.service1.desc"),
      features: [
        t("services.service1.feature1"),
        t("services.service1.feature2"), 
        t("services.service1.feature3")
      ],
      color: "bg-blue-500"
    },
    {
      icon: Camera,
      title: t("services.service2.title"),
      duration: t("services.service2.duration"),
      description: t("services.service2.desc"),
      features: [
        t("services.service2.feature1"),
        t("services.service2.feature2"),
        t("services.service2.feature3")
      ],
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      title: t("services.service3.title"),
      duration: t("services.service3.duration"),
      description: t("services.service3.desc"),
      features: [
        t("services.service3.feature1"),
        t("services.service3.feature2"),
        t("services.service3.feature3")
      ],
      color: "bg-pink-500"
    },
    {
      icon: MessageSquare,
      title: t("services.service4.title"),
      duration: t("services.service4.duration"),
      description: t("services.service4.desc"),
      features: [
        t("services.service4.feature1"),
        t("services.service4.feature2"),
        t("services.service4.feature3")
      ],
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-elegant border border-neutral-200 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold mb-4">
              {t("services.cta.title")}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("services.cta.subtitle")}
            </p>
            <Button
              variant="creative"
              size="xl"
              className="group"
              onClick={() => window.open('https://wa.me/+212650792723', '_blank')}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {t("services.cta.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;