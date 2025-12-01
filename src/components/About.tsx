import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Rocket, Heart, Users, Calendar, Trophy, MessageCircle, ArrowRight, Award, BookOpen, Network, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
   const stats = [
    { icon: Users, value: "20000+", label: "Active Members" },
    { icon: Award, value: "20+", label: "Events Hosted" },
    { icon: Target, value: "10+", label: "Tech Discussions" },
    { icon: Calendar, value: "50+", label: "Events" }
  ];
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            What is <span className="text-primary">e-DAM</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            e-Designing and Marketing is a premier technological community of Hyderabad, 
            actively bridging the gap between technology and entrepreneurship through our four core pillars.
          </p>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Learn */}
          <Card className="p-6 sm:p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/30 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-purple-400 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Learn</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Get to learn about the best of technologies, from the best in the technologies! 
              e-DAM has several practitioners of the latest in tech.
            </p>
            <Button variant="tech" size="sm" className="text-sm">
              Explore Learning
            </Button>
          </Card>

          {/* Network */}
          <Card className="p-6 sm:p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/30 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                <Network className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-purple-400 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Network</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Connect with like-minded individuals, industry professionals, and fellow learners. 
              Build meaningful relationships that last a lifetime.
            </p>
            <Button variant="tech" size="sm" className="text-sm">
              Join Network
            </Button>
          </Card>

          {/* Grow */}
          <Card className="p-6 sm:p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/30 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-purple-400 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Grow</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Accelerate your career growth through mentorship, opportunities, and hands-on experience. 
              Transform your potential into success.
            </p>
            <Button variant="tech" size="sm" className="text-sm">
              Start Growing
            </Button>
          </Card>

          {/* Events */}
          <Card className="p-6 sm:p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
            <div className="relative mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/30 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-purple-400 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Events</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Join our vibrant community through 50+ events annually. From workshops and hackathons 
              to networking sessions and tech talks that inspire innovation.
            </p>
            <Button variant="tech" size="sm" className="text-sm">
              View Events
            </Button>
          </Card>
        </div>

        {/* e-DAM Spotlights Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              e-DAM Spotlights
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              Discover inspiring stories and innovative projects from our community
            </p>
          </div>

          {/* Featured Video Container */}
          <div className="bg-card rounded-lg border border-primary/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <div className="relative w-full mx-auto max-w-3xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-muted">
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                  src="https://www.youtube.com/embed/NAQQZYyf4l4"
                  title="e-DAM Spotlight Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            
            {/* Video Description */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 px-4">
                Watch our latest spotlight featuring community members, project showcases, 
                and educational content that represents the innovation and creativity within our ecosystem.
              </p>
              
              {/* View All Spotlights Button */}
              <Link to="/spotlights">
                <Button variant="hero" size="lg" className="rounded-full text-sm sm:text-base">
                  View All Spotlights
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Join Our Community Section */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 lg:pt-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Join Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Be part of Hyderabad's most vibrant tech community. Connect, learn, and grow with like-minded individuals.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center pb-12 sm:pb-16 lg:pb-20">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScfgbjBRoC6pNPZA47aCyoo4CussmA6kmZcIUkvcS92I8uMPw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;