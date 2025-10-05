import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Alex Morrison",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at major tech firms. Passionate about building scalable systems.",
  },
  {
    name: "Jamie Lin",
    role: "CTO & Co-Founder",
    bio: "20+ years in cloud architecture. Led engineering teams at Fortune 500 companies.",
  },
  {
    name: "Taylor Brooks",
    role: "Head of Product",
    bio: "Product visionary with expertise in UX design and customer-centric development.",
  },
  {
    name: "Morgan Fox",
    role: "VP of Engineering",
    bio: "Full-stack expert specializing in distributed systems and performance optimization.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet The <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class talent dedicated to building the future of cloud technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="glass-card border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-8 space-y-4">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
