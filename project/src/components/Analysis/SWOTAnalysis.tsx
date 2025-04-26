import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { SWOT } from '../../utils/analysis';

interface SWOTAnalysisProps {
  swot: SWOT;
}

const SWOTAnalysis: React.FC<SWOTAnalysisProps> = ({ swot }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">SWOT Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="text-lg font-medium text-green-700 mb-2">Strengths</h3>
            <ul className="list-disc pl-5 space-y-1">
              {swot.strengths.map((strength, index) => (
                <li key={`strength-${index}`} className="text-green-800">
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="text-lg font-medium text-red-700 mb-2">Weaknesses</h3>
            <ul className="list-disc pl-5 space-y-1">
              {swot.weaknesses.map((weakness, index) => (
                <li key={`weakness-${index}`} className="text-red-800">
                  <span className="text-gray-700">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Opportunities</h3>
            <ul className="list-disc pl-5 space-y-1">
              {swot.opportunities.map((opportunity, index) => (
                <li key={`opportunity-${index}`} className="text-blue-800">
                  <span className="text-gray-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h3 className="text-lg font-medium text-yellow-700 mb-2">Threats</h3>
            <ul className="list-disc pl-5 space-y-1">
              {swot.threats.map((threat, index) => (
                <li key={`threat-${index}`} className="text-yellow-800">
                  <span className="text-gray-700">{threat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SWOTAnalysis;