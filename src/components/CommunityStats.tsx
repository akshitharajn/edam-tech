import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Trophy,
  ArrowRight,
  Award,
  Target
} from "lucide-react";

const CommunityStats = () => {
  const stats = [
    { icon: Users, value: "20000+", label: "Active Members" },
    { icon: Award, value: "20+", label: "Events Hosted" },
    { icon: Target, value: "10+", label: "Tech Discussions" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of Hyderabad's most vibrant tech community. Connect, learn, and grow with like-minded individuals 
            who share your passion for technology and innovation.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://forms.gle/Chzxqx968etWogXx6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="text-lg px-8">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
