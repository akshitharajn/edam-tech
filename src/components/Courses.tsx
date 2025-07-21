import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";

const Courses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "HTML",
      description: "Learn the foundation of web development. Master HTML structure, semantic elements, and modern markup techniques for building web pages.",
      duration: "4 weeks",
      students: "3,200+",
      level: "Beginner",
      image: "🌐",
      category: "Web Development"
    },
    {
      id: 2,
      title: "CSS",
      description: "Style your web pages with CSS. Learn layouts, animations, responsive design, and modern CSS features like Flexbox and Grid.",
      duration: "6 weeks",
      students: "2,890+",
      level: "Beginner",
      image: "🎨",
      category: "Web Development"
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Master the language of the web. Learn JavaScript fundamentals, DOM manipulation, ES6+ features, and asynchronous programming.",
      duration: "10 weeks",
      students: "2,450+",
      level: "Intermediate",
      image: "⚡",
      category: "Programming"
    },
    {
      id: 4,
      title: "React",
      description: "Build modern web applications with React. Learn components, hooks, state management, and create dynamic user interfaces.",
      duration: "8 weeks",
      students: "2,150+",
      level: "Intermediate",
      image: "⚛️",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Python",
      description: "Learn Python programming from scratch. Perfect for web development, data analysis, automation, and artificial intelligence projects.",
      duration: "12 weeks",
      students: "2,890+",
      level: "Beginner",
      image: "🐍",
      category: "Programming"
    },
    {
      id: 6,
      title: "Java",
      description: "Master Java programming language. Learn object-oriented programming, data structures, and enterprise application development.",
      duration: "14 weeks",
      students: "1,850+",
      level: "Intermediate",
      image: "☕",
      category: "Programming"
    },
    {
      id: 7,
      title: "SQL",
      description: "Master database management with SQL. Learn data querying, database design, joins, and data analysis techniques.",
      duration: "6 weeks",
      students: "2,340+",
      level: "Beginner",
      image: "🗄️",
      category: "Database"
    },
    {
      id: 8,
      title: "Git",
      description: "Learn version control with Git. Master branching, merging, collaboration workflows, and project management with GitHub.",
      duration: "4 weeks",
      students: "2,680+",
      level: "Beginner",
      image: "📋",
      category: "Development Tools"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            Essential Technologies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 no-select" tabIndex={-1}>
            Master <span className="text-primary">Core Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build a solid foundation with HTML, CSS, JavaScript, React, Python, Java, SQL, and Git - the essential technologies every developer needs to know.
          </p>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{course.image}</div>
                  <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                    {course.category}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="px-2 py-1 bg-muted rounded text-xs font-medium">
                    {course.level}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Essential Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">18K+</div>
            <div className="text-sm text-muted-foreground">Students Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Industry Standard</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-sm text-muted-foreground">Course Rating</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive courses. 
              Start your journey today and unlock your potential in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/courses.html'}
              >
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
