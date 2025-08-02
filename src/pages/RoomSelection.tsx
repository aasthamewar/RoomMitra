import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CheckCircle, Home, Wind, Building, Snowflake, Sofa, Droplets } from "lucide-react";

interface Room {
  id: string;
  type: "Single Bed" | "Twin-sharing";
  windowSide: boolean;
  floor: string;
  airConditioning: "AC" | "Non-AC";
  furnishing: "Furnished" | "Non-Furnished";
  washroom: "Attached" | "Common";
  cost: number;
  available: boolean;
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
    available: true,
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
    available: true,
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
    available: true,
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
    available: true,
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
    available: true,
  },
  {
    id: "6",
    type: "Twin-sharing",
    windowSide: true,
    floor: "2nd",
    airConditioning: "AC",
    furnishing: "Non-Furnished",
    washroom: "Common",
    cost: 9500,
    available: false,
  },
];

const RoomSelection = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    type: "all",
    windowSide: "all",
    floor: "all",
    airConditioning: "all",
    furnishing: "all",
    washroom: "all",
    showAvailableOnly: true,
  });

  const filteredRooms = sampleRooms.filter((room) => {
    if (filters.showAvailableOnly && !room.available) return false;
    if (filters.type !== "all" && room.type !== filters.type) return false;
    if (filters.windowSide !== "all" && room.windowSide !== (filters.windowSide === "yes")) return false;
    if (filters.floor !== "all" && room.floor !== filters.floor) return false;
    if (filters.airConditioning !== "all" && room.airConditioning !== filters.airConditioning) return false;
    if (filters.furnishing !== "all" && room.furnishing !== filters.furnishing) return false;
    if (filters.washroom !== "all" && room.washroom !== filters.washroom) return false;
    return true;
  });

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
  };

  const handleConfirm = () => {
    if (selectedRoom) {
      navigate("/confirmation", { state: { selectedRoomId: selectedRoom } });
    }
  };

  const getIconForFeature = (feature: string) => {
    switch (feature) {
      case "windowSide": return <Wind className="w-4 h-4" />;
      case "floor": return <Building className="w-4 h-4" />;
      case "airConditioning": return <Snowflake className="w-4 h-4" />;
      case "furnishing": return <Sofa className="w-4 h-4" />;
      case "washroom": return <Droplets className="w-4 h-4" />;
      default: return <Home className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[hsl(var(--gradient-peach-start))] via-[hsl(var(--gradient-cream))] to-[hsl(var(--gradient-mint-end))]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-room-primary-foreground mb-2">Choose Your Perfect Room</h1>
          <p className="text-lg text-room-accent-foreground">Find the space that feels like home</p>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-room-accent">
          <CardHeader>
            <CardTitle className="text-room-primary-foreground flex items-center gap-2">
              <Home className="w-5 h-5" />
              Filter Options
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Room Type</Label>
              <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Single Bed">Single Bed</SelectItem>
                  <SelectItem value="Twin-sharing">Twin-sharing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="windowSide">Window Side</Label>
              <Select value={filters.windowSide} onValueChange={(value) => setFilters({...filters, windowSide: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="floor">Floor</Label>
              <Select value={filters.floor} onValueChange={(value) => setFilters({...filters, floor: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Floor" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Any Floor</SelectItem>
                  <SelectItem value="Ground">Ground</SelectItem>
                  <SelectItem value="1st">1st Floor</SelectItem>
                  <SelectItem value="2nd">2nd Floor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ac">Air Conditioning</Label>
              <Select value={filters.airConditioning} onValueChange={(value) => setFilters({...filters, airConditioning: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="AC">AC</SelectItem>
                  <SelectItem value="Non-AC">Non-AC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="furnishing">Furnishing</Label>
              <Select value={filters.furnishing} onValueChange={(value) => setFilters({...filters, furnishing: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="Furnished">Furnished</SelectItem>
                  <SelectItem value="Non-Furnished">Non-Furnished</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="washroom">Washroom</Label>
              <Select value={filters.washroom} onValueChange={(value) => setFilters({...filters, washroom: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="Attached">Attached</SelectItem>
                  <SelectItem value="Common">Common</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 md:col-span-2">
              <Switch 
                id="available-only" 
                checked={filters.showAvailableOnly}
                onCheckedChange={(checked) => setFilters({...filters, showAvailableOnly: checked})}
              />
              <Label htmlFor="available-only">Show available rooms only</Label>
            </div>
          </CardContent>
        </Card>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredRooms.map((room) => (
            <Card 
              key={room.id}
              className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedRoom === room.id 
                  ? 'ring-2 ring-room-success bg-room-success-foreground/50' 
                  : 'bg-white/90 backdrop-blur-sm hover:bg-white'
              } ${!room.available ? 'opacity-60' : ''}`}
              onClick={() => room.available && handleRoomSelect(room.id)}
            >
              {selectedRoom === room.id && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-room-success" />
                </div>
              )}
              
              {!room.available && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Unavailable</Badge>
                </div>
              )}

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-room-primary-foreground flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  {room.type}
                </CardTitle>
                <div className="text-3xl font-bold text-room-success">
                  ₹{room.cost.toLocaleString()}
                  <span className="text-sm font-normal text-room-accent-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    {getIconForFeature("windowSide")}
                    <span className="text-sm text-room-accent-foreground">
                      Window: {room.windowSide ? "Yes" : "No"}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getIconForFeature("floor")}
                    <span className="text-sm text-room-accent-foreground">
                      {room.floor} Floor
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getIconForFeature("airConditioning")}
                    <span className="text-sm text-room-accent-foreground">
                      {room.airConditioning}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getIconForFeature("furnishing")}
                    <span className="text-sm text-room-accent-foreground">
                      {room.furnishing}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-2 border-t border-room-accent">
                  {getIconForFeature("washroom")}
                  <span className="text-sm text-room-accent-foreground">
                    {room.washroom} Washroom
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-room-accent-foreground">No rooms match your current filters. Try adjusting your preferences.</p>
          </div>
        )}

        {/* Confirm Button */}
        {selectedRoom && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <Button 
              onClick={handleConfirm}
              size="lg"
              className="bg-room-success hover:bg-room-success/90 text-room-success-foreground px-8 py-3 rounded-full shadow-lg"
            >
              Confirm Room Selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomSelection;