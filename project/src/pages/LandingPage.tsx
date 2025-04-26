import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Button from '../components/ui/Button';
import { BuildingIcon, ChartBarIcon, ChartPieIcon, SparklesIcon } from '../components/Icons';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showActions={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Discover Your Business's Full Potential
                </h1>
                <p className="text-lg md:text-xl mb-8 text-blue-100">
                  Quest Your Business (QYB) helps you analyze your business health, identify growth opportunities, and get actionable recommendations through our interactive assessment tool.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={onStart}
                  className="text-blue-900 bg-white hover:bg-blue-50"
                >
                  Start Your Business Assessment
                </Button>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-blue-400 bg-opacity-30 blur"></div>
                  <div className="relative bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-start">
                      <ChartBarIcon className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Business Health Score</h3>
                        <p className="text-gray-600 mt-1">88/100</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-blue-700">Team & Structure</h4>
                        <p className="text-2xl font-bold text-gray-900 mt-1">92%</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-green-700">Growth Potential</h4>
                        <p className="text-2xl font-bold text-gray-900 mt-1">85%</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-yellow-700">Market Position</h4>
                        <p className="text-2xl font-bold text-gray-900 mt-1">76%</p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-teal-700">Innovation</h4>
                        <p className="text-2xl font-bold text-gray-900 mt-1">82%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How QYB Helps Your Business</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive assessment tool analyzes multiple aspects of your business to provide actionable insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BuildingIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Health Assessment</h3>
                <p className="text-gray-600">
                  Evaluate your current business state across key performance areas
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <ChartPieIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">
                  Understand your business through interactive charts and diagrams
                </p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trend Analysis</h3>
                <p className="text-gray-600">
                  Identify industry trends and predict future opportunities
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <SparklesIcon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Recommendations</h3>
                <p className="text-gray-600">
                  Get practical advice tailored to your specific business needs
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A simple 3-step process to unlock valuable insights about your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete the Questionnaire</h3>
                <p className="text-gray-600">
                  Answer questions about your business structure, goals, challenges, and opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Your Analysis</h3>
                <p className="text-gray-600">
                  Our system analyzes your responses to generate comprehensive business insights
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Take Action</h3>
                <p className="text-gray-600">
                  Use the recommendations and visualizations to make informed business decisions
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="primary" 
                size="lg"
                onClick={onStart}
              >
                Start Your Assessment Now
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Business Owners Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from entrepreneurs who have used QYB to transform their businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jane Smith</h4>
                    <p className="text-sm text-gray-600">Tech Startup Founder</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "QYB highlighted exactly where our team needed to improve. The visualizations made it easy to communicate these insights to my leadership team."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Robert Johnson</h4>
                    <p className="text-sm text-gray-600">Retail Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The recommendations we received were spot-on. We implemented three key suggestions and saw a 22% increase in revenue within six months."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">MP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maria Perez</h4>
                    <p className="text-sm text-gray-600">Service Business CEO</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I was skeptical at first, but the SWOT analysis pinpointed weaknesses we weren't aware of. This tool offers real value to business owners at any stage."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Start your business assessment today and discover actionable insights to drive growth and success.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={onStart}
              className="text-blue-900 bg-white hover:bg-blue-50"
            >
              Begin Your Business Quest
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;