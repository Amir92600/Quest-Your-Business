import React from 'react';
import { twMerge } from 'tailwind-merge';
import { QuestionnaireSection } from '../../utils/questionnaire';
import { BuildingIcon, UsersIcon, TargetIcon, SparklesIcon, ChevronRightIcon } from '../Icons';

interface QuestionnaireNavProps {
  sections: QuestionnaireSection[];
  currentSection: number;
  setCurrentSection: (index: number) => void;
  progress: number[];
}

const QuestionnaireNav: React.FC<QuestionnaireNavProps> = ({
  sections,
  currentSection,
  setCurrentSection,
  progress,
}) => {
  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'building':
        return <BuildingIcon className="w-5 h-5" />;
      case 'users':
        return <UsersIcon className="w-5 h-5" />;
      case 'target':
        return <TargetIcon className="w-5 h-5" />;
      case 'sparkles':
        return <SparklesIcon className="w-5 h-5" />;
      default:
        return <ChevronRightIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Questionnaire Sections</h3>
      <div className="space-y-3">
        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const isCompleted = progress[index] === 100;
          
          return (
            <button
              key={section.id}
              className={twMerge(
                'flex items-center w-full text-left p-3 rounded-md transition-colors',
                isActive 
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'hover:bg-gray-100',
                isCompleted && !isActive && 'text-green-600'
              )}
              onClick={() => setCurrentSection(index)}
            >
              <div className={twMerge(
                'mr-3 flex items-center justify-center w-8 h-8 rounded-full shrink-0',
                isActive 
                  ? 'bg-blue-100 text-blue-600' 
                  : isCompleted 
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
              )}>
                {getSectionIcon(section.icon)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{section.title}</p>
                <div className="w-full bg-gray-200 h-1 mt-2 rounded-full">
                  <div 
                    className={twMerge(
                      'h-1 rounded-full transition-all duration-300',
                      isActive 
                        ? 'bg-blue-600' 
                        : isCompleted 
                          ? 'bg-green-600'
                          : 'bg-gray-400'
                    )}
                    style={{ width: `${progress[index]}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionnaireNav;