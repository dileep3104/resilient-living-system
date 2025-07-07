
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Shield, TrendingDown, TrendingUp } from "lucide-react";

interface RiskAssessmentProps {
  riskScore: number;
}

export const RiskAssessment = ({ riskScore }: RiskAssessmentProps) => {
  const getRiskDetails = (score: number) => {
    if (score < 30) {
      return {
        level: "Low Risk",
        color: "bg-green-500",
        textColor: "text-green-700",
        bgColor: "bg-green-50",
        icon: Shield,
        description: "Your current health indicators suggest a low risk for chronic diseases. Keep up the great work!",
        recommendations: [
          "Continue your current healthy lifestyle",
          "Regular check-ups every 12 months",
          "Maintain current activity levels"
        ]
      };
    } else if (score < 70) {
      return {
        level: "Moderate Risk",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
        icon: AlertTriangle,
        description: "Some of your health indicators suggest moderate risk. Taking action now can significantly improve your health outcomes.",
        recommendations: [
          "Focus on dietary improvements",
          "Increase physical activity to 150 minutes/week",
          "Consider more frequent monitoring",
          "Schedule check-up every 6 months"
        ]
      };
    } else {
      return {
        level: "High Risk",
        color: "bg-red-500",
        textColor: "text-red-700",
        bgColor: "bg-red-50",
        icon: TrendingUp,
        description: "Your current health indicators suggest higher risk for chronic diseases. Immediate action and medical consultation are recommended.",
        recommendations: [
          "Consult with healthcare provider immediately",
          "Implement comprehensive lifestyle changes",
          "Consider medication if recommended",
          "Monthly monitoring and check-ups"
        ]
      };
    }
  };

  const riskDetails = getRiskDetails(riskScore);
  const IconComponent = riskDetails.icon;

  const riskFactors = [
    { name: "Blood Pressure", value: 65, status: "elevated" },
    { name: "Glucose Levels", value: 45, status: "normal" },
    { name: "BMI", value: 55, status: "elevated" },
    { name: "Activity Level", value: 30, status: "low" },
    { name: "Family History", value: 80, status: "high" },
    { name: "Age Factor", value: 40, status: "normal" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "text-green-600";
      case "low": return "text-yellow-600";
      case "elevated": return "text-orange-600";
      case "high": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Risk Score */}
      <Card className={`${riskDetails.bgColor} border-l-4 ${riskDetails.color.replace('bg-', 'border-')}`}>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <IconComponent className={`h-8 w-8 ${riskDetails.textColor}`} />
            <div>
              <CardTitle className="text-2xl">{riskDetails.level}</CardTitle>
              <CardDescription className="text-lg font-medium">Risk Score: {riskScore}%</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={riskScore} className="mb-4" />
          <p className="text-gray-700 mb-4">{riskDetails.description}</p>
          
          <Alert className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This assessment is based on your current health data and should not replace professional medical advice.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Risk Factor Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Factor Analysis</CardTitle>
          <CardDescription>Individual factors contributing to your overall risk score</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{factor.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{factor.value}%</span>
                      <Badge variant="outline" className={getStatusColor(factor.status)}>
                        {factor.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={factor.value} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Immediate Action Items */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>Priority steps to reduce your risk</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {riskDetails.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 flex-1">{recommendation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Trend</CardTitle>
          <CardDescription>How your risk has changed over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">42%</div>
              <div className="text-sm text-gray-600">3 months ago</div>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-600">Decreasing</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{riskScore}%</div>
              <div className="text-sm text-gray-600">Current</div>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-3 text-center">
            Great progress! You've reduced your risk by {42 - riskScore} percentage points.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
