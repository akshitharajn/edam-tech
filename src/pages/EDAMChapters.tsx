import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EDAMChapters = () => {
  const institutions = [
    {
      name: "St Mary's Group of Institutions",
      acronym: "SMGOIH",
      description: "A leading educational institution fostering innovation and excellence in engineering and technology.",
    },
    {
      name: "CMR Institute of Technology",
      acronym: "CMRIT",
      description: "Dedicated to providing quality technical education and research opportunities.",
    },
    {
      name: "Kommuri Pratap Reddy Institute of Technology",
      acronym: "KPRIT",
      description: "Committed to academic excellence and holistic development of students.",
    },
    {
      name: "Malla Reddy Institute of Technology and Science",
      acronym: "MRITS",
      description: "Empowering students with cutting-edge technology and research.",
    },
    {
      name: "Lord's Institute of Engineering and Technology",
      acronym: "LIET",
      description: "Nurturing future engineers with innovative learning approaches.",
    },
    {
      name: "MLR Institute of Technology",
      acronym: "MLRIT",
      description: "Excellence in engineering education and research initiatives.",
    },
    {
      name: "MLR Institute of Technology and Pharmacy",
      acronym: "MLRITM",
      description: "Bridging technology and healthcare through integrated education.",
    },
    {
      name: "Malla Reddy University",
      acronym: "MRUH",
      description: "A comprehensive university offering diverse academic programs.",
    },
    {
      name: "JB Institute of Engineering and Technology",
      acronym: "JBIET",
      description: "Fostering technical excellence and innovation in engineering.",
    },
    {
      name: "Institute of Aeronautical Engineering",
      acronym: "IARE",
      description: "Specializing in aerospace engineering and aviation technology.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {/* Back Navigation */}
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                e-DAM <span className="text-primary">Chapters</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our partner institutions where e-DAM community thrives, 
                fostering innovation and technological advancement across campuses.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
                <p className="text-muted-foreground">Partner Institutions</p>
              </Card>
              <Card className="p-6 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30 text-center">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Telangana</h3>
                <p className="text-muted-foreground">Geographic Reach</p>
              </Card>
              <Card className="p-6 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
                <p className="text-muted-foreground">Active Members</p>
              </Card>
            </div>

            {/* Institutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {institutions.map((institution, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="space-y-4">
                    {/* Institution Acronym */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <span className="text-primary font-bold text-xl">
                          {institution.acronym.slice(0, 2)}
                        </span>
                      </div>
                      <h3 className="text-primary font-semibold text-sm mb-2">
                        {institution.acronym}
                      </h3>
                    </div>

                    {/* Institution Name */}
                    <h2 className="text-white font-bold text-lg leading-tight text-center">
                      {institution.name}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      {institution.description}
                    </p>

                    {/* Status Badge */}
                    <div className="flex justify-center pt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        Active Chapter
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-black via-purple-950/30 to-black border-primary/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want to Start a Chapter?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Is your institution interested in becoming part of the e-DAM community? 
                  Reach out to us to learn about starting a new chapter.
                </p>
                <a 
                  href="https://forms.gle/njRM2k72CepuzZtC8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-black bg-primary hover:bg-primary/90 transition-all duration-200"
                >
                  Get in Touch
                </a>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EDAMChapters;
