import React from 'react';

interface IoTCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function IoTCard({ icon, title, description }: IoTCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}