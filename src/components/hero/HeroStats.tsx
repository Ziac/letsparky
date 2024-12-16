import React from 'react';
import { Shield, Wifi, Cpu } from 'lucide-react';

export default function HeroStats() {
  const stats = [
    {
      icon: <Shield className="text-blue-500" />,
      value: "99.99%",
      label: "Security Rating"
    },
    {
      icon: <Wifi className="text-green-500" />,
      value: "24/7",
      label: "IoT Monitoring"
    },
    {
      icon: <Cpu className="text-purple-500" />,
      value: "50ms",
      label: "Response Time"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
          <div className="flex items-center justify-center mb-4">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-white text-center">{stat.value}</div>
          <div className="text-gray-400 text-center">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}