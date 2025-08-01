import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Save } from "lucide-react";
import avatarCollection from "@/assets/avatar-collection.jpg";

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jessica Parker",
    age: "24",
    email: "jessica.parker@email.com",
    phone: "+1 (555) 123-4567",
    bio: "I'm a friendly software engineer who loves yoga, reading, and cooking healthy meals. Looking for a clean, respectful roommate to share a cozy space with!",
    sleepSchedule: "early-bird",
    noiseTolerance: "low",
    lifestyle: "active"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Here you would save to database
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">Profile</span> Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Customize your profile to find the perfect match
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Avatar Section */}
          <div className="lg:col-span-1">
            <Card className="p-6 text-center shadow-card">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                  <img 
                    src={avatarCollection}
                    alt="Profile avatar"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "0% 0%" }}
                  />
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-2 right-2 rounded-full w-10 h-10 p-0"
                  onClick={() => navigate("/avatar-selection")}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => navigate("/avatar-selection")}
                className="w-full"
              >
                Change Avatar
              </Button>
            </Card>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-card">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <Button
                  variant={isEditing ? "hero" : "outline"}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="gap-2"
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="w-4 h-4" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={!isEditing}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    disabled={!isEditing}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                    className="rounded-xl"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    disabled={!isEditing}
                    className="rounded-xl min-h-24"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-6">Lifestyle Preferences</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Sleep Schedule</Label>
                    <Select
                      value={formData.sleepSchedule}
                      onValueChange={(value) => handleInputChange("sleepSchedule", value)}
                      disabled={!isEditing}
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early-bird">Early Bird (6-8 AM)</SelectItem>
                        <SelectItem value="regular">Regular (8-10 AM)</SelectItem>
                        <SelectItem value="night-owl">Night Owl (10+ AM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Noise Tolerance</Label>
                    <Select
                      value={formData.noiseTolerance}
                      onValueChange={(value) => handleInputChange("noiseTolerance", value)}
                      disabled={!isEditing}
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Prefer quiet</SelectItem>
                        <SelectItem value="medium">Medium - Some noise OK</SelectItem>
                        <SelectItem value="high">High - Noise doesn't bother me</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Lifestyle</Label>
                    <Select
                      value={formData.lifestyle}
                      onValueChange={(value) => handleInputChange("lifestyle", value)}
                      disabled={!isEditing}
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active & Outdoorsy</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="homebody">Homebody & Relaxed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;