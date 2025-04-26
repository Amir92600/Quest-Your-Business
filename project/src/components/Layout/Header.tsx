import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ChartBarIcon } from '../Icons';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
  showActions?: boolean;
  onReset?: () => void;
  onExport?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  className,
  showActions = true,
  onReset,
  onExport 
}) => {
  return (
    <header className={twMerge('bg-white border-b border-gray-200 shadow-sm py-4', className)}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ChartBarIcon className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Quest Your Business</h1>
            <p className="text-sm text-gray-500">Business Intelligence Analysis</p>
          </div>
        </div>
        
        {showActions && (
          <div className="flex gap-3">
            {onReset && (
              <Button
                variant="outline"
                size="sm"
                onClick={onReset}
              >
                Start Over
              </Button>
            )}
            
            {onExport && (
              <Button
                variant="primary"
                size="sm"
                onClick={onExport}
              >
                Export Analysis
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;