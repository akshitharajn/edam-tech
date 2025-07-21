import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Clock, BarChart3, Search } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  image: string;
}

const Courses = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');

  const courses: Course[] = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and databases. Build real-world applications from scratch.",
      category: "web-dev",
      duration: "12 weeks",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      description: "Learn the basics of machine learning, neural networks, and AI algorithms with hands-on projects.",
      category: "ai",
      duration: "10 weeks",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and experiences using Figma, prototyping, and design thinking.",
      category: "design",
      duration: "8 weeks",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "React Native Mobile Apps",
      description: "Build cross-platform mobile applications using React Native and modern development practices.",
      category: "mobile",
      duration: "10 weeks",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Data Science with Python",
      description: "Analyze data, create visualizations, and build predictive models using Python and popular libraries.",
      category: "data-science",
      duration: "14 weeks",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Blockchain Development",
      description: "Learn blockchain technology, smart contracts, and decentralized application development.",
      category: "blockchain",
      duration: "12 weeks",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript ES6+, async programming, and modern frameworks for web development.",
      category: "web-dev",
      duration: "8 weeks",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "Deep Learning with TensorFlow",
      description: "Build neural networks and deep learning models for computer vision and natural language processing.",
      category: "ai",
      duration: "16 weeks",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      id: 9,
      title: "Mobile UI Design",
      description: "Design beautiful and functional mobile interfaces with a focus on user experience and accessibility.",
      category: "design",
      duration: "6 weeks",
      level: "Beginner",
      image: "/placeholder.svg"
    }
  ];

  const categoryNames = {
    'web-dev': 'Web Dev',
    'ai': 'AI',
    'design': 'Design',
    'mobile': 'Mobile',
    'data-science': 'Data Science',
    'blockchain': 'Blockchain'
  };

  const filterCategories = [
    { id: 'all', label: 'All Courses' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = currentFilter === 'all' || course.category === currentFilter;
    const matchesSearch = course.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                         course.description.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewCourse = (courseId: number) => {
    const course = courses.find(c => c.id === courseId);
    alert(`You clicked on: ${course?.title}\n\nThis would normally navigate to a detailed course page.`);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-primary/20 text-primary';
    }
  };

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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary text-glow">Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover cutting-edge courses designed to advance your tech skills and career
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 bg-black/60 border-primary/30 backdrop-blur-sm mb-8">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses by name..."
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
                className="pl-10 bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filterCategories.map((category) => (
              <Button
                key={category.id}
                variant={currentFilter === category.id ? "hero" : "tech"}
                size="sm"
                onClick={() => setCurrentFilter(category.id)}
                className={`transition-all duration-300 ${
                  currentFilter === category.id 
                    ? 'transform scale-105 shadow-lg shadow-primary/25' 
                    : 'hover:scale-105'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </Card>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <Card className="p-12 bg-black/40 border-primary/20 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id}
                className="overflow-hidden bg-black/60 border-primary/30 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group backdrop-blur-sm"
              >
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="text-6xl">📚</div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-black text-xs px-2 py-1 rounded-full font-semibold">
                      {categoryNames[course.category as keyof typeof categoryNames]}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* View More Button */}
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => handleViewCourse(course.id)}
                  >
                    View More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
