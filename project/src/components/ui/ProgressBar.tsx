import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
  value: number;
  max: number;
  showPercentage?: boolean;
  className?: string;
  barClassName?: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'teal';
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  showPercentage = false,
  className,
  barClassName,
  color = 'blue',
  size = 'md',
}) => {
  const percentage = Math.round((value / max) * 100);

  const colorVariants = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-500',
    red: 'bg-red-600',
    teal: 'bg-teal-500',
  };

  const sizeVariants = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={twMerge('w-full', className)}>
      <div className="flex justify-between mb-1">
        {showPercentage && (
          <span className="text-sm font-medium text-gray-700">
            {percentage}%
          </span>
        )}
      </div>
      <div className={twMerge('w-full bg-gray-200 rounded-full', sizeVariants[size])}>
        <div
          className={twMerge(
            'rounded-full transition-all duration-300 ease-in-out',
            colorVariants[color],
            sizeVariants[size],
            barClassName
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;