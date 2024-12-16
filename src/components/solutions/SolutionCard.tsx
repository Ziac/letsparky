import React from 'react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
      <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}