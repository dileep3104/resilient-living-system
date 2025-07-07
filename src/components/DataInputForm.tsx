
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Calendar, Activity, Heart, Droplets } from "lucide-react";

export const DataInputForm = () => {
  const [formData, setFormData] = useState({
    bloodPressureSystolic: "",
    bloodPressureDiastolic: "",
    glucose: "",
    weight: "",
    heartRate: "",
    steps: "",
    sleepHours: "",
    stressLevel: "",
    symptoms: "",
    medications: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.bloodPressureSystolic || !formData.bloodPressureDiastolic) {
      toast({
        title: "Missing Information",
        description: "Please enter your blood pressure readings",
        variant: "destructive"
      });
      return;
    }

    // Save data (in a real app, this would send to a backend)
    console.log("Saving health data:", formData);
    
    toast({
      title: "Data Saved Successfully",
      description: "Your health metrics have been recorded and will be used to update your risk assessment.",
    });

    // Reset form
    setFormData({
      bloodPressureSystolic: "",
      bloodPressureDiastolic: "",
      glucose: "",
      weight: "",
      heartRate: "",
      steps: "",
      sleepHours: "",
      stressLevel: "",
      symptoms: "",
      medications: ""
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span>Log Health Metrics</span>
        </CardTitle>
        <CardDescription>
          Enter your daily health measurements to track trends and update your risk assessment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vital Signs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Vital Signs</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bp-systolic">Systolic Blood Pressure</Label>
                <div className="relative">
                  <Input
                    id="bp-systolic"
                    type="number"
                    placeholder="120"
                    min="80"
                    max="200"
                    value={formData.bloodPressureSystolic}
                    onChange={(e) => handleInputChange("bloodPressureSystolic", e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-500">mmHg</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bp-diastolic">Diastolic Blood Pressure</Label>
                <div className="relative">
                  <Input
                    id="bp-diastolic"
                    type="number"
                    placeholder="80"
                    min="40"
                    max="120"
                    value={formData.bloodPressureDiastolic}
                    onChange={(e) => handleInputChange("bloodPressureDiastolic", e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-500">mmHg</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="glucose">Blood Glucose</Label>
                <div className="relative">
                  <Input
                    id="glucose"
                    type="number"
                    placeholder="90"
                    min="60"
                    max="300"
                    value={formData.glucose}
                    onChange={(e) => handleInputChange("glucose", e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-500">mg/dL</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="heart-rate">Resting Heart Rate</Label>
                <div className="relative">
                  <Input
                    id="heart-rate"
                    type="number"
                    placeholder="70"
                    min="40"
                    max="120"
                    value={formData.heartRate}
                    onChange={(e) => handleInputChange("heartRate", e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-500">BPM</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <div className="relative">
                <Input
                  id="weight"
                  type="number"
                  placeholder="150"
                  min="80"
                  max="400"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-500">lbs</span>
              </div>
            </div>
          </div>

          {/* Lifestyle Metrics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <span>Daily Activity</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="steps">Daily Steps</Label>
                <Input
                  id="steps"
                  type="number"
                  placeholder="8000"
                  min="0"
                  max="50000"
                  value={formData.steps}
                  onChange={(e) => handleInputChange("steps", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sleep">Sleep Hours</Label>
                <div className="relative">
                  <Input
                    id="sleep"
                    type="number"
                    placeholder="7.5"
                    min="0"
                    max="12"
                    step="0.5"
                    value={formData.sleepHours}
                    onChange={(e) => handleInputChange("sleepHours", e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-500">hours</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stress">Stress Level</Label>
              <Select value={formData.stressLevel} onValueChange={(value) => handleInputChange("stressLevel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your stress level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (1-3)</SelectItem>
                  <SelectItem value="moderate">Moderate (4-6)</SelectItem>
                  <SelectItem value="high">High (7-10)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="symptoms">Symptoms or Concerns</Label>
              <Textarea
                id="symptoms"
                placeholder="Any symptoms you've noticed or concerns you'd like to track..."
                value={formData.symptoms}
                onChange={(e) => handleInputChange("symptoms", e.target.value)}
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea
                id="medications"
                placeholder="List any medications, supplements, or treatments..."
                value={formData.medications}
                onChange={(e) => handleInputChange("medications", e.target.value)}
                className="min-h-20"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline">Save as Draft</Button>
            <Button type="submit">Save Metrics</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
