
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => (
  <section id={id} className={`snap-start min-h-screen flex flex-col justify-center py-20 md:py-32 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto w-full">
      {children}
    </div>
  </section>
);
