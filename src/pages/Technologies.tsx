import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Palette, 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  Shield, 
  TrendingUp, 
  Cloud,
  ArrowLeft,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning user interfaces and exceptional user experiences that captivate users and drive engagement.",
      color: "from-pink-500 to-purple-600",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"],
      featured: true,
      learningPath: [
        "Design Fundamentals",
        "User Research Methods",
        "Prototyping Tools",
        "Design Systems",
        "Usability Testing"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build powerful, scalable web applications using modern frameworks and best practices.",
      color: "from-blue-500 to-cyan-600",
      skills: ["React", "Vue.js", "Node.js", "TypeScript", "Next.js", "Express.js"],
      featured: true,
      learningPath: [
        "HTML/CSS/JavaScript",
        "React Fundamentals",
        "Backend Development",
        "Database Integration",
        "Deployment & DevOps"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Develop native and cross-platform mobile applications for iOS and Android platforms.",
      color: "from-green-500 to-teal-600",
      skills: ["React Native", "Flutter", "iOS Swift", "Android Kotlin", "Expo"],
      featured: false,
      learningPath: [
        "Mobile UI/UX Principles",
        "Cross-platform Development",
        "Native APIs",
        "App Store Deployment",
        "Performance Optimization"
      ]
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Harness the power of AI and machine learning to build intelligent applications and systems.",
      color: "from-orange-500 to-red-600",
      skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "NLP", "Computer Vision"],
      featured: true,
      learningPath: [
        "Python for AI",
        "Machine Learning Basics",
        "Deep Learning",
        "Neural Networks",
        "AI Applications"
      ]
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Extract valuable insights from data and make data-driven decisions for business growth.",
      color: "from-indigo-500 to-purple-600",
      skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Tableau", "Power BI"],
      featured: false,
      learningPath: [
        "Statistics & Probability",
        "Data Cleaning",
        "Data Visualization",
        "Statistical Analysis",
        "Predictive Modeling"
      ]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Protect systems, networks, and data from digital attacks and security threats.",
      color: "from-red-500 to-pink-600",
      skills: ["Penetration Testing", "Security Auditing", "CISSP", "Ethical Hacking", "Compliance"],
      featured: false,
      learningPath: [
        "Security Fundamentals",
        "Network Security",
        "Penetration Testing",
        "Incident Response",
        "Security Compliance"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Promote brands and products through digital channels and data-driven marketing strategies.",
      color: "from-yellow-500 to-orange-600",
      skills: ["SEO", "Social Media Marketing", "Content Marketing", "Google Analytics", "PPC"],
      featured: false,
      learningPath: [
        "Digital Marketing Basics",
        "SEO & SEM",
        "Social Media Strategy",
        "Content Creation",
        "Analytics & Measurement"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Computing & DevOps",
      description: "Deploy, manage, and scale applications in cloud environments with modern DevOps practices.",
      color: "from-sky-500 to-blue-600",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      featured: true,
      learningPath: [
        "Cloud Fundamentals",
        "Container Technologies",
        "Infrastructure as Code",
        "CI/CD Pipelines",
        "Monitoring & Logging"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 no-select" tabIndex={-1}>
              Explore Our <span className="text-primary">Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the cutting-edge technologies we focus on and build your career 
              in the most in-demand fields of today and tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 no-select" tabIndex={-1}>
              Featured Technologies
            </h2>
            <p className="text-muted-foreground">
              Our most popular and high-demand technology tracks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {technologies.filter(tech => tech.featured).map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 bg-black/80 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tech.description}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {tech.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {tech.skills.length > 3 && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        +{tech.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Button variant="tech" size="sm" className="w-full">
                    Start Learning
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Technologies */}
      <section className="py-16 bg-gradient-to-b from-purple-950/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 no-select" tabIndex={-1}>
              All Technologies
            </h2>
            <p className="text-muted-foreground">
              Complete overview of all technology tracks available at e-DAM
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="p-8 bg-black/60 border-primary/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <tech.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{tech.title}</h3>
                      {tech.featured && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{tech.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Learning Path:</h4>
                      <div className="space-y-1">
                        {tech.learningPath.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="tech" size="sm" className="flex-1">
                        Start Learning
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Tech Journey?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Join our community and get access to expert-led workshops, hands-on projects, 
                and a network of passionate developers and entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.location.href = '/join.html'}
                >
                  Join e-DAM Community
                </Button>
                <Button variant="tech" size="lg">
                  View Course Catalog
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technologies;
