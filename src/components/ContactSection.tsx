import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
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
            Let's Create <span className="text-gradient">Together</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to take your brand's content to the next level? Let's discuss your vision 
            and create authentic UGC that resonates with your audience.
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
              <h3 className="font-semibold text-xl mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Quick response, instant communication</p>
              <div className="flex items-center justify-center text-green-500 font-medium group-hover:text-green-600 transition-colors">
                <span>Start Conversation</span>
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
              <h3 className="font-semibold text-xl mb-2">Instagram</h3>
              <p className="text-muted-foreground mb-4">See my latest work and behind the scenes</p>
              <div className="flex items-center justify-center text-pink-500 font-medium group-hover:text-pink-600 transition-colors">
                <span>Follow & Message</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Secondary Contact */}
          <div className="mb-12">
            <p className="text-muted-foreground mb-4">Prefer email?</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'mailto:oussama@example.com'}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              oussama@example.com
            </Button>
          </div>

          {/* What to Expect */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
            <h3 className="font-semibold text-xl mb-6">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-medium text-primary mb-2">Quick Response</div>
                <p className="text-muted-foreground">I typically respond within 2-4 hours during business days</p>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">Free Consultation</div>
                <p className="text-muted-foreground">Initial discussion about your project and goals at no cost</p>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">Custom Solutions</div>
                <p className="text-muted-foreground">Tailored content strategy based on your brand and audience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;