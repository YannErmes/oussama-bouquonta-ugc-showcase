import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VideoPortfolio = () => {
  const videos = [
    {
      id: "finished-ugc",
      title: "UGC Finished 2",
      description: "Une vidéo utilisateur générée, hébergée sur Supabase",
      thumbnail: "/thumbnails/finished-ugc.jpg", // Génère et héberge cette miniature
      videoUrl: "https://fayrviwbbspmiqztcyhv.supabase.co/storage/v1/object/public/iotimages/finished%202%20ugc.mp4"
    }
  ];

  const [playingVideo, setPlayingVideo] = useState(null);

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
              <div className="relative aspect-video bg-neutral-100">
                {playingVideo === video.id ? (
                  <video
                    src={video.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-full relative cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Button
                        variant="hero"
                        size="lg"
                        className="rounded-full p-6"
                        onClick={() => setPlayingVideo(video.id)}
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
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

export default VideoPortfolio;
