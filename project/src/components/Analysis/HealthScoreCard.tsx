import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { AnalysisScore } from '../../utils/analysis';
import { ChartPieIcon } from '../Icons';

interface HealthScoreCardProps {
  healthScore: AnalysisScore;
}

const HealthScoreCard: React.FC<HealthScoreCardProps> = ({ healthScore }) => {
  const getScoreColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-green-600 bg-green-50';
      case 'blue':
        return 'text-blue-600 bg-blue-50';
      case 'yellow':
        return 'text-yellow-600 bg-yellow-50';
      case 'red':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getScoreRingColor = (color: string) => {
    switch (color) {
      case 'green':
        return '#10B981';
      case 'blue':
        return '#3B82F6';
      case 'yellow':
        return '#F59E0B';
      case 'red':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const ringColor = getScoreRingColor(healthScore.color);
  const percentageFilled = (healthScore.score / healthScore.maxScore) * 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentageFilled / 100) * circumference;

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Business Health</CardTitle>
        <ChartPieIcon className="w-5 h-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative flex items-center justify-center">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="12"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={ringColor}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 80 80)"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">{healthScore.score}</span>
              <span className="text-sm text-gray-500">out of {healthScore.maxScore}</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getScoreColorClass(healthScore.color)}`}>
              {healthScore.label}
            </span>
            <p className="mt-3 text-gray-600">{healthScore.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthScoreCard;