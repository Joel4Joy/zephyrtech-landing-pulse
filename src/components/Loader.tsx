import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center hero-gradient">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <img 
            src={logo} 
            alt="ZephyrTech" 
            className="w-32 h-32 mx-auto animate-float"
          />
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse" />
        </div>
        
        <div className="space-y-3">
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/70 text-sm font-medium">Loading Experience...</p>
        </div>
      </div>
    </div>
  );
};
