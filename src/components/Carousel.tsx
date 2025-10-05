import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Dashboard Analytics",
    description: "Powerful insights at your fingertips with real-time data visualization.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with integrated communication tools.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Experience",
    description: "Access your workspace anywhere with our responsive mobile apps.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "API Integration",
    description: "Connect with 1000+ apps and services through our robust API.",
    color: "from-orange-500 to-red-500",
  },
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of ZephyrTech through our product showcase.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : index < current
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center p-12`}>
                  <div className="text-center text-white space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white border-0 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white border-0 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
