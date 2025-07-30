import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
    { name: "Technologies", href: "#technologies", isExternal: false },
    { name: "Our Team", href: "/our-team", isExternal: true },
    { name: "EDAM Spotlights", href: "/spotlights", isExternal: true },
    { name: "Programs", href: "#programs", isExternal: false },
    { name: "Community", href: "#community", isExternal: false },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-primary/20 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold text-primary drop-shadow-lg">
              e-DAM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => 
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://forms.gle/njRM2k72CepuzZtC8" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="sm" className="rounded-full text-sm px-4 py-2">
                Join Community
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border mx-2 sm:mx-0">
              {navigation.map((item) => 
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
              <div className="pt-2 flex flex-col space-y-2">
                <a 
                  href="https://forms.gle/njRM2k72CepuzZtC8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="sm" className="rounded-full w-full text-sm">
                    Join Community
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;