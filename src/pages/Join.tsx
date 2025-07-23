import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  phone: string;
}

const Join = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateFullName = (name: string): boolean => {
    return name.trim().length >= 2;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (value.trim()) {
      switch (name) {
        case 'fullName':
          if (validateFullName(value)) {
            setErrors(prev => ({ ...prev, fullName: "" }));
          } else {
            setErrors(prev => ({ ...prev, fullName: "Name must be at least 2 characters long" }));
          }
          break;
        case 'email':
          if (validateEmail(value)) {
            setErrors(prev => ({ ...prev, email: "" }));
          } else {
            setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
          }
          break;
        case 'phone':
          if (validatePhone(value)) {
            setErrors(prev => ({ ...prev, phone: "" }));
          } else {
            setErrors(prev => ({ ...prev, phone: "Please enter a valid phone number (at least 10 digits)" }));
          }
          break;
      }
    } else {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors: FormErrors = {
      fullName: "",
      email: "",
      phone: ""
    };

    let isValid = true;

    // Validate all fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (!validateFullName(formData.fullName)) {
      newErrors.fullName = "Name must be at least 2 characters long";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits)";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        console.log('Form submitted:', formData);
      }, 2000);
    }
  };

  const benefits = [
    "Access to exclusive tech workshops and events",
    "Networking opportunities with industry professionals",
    "Free access to learning resources and tutorials",
    "Mentorship from experienced developers",
    "Job and internship opportunities",
    "Community support and collaboration"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/10 to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 bg-black/60 border-primary/30 backdrop-blur-sm text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Welcome to e-DAM!
          </h2>
          <p className="text-muted-foreground mb-6">
            🎉 Your registration was successful. We'll be in touch soon!
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-primary text-glow">Community</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Connect with passionate developers, entrepreneurs, and tech enthusiasts from Hyderabad
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-black/60 border-primary/30 backdrop-blur-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Join the Community
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below to become part of Hyderabad's most vibrant tech community.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={`bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className={`bg-black/40 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    )}
                    {isSubmitting ? "Joining..." : "Join Now"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-black/40 border-primary/20 h-fit">
                <h3 className="text-xl font-bold text-primary mb-4">
                  What You'll Get:
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Community Stats */}
              <Card className="p-6 bg-black/40 border-primary/20 mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Join 1000+ Members
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Active Developers</span>
                    <span className="text-primary font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Monthly Events</span>
                    <span className="text-primary font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Partner Companies</span>
                    <span className="text-primary font-semibold">50+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
