import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Trophy, 
  Github, 
  Linkedin, 
  Instagram,
  ExternalLink,
  Award,
  Target, 
} from "lucide-react";

const Community = () => {
   const stats = [
      { icon: Users, value: "20000+", label: "Active Members" },
      { icon: Award, value: "20+", label: "Events Hosted" },
      { icon: Target, value: "10+", label: "Tech Discussions" },
      { icon: Calendar, value: "50+", label: "Workshops Conducted" }
    ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://in.linkedin.com/company/edamcommunity",
      description: "Connect with professionals and stay updated with our latest news",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/e-DAMCommunity",
      description: "Explore our open-source projects and contribute to the community",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/edam.community/",
      description: "Follow us for quick updates and tech insights",
      color: "from-pink-500 to-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Tech Innovators",
      content: "e-DAM transformed my career. The mentorship and practical projects helped me land my dream job in just 6 months.",
      avatar: "PS"
    },
    {
      name: "Arjun Reddy",
      role: "AI/ML Engineer",
      company: "DataCorp",
      content: "The #100DAYSOFTECHNOLOGY challenge was a game-changer. I went from knowing basic Python to building ML models.",
      avatar: "AR"
    },
    {
      name: "Sneha Patel",
      role: "UX Designer",
      company: "Design Studio",
      content: "Amazing community! The networking opportunities and workshops helped me transition from development to design.",
      avatar: "SP"
    },
    {
      name: "Rahul Kumar",
      role: "DevOps Engineer",
      company: "CloudTech Solutions",
      content: "The hands-on workshops and expert mentorship at e-DAM helped me master cloud technologies. Now I'm confidently managing enterprise-level deployments.",
      avatar: "RK"
    },
    {
      name: "Ananya Krishnan",
      role: "Data Scientist",
      company: "Analytics Pro",
      content: "e-DAM's community is incredibly supportive. The peer learning sessions and collaborative projects accelerated my journey into data science significantly.",
      avatar: "AK"
    },
    {
      name: "Vikram Singh",
      role: "Frontend Developer",
      company: "WebCraft Studios",
      content: "From attending my first workshop to becoming a mentor, e-DAM has been instrumental in my growth. The community here truly cares about your success.",
      avatar: "VS"
    },
    {
      name: "Meera Nair",
      role: "Product Manager",
      company: "InnovateTech",
      content: "The diverse tech talks and networking events at e-DAM opened doors I never knew existed. It's more than a community—it's a launchpad for your career.",
      avatar: "MN"
    }
  ];

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of Hyderabad's most vibrant tech community. Connect, learn, and grow with like-minded individuals 
            who share your passion for technology and innovation.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Connect With Us</h3>
            <p className="text-muted-foreground">Follow us on social media for updates, insights, and community highlights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                onClick={() => window.open(social.url, '_blank')}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground">{social.name}</h4>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">{social.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials with Horizontal Scroll Animation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">What Our Members Say</h3>
            <p className="text-muted-foreground">Real stories from our community members</p>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .testimonial-track {
                animation: scroll-left 40s linear infinite;
              }
              
              .testimonial-track:hover {
                animation-play-state: paused;
              }

              @media (max-width: 640px) {
                .testimonial-track {
                  animation-duration: 30s;
                }
              }
            `}} />

            <div className="flex testimonial-track">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div key={`original-${index}`} className="flex-shrink-0 w-[280px] sm:w-[350px] mx-3 sm:mx-4">
                  <Card className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{testimonial.avatar}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground truncate">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                        <p className="text-xs text-primary truncate">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic text-sm leading-relaxed">"{testimonial.content}"</p>
                  </Card>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-[350px] mx-4">
                  <Card className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{testimonial.avatar}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground truncate">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                        <p className="text-xs text-primary truncate">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic text-sm leading-relaxed">"{testimonial.content}"</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-primary/10 border-primary/30">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join e-DAM?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Become part of Hyderabad's premier tech community. Start your journey of learning, 
              networking, and growing with us today.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Free to Join</h4>
                <p className="text-sm text-muted-foreground">No membership fees or hidden costs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Regular Events</h4>
                <p className="text-sm text-muted-foreground">Weekly workshops and meetups</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Career Growth</h4>
                <p className="text-sm text-muted-foreground">Mentorship and job opportunities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/njRM2k72CepuzZtC8" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8"
                >
                  Join e-DAM Community
                </Button>
              </a>
              <Button variant="tech" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;