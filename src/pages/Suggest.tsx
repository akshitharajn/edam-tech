import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Lightbulb, Send } from "lucide-react";

interface FormData {
  name: string;
  suggestedProgram: string;
}

interface FormErrors {
  name: string;
  suggestedProgram: string;
}

const Suggest = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    suggestedProgram: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    suggestedProgram: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user starts typing
    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors: FormErrors = {
      name: "",
      suggestedProgram: ""
    };

    let isValid = true;

    // Validate all fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    if (!formData.suggestedProgram.trim()) {
      newErrors.suggestedProgram = "Program suggestion is required";
      isValid = false;
    } else if (formData.suggestedProgram.trim().length < 10) {
      newErrors.suggestedProgram = "Please provide more details about your program suggestion";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        console.log('Program suggestion submitted:', formData);
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 bg-black/60 border-primary/30 backdrop-blur-sm text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Thank You for Your Suggestion!
          </h2>
          <p className="text-muted-foreground mb-6">
            We've received your program suggestion. Our team will review it and consider it for future implementation.
          </p>
          <Link to="/">
            <Button variant="hero" className="w-full">
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Suggest a <span className="text-primary text-glow">Program</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Have an idea for a program that could benefit our tech community? 
              We'd love to hear your suggestions and innovative ideas!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-black/60 border-primary/30 backdrop-blur-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Share Your Program Idea
                  </h2>
                  <p className="text-muted-foreground">
                    Help us build better programs by sharing your ideas and suggestions.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="suggestedProgram" className="text-foreground">
                      Program Suggestion *
                    </Label>
                    <Textarea
                      id="suggestedProgram"
                      name="suggestedProgram"
                      value={formData.suggestedProgram}
                      onChange={handleInputChange}
                      placeholder="Describe your program idea in detail. Include the topic, target audience, format, duration, and any other relevant information..."
                      rows={6}
                      className={`bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none ${
                        errors.suggestedProgram ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.suggestedProgram && (
                      <p className="text-red-400 text-sm mt-1">{errors.suggestedProgram}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Minimum 10 characters required
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Suggestion
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    Your suggestion will be reviewed by our program development team. 
                    We appreciate your contribution to improving our community offerings.
                  </p>
                </div>
              </Card>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-black/40 border-primary/20 h-fit">
                <h3 className="text-xl font-bold text-primary mb-4">
                  What Makes a Great Program?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        Clear Learning Objectives
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        Define what participants will learn and achieve
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        Practical Application
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        Hands-on projects and real-world scenarios
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        Community Impact
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        Benefits the broader tech community
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        Sustainable Format
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        Realistic timeline and resource requirements
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Example Programs */}
              <Card className="p-6 bg-black/40 border-primary/20 mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Popular Program Types
                </h4>
                <div className="space-y-2">
                  {[
                    "Workshop Series",
                    "Mentorship Programs",
                    "Hackathons",
                    "Study Groups",
                    "Speaker Series",
                    "Certification Prep",
                    "Project Collaborations",
                    "Career Development"
                  ].map((type, index) => (
                    <span 
                      key={index}
                      className="inline-block text-xs bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30 mr-2 mb-2"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
