import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Rocket, Heart } from "lucide-react";
import learnIcon from "@/assets/learn-icon.jpg";
import networkIcon from "@/assets/network-icon.jpg";
import growIcon from "@/assets/grow-icon.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What is <span className="text-primary">e-DAM</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            e-Designing and Marketing is a premier technological community of Hyderabad, 
            actively bridging the gap between technology and entrepreneurship through our three core pillars.
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Learn */}
          <Card className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-6">
              <img 
                src={learnIcon} 
                alt="Learn" 
                className="w-20 h-20 mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Learn</h3>
            <p className="text-muted-foreground mb-6">
              Get to learn about the best of technologies, from the best in the technologies! 
              e-DAM has several practitioners of the latest in tech.
            </p>
            <Button variant="tech" size="sm">
              Explore Learning
            </Button>
          </Card>

          {/* Network */}
          <Card className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-6">
              <img 
                src={networkIcon} 
                alt="Network" 
                className="w-20 h-20 mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Network</h3>
            <p className="text-muted-foreground mb-6">
              Connect with like-minded individuals, industry professionals, and fellow learners. 
              Build meaningful relationships that last a lifetime.
            </p>
            <Button variant="tech" size="sm">
              Join Network
            </Button>
          </Card>

          {/* Grow */}
          <Card className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-6">
              <img 
                src={growIcon} 
                alt="Grow" 
                className="w-20 h-20 mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Grow</h3>
            <p className="text-muted-foreground mb-6">
              Accelerate your career growth through mentorship, opportunities, and hands-on experience. 
              Transform your potential into success.
            </p>
            <Button variant="tech" size="sm">
              Start Growing
            </Button>
          </Card>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Values
            </h3>
            <p className="text-muted-foreground">
              What drives us and shapes our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Pushing boundaries and embracing new technologies
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Knowledge</h4>
              <p className="text-sm text-muted-foreground">
                Continuous learning and sharing of expertise
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Growth</h4>
              <p className="text-sm text-muted-foreground">
                Personal and professional development for all
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Community</h4>
              <p className="text-sm text-muted-foreground">
                Building strong, supportive relationships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;