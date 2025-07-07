
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { User, Shield, Calendar } from "lucide-react";

export const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe", 
    age: "45",
    gender: "male",
    height: "5'10\"",
    activityLevel: "moderate",
    familyHistory: {
      diabetes: true,
      heartDisease: false,
      hypertension: true,
      stroke: false,
      cancer: false
    },
    smokingStatus: "never",
    alcoholConsumption: "moderate"
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFamilyHistoryChange = (condition: string, checked: boolean) => {
    setProfileData(prev => ({
      ...prev,
      familyHistory: {
        ...prev.familyHistory,
        [condition]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Updating profile:", profileData);
    
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>Personal Profile</span>
        </CardTitle>
        <CardDescription>
          Your personal information helps us provide more accurate risk assessments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  min="18"
                  max="120"
                  value={profileData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={profileData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  placeholder="5'10\""
                  value={profileData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Lifestyle Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Lifestyle</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="activity">Activity Level</Label>
                <Select value={profileData.activityLevel} onValueChange={(value) => handleInputChange("activityLevel", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                    <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                    <SelectItem value="very-active">Very Active (2x/day or intense)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="smoking">Smoking Status</Label>
                <Select value={profileData.smokingStatus} onValueChange={(value) => handleInputChange("smokingStatus", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never smoked</SelectItem>
                    <SelectItem value="former">Former smoker</SelectItem>
                    <SelectItem value="current">Current smoker</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alcohol">Alcohol Consumption</Label>
              <Select value={profileData.alcoholConsumption} onValueChange={(value) => handleInputChange("alcoholConsumption", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="light">Light (1-3 drinks/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (4-14 drinks/week)</SelectItem>
                  <SelectItem value="heavy">Heavy (15+ drinks/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Family History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Family History</span>
            </h3>
            <p className="text-sm text-gray-600">
              Select conditions that run in your immediate family (parents, siblings, children)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(profileData.familyHistory).map(([condition, checked]) => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox
                    id={condition}
                    checked={checked}
                    onCheckedChange={(checked) => 
                      handleFamilyHistoryChange(condition, checked as boolean)
                    }
                  />
                  <Label htmlFor={condition} className="text-sm capitalize">
                    {condition === "heartDisease" ? "Heart Disease" : condition}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit">Save Profile</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
