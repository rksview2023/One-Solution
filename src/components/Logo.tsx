import React from 'react';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  imgClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  imgClassName = '',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? '/logo-white.svg' : '/logo.svg';

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={logoSrc}
        alt="ONE SOLUTION - Plan Today. Build Tomorrow."
        className={`${imgClassName || sizeClasses[size]} w-auto max-w-full object-contain transition-all`}
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};
