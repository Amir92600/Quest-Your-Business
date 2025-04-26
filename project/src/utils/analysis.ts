import { QuestionnaireAnswers } from './questionnaire';

// Analysis result types
export interface AnalysisScore {
  category: string;
  score: number;
  maxScore: number;
  label: string;
  description: string;
  color: string;
}

export interface BusinessAnalysis {
  overallHealth: AnalysisScore;
  categoryScores: AnalysisScore[];
  recommendations: Recommendation[];
  trends: Trend[];
  swot: SWOT;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export interface Trend {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  category: string;
}

export interface SWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// Helper function to calculate category scores
const calculateCategoryScore = (
  answers: QuestionnaireAnswers,
  category: string
): AnalysisScore => {
  // This is a simplified scoring algorithm
  // In a real application, this would involve more complex analysis of the answers
  
  // For demonstration purposes, let's generate some scores based on the category
  let score: number;
  let maxScore: number = 100;
  let label: string;
  let description: string;
  let color: string;
  
  switch(category) {
    case 'general':
      score = answers.industry && answers.company_size ? 75 : 50;
      label = score >= 70 ? 'Strong' : 'Needs attention';
      description = score >= 70 
        ? 'Your business fundamentals appear solid' 
        : 'Some basic aspects of your business may need refinement';
      color = score >= 70 ? 'green' : 'yellow';
      break;
    
    case 'team':
      score = answers.team_expertise === 'expert' || answers.team_expertise === 'leading' ? 85 : 65;
      label = score >= 70 ? 'Well-structured' : 'Growth opportunity';
      description = score >= 70 
        ? 'Your team appears to be well-structured with good expertise' 
        : 'Consider investing in team development and training';
      color = score >= 70 ? 'green' : 'blue';
      break;
    
    case 'objectives':
      score = answers.primary_goal && answers.long_term_vision ? 80 : 60;
      label = score >= 70 ? 'Clear direction' : 'Needs clarity';
      description = score >= 70 
        ? 'Your business objectives appear well-defined' 
        : 'More clarity in your business objectives could be beneficial';
      color = score >= 70 ? 'green' : 'yellow';
      break;
    
    case 'challenges':
      score = answers.biggest_challenge && answers.challenge_details ? 70 : 55;
      label = score >= 70 ? 'Well-understood' : 'Requires attention';
      description = score >= 70 
        ? 'You have a good understanding of your challenges' 
        : 'A deeper analysis of your challenges is recommended';
      color = score >= 70 ? 'blue' : 'red';
      break;
    
    default:
      score = 60;
      label = 'Undefined';
      description = 'Not enough information to analyze this category';
      color = 'gray';
  }
  
  return {
    category,
    score,
    maxScore,
    label,
    description,
    color
  };
};

// Main analysis function
export const analyzeBusinessData = (answers: QuestionnaireAnswers): BusinessAnalysis => {
  // Calculate category scores
  const categoryScores: AnalysisScore[] = [
    calculateCategoryScore(answers, 'general'),
    calculateCategoryScore(answers, 'team'),
    calculateCategoryScore(answers, 'objectives'),
    calculateCategoryScore(answers, 'challenges')
  ];
  
  // Calculate overall health score
  const overallScore = Math.round(
    categoryScores.reduce((sum, category) => sum + category.score, 0) / categoryScores.length
  );
  
  let healthLabel: string;
  let healthDescription: string;
  let healthColor: string;
  
  if (overallScore >= 80) {
    healthLabel = 'Excellent';
    healthDescription = 'Your business appears to be in excellent health';
    healthColor = 'green';
  } else if (overallScore >= 70) {
    healthLabel = 'Good';
    healthDescription = 'Your business appears to be in good health with some areas for improvement';
    healthColor = 'blue';
  } else if (overallScore >= 60) {
    healthLabel = 'Fair';
    healthDescription = 'Your business has several areas that need attention';
    healthColor = 'yellow';
  } else {
    healthLabel = 'Needs attention';
    healthDescription = 'Your business requires significant improvements in multiple areas';
    healthColor = 'red';
  }
  
  const overallHealth: AnalysisScore = {
    category: 'overall',
    score: overallScore,
    maxScore: 100,
    label: healthLabel,
    description: healthDescription,
    color: healthColor
  };
  
  // Generate recommendations
  const recommendations = generateRecommendations(answers, categoryScores);
  
  // Generate trends
  const trends = generateTrends(answers);
  
  // Generate SWOT analysis
  const swot = generateSWOT(answers, categoryScores);
  
  return {
    overallHealth,
    categoryScores,
    recommendations,
    trends,
    swot
  };
};

// Helper function to generate recommendations
const generateRecommendations = (
  answers: QuestionnaireAnswers,
  categoryScores: AnalysisScore[]
): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  // Team recommendations
  if (categoryScores.find(c => c.category === 'team')?.score < 70) {
    recommendations.push({
      id: 'rec-team-1',
      title: 'Invest in Team Development',
      description: 'Consider implementing a structured training program to address skill gaps and improve team expertise.',
      priority: 'high',
      category: 'team'
    });
  }
  
  // Objectives recommendations
  if (categoryScores.find(c => c.category === 'objectives')?.score < 70) {
    recommendations.push({
      id: 'rec-objectives-1',
      title: 'Clarify Business Objectives',
      description: 'Develop a more comprehensive business plan with clear, measurable objectives for the next 1-3 years.',
      priority: 'high',
      category: 'objectives'
    });
  }
  
  // Challenges recommendations
  if (answers.biggest_challenge === 'customer_acquisition') {
    recommendations.push({
      id: 'rec-challenge-1',
      title: 'Improve Customer Acquisition Strategy',
      description: 'Develop a more targeted marketing approach and refine your value proposition to attract more qualified leads.',
      priority: 'medium',
      category: 'challenges'
    });
  }
  
  if (answers.biggest_challenge === 'funding') {
    recommendations.push({
      id: 'rec-challenge-2',
      title: 'Explore Alternative Funding Options',
      description: 'Consider alternative funding sources such as angel investors, venture capital, or government grants.',
      priority: 'high',
      category: 'challenges'
    });
  }
  
  // General recommendations
  if (answers.years_in_business === 'less-than-1' || answers.years_in_business === '1-3') {
    recommendations.push({
      id: 'rec-general-1',
      title: 'Establish Market Presence',
      description: 'Focus on building a strong brand identity and establishing credibility in your industry.',
      priority: 'medium',
      category: 'general'
    });
  }
  
  // If not enough recommendations, add generic ones
  if (recommendations.length < 3) {
    recommendations.push({
      id: 'rec-general-2',
      title: 'Enhance Digital Presence',
      description: 'Invest in improving your online presence and digital marketing strategies to reach more potential customers.',
      priority: 'medium',
      category: 'general'
    });
  }
  
  return recommendations;
};

// Helper function to generate trends
const generateTrends = (answers: QuestionnaireAnswers): Trend[] => {
  const trends: Trend[] = [];
  
  // Industry-specific trends
  if (answers.industry === 'tech') {
    trends.push({
      id: 'trend-1',
      title: 'AI and Automation Adoption',
      description: 'Increasing adoption of AI and automation tools across industries presents opportunities for efficiency gains.',
      impact: 'positive',
      category: 'technology'
    });
  }
  
  if (answers.industry === 'retail') {
    trends.push({
      id: 'trend-2',
      title: 'E-commerce Growth',
      description: 'Continued growth in e-commerce and omnichannel retail experiences is transforming consumer expectations.',
      impact: 'positive',
      category: 'market'
    });
  }
  
  // Business model trends
  if (answers.business_model === 'saas') {
    trends.push({
      id: 'trend-3',
      title: 'Vertical SaaS Solutions',
      description: 'Growth in industry-specific SaaS solutions that address unique vertical market needs.',
      impact: 'positive',
      category: 'product'
    });
  }
  
  // Generic trends for all businesses
  trends.push({
    id: 'trend-4',
    title: 'Remote Work Flexibility',
    description: 'Increased acceptance of remote and hybrid work models is changing talent acquisition and retention strategies.',
    impact: 'neutral',
    category: 'workforce'
  });
  
  trends.push({
    id: 'trend-5',
    title: 'Data Privacy Regulations',
    description: 'Evolving data privacy regulations across regions requiring more stringent compliance measures.',
    impact: 'negative',
    category: 'regulatory'
  });
  
  return trends;
};

// Helper function to generate SWOT analysis
const generateSWOT = (
  answers: QuestionnaireAnswers,
  categoryScores: AnalysisScore[]
): SWOT => {
  const swot: SWOT = {
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: []
  };
  
  // Strengths
  if (answers.team_expertise === 'expert' || answers.team_expertise === 'leading') {
    swot.strengths.push('Highly experienced team with deep industry expertise');
  }
  
  if (answers.competitor_advantage) {
    swot.strengths.push('Defined competitive advantage in the marketplace');
  }
  
  if (answers.years_in_business === '8-15' || answers.years_in_business === '15+') {
    swot.strengths.push('Established market presence with industry experience');
  }
  
  // Weaknesses
  if (answers.team_gaps) {
    swot.weaknesses.push('Identified skill gaps in the team composition');
  }
  
  if (categoryScores.find(c => c.category === 'objectives')?.score < 70) {
    swot.weaknesses.push('Lack of clear business objectives and strategic direction');
  }
  
  if (answers.years_in_business === 'pre-launch' || answers.years_in_business === 'less-than-1') {
    swot.weaknesses.push('Limited market presence and brand recognition');
  }
  
  // Opportunities
  if (answers.opportunities) {
    swot.opportunities.push('Identified growth opportunities in the market');
  }
  
  if (answers.primary_goal === 'product_launch') {
    swot.opportunities.push('Potential for market expansion through new product launch');
  }
  
  swot.opportunities.push('Leveraging digital transformation trends for operational efficiency');
  
  // Threats
  if (answers.biggest_challenge === 'competition') {
    swot.threats.push('Increasing competitive pressure in the market');
  }
  
  if (answers.biggest_challenge === 'economic') {
    swot.threats.push('Economic uncertainty affecting business stability');
  }
  
  if (answers.biggest_challenge === 'regulatory') {
    swot.threats.push('Regulatory changes impacting business operations');
  }
  
  // Add generic threats if needed
  if (swot.threats.length === 0) {
    swot.threats.push('Evolving customer expectations and preferences');
    swot.threats.push('Potential for market disruption from new technologies');
  }
  
  return swot;
};