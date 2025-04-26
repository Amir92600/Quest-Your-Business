// Types for questionnaire data
export interface Question {
  id: string;
  type: 'text' | 'select' | 'textarea' | 'radio' | 'number';
  question: string;
  description?: string;
  options?: Array<{ value: string; label: string; description?: string }>;
  placeholder?: string;
  required?: boolean;
  category: 'general' | 'team' | 'objectives' | 'challenges';
  weight?: number; // Used for analysis calculations
}

export interface QuestionnaireSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

// Sample questionnaire data
export const questionnaireSections: QuestionnaireSection[] = [
  {
    id: 'general',
    title: 'Business Information',
    description: 'Let\'s start with some general information about your business',
    icon: 'building',
    questions: [
      {
        id: 'industry',
        type: 'select',
        question: 'What industry does your business operate in?',
        description: 'Select the industry that best describes your business activities',
        category: 'general',
        required: true,
        options: [
          { value: 'tech', label: 'Technology / Software' },
          { value: 'retail', label: 'Retail / Consumer Goods' },
          { value: 'finance', label: 'Financial Services / Banking' },
          { value: 'healthcare', label: 'Healthcare / Pharmaceuticals' },
          { value: 'manufacturing', label: 'Manufacturing / Industrial' },
          { value: 'services', label: 'Professional Services / Consulting' },
          { value: 'education', label: 'Education / Training' },
          { value: 'food', label: 'Food & Beverage / Hospitality' },
          { value: 'construction', label: 'Construction / Real Estate' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        id: 'company_size',
        type: 'select',
        question: 'How many employees does your company have?',
        category: 'general',
        required: true,
        options: [
          { value: '1-10', label: '1-10 employees' },
          { value: '11-50', label: '11-50 employees' },
          { value: '51-200', label: '51-200 employees' },
          { value: '201-500', label: '201-500 employees' },
          { value: '501-1000', label: '501-1000 employees' },
          { value: '1000+', label: 'More than 1000 employees' }
        ]
      },
      {
        id: 'years_in_business',
        type: 'select',
        question: 'How long has your business been operating?',
        category: 'general',
        options: [
          { value: 'pre-launch', label: 'Pre-launch / Planning stage' },
          { value: 'less-than-1', label: 'Less than 1 year' },
          { value: '1-3', label: '1-3 years' },
          { value: '4-7', label: '4-7 years' },
          { value: '8-15', label: '8-15 years' },
          { value: '15+', label: 'More than 15 years' }
        ]
      },
      {
        id: 'business_model',
        type: 'select',
        question: 'What is your primary business model?',
        category: 'general',
        options: [
          { value: 'b2b', label: 'B2B (Business to Business)' },
          { value: 'b2c', label: 'B2C (Business to Consumer)' },
          { value: 'b2g', label: 'B2G (Business to Government)' },
          { value: 'marketplace', label: 'Marketplace / Platform' },
          { value: 'saas', label: 'SaaS (Software as a Service)' },
          { value: 'ecommerce', label: 'E-commerce' },
          { value: 'service', label: 'Service-based' },
          { value: 'manufacturing', label: 'Manufacturing / Product-based' }
        ]
      }
    ]
  },
  {
    id: 'team',
    title: 'Team & Organization',
    description: 'Tell us about your team structure and organization',
    icon: 'users',
    questions: [
      {
        id: 'team_expertise',
        type: 'radio',
        question: 'How would you rate your team\'s expertise in your industry?',
        category: 'team',
        required: true,
        options: [
          { value: 'novice', label: 'Novice - Limited experience in the industry' },
          { value: 'intermediate', label: 'Intermediate - Some experience but still learning' },
          { value: 'proficient', label: 'Proficient - Solid understanding of the industry' },
          { value: 'expert', label: 'Expert - Deep industry knowledge and expertise' },
          { value: 'leading', label: 'Industry Leading - Recognized authorities in the field' }
        ]
      },
      {
        id: 'team_structure',
        type: 'select',
        question: 'How would you describe your team structure?',
        category: 'team',
        options: [
          { value: 'flat', label: 'Flat - Minimal hierarchy, collaborative decision-making' },
          { value: 'hierarchical', label: 'Hierarchical - Clear reporting structure and chain of command' },
          { value: 'matrix', label: 'Matrix - Team members report to multiple managers based on projects' },
          { value: 'agile', label: 'Agile - Self-organizing teams with scrum/sprint methodologies' },
          { value: 'functional', label: 'Functional - Organized by specialized departments' },
          { value: 'hybrid', label: 'Hybrid - Combination of different structures' }
        ]
      },
      {
        id: 'team_gaps',
        type: 'textarea',
        question: 'What are the main skill gaps or expertise you feel your team is missing?',
        placeholder: 'Describe any skills or expertise your team currently lacks...',
        category: 'team',
        required: true
      },
      {
        id: 'hiring_plans',
        type: 'radio',
        question: 'What are your hiring plans for the next 12 months?',
        category: 'team',
        options: [
          { value: 'freeze', label: 'Hiring freeze - No plans to hire' },
          { value: 'selective', label: 'Selective hiring - Only for critical positions' },
          { value: 'moderate', label: 'Moderate growth - Expanding some teams' },
          { value: 'aggressive', label: 'Aggressive growth - Significant team expansion' }
        ]
      }
    ]
  },
  {
    id: 'objectives',
    title: 'Goals & Objectives',
    description: 'Tell us about your business goals and objectives',
    icon: 'target',
    questions: [
      {
        id: 'primary_goal',
        type: 'select',
        question: 'What is the primary goal for your business over the next year?',
        category: 'objectives',
        required: true,
        options: [
          { value: 'revenue_growth', label: 'Revenue growth' },
          { value: 'profitability', label: 'Improving profitability' },
          { value: 'market_share', label: 'Increasing market share' },
          { value: 'product_launch', label: 'Launching new products/services' },
          { value: 'customer_acquisition', label: 'Customer acquisition' },
          { value: 'customer_retention', label: 'Improving customer retention' },
          { value: 'operational_efficiency', label: 'Enhancing operational efficiency' },
          { value: 'expansion', label: 'Geographic expansion' },
          { value: 'fundraising', label: 'Raising capital/investment' }
        ]
      },
      {
        id: 'revenue_target',
        type: 'select',
        question: 'What is your revenue growth target for the next fiscal year?',
        category: 'objectives',
        options: [
          { value: 'maintain', label: 'Maintain current revenue (0-5% growth)' },
          { value: 'moderate', label: 'Moderate growth (6-15%)' },
          { value: 'substantial', label: 'Substantial growth (16-30%)' },
          { value: 'ambitious', label: 'Ambitious growth (31-50%)' },
          { value: 'aggressive', label: 'Aggressive growth (51-100%)' },
          { value: 'hyper', label: 'Hyper growth (100%+)' },
          { value: 'not_applicable', label: 'Not applicable / Pre-revenue' }
        ]
      },
      {
        id: 'long_term_vision',
        type: 'textarea',
        question: 'What is your long-term vision for your business (3-5 years)?',
        placeholder: 'Describe where you want your business to be in 3-5 years...',
        category: 'objectives',
        required: true
      },
      {
        id: 'success_metrics',
        type: 'textarea',
        question: 'What key metrics do you use to measure business success?',
        placeholder: 'List the most important KPIs and metrics for your business...',
        category: 'objectives'
      }
    ]
  },
  {
    id: 'challenges',
    title: 'Challenges & Opportunities',
    description: 'Tell us about the challenges your business faces and opportunities ahead',
    icon: 'sparkles',
    questions: [
      {
        id: 'biggest_challenge',
        type: 'select',
        question: 'What is the biggest challenge your business currently faces?',
        category: 'challenges',
        required: true,
        options: [
          { value: 'customer_acquisition', label: 'Customer acquisition / Lead generation' },
          { value: 'funding', label: 'Funding / Capital constraints' },
          { value: 'competition', label: 'Increasing competition' },
          { value: 'talent', label: 'Talent acquisition and retention' },
          { value: 'product_market_fit', label: 'Product-market fit' },
          { value: 'scaling', label: 'Scaling operations efficiently' },
          { value: 'technology', label: 'Technology/digital transformation' },
          { value: 'regulatory', label: 'Regulatory/compliance issues' },
          { value: 'economic', label: 'Economic uncertainty' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        id: 'challenge_details',
        type: 'textarea',
        question: 'Please provide more details about your biggest business challenge',
        placeholder: 'Describe the challenge and its impact on your business...',
        category: 'challenges',
        required: true
      },
      {
        id: 'opportunities',
        type: 'textarea',
        question: 'What are the biggest opportunities you see for your business?',
        placeholder: 'Describe potential growth opportunities or market trends...',
        category: 'challenges'
      },
      {
        id: 'competitor_advantage',
        type: 'textarea',
        question: 'What is your competitive advantage over others in your industry?',
        placeholder: 'Describe what makes your business unique compared to competitors...',
        category: 'challenges'
      }
    ]
  }
];

// Define answer type
export interface QuestionnaireAnswers {
  [questionId: string]: string;
}

// Default empty answers object
export const createEmptyAnswers = (): QuestionnaireAnswers => {
  const answers: QuestionnaireAnswers = {};
  questionnaireSections.forEach(section => {
    section.questions.forEach(question => {
      answers[question.id] = '';
    });
  });
  return answers;
};