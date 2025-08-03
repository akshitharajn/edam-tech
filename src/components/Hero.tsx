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
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider opacity-90">
                Technical Community of Hyderabad
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight no-select" tabIndex={-1}>
                Building the
                <br />
                <span className="text-primary">Tech Community</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white opacity-90 max-w-2xl mx-auto px-4">
                e-DAM connects students and professionals through technology, entrepreneurship, and innovation
              </p>
            </div>

            {/* Three Pillars */}
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-12">
              <a href="#technologies" className="flex flex-col items-center space-y-1 sm:space-y-2 text-white opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="font-semibold text-sm sm:text-base">Learn</span>
              </a>
              <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-white opacity-90">
                <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="font-semibold text-sm sm:text-base">Network</span>
              </div>
              <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-white opacity-90">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="font-semibold text-sm sm:text-base">Grow</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <a 
                href="https://forms.gle/njRM2k72CepuzZtC8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group w-full sm:w-auto text-sm sm:text-base"
                >
                  Join Our Community
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/technologies" className="w-full sm:w-auto">
                <Button variant="tech" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Explore Technologies
                </Button>
              </Link>
              <Link to="/hundred-days">
                <Button variant="tech" size="lg">
                  100 Days of Technology
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20000+</div>
                <div className="text-sm text-white opacity-75">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-white opacity-75">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
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