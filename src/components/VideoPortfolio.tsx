
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoPortfolio = () => {
  const videos = [
    {
      id: "11U4k-6htrFg0bI0TZG1AaXL8aPg73dNI",
      title: "Product Showcase Video",
      description: "Authentic product demonstration with engaging storytelling",
      thumbnail: `https://drive.google.com/thumbnail?id=11U4k-6htrFg0bI0TZG1AaXL8aPg73dNI&sz=w1000`,
      embedUrl: "https://drive.google.com/file/d/11U4k-6htrFg0bI0TZG1AaXL8aPg73dNI/preview"
    },
    {
      id: "1Nc2HKPt2yypS6CcZlKT1Avq_VsppivPa",
      title: "Lifestyle Content Creation",
      description: "Lifestyle brand integration with natural storytelling",
      thumbnail: `https://drive.google.com/thumbnail?id=1Nc2HKPt2yypS6CcZlKT1Avq_VsppivPa&sz=w1000`,
      embedUrl: "https://drive.google.com/file/d/1Nc2HKPt2yypS6CcZlKT1Avq_VsppivPa/preview"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore a collection of authentic UGC videos that have helped brands 
            connect with their audience and drive meaningful engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-hover transition-smooth animate-scale-in border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-neutral-100">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  title={video.title}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="hero"
                    size="lg"
                    className="transform scale-0 group-hover:scale-100 transition-transform"
                    onClick={() => window.open(`https://drive.google.com/file/d/${video.id}/view`, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Full Screen
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            variant="creative"
            size="xl"
            className="group"
            onClick={() => window.open('https://wa.me/+212650792723', '_blank')}
          >
            <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            See More Work & Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default 
