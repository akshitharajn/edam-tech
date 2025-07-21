import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero-video-container">
      {/* Background Video */}
      <video 
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-white uppercase tracking-wider opacity-90">
                Technical Community of Hyderabad
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight no-select" tabIndex={-1}>
                Building the
                <br />
                <span className="text-primary">Tech Community</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto">
                e-DAM connects students and professionals through technology, entrepreneurship, and innovation
              </p>
            </div>

            {/* Three Pillars */}
            <div className="flex justify-center gap-8 md:gap-12">
              <a href="/courses.html" className="flex flex-col items-center space-y-2 text-white opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                <BookOpen className="h-8 w-8" />
                <span className="font-semibold">Learn</span>
              </a>
              <div className="flex flex-col items-center space-y-2 text-white opacity-90">
                <Users className="h-8 w-8" />
                <span className="font-semibold">Network</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-white opacity-90">
                <TrendingUp className="h-8 w-8" />
                <span className="font-semibold">Grow</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/join">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group"
                >
                  Join Our Community
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/technologies">
                <Button variant="tech" size="lg">
                  Explore Technologies
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-white opacity-75">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-white opacity-75">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-white opacity-75">Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;