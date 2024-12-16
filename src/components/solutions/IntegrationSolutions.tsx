import React from 'react';
import { Network, GitMerge, Plug, Database } from 'lucide-react';

export default function IntegrationSolutions() {
  const integrations = [
    {
      icon: <Network className="text-orange-500" size={32} />,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with existing systems"
    },
    {
      icon: <GitMerge className="text-blue-500" size={32} />,
      title: "Third-party Systems",
      description: "Compatible with major charging station management platforms"
    },
    {
      icon: <Plug className="text-purple-500" size={32} />,
      title: "Plug & Play",
      description: "Easy installation and configuration with existing hardware"
    },
    {
      icon: <Database className="text-green-500" size={32} />,
      title: "Data Exchange",
      description: "Standardized data formats for efficient information sharing"
    }
  ];

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold mb-6 text-white">Integration Capabilities</h3>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Our solution seamlessly integrates with your existing charging infrastructure and management systems
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900/50 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-all"
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}