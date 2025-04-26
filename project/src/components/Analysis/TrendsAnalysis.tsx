import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Trend } from '../../utils/analysis';
import { TrendingUpIcon } from '../Icons';

interface TrendsAnalysisProps {
  trends: Trend[];
}

const TrendsAnalysis: React.FC<TrendsAnalysisProps> = ({ trends }) => {
  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'positive':
        return <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600">Positive Impact</span>;
      case 'negative':
        return <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">Negative Impact</span>;
      case 'neutral':
        return <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Neutral Impact</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Market Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trends.map((trend) => (
            <div key={trend.id} className="flex gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="mt-0.5">
                <TrendingUpIcon className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{trend.title}</h4>
                  {getImpactBadge(trend.impact)}
                </div>
                <p className="text-sm text-gray-600">{trend.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendsAnalysis;