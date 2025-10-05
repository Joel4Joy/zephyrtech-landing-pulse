import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    content: "ZephyrTech transformed how we build and deploy applications. The speed and reliability are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager, InnovateLabs",
    content: "The best SaaS platform we've used. Intuitive, powerful, and backed by exceptional support.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CEO, FutureScale",
    content: "Since switching to ZephyrTech, our development velocity increased by 300%. Game-changing platform.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Engineering Lead, CloudPeak",
    content: "Security, scalability, and performance – ZephyrTech delivers on all fronts without compromise.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from teams who've transformed their workflow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative h-80">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`absolute inset-0 glass-card border-border/50 transition-all duration-500 ${
                index === activeIndex
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < activeIndex
                  ? "opacity-0 -translate-x-full scale-95"
                  : "opacity-0 translate-x-full scale-95"
              }`}
            >
              <CardContent className="p-12 flex flex-col justify-center h-full space-y-6">
                <Quote className="w-12 h-12 text-primary/30" />
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
