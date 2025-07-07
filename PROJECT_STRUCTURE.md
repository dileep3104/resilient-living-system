
# Health Prevention Tracker - Complete Project Structure

## Overview
A comprehensive chronic disease prevention tracking application built with React, TypeScript, and Tailwind CSS.

## Features Implemented
- ✅ User Authentication (Sign In/Sign Up/Sign Out)
- ✅ Protected Routes with AuthGuard
- ✅ Health Metrics Dashboard
- ✅ Risk Assessment System
- ✅ Personalized Recommendations
- ✅ Data Input Forms
- ✅ User Profile Management
- ✅ Interactive Charts and Visualizations
- ✅ Responsive Design
- ✅ Toast Notifications

## Project Structure
```
src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   ├── AuthGuard.tsx         # Route protection component
│   ├── DataInputForm.tsx     # Health data input form
│   ├── HealthMetricsChart.tsx # Interactive health charts
│   ├── RecommendationsPanel.tsx # Personalized recommendations
│   ├── RiskAssessment.tsx    # Risk scoring and visualization
│   └── UserProfile.tsx       # User profile management
├── hooks/
│   ├── useAuth.tsx          # Authentication context and hooks
│   └── use-toast.ts         # Toast notification hooks
├── pages/
│   ├── Index.tsx            # Main dashboard page
│   ├── SignIn.tsx           # Sign in page
│   ├── SignUp.tsx           # Sign up page
│   └── NotFound.tsx         # 404 error page
├── App.tsx                  # Main app component with routing
├── main.tsx                 # App entry point
└── index.css               # Global styles and design system
```

## Key Components

### Authentication System
- **SignIn/SignUp Pages**: Complete forms with validation
- **AuthGuard**: Protects routes requiring authentication
- **useAuth Hook**: Manages authentication state globally
- **localStorage**: Stores user session (replace with secure backend in production)

### Dashboard Features
- **Multi-tab Interface**: Dashboard, Metrics, Risk, Recommendations, Input Data
- **Health Metrics**: Blood pressure, glucose, BMI, steps, heart rate
- **Risk Scoring**: Visual risk assessment with color-coded levels
- **Interactive Charts**: Trend visualization using Recharts
- **Progress Tracking**: Health improvements and goal monitoring

### Data Management
- **User Profile**: Comprehensive health and lifestyle information
- **Data Input Forms**: Easy health metric entry
- **Family History**: Genetic risk factor tracking
- **Lifestyle Factors**: Activity, smoking, alcohol consumption

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Authentication Flow
1. New users sign up with email/password
2. Existing users sign in with credentials
3. Protected routes require authentication
4. User session persists in localStorage
5. Sign out clears session and redirects

## Data Structure
```typescript
// User Profile
{
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  height: string;
  activityLevel: string;
  familyHistory: {
    diabetes: boolean;
    heartDisease: boolean;
    hypertension: boolean;
    stroke: boolean;
    cancer: boolean;
  };
  smokingStatus: string;
  alcoholConsumption: string;
}

// Health Metrics
{
  riskScore: number;
  bloodPressure: { systolic: number; diastolic: number };
  glucose: number;
  bmi: number;
  steps: number;
  heartRate: number;
}
```

## Next Steps for Production
1. **Backend Integration**: Replace localStorage with secure API
2. **Database**: Implement PostgreSQL/MongoDB for data persistence
3. **Real Authentication**: Use JWT tokens or OAuth providers
4. **ML Models**: Integrate actual risk prediction algorithms
5. **Wearable Integration**: Connect to Fitbit, Apple Health APIs
6. **HIPAA Compliance**: Implement healthcare data security standards
7. **Testing**: Add unit and integration tests
8. **Deployment**: Deploy to AWS/Heroku with proper environment variables

## Technologies Used
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Routing**: React Router v6
- **Charts**: Recharts
- **State Management**: React Context + Hooks
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/bun

## File Download Instructions
To download the complete project:
1. All source files are in the `src/` directory
2. Copy all component files from `src/components/`
3. Copy all page files from `src/pages/`
4. Copy hooks from `src/hooks/`
5. Copy `App.tsx`, `main.tsx`, and `index.css`
6. Ensure `package.json` includes all required dependencies

The application is now ready for development and can be extended with backend services for a complete production system.
