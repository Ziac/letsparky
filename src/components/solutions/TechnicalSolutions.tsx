import React from 'react';
import { Cpu, Wifi, Shield, Zap } from 'lucide-react';
import Button from '../common/Button';

export default function TechnicalSolutions() {
  const features = [
    {
      icon: <Cpu className="text-orange-500" size={32} />,
      title: "Edge Computing",
      description: "Real-time processing at the barrier for instant response"
    },
    {
      icon: <Wifi className="text-blue-500" size={32} />,
      title: "IoT Connectivity",
      description: "Seamless communication between barriers and management system"
    },
    {
      icon: <Shield className="text-purple-500" size={32} />,
      title: "Advanced Security",
      description: "Multi-layer encryption and authentication protocols"
    },
    {
      icon: <Zap className="text-green-500" size={32} />,
      title: "Smart Power",
      description: "Energy-efficient operation with backup power systems"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold mb-6 text-white">Technical Excellence</h3>
        <p className="text-gray-400 mb-8">
          Our barriers leverage cutting-edge technology to ensure reliable operation and seamless integration with your existing infrastructure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-900/50 rounded-xl border border-orange-500/10">
              <div className="mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-3xl" />
        <img
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
          alt="Technical Solutions"
          className="relative rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}