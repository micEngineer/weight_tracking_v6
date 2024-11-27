import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex items-center space-x-2">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
      <span className="text-xs sm:text-sm text-gray-500">{description}</span>
    </div>
  );
}