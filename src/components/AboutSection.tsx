import { Camera, Edit3, Users, TrendingUp } from "lucide-react";
import oussamaProfile from "@/assets/oussama-profile.jpg";

const AboutSection = () => {
  const skills = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "Professional video production with state-of-the-art equipment"
    },
    {
      icon: Edit3,
      title: "Video Editing",
      description: "Expert post-production and storytelling through visuals"
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Understanding what resonates with target demographics"
    },
    {
      icon: TrendingUp,
      title: "Brand Growth",
      description: "Proven track record of driving measurable results"
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
                alt="Oussama Bouquonta"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant hover:shadow-hover transition-smooth"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/15 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Based in Morocco, I specialize in creating authentic, high-converting 
                User Generated Content for brands worldwide. From concept to final cut, 
                I deliver engaging videos that resonate with your target audience.
              </p>
              
              <p className="text-neutral-600 text-lg leading-relaxed">
                With a deep understanding of social media trends and consumer behavior, 
                I craft content that not only looks great but drives real business results. 
                Every video tells a story that connects brands with their community.
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