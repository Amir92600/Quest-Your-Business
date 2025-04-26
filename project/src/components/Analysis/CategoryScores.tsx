import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { AnalysisScore } from '../../utils/analysis';
import { ChartBarIcon } from '../Icons';

interface CategoryScoresProps {
  scores: AnalysisScore[];
}

const CategoryScores: React.FC<CategoryScoresProps> = ({ scores }) => {
  const getScoreColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bar: 'bg-green-600',
          text: 'text-green-600',
          bg: 'bg-green-50'
        };
      case 'blue':
        return {
          bar: 'bg-blue-600',
          text: 'text-blue-600',
          bg: 'bg-blue-50'
        };
      case 'yellow':
        return {
          bar: 'bg-yellow-500',
          text: 'text-yellow-600',
          bg: 'bg-yellow-50'
        };
      case 'red':
        return {
          bar: 'bg-red-600',
          text: 'text-red-600',
          bg: 'bg-red-50'
        };
      default:
        return {
          bar: 'bg-gray-600',
          text: 'text-gray-600',
          bg: 'bg-gray-50'
        };
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'general':
        return 'Business Information';
      case 'team':
        return 'Team & Organization';
      case 'objectives':
        return 'Goals & Objectives';
      case 'challenges':
        return 'Challenges & Opportunities';
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Category Analysis</CardTitle>
        <ChartBarIcon className="w-5 h-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scores.map((score) => {
            const colorClasses = getScoreColorClass(score.color);
            const percentage = (score.score / score.maxScore) * 100;
            
            return (
              <div key={score.category} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    {getCategoryLabel(score.category)}
                  </span>
                  <span className={`text-sm font-medium ${colorClasses.text}`}>
                    {score.score}/{score.maxScore}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${colorClasses.bar} h-3 rounded-full transition-all duration-500 ease-in-out`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                    {score.label}
                  </span>
                  <span className="text-xs text-gray-500">{score.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryScores;