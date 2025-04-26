import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import QuestionnaireSection from '../components/Questionnaire/QuestionnaireSection';
import QuestionnaireNav from '../components/Questionnaire/QuestionnaireNav';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { ArrowLeftIcon, ArrowRightIcon, SaveIcon } from '../components/Icons';
import { questionnaireSections, QuestionnaireAnswers, createEmptyAnswers } from '../utils/questionnaire';
import { analyzeBusinessData } from '../utils/analysis';

interface QuestionnairePageProps {
  onComplete: (answers: QuestionnaireAnswers) => void;
  savedAnswers?: QuestionnaireAnswers;
}

const QuestionnairePage: React.FC<QuestionnairePageProps> = ({ 
  onComplete,
  savedAnswers
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(savedAnswers || createEmptyAnswers());
  const [sectionProgress, setSectionProgress] = useState<number[]>(Array(questionnaireSections.length).fill(0));
  
  useEffect(() => {
    // Calculate progress for each section
    const newProgress = questionnaireSections.map((section, index) => {
      const sectionQuestions = section.questions;
      const answeredQuestions = sectionQuestions.filter(q => answers[q.id] && answers[q.id].trim() !== '');
      return Math.round((answeredQuestions.length / sectionQuestions.length) * 100);
    });
    
    setSectionProgress(newProgress);
  }, [answers]);
  
  const handleNextSection = () => {
    if (currentSection < questionnaireSections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else {
      // Complete questionnaire
      onComplete(answers);
    }
  };
  
  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const isCurrentSectionValid = () => {
    const currentQuestions = questionnaireSections[currentSection].questions;
    const requiredQuestions = currentQuestions.filter(q => q.required);
    
    return requiredQuestions.every(q => answers[q.id] && answers[q.id].trim() !== '');
  };
  
  const isLastSection = currentSection === questionnaireSections.length - 1;
  const section = questionnaireSections[currentSection];
  
  const handleSave = () => {
    // In a real application, this would save to localStorage or a database
    alert('Your progress has been saved!');
  };
  
  const overallProgress = Math.round(
    sectionProgress.reduce((sum, progress) => sum + progress, 0) / sectionProgress.length
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Business Assessment Questionnaire</CardTitle>
              <CardDescription>
                Answer the following questions to receive a detailed analysis of your business's current state and potential opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Overall Progress</span>
                <span>{overallProgress}%</span>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <QuestionnaireNav 
                sections={questionnaireSections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                progress={sectionProgress}
              />
              
              <Card>
                <CardContent className="p-4">
                  <Button
                    variant="outline"
                    fullWidth
                    icon={<SaveIcon className="w-4 h-4" />}
                    onClick={handleSave}
                  >
                    Save Progress
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <QuestionnaireSection
                title={section.title}
                description={section.description}
                questions={section.questions}
                answers={answers}
                setAnswers={setAnswers}
              />
              
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevSection}
                  disabled={currentSection === 0}
                  icon={<ArrowLeftIcon className="w-4 h-4" />}
                >
                  Previous
                </Button>
                
                <Button
                  variant="primary"
                  onClick={handleNextSection}
                  disabled={!isCurrentSectionValid()}
                  icon={isLastSection ? undefined : <ArrowRightIcon className="w-4 h-4 ml-1" />}
                >
                  {isLastSection ? 'Complete & Analyze' : 'Next'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuestionnairePage;