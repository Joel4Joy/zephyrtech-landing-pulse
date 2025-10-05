import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

const companies = [
  "TechCorp", "InnovateLabs", "FutureScale", 
  "CloudPeak", "DataFlow", "NexusAI",
  "PrimeOps", "VelocityTech", "NextGen Systems",
  "BlueOcean", "QuantumSoft", "MetaForge",
  "SkylineAI", "AlphaEdge", "CyberWorks",
  "NeuraTech", "PulseWare", "OptiCore"
];

export const Logos = () => {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground font-medium mb-12 uppercase tracking-wider">
          Trusted by Leading Companies Worldwide
        </p>

        <motion.div
          className="flex gap-12"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity group min-w-[200px]"
            >
              <Building2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg whitespace-nowrap">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};