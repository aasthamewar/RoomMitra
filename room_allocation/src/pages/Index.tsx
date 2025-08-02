import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, Search, Heart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-[hsl(var(--gradient-peach-start))] via-[hsl(var(--gradient-cream))] to-[hsl(var(--gradient-mint-end))]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Home className="w-16 h-16 text-room-success" />
                <Heart className="w-6 h-6 text-red-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-room-primary-foreground mb-4">
              Find Your Perfect Room
            </h1>
            <p className="text-xl text-room-accent-foreground mb-8">
              Discover comfortable living spaces that feel like home
            </p>
            <Button 
              onClick={() => navigate("/rooms")}
              size="lg"
              className="bg-room-success hover:bg-room-success/90 text-room-success-foreground px-8 py-4 text-lg rounded-full"
            >
              Start Room Selection
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/90 backdrop-blur-sm border-room-accent text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-room-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-room-success" />
                </div>
                <CardTitle className="text-room-primary-foreground">Smart Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-room-accent-foreground">
                  Filter rooms by type, amenities, floor preference, and budget to find exactly what you need.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-room-accent text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-room-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-room-success" />
                </div>
                <CardTitle className="text-room-primary-foreground">Perfect Roommates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-room-accent-foreground">
                  Get matched with compatible roommates for shared spaces and build lasting friendships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-room-accent text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-room-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-room-success" />
                </div>
                <CardTitle className="text-room-primary-foreground">Quality Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-room-accent-foreground">
                  All rooms are verified for quality, cleanliness, and comfort to ensure your best living experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-white/90 backdrop-blur-sm border-room-accent text-center">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold text-room-primary-foreground mb-4">
                Ready to Find Your Dream Room?
              </h2>
              <p className="text-room-accent-foreground mb-6">
                Browse our collection of carefully curated living spaces and find the perfect match for your lifestyle.
              </p>
              <Button 
                onClick={() => navigate("/rooms")}
                size="lg"
                className="bg-room-success hover:bg-room-success/90 text-room-success-foreground px-8 py-3"
              >
                Browse Rooms Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
