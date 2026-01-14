import React from 'react';

const CustomMarquee = ({ children, className, direction = 'left' }) => {
  const animationClass = direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left';
  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <div className={`flex ${animationClass} whitespace-nowrap`}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default CustomMarquee;