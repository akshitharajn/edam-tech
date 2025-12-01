import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  Shield, 
  TrendingUp, 
  Cloud 
} from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      icon: Palette,
      title: "UI/UX",
      description: "Create stunning user interfaces and exceptional user experiences",
      color: "from-pink-500 to-purple-600",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build powerful web applications with modern frameworks",
      color: "from-blue-500 to-cyan-600",
      skills: ["React", "Vue.js", "Node.js", "Full-Stack"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Develop native and cross-platform mobile applications",
      color: "from-green-500 to-teal-600",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Harness the power of artificial intelligence and machine learning",
      color: "from-orange-500 to-red-600",
      skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"]
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extract insights from data and make data-driven decisions",
      color: "from-indigo-500 to-purple-600",
      skills: ["Python", "R", "SQL", "Analytics"]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Protect systems and data from digital attacks",
      color: "from-red-500 to-pink-600",
      skills: ["Penetration Testing", "Security Auditing", "Compliance"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Promote brands and products through digital channels",
      color: "from-yellow-500 to-orange-600",
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "Deploy and manage applications in cloud environments",
      color: "from-sky-500 to-blue-600",
      skills: ["AWS", "Azure", "GCP", "DevOps"]
    }
  ];

  return (
    <section id="technologies" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 no-select px-2" tabIndex={-1}>
            <span className="text-primary">Technologies</span> We Focus On
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            These are the business-required technologies we specialize in. 
            Learn from industry experts and build real-world projects.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-5 md:p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group cursor-pointer touch-manipulation"
            >
              <div className="text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{tech.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tech.description}</p>
                
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {tech.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Button variant="tech" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-primary/10 border-primary/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Tech Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community and get access to expert-led workshops, hands-on projects, 
              and a network of passionate developers and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/njRM2k72CepuzZtC8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="hero" 
                  size="lg"
                >
                  Join e-DAM Community
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technologies;