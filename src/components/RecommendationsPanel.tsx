
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, AlertCircle, Utensils, Activity, Stethoscope, Moon } from "lucide-react";

export const RecommendationsPanel = () => {
  const recommendations = [
    {
      id: 1,
      category: "Diet",
      title: "Reduce Sodium Intake",
      description: "Limit sodium to less than 2,300mg per day to help manage blood pressure",
      priority: "High",
      status: "in-progress",
      progress: 65,
      icon: Utensils,
      timeline: "Daily",
      actions: [
        "Read nutrition labels carefully",
        "Choose low-sodium alternatives",
        "Cook more meals at home",
        "Use herbs and spices instead of salt"
      ]
    },
    {
      id: 2,
      category: "Exercise",
      title: "Increase Weekly Activity",
      description: "Aim for 150 minutes of moderate-intensity aerobic activity per week",
      priority: "High",
      status: "pending",
      progress: 30,
      icon: Activity,
      timeline: "Weekly",
      actions: [
        "Start with 10-minute walks",
        "Take stairs instead of elevators",
        "Join a fitness class",
        "Track daily steps"
      ]
    },
    {
      id: 3,
      category: "Monitoring",
      title: "Daily Blood Pressure Checks",
      description: "Monitor blood pressure daily at the same time to track trends",
      priority: "Medium",
      status: "completed",
      progress: 100,
      icon: Stethoscope,
      timeline: "Daily",
      actions: [
        "Use certified BP monitor",
        "Record readings in app",
        "Check at same time daily",
        "Share data with doctor"
      ]
    },
    {
      id: 4,
      category: "Sleep",
      title: "Improve Sleep Quality",
      description: "Aim for 7-9 hours of quality sleep to support overall health",
      priority: "Medium",
      status: "in-progress",
      progress: 45,
      icon: Moon,
      timeline: "Daily",
      actions: [
        "Maintain consistent sleep schedule",
        "Create bedtime routine",
        "Limit screen time before bed",
        "Keep bedroom cool and dark"
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "in-progress": return <Clock className="h-5 w-5 text-yellow-600" />;
      case "pending": return <AlertCircle className="h-5 w-5 text-gray-600" />;
      default: return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "pending": return "Not Started";
      default: return "Unknown";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Recommendations</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
              <AlertCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed This Week</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900">60%</p>
              </div>
              <Activity className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => {
          const IconComponent = rec.icon;
          return (
            <Card key={rec.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <CardTitle className="text-lg">{rec.title}</CardTitle>
                        <Badge variant="outline" className={getPriorityColor(rec.priority)}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <CardDescription>{rec.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(rec.status)}
                    <span className="text-sm text-gray-600">{getStatusText(rec.status)}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{rec.progress}%</span>
                    </div>
                    <Progress value={rec.progress} className="h-2" />
                  </div>

                  {/* Action Items */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Action Steps:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {rec.actions.map((action, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{rec.timeline}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      {rec.status !== "completed" && (
                        <Button size="sm">Mark Complete</Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Weekly Goals */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Goals</CardTitle>
          <CardDescription>Focus areas for the next 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="font-medium">Walk 10,000 steps daily</span>
              <Badge variant="outline">5/7 days</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Log blood pressure readings</span>
              <Badge className="bg-green-500">7/7 days</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium">Prepare 5 home-cooked meals</span>
              <Badge variant="outline">3/5 meals</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
