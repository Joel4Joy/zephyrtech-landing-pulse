import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Spline from "@splinetool/react-spline";


const slides = [
  {
  title: "Meet Our Assistant",
  description: "An interactive 3D robot you can play with!",
  color: "from-indigo-500 to-purple-500",
  isRobot: true,
  },
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
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const [isAuto, setIsAuto] = useState(false);

useEffect(() => {
  if (!isAuto) return; // if switch is off, stop auto-slide
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(timer);
}, [isAuto]);

  const handleRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden cursor-pointer" onClick={handleRipple}>
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-4 h-4 rounded-full bg-primary/30 animate-ripple pointer-events-none z-50"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      
      {/* Floating orbs */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of ZephyrTech through our product showcase.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 mb-6">
    <span className="text-sm font-medium text-muted-foreground">
      Auto Slide
    </span>
    <Switch checked={isAuto} onCheckedChange={setIsAuto} />
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
        <div
          className={`w-full h-full bg-gradient-to-br ${slide.color} flex items-center justify-center p-12`}
        >
          {/* 👇 Conditionally render robot or text */}
          {slide.isRobot ? (
            <div className="w-full h-full flex items-center justify-center">
              <Spline scene="https://prod.spline.design/QTK3K72v7ZOBG75R/scene.splinecode" />
            </div>
          ) : (
            <div className="text-center text-white space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                {slide.description}
              </p>
            </div>
          )}
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
