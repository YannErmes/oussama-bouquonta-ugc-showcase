import { Camera, Edit3, Users, TrendingUp } from "lucide-react";
import oussamaProfile from "@/assets/oussama-profile.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const skills = [
    {
      icon: Camera,
      title: t("about.skill1.title"),
      description: t("about.skill1.desc")
    },
    {
      icon: Edit3,
      title: t("about.skill2.title"),
      description: t("about.skill2.desc")
    },
    {
      icon: Users,
      title: t("about.skill3.title"),
      description: t("about.skill3.desc")
    },
    {
      icon: TrendingUp,
      title: t("about.skill4.title"),
      description: t("about.skill4.desc")
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10 animate-scale-in">
              <img
                src={oussamaProfile}
                alt="Oussama Bouqontar"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant hover:shadow-hover transition-smooth"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/15 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8">
              {t("about.title").split(" ")[0]} <span className="text-gradient">{t("about.title").split(" ")[1]}</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                {t("about.bio1")}
              </p>
              
              <p className="text-neutral-600 text-lg leading-relaxed">
                {t("about.bio2")}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group p-6 bg-white rounded-xl shadow-elegant hover:shadow-hover transition-smooth animate-scale-in border border-neutral-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;