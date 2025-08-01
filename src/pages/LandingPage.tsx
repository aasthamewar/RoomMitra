import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Star } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Panel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Your perfect{" "}
                <span className="text-primary font-extrabold">roommate match</span>,
                <br />
                <span className="text-primary font-extrabold">powered by AI</span>.
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Find your ideal living companion with our intelligent matching system. 
                Safe, verified, and designed specifically for women seeking the perfect 
                co-living experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/avatar-selection")}
                className="group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary hover:bg-secondary/10"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">2.5K+ Happy Matches</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-foreground">98% Satisfaction</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Safe Verified Only</span>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-card border-2 border-muted max-w-md">
                <img 
                  src={heroIllustration}
                  alt="Two happy women holding hands surrounded by hearts and flowers"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary/10 rounded-full p-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-secondary/10 rounded-full p-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;