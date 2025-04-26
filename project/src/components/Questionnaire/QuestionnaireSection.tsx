import React from 'react';
import { Question, QuestionnaireAnswers } from '../../utils/questionnaire';
import Input from '../ui/Input';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';
import RadioGroup from '../ui/RadioGroup';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';

interface QuestionnaireSectionProps {
  title: string;
  description: string;
  questions: Question[];
  answers: QuestionnaireAnswers;
  setAnswers: (answers: QuestionnaireAnswers) => void;
}

const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({
  title,
  description,
  questions,
  answers,
  setAnswers,
}) => {
  const handleInputChange = (id: string, value: string) => {
    setAnswers({ ...answers, [id]: value });
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            id={question.id}
            label={question.question}
            value={answers[question.id] || ''}
            placeholder={question.placeholder}
            helperText={question.description}
            required={question.required}
            fullWidth
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'number':
        return (
          <Input
            id={question.id}
            label={question.question}
            type="number"
            value={answers[question.id] || ''}
            placeholder={question.placeholder}
            helperText={question.description}
            required={question.required}
            fullWidth
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'select':
        return (
          <Select
            id={question.id}
            label={question.question}
            options={question.options || []}
            value={answers[question.id] || ''}
            helperText={question.description}
            required={question.required}
            fullWidth
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'textarea':
        return (
          <TextArea
            id={question.id}
            label={question.question}
            value={answers[question.id] || ''}
            placeholder={question.placeholder}
            helperText={question.description}
            required={question.required}
            fullWidth
            rows={5}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
          />
        );
      case 'radio':
        return (
          <RadioGroup
            name={question.id}
            label={question.question}
            options={question.options || []}
            value={answers[question.id] || ''}
            helperText={question.description}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="mb-6">
              {renderQuestion(question)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireSection;