import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Star } from "lucide-react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 bg-black/60 border-primary/30 backdrop-blur-sm text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-black" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-muted-foreground mb-6">
            We've received your volunteer application. Our team will reach out to you soon with next steps.
          </p>
          <Link to="/">
            <Button variant="hero" className="w-full">
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Volunteer With <span className="text-primary text-glow">e-DAM</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our mission to build Hyderabad's premier tech community. Whether you're passionate about 
              education, events, or technology, there's a place for you on our team.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div className="text-xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-6 w-6 text-black" />
                </div>
                <div className="text-xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-black" />
                </div>
                <div className="text-xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="order-2 lg:order-1">
              <Card className="p-8 bg-black/60 border-primary/30 backdrop-blur-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Join Our Volunteer Team
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get in touch with volunteer opportunities that match your interests.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by our team regarding volunteer opportunities.
                  </p>
                </div>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Why Volunteer With Us?
                </h3>
                
                <div className="space-y-4">
                  <Card className="p-6 bg-black/40 border-primary/20">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      🚀 Grow Your Skills
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Develop leadership, communication, and technical skills while working with industry professionals.
                    </p>
                  </Card>

                  <Card className="p-6 bg-black/40 border-primary/20">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      🤝 Build Your Network
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Connect with like-minded individuals, mentors, and industry leaders in Hyderabad's tech ecosystem.
                    </p>
                  </Card>

                  <Card className="p-6 bg-black/40 border-primary/20">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      🎯 Make an Impact
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Contribute to meaningful projects that help shape the future of technology education in our community.
                    </p>
                  </Card>

                  <Card className="p-6 bg-black/40 border-primary/20">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      🏆 Recognition & Certificates
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Receive certificates and recognition for your contributions that you can add to your professional portfolio.
                    </p>
                  </Card>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Volunteer Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Event Management",
                      "Content Creation",
                      "Social Media",
                      "Mentoring",
                      "Technical Support",
                      "Community Outreach",
                      "Workshop Assistance",
                      "Marketing"
                    ].map((opportunity, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
                      >
                        {opportunity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
