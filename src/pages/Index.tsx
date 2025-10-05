import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Carousel } from "@/components/Carousel";
import { Stats } from "@/components/Stats";
import { Logos } from "@/components/Logos";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? "hidden" : "animate-fade-in"}>
        <Navbar />
        <Hero />
        <Features />
        <Carousel />
        <Stats />
        <Logos />
        <VideoSection />
        <Testimonials />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Index;
