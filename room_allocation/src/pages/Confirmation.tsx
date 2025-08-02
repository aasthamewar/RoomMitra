import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Home, Users, Sparkles, Heart } from "lucide-react";

interface Room {
  id: string;
  type: "Single Bed" | "Twin-sharing";
  windowSide: boolean;
  floor: string;
  airConditioning: "AC" | "Non-AC";
  furnishing: "Furnished" | "Non-Furnished";
  washroom: "Attached" | "Common";
  cost: number;
}

const sampleRooms: Room[] = [
  {
    id: "1",
    type: "Single Bed",
    windowSide: true,
    floor: "Ground",
    airConditioning: "AC",
    furnishing: "Furnished",
    washroom: "Attached",
    cost: 12000,
  },
  {
    id: "2",
    type: "Twin-sharing",
    windowSide: false,
    floor: "1st",
    airConditioning: "AC",
    furnishing: "Furnished",
    washroom: "Common",
    cost: 8000,
  },
  {
    id: "3",
    type: "Single Bed",
    windowSide: true,
    floor: "2nd",
    airConditioning: "Non-AC",
    furnishing: "Non-Furnished",
    washroom: "Attached",
    cost: 9000,
  },
  {
    id: "4",
    type: "Twin-sharing",
    windowSide: true,
    floor: "1st",
    airConditioning: "AC",
    furnishing: "Furnished",
    washroom: "Attached",
    cost: 10000,
  },
  {
    id: "5",
    type: "Single Bed",
    windowSide: false,
    floor: "Ground",
    airConditioning: "Non-AC",
    furnishing: "Furnished",
    washroom: "Common",
    cost: 7500,
  },
];

// Sample roommate data
const sampleRoommates = [
  {
    id: "1",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    initials: "PS",
    age: 22,
    course: "Computer Science",
  },
  {
    id: "2",
    name: "Anjali Gupta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    initials: "AG",
    age: 21,
    course: "Business Administration",
  },
];

const celebratoryMessages = [
  "Your perfect space is ready to welcome you home!",
  "Congratulations! Your cozy sanctuary awaits!",
  "Welcome to your new home sweet home!",
  "Your dream room is all set and ready!",
  "Success! Your ideal living space is secured!",
];

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRoomId = location.state?.selectedRoomId;
  
  const selectedRoom = sampleRooms.find(room => room.id === selectedRoomId);
  const randomMessage = celebratoryMessages[Math.floor(Math.random() * celebratoryMessages.length)];

  if (!selectedRoom) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-[hsl(var(--gradient-peach-start))] via-[hsl(var(--gradient-cream))] to-[hsl(var(--gradient-mint-end))] flex items-center justify-center">
        <Card className="bg-white/90 backdrop-blur-sm p-8 text-center">
          <p className="text-lg text-room-accent-foreground mb-4">No room selected</p>
          <Button onClick={() => navigate("/rooms")} className="bg-room-success hover:bg-room-success/90 text-room-success-foreground">
            Go Back to Room Selection
          </Button>
        </Card>
      </div>
    );
  }

  const isSharedRoom = selectedRoom.type === "Twin-sharing";
  const roommate = isSharedRoom ? sampleRoommates[Math.floor(Math.random() * sampleRoommates.length)] : null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[hsl(var(--gradient-peach-start))] via-[hsl(var(--gradient-cream))] to-[hsl(var(--gradient-mint-end))]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <CheckCircle className="w-16 h-16 text-room-success" />
              <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-room-primary-foreground mb-2">
            Room Confirmed!
          </h1>
          <p className="text-xl text-room-accent-foreground flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            {randomMessage}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Roommate Section */}
          {isSharedRoom && roommate && (
            <Card className="bg-white/90 backdrop-blur-sm border-room-accent">
              <CardHeader>
                <CardTitle className="text-room-primary-foreground flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Your Roommate
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={roommate.avatar} alt={roommate.name} />
                  <AvatarFallback className="text-lg bg-room-secondary text-room-secondary-foreground">
                    {roommate.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-room-primary-foreground mb-2">
                  {roommate.name}
                </h3>
                <div className="space-y-1 text-room-accent-foreground">
                  <p>Age: {roommate.age}</p>
                  <p>Course: {roommate.course}</p>
                </div>
                <Badge className="mt-3 bg-room-success/20 text-room-success border-room-success/30">
                  Perfect Match!
                </Badge>
              </CardContent>
            </Card>
          )}

          {/* Room Details */}
          <Card className="bg-white/90 backdrop-blur-sm border-room-accent">
            <CardHeader>
              <CardTitle className="text-room-primary-foreground flex items-center gap-2">
                <Home className="w-5 h-5" />
                Your Room Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-room-success">
                  ₹{selectedRoom.cost.toLocaleString()}
                  <span className="text-lg font-normal text-room-accent-foreground">/month</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-room-accent-foreground">Room Type:</span>
                  <span className="font-medium text-room-primary-foreground">{selectedRoom.type}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-room-accent-foreground">Window Side:</span>
                  <Badge variant={selectedRoom.windowSide ? "default" : "secondary"}>
                    {selectedRoom.windowSide ? "Yes" : "No"}
                  </Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-room-accent-foreground">Floor:</span>
                  <span className="font-medium text-room-primary-foreground">{selectedRoom.floor} Floor</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-room-accent-foreground">Air Conditioning:</span>
                  <Badge variant={selectedRoom.airConditioning === "AC" ? "default" : "secondary"}>
                    {selectedRoom.airConditioning}
                  </Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-room-accent-foreground">Furnishing:</span>
                  <Badge variant={selectedRoom.furnishing === "Furnished" ? "default" : "secondary"}>
                    {selectedRoom.furnishing}
                  </Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-room-accent-foreground">Washroom:</span>
                  <Badge variant={selectedRoom.washroom === "Attached" ? "default" : "secondary"}>
                    {selectedRoom.washroom}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={() => navigate("/rooms")}
            variant="outline"
            className="border-room-secondary text-room-secondary-foreground hover:bg-room-secondary/20"
          >
            Back to Room Selection
          </Button>
          <Button 
            onClick={() => navigate("/")}
            className="bg-room-success hover:bg-room-success/90 text-room-success-foreground px-8"
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;