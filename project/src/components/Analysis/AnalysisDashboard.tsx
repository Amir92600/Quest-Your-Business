import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import HealthScoreCard from './HealthScoreCard';
import CategoryScores from './CategoryScores';
import RecommendationsCard from './RecommendationsCard';
import TrendsAnalysis from './TrendsAnalysis';
import SWOTAnalysis from './SWOTAnalysis';
import { BusinessAnalysis } from '../../utils/analysis';

interface AnalysisDashboardProps {
  analysis: BusinessAnalysis;
}

const AnalysisDashboard: React.FC<AnalysisDashboardProps> = ({ analysis }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <HealthScoreCard healthScore={analysis.overallHealth} />
        </div>
        <div className="lg:col-span-2">
          <CategoryScores scores={analysis.categoryScores} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <RecommendationsCard recommendations={analysis.recommendations} />
        </div>
        <div>
          <TrendsAnalysis trends={analysis.trends} />
        </div>
      </div>
      
      <div>
        <SWOTAnalysis swot={analysis.swot} />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            This analysis is based on the information you've provided about your business. 
            The scores and recommendations are designed to give you insights into your current business health
            and potential opportunities for improvement. For a more detailed analysis, consider consulting
            with a business advisor or industry expert.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisDashboard;