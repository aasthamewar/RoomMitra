import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Home, Sparkles } from "lucide-react";
import avatarCollection from "@/assets/avatar-collection.jpg";

const MatchResult = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-pages py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Perfect <span className="text-primary">Match Found!</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We've found your ideal roommate based on compatibility
          </p>
        </div>

        {/* Match Cards */}
        <div className="relative mb-16">
          <div className="flex justify-center items-center gap-8">
            {/* User Avatar Card */}
            <Card className="relative transform rotate-6 hover:rotate-3 transition-transform duration-300 shadow-card">
              <div className="p-6">
                <div className="w-32 h-32 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={avatarCollection}
                    alt="Your avatar"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "0% 0%" }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">You</h3>
                  <p className="text-sm text-muted-foreground">Looking for a roommate</p>
                </div>
              </div>
            </Card>

            {/* Handshake Icon */}
            <div className="bg-primary/10 rounded-full p-4 animate-bounce">
              <div className="text-4xl">🤝</div>
            </div>

            {/* Match Avatar Card */}
            <Card className="relative transform -rotate-6 hover:-rotate-3 transition-transform duration-300 shadow-card">
              <div className="p-6">
                <div className="w-32 h-32 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={avatarCollection}
                    alt="Match avatar"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "66% 0%" }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">Sarah M.</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Match Score */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-primary to-primary-light rounded-full p-6 shadow-soft">
            <div className="text-5xl font-bold text-primary-foreground mb-2">92%</div>
            <div className="text-primary-foreground/90 font-medium">Compatible</div>
          </div>
        </div>


        {/* Match Details */}
        <Card className="mt-12 p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4 text-center">Why You're a Great Match</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Similar sleep schedules</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Both prefer quiet environments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Shared interest in wellness</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Compatible cleanliness standards</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Similar social preferences</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Both work in tech</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MatchResult;