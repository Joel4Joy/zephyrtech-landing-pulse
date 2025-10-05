import { useEffect, useRef, useState } from "react";

export const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      {/* Animated orbs */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-drift" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">See It In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of SaaS technology with our interactive platform
          </p>
        </div>

        {/* Video card with scroll & pop-up animation */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 ease-out transform ${
            isVisible 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-75 translate-y-20"
          }`}
        >
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />

            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
