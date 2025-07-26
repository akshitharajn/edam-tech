import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Award, Target, Zap } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "#100DAYSOFTECHNOLOGY",
      subtitle: "e-DAM's CENTURY",
      description: "Learn any technology in 100 days with resources in a structured roadmap. Daily challenges, weekly projects, and community support.",
      duration: "100 Days",
      participants: "500+",
      difficulty: "All Levels",
      features: [
        "Daily learning challenges",
        "Weekly project milestones",
        "Peer code reviews",
        "Mentor guidance",
        "Certificate upon completion"
      ],
      status: "Ongoing",
      type: "Signature Program"
    },
    {
      title: "Tech Bootcamps",
      subtitle: "Intensive Skill Building",
      description: "Comprehensive bootcamps covering full-stack development, data science, AI/ML, and more. Hands-on learning with real projects.",
      duration: "8-12 Weeks",
      participants: "50-100",
      difficulty: "Beginner to Advanced",
      features: [
        "Industry-relevant curriculum",
        "Capstone projects",
        "Job placement assistance",
        "1-on-1 mentoring",
        "Portfolio development"
      ],
      status: "Quarterly",
      type: "Bootcamp"
    },
    {
      title: "Weekend Workshops",
      subtitle: "Quick Skill Acquisition",
      description: "Short, focused workshops on trending technologies and tools. Perfect for professionals looking to upskill quickly.",
      duration: "2 Days",
      participants: "30-50",
      difficulty: "Intermediate",
      features: [
        "Hands-on sessions",
        "Industry experts",
        "Networking opportunities",
        "Resource sharing",
        "Follow-up support"
      ],
      status: "Monthly",
      type: "Workshop"
    },
    {
      title: "Hackathons",
      subtitle: "Innovation Challenges",
      description: "Competitive coding events where teams build innovative solutions to real-world problems in 24-48 hours.",
      duration: "24-48 Hours",
      participants: "100-200",
      difficulty: "All Levels",
      features: [
        "Prize competitions",
        "Industry partnerships",
        "Startup opportunities",
        "Media coverage",
        "Networking with VCs"
      ],
      status: "Bi-annual",
      type: "Competition"
    },
    {
      title: "Mentorship Program",
      subtitle: "One-on-One Guidance",
      description: "Connect with industry veterans for personalized career guidance and technical mentorship.",
      duration: "3-6 Months",
      participants: "1-on-1",
      difficulty: "All Levels",
      features: [
        "Industry expert mentors",
        "Career roadmap planning",
        "Technical skill development",
        "Interview preparation",
        "Network building"
      ],
      status: "Ongoing",
      type: "Mentorship"
    },
    {
      title: "Startup Incubation",
      subtitle: "From Idea to Reality",
      description: "Support for aspiring entrepreneurs to turn their tech ideas into viable startups with funding and mentorship.",
      duration: "6-12 Months",
      participants: "10-15 Teams",
      difficulty: "Advanced",
      features: [
        "Seed funding opportunities",
        "Business model validation",
        "Product development support",
        "Investor connections",
        "Legal and compliance help"
      ],
      status: "Annual",
      type: "Incubation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-green-500/20 text-green-700";
      case "Monthly": return "bg-blue-500/20 text-blue-700";
      case "Quarterly": return "bg-purple-500/20 text-purple-700";
      case "Bi-annual": return "bg-orange-500/20 text-orange-700";
      case "Annual": return "bg-red-500/20 text-red-700";
      default: return "bg-gray-500/20 text-gray-700";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Signature Program": return Target;
      case "Bootcamp": return Zap;
      case "Workshop": return Users;
      case "Competition": return Award;
      case "Mentorship": return Calendar;
      case "Incubation": return Clock;
      default: return Target;
    }
  };

  return (
    <section id="programs" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Structured learning paths and community programs designed to accelerate your growth 
            in technology and entrepreneurship.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = getTypeIcon(program.type);
            
            return (
              <Card 
                key={index} 
                className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                      <p className="text-sm text-primary">{program.subtitle}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(program.status)} border-0`}>
                    {program.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{program.description}</p>

                {/* Program Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium text-foreground">{program.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium text-foreground">{program.participants}</div>
                    <div className="text-xs text-muted-foreground">Participants</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium text-foreground">{program.difficulty}</div>
                    <div className="text-xs text-muted-foreground">Level</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <a 
                    href="https://forms.gle/Chzxqx968etWogXx6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="hero" size="sm" className="flex-1 w-full">
                      Join Program
                    </Button>
                  </a>
                  <Button variant="tech" size="sm">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-primary/10 border-primary/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find the Right Program?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly adding new programs based on community needs and industry trends. 
              Suggest a program or get notified when new ones launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/Chzxqx968etWogXx6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  Suggest a Program
                </Button>
              </a>
              <Button variant="tech" size="lg">
                Get Program Updates
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;