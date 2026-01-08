import React from 'react';

interface SketchyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  rotate?: boolean;
}

const SketchyButton: React.FC<SketchyButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  rotate = true,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 border-2 border-black font-bold text-xl transition-all duration-200 sketch-shadow sketch-shadow-active";
  
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-300 text-black",
    secondary: "bg-white hover:bg-gray-50 text-black",
    danger: "bg-red-500 hover:bg-red-400 text-white"
  };

  const rotation = rotate ? (Math.random() > 0.5 ? 'rotate-1' : '-rotate-1') : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${rotation} ${className} rounded-md`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SketchyButton;