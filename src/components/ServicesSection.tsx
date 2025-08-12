import { Video, ShoppingBag, Heart, Star, Clock, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: "UGC Video Creation",
      duration: "15-60s ads",
      description: "Authentic video content that feels natural and drives conversions. Perfect for social media advertising campaigns.",
      features: ["Professional filming", "Multiple angles", "Raw authenticity", "High engagement"]
    },
    {
      icon: ShoppingBag,
      title: "Product Showcases",
      duration: "30-90s demos",
      description: "Detailed product demonstrations that highlight key features and benefits in an engaging, trustworthy format.",
      features: ["Feature highlights", "Real-world usage", "Honest reviews", "Call-to-action"]
    },
    {
      icon: Heart,
      title: "Lifestyle Videos",
      duration: "45-120s stories",
      description: "Lifestyle integration content that shows your product as part of daily life, building emotional connections.",
      features: ["Natural integration", "Storytelling", "Emotional appeal", "Brand alignment"]
    },
    {
      icon: Star,
      title: "Testimonial Content",
      duration: "20-60s reviews",
      description: "Genuine testimonials and reviews that build trust and credibility with potential customers.",
      features: ["Honest feedback", "Trust building", "Social proof", "Authentic voice"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Services</span> I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to final cut, I create authentic UGC content that resonates 
            with your audience and drives measurable results for your brand.
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
              Ready to Create <span className="text-gradient">Amazing Content</span>?
            </h3>
            <p className="text-neutral-600 mb-6 text-lg">
              Let's discuss your project and create content that drives real results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/+212123456789', '_blank')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover hover:scale-105 transition-bounce shadow-creative"
              >
                Get Custom Quote
              </button>
              <button
                onClick={() => window.open('https://instagram.com/oussama.bouquonta', '_blank')}
                className="px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 hover:shadow-elegant transition-smooth"
              >
                View More Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;