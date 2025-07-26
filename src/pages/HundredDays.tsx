import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Zap, Gift, Users, DollarSign } from "lucide-react";

const HundredDays = () => {
  const technologies = [
    "User Interface and User Experience (UI/UX)",
    "Front-End Development",
    "Back-End Development",
    "Application Development – Flutter",
    "Artificial Intelligence and Machine Learning",
    "Cybersecurity",
    "Digital Marketing",
    "Roblox – Game Development"
  ];

  const advantages = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proper roadmap with resources",
      description: "Get a structured learning path with curated resources to guide your journey"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Guidance and mentorship available",
      description: "Access to experienced mentors and community support throughout your challenge"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Goodies after achieving milestones",
      description: "Earn rewards and recognition as you reach important learning milestones"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Work as a team and network with others",
      description: "Connect with fellow learners and build lasting professional relationships"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Completely free!",
      description: "No cost involved - we believe in making quality education accessible to everyone"
    }
  ];

  const steps = [
    "Choose a technology.",
    "Start the challenge.",
    "Post updates on LinkedIn/Instagram/Discord on a regular basis."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black">
      {/* Header */}
      <div className="bg-black/60 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">e-DAM</h1>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              💯 <span className="text-primary text-glow">#100DaysOfTechnology</span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p className="text-xl">
                Hello 👋,
              </p>
              <p>
                We are <span className="text-primary font-semibold">e-Designing and Marketing (e-DAM)</span> – the Technical Community of Hyderabad.
              </p>
              <p className="text-foreground font-medium">
                This initiative is designed for freshers and anyone who wants to learn a technology with a proper roadmap, curated resources, practical experience, and guidance/mentorship.
              </p>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 bg-black/60 border-primary/30 backdrop-blur-sm h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Technologies to Choose From
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-4 bg-black/40 border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground font-medium">{tech}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Steps Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Steps to Start
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 bg-black/60 border-primary/30 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-foreground text-lg font-medium">{step}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-primary/10 border-primary/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of learners who have transformed their careers through our 100 Days of Technology challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://forms.gle/Chzxqx968etWogXx6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    Join the Challenge
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="tech" size="lg" className="text-lg px-8">
                    Learn More About e-DAM
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HundredDays;
