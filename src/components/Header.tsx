import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
    { name: "Technologies", href: "#technologies", isExternal: false },
    { name: "Programs", href: "#programs", isExternal: false },
  ];

  const edamDropdownItems = [
    { name: "e-DAM Chapters", href: "/e-dam-chapters", isExternal: true },
    { name: "e-DAM Spotlights", href: "/spotlights", isExternal: true },
    { name: "Community", href: "https://docs.google.com/forms/d/e/1FAIpQLScfgbjBRoC6pNPZA47aCyoo4CussmA6kmZcIUkvcS92I8uMPw/viewform", isExternal: false },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-1.5 sm:space-x-2">
            <img 
              src="/favicon.ico" 
              alt="e-DAM Logo" 
              className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
            />
            <h1 className="text-base sm:text-lg lg:text-xl font-bold text-primary drop-shadow-lg">
              e-DAM
            </h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet, shown on desktop */}
          <nav className="hidden xl:flex space-x-4 2xl:space-x-6 items-center">
            {navigation.map((item) => 
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm 2xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm 2xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10"
                >
                  {item.name}
                </a>
              )
            )}
            
            {/* e-DAM Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-sm 2xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10 flex items-center gap-1">
                e-DAM
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-border shadow-lg py-2">
                  {edamDropdownItems.map((item) =>
                    item.isExternal ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Tablet Navigation - Hidden on mobile and desktop, shown on tablet */}
          <nav className="hidden lg:flex xl:hidden space-x-2 items-center">
            {navigation.slice(0, 3).map((item) => 
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10"
                >
                  {item.name}
                </a>
              )
            )}
            
            {/* e-DAM Dropdown for Tablet */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary/10 flex items-center gap-1">
                e-DAM
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-44">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-border shadow-lg py-2">
                  {edamDropdownItems.map((item) =>
                    item.isExternal ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA - Hidden on mobile/tablet, shown on desktop */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <ThemeToggle />
            <a 
              href="https://forms.gle/njRM2k72CepuzZtC8" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="sm" className="rounded-full text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 whitespace-nowrap">
                Join Community
              </Button>
            </a>
          </div>

          {/* Mobile/Tablet - Theme Toggle and Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle size="sm" />
            <button
              className="p-1.5 sm:p-2 rounded-md hover:bg-primary/10 transition-colors touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Only shown when menu is open on mobile/tablet */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card backdrop-blur-sm rounded-lg mt-2 border border-border mx-1 sm:mx-0 shadow-lg">
              {/* Navigation Links */}
              {navigation.map((item) => 
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2.5 text-sm sm:text-base text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 rounded-md touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2.5 text-sm sm:text-base text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 rounded-md touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
              
              {/* e-DAM Dropdown Items in Mobile */}
              <div className="pt-2 border-t border-border/50 mt-2">
                <div className="px-3 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  e-DAM
                </div>
                {edamDropdownItems.map((item) =>
                  item.isExternal ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2.5 text-sm sm:text-base text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 rounded-md touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2.5 text-sm sm:text-base text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 rounded-md touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-3 border-t border-border/50 mt-3">
                <a 
                  href="https://forms.gle/njRM2k72CepuzZtC8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="hero" size="sm" className="rounded-full w-full text-sm sm:text-base py-2.5 touch-manipulation">
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
