import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail,
  MapPin,
  Users,
  Award,
  Target,
  X,
  Clock,
  DollarSign,
  Briefcase,
  ArrowLeft
} from "lucide-react";

const OurTeam = () => {
  const [showJobs, setShowJobs] = useState(false);

  // Manage body scroll when modal is open
  useEffect(() => {
    if (showJobs) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showJobs]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showJobs) {
        setShowJobs(false);
      }
    };

    if (showJobs) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showJobs]);

  const teamMembers = [
    {
      id: 1,
      name: "Abhishek Nagaraja",
      role: "Founder",
      bio: "Visionary leader in tech entrepreneurship and community building.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Leadership", "Strategy", "Community Building"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        instagram: "https://www.instagram.com/edam.community/",
        email: "rajesh@edam.tech"
      },
      featured: true
    },
    {
      id: 2,
      name: "Vivekananda Gavini",
      role: "C0-Founder",
      bio: "Full-stack developer and AI enthusiast leading our technical initiatives.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["AI/ML", "Full-Stack Development", "DevOps"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        email: "priya@edam.tech"
      },
      featured: true
    },
    {
      id: 3,
      name: "Rohan Vemula",
      role: "Community Lead",
      bio: "Education specialist designing impactful learning experiences for our community.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Education Design", "Program Management", "Mentoring"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        email: "arjun@edam.tech"
      },
      featured: true
    },
    {
      id: 4,
      name: "Akshitha Nagasani",
      role: "Technical Lead",
      bio: "Empowering developers and shaping technology strategies for scalable growth.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Web Development", "UI/UX Design", "User Research"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        email: "sneha@edam.tech"
      },
      featured: true
    },
    {
      id: 5,
      name: "Yasavi Madapati",
      role: "Community Mentor and EX_Lead",
      bio: "Creative Community Mentor turning ideas into engaging digital stories.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Data Science", "Analytics", "Machine Learning"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        email: "anita@edam.tech"
      },
      featured: true
    },
    {
      id: 6,
      name: "Snehitha Sunkam",
      role: "Design Lead",
      bio: "Focused on building design systems and leading teams to shape visually compelling products.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Community Engagement", "Event Management", "Social Media"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        instagram: "https://www.instagram.com/edam.community/",
        email: "vikram@edam.tech"
      },
      featured: true
    },
    {
      id: 7,
      name: "Nandana",
      role: "Social Media Manager",
      bio: "Creative Social Media Manager turning ideas into engaging digital stories.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Data Science", "Analytics", "Machine Learning"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        email: "anita@edam.tech"
      },
      featured: true
    },
    {
      id: 8,
      name: "Ghousiya Begum",
      role: "Community Manager",
      bio: "Creative Community Manager turning ideas into engaging digital stories.",
      image: "/placeholder.svg",
      location: "Hyderabad, India",
      specialties: ["Data Science", "Analytics", "Machine Learning"],
      social: {
        linkedin: "https://in.linkedin.com/company/edamcommunity",
        github: "https://github.com/e-DAMCommunity",
        email: "anita@edam.tech"
      },
      featured: true
    }
  ];

  const stats = [
    { icon: Users, value: "20000+", label: "Active Members" },
    { icon: Award, value: "20+", label: "Events Hosted" },
    { icon: Target, value: "10+", label: "Tech Discussions" }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Content Creator (Part-time)",
      department: "Marketing",
      type: "Part-time",
      location: "Remote",
      description: "Create engaging technical content including blog posts, tutorials, and video content. Help educate our community through quality content.",
      requirements: ["Technical writing skills", "Video editing", "Social media knowledge"],
      featured: true
    },
    {
      id: 2,
      title: "Community Manager",
      department: "Operations",
      type: "Full-time",
      location: "Hyderabad, India",
      description: "Build and engage our tech community through events, social media, and partnerships. Help grow our member base and create meaningful connections.",
      requirements: ["2+ years community experience", "Event management", "Social media expertise"],
      featured: true
    },
    {
      id: 3,
      title: "Designing Intern",
      department: "Operations",
      type: "Full-time",
      location: "Hyderabad, India",
      description: "Build and engage our tech community through events, social media, and partnerships. Help grow our member base and create meaningful connections.",
      requirements: ["2+ years community experience", "Event management", "Social media expertise"],
      featured: false
    },
    {
      id: 4,
      title: "IAQ LEAD",
      type: "Full-time",
      location: "Hyderabad, India",
      description: "Analyze learning patterns and community engagement to improve our programs. Build predictive models and create data-driven insights.",
      requirements: ["Python & R proficiency", "Machine learning experience", "Statistics background"],
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Hyderabad, India",
      salary: "₹6-12 LPA",
      description: "Manage our cloud infrastructure and deployment pipelines. Ensure high availability and scalability of our platform.",
      requirements: ["AWS/Azure experience", "Docker & Kubernetes", "CI/CD expertise"],
      featured: false
    }
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 no-select" tabIndex={-1}>
              Meet Our <span className="text-primary text-glow">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Passionate innovators, educators, and technologists working together to build 
              Hyderabad's premier tech community. Our diverse team brings together expertise 
              from various domains to create meaningful learning experiences.
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/25">
                    <stat.icon className="h-8 w-8 text-black" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Team Members */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Core Leadership
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.filter(member => member.featured).map((member) => (
                <Card 
                  key={member.id}
                  className="p-8 bg-black/60 border-primary/30 hover:border-primary hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-black" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-primary font-semibold mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      
                      <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{member.location}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        {member.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 justify-center md:justify-start">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin}
                            className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                          >
                            <Linkedin className="h-4 w-4 text-primary" />
                          </a>
                        )}
                        {member.social.github && (
                          <a 
                            href={member.social.github}
                            className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                          >
                            <Github className="h-4 w-4 text-primary" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a 
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                          >
                            <Instagram className="h-4 w-4 text-primary" />
                          </a>
                        )}
                        {member.social.email && (
                          <a 
                            href={`mailto:${member.social.email}`}
                            className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                          >
                            <Mail className="h-4 w-4 text-primary" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals who share our vision 
                of building an inclusive and innovative tech community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => setShowJobs(true)}
                >
                  View Open Positions
                </Button>
                <a 
                  href="https://forms.gle/6DEqprPtvo7wQgFX9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="tech" size="lg">
                    Volunteer With Us
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Job Positions Modal */}
        {showJobs && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 job-modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowJobs(false);
              }
            }}
          >
            <div className="bg-black/95 border border-primary/30 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden job-modal-content">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary/20">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground no-select" tabIndex={-1}>
                    Open Positions at <span className="text-primary">e-DAM</span>
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Join our mission to build Hyderabad's premier tech community
                  </p>
                </div>
                <Button 
                  variant="tech" 
                  size="icon"
                  onClick={() => setShowJobs(false)}
                  className="hover:bg-red-500/20 hover:border-red-500"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Job Listings */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Featured Positions */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Featured Positions
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {openPositions.filter(job => job.featured).map((job) => (
                      <Card 
                        key={job.id}
                        className="p-6 bg-gradient-to-br from-purple-950/20 to-black border-primary/30 hover:border-primary/60 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="bg-primary text-black text-xs px-2 py-1 rounded-full font-semibold">
                                Featured
                              </span>
                              <span className="text-xs text-muted-foreground">{job.department}</span>
                            </div>
                            <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h4>
                          </div>
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {job.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </div>
                          {job.salary && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {job.requirements.slice(0, 2).map((req, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 2 && (
                            <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded-full">
                              +{job.requirements.length - 2} more
                            </span>
                          )}
                        </div>
                        
                        <a 
                          href="https://forms.gle/6DEqprPtvo7wQgFX9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button variant="hero" size="sm" className="w-full">
                            Apply Now
                          </Button>
                        </a>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* All Positions */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    All Open Positions
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {openPositions.filter(job => !job.featured).map((job) => (
                      <Card 
                        key={job.id}
                        className="p-4 bg-black/40 border-primary/20 hover:border-primary/60 hover:bg-black/60 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                job.type === 'Full-time' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-blue-500/20 text-blue-400'
                              }`}>
                                {job.type}
                              </span>
                              {job.department && (
                                <span className="text-xs text-muted-foreground">{job.department}</span>
                              )}
                            </div>
                            <h4 className="text-md font-bold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h4>
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                          {job.description}
                        </p>
                        
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                          {job.salary && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {job.requirements.slice(0, 1).map((req, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 1 && (
                            <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded-full">
                              +{job.requirements.length - 1} more
                            </span>
                          )}
                        </div>
                        
                        <a 
                          href="https://forms.gle/6DEqprPtvo7wQgFX9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button variant="tech" size="sm" className="w-full">
                            Apply Now
                          </Button>
                        </a>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-8 text-center">
                  <Card className="p-6 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30">
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      Don't see the right position?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're always open to talented individuals who are passionate about technology and education.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="hero" size="sm">
                        Send Us Your Resume
                      </Button>
                      <Button variant="tech" size="sm">
                        Join Our Talent Pool
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default OurTeam;
