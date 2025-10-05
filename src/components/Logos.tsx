import { Building2 } from "lucide-react";

const companies = [
  "TechCorp", "InnovateLabs", "FutureScale", 
  "CloudPeak", "DataFlow", "NexusAI",
  "PrimeOps", "VelocityTech"
];

export const Logos = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground font-medium mb-12 uppercase tracking-wider">
          Trusted by Leading Companies Worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity group"
            >
              <Building2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
