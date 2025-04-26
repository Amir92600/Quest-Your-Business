import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import QuestionnairePage from './pages/QuestionnairePage';
import AnalysisPage from './pages/AnalysisPage';
import { QuestionnaireAnswers, createEmptyAnswers } from './utils/questionnaire';
import { BusinessAnalysis, analyzeBusinessData } from './utils/analysis';

type AppPage = 'landing' | 'questionnaire' | 'analysis';

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('landing');
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(createEmptyAnswers());
  const [analysis, setAnalysis] = useState<BusinessAnalysis | null>(null);

  const handleStartQuestionnaire = () => {
    setCurrentPage('questionnaire');
  };

  const handleCompleteQuestionnaire = (questionnaireAnswers: QuestionnaireAnswers) => {
    setAnswers(questionnaireAnswers);
    const businessAnalysis = analyzeBusinessData(questionnaireAnswers);
    setAnalysis(businessAnalysis);
    setCurrentPage('analysis');
  };

  const handleResetQuestionnaire = () => {
    setAnswers(createEmptyAnswers());
    setAnalysis(null);
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {currentPage === 'landing' && (
        <LandingPage onStart={handleStartQuestionnaire} />
      )}
      
      {currentPage === 'questionnaire' && (
        <QuestionnairePage 
          onComplete={handleCompleteQuestionnaire}
          savedAnswers={answers}
        />
      )}
      
      {currentPage === 'analysis' && analysis && (
        <AnalysisPage 
          analysis={analysis}
          answers={answers}
          onReset={handleResetQuestionnaire}
        />
      )}
    </div>
  );
}

export default App;