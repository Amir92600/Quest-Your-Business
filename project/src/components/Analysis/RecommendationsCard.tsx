import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Recommendation } from '../../utils/analysis';
import { CheckCircleIcon } from '../Icons';

interface RecommendationsCardProps {
  recommendations: Recommendation[];
}

const RecommendationsCard: React.FC<RecommendationsCardProps> = ({ recommendations }) => {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">High Priority</span>;
      case 'medium':
        return <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-600">Medium Priority</span>;
      case 'low':
        return <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">Low Priority</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((recommendation) => (
            <div key={recommendation.id} className="flex gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="mt-0.5">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{recommendation.title}</h4>
                  {getPriorityBadge(recommendation.priority)}
                </div>
                <p className="text-sm text-gray-600">{recommendation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationsCard;