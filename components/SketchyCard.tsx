import React from 'react';

interface SketchyCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  rotate?: number;
}

const SketchyCard: React.FC<SketchyCardProps> = ({ 
  children, 
  className = '', 
  color = 'bg-white',
  rotate = 0
}) => {
  // Map rotation number to a tailwind class roughly
  const rotateClass = rotate === 0 ? '' : rotate > 0 ? `rotate-${rotate}` : `-rotate-${Math.abs(rotate)}`;
  
  return (
    <div className={`border-2 border-black p-6 sketch-shadow ${color} ${rotateClass} rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default SketchyCard;