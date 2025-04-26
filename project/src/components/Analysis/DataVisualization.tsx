import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement
} from 'chart.js';
import { Bar, Radar, Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { QuestionnaireAnswers } from '../../utils/questionnaire';
import { AnalysisScore } from '../../utils/analysis';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface DataVisualizationProps {
  answers: QuestionnaireAnswers;
  categoryScores: AnalysisScore[];
}

const DataVisualization: React.FC<DataVisualizationProps> = ({
  answers,
  categoryScores,
}) => {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'general':
        return 'Business Info';
      case 'team':
        return 'Team';
      case 'objectives':
        return 'Goals';
      case 'challenges':
        return 'Challenges';
      default:
        return category;
    }
  };

  // Category scores bar chart
  const categoryScoresData = {
    labels: categoryScores.map(score => getCategoryLabel(score.category)),
    datasets: [
      {
        label: 'Score',
        data: categoryScores.map(score => score.score),
        backgroundColor: categoryScores.map(score => {
          switch (score.color) {
            case 'green': return 'rgba(16, 185, 129, 0.7)';
            case 'blue': return 'rgba(59, 130, 246, 0.7)';
            case 'yellow': return 'rgba(245, 158, 11, 0.7)';
            case 'red': return 'rgba(239, 68, 68, 0.7)';
            default: return 'rgba(107, 114, 128, 0.7)';
          }
        }),
        borderColor: categoryScores.map(score => {
          switch (score.color) {
            case 'green': return 'rgb(16, 185, 129)';
            case 'blue': return 'rgb(59, 130, 246)';
            case 'yellow': return 'rgb(245, 158, 11)';
            case 'red': return 'rgb(239, 68, 68)';
            default: return 'rgb(107, 114, 128)';
          }
        }),
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Category Analysis Scores',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Business aspects radar chart
  const businessAspectsData = {
    labels: ['Team Expertise', 'Clear Objectives', 'Market Position', 'Financial Health', 'Innovation'],
    datasets: [
      {
        label: 'Your Business',
        data: [
          answers.team_expertise === 'expert' || answers.team_expertise === 'leading' ? 80 : 60,
          categoryScores.find(s => s.category === 'objectives')?.score || 65,
          answers.years_in_business === '8-15' || answers.years_in_business === '15+' ? 85 : 60,
          answers.primary_goal === 'profitability' ? 75 : 65,
          answers.primary_goal === 'product_launch' ? 80 : 60,
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
      },
      {
        label: 'Industry Average',
        data: [70, 65, 70, 68, 62],
        backgroundColor: 'rgba(107, 114, 128, 0.2)',
        borderColor: 'rgb(107, 114, 128)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(107, 114, 128)',
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Business Aspects Comparison',
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  // Business health doughnut chart
  const overallScore = Math.round(
    categoryScores.reduce((sum, category) => sum + category.score, 0) / categoryScores.length
  );
  
  const doughnutData = {
    labels: ['Overall Health', 'Room for Improvement'],
    datasets: [
      {
        data: [overallScore, 100 - overallScore],
        backgroundColor: [
          overallScore >= 80 ? 'rgba(16, 185, 129, 0.8)' : 
          overallScore >= 70 ? 'rgba(59, 130, 246, 0.8)' : 
          overallScore >= 60 ? 'rgba(245, 158, 11, 0.8)' : 
          'rgba(239, 68, 68, 0.8)',
          'rgba(229, 231, 235, 0.5)',
        ],
        borderColor: [
          overallScore >= 80 ? 'rgb(16, 185, 129)' : 
          overallScore >= 70 ? 'rgb(59, 130, 246)' : 
          overallScore >= 60 ? 'rgb(245, 158, 11)' : 
          'rgb(239, 68, 68)',
          'rgb(229, 231, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Overall Business Health',
      },
    },
    cutout: '70%',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Category Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar options={barOptions} data={categoryScoresData} height={null} width={null} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Business Health Overview</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <div style={{ maxWidth: '250px' }}>
            <Doughnut options={doughnutOptions} data={doughnutData} />
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Business Aspects Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ maxHeight: '400px' }}>
            <Radar options={radarOptions} data={businessAspectsData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataVisualization;