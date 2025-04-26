import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import AnalysisDashboard from '../components/Analysis/AnalysisDashboard';
import DataVisualization from '../components/Analysis/DataVisualization';
import ExportReport from '../components/Analysis/ExportReport';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { ArrowLeftIcon } from '../components/Icons';
import { QuestionnaireAnswers } from '../utils/questionnaire';
import { BusinessAnalysis } from '../utils/analysis';

interface AnalysisPageProps {
  analysis: BusinessAnalysis;
  answers: QuestionnaireAnswers;
  onReset: () => void;
}

const AnalysisPage: React.FC<AnalysisPageProps> = ({ 
  analysis,
  answers,
  onReset
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        showActions
        onReset={onReset}
      />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Your Business Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Based on your responses, we've generated a comprehensive analysis of your business's current state, 
                along with recommendations and insights to help you make informed decisions.
              </p>
              <div className="mt-4 flex justify-end">
                <ExportReport analysis={analysis} answers={answers} />
              </div>
            </CardContent>
          </Card>
          
          <AnalysisDashboard analysis={analysis} />
          
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <DataVisualization answers={answers} categoryScores={analysis.categoryScores} />
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={onReset}
              icon={<ArrowLeftIcon className="w-4 h-4" />}
            >
              Start New Assessment
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalysisPage;