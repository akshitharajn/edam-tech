import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter,
  ExternalLink,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Our Team", href: "#team" },
    { name: "Programs", href: "#programs" },
    { name: "Community", href: "#community" }
  ];

  const programs = [
    { name: "#100DAYSOFTECHNOLOGY", href: "#programs" },
    { name: "Tech Bootcamps", href: "#programs" },
    { name: "Weekend Workshops", href: "#programs" },
    { name: "Hackathons", href: "#programs" }
  ];

  const technologies = [
    { name: "UI/UX Design", href: "#technologies" },
    { name: "Web Development", href: "#technologies" },
    { name: "App Development", href: "#technologies" },
    { name: "AI/ML", href: "#technologies" }
  ];

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-black font-bold text-lg">e</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">e-DAM</span>
                <span className="text-xs text-muted-foreground">Tech Community</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premier technological community of Hyderabad, bridging the gap between technology and entrepreneurship. 
              Learn. Network. Grow.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@edam.tech" className="hover:text-primary transition-colors">
                  info@edam.tech
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4 text-primary" />
                <a 
                  href="http://www.edam.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.edam.tech
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/edamcommunity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Technologies</h3>
            <ul className="space-y-3 mb-6">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <a 
                    href={tech.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm">Stay Updated</h4>
              <p className="text-xs text-muted-foreground">
                Get the latest updates on events and programs
              </p>
              <Button variant="hero" size="sm" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} e-DAM Community. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made for the tech community of Hyderabad</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;