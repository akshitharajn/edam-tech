import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Spotlights = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back Button */}
          <div className="mb-6 sm:mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2 text-sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
              e-DAM Spotlights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Discover inspiring stories, innovative projects, and community highlights 
              from the e-DAM ecosystem. Watch our featured content and get inspired by 
              the amazing work being done in our community.
            </p>
          </div>

          {/* Featured Videos Section */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-card rounded-lg border border-border p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 text-center">
                Featured Videos
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground text-center mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Watch our latest spotlight videos featuring community insights, project showcases, 
                and educational content from the e-DAM ecosystem.
              </p>
              
              {/* Videos Grid - Side by side on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* First Video */}
                <div className="relative w-full">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-muted">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                      src="https://www.youtube.com/embed/pnC7p4GcabY"
                      title="e-DAM Spotlight Video 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Second Video */}
                <div className="relative w-full">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-muted">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                      src="https://www.youtube.com/embed/1j4GVPdugkk"
                      title="e-DAM Spotlight Video 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              
              {/* Videos Description */}
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
                  These spotlight videos showcase the incredible talent, innovation, and creativity 
                  within our community. From technical deep-dives to inspiring success stories, 
                  each video represents the diverse perspectives that make e-DAM special.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-6 sm:p-8 border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                Want to be Featured?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                Share your projects, ideas, or stories with the e-DAM community. 
                We're always looking for amazing content to spotlight and celebrate 
                the incredible work being done by our members.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://youtube.com/@e-dam-spotlight?si=SF-mDZCzR_gO3sjs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="hero" size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base">
                    Visit Our Channel
                  </Button>
                </a>
                <a 
                  href="https://forms.gle/njRM2k72CepuzZtC8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base">
                    Submit Your Story
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Spotlights;
