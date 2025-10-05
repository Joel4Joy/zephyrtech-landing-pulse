import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Users, label: "Active Users", value: 50000, suffix: "+" },
  { icon: Globe, label: "Countries", value: 120, suffix: "+" },
  { icon: Zap, label: "Uptime", value: 99.9, suffix: "%" },
  { icon: TrendingUp, label: "Growth Rate", value: 300, suffix: "%" },
];

const growthPercents = [40, 55, 65, 80, 90, 100]; // percent heights for bars

export const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [barHeights, setBarHeights] = useState(growthPercents.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true); // trigger immediately for demo
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // animation duration in ms
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // update counts
      setCounts(
        stats.map((stat) => stat.value * progress)
      );

      // update bars
      setBarHeights(
        growthPercents.map((percent) => percent * progress)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <section id="stats" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 hero-gradient opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted By <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the global community of innovators building the future.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`glass-card border-border/50 hover:border-primary/50 transition-all group`}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-1">
                    {stat.value % 1 !== 0
                      ? counts[index].toFixed(1)
                      : Math.floor(counts[index]).toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Growth chart */}
        <Card className="glass-card border-border/50 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Monthly Growth Trajectory</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {barHeights.map((height, index) => {
                const pxHeight = (256 * height) / 100; // h-64 = 16rem = 256px
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all duration-500 hover:opacity-80"
                      style={{ height: `${pxHeight}px` }}
                    />
                    <span className="text-xs text-muted-foreground font-medium">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
