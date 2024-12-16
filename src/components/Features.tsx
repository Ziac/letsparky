import React from 'react';
import { Cpu, Lock, Battery, Wifi, Settings, BarChart3 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Cpu className="text-blue-500" size={32} />,
      title: "AI-Powered System",
      description: "Advanced algorithms optimize parking space and charging efficiency"
    },
    {
      icon: <Lock className="text-purple-500" size={32} />,
      title: "Secure Authentication",
      description: "Multi-factor authentication and encrypted access control"
    },
    {
      icon: <Battery className="text-green-500" size={32} />,
      title: "Smart Power Management",
      description: "Dynamic load balancing and energy optimization"
    },
    {
      icon: <Wifi className="text-red-500" size={32} />,
      title: "Real-time Monitoring",
      description: "24/7 system status and occupancy tracking"
    },
    {
      icon: <Settings className="text-yellow-500" size={32} />,
      title: "Automated Control",
      description: "Seamless barrier operation and user management"
    },
    {
      icon: <BarChart3 className="text-pink-500" size={32} />,
      title: "Analytics Dashboard",
      description: "Comprehensive usage statistics and reporting"
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Advanced Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
            >
              <div className="mb-4 transform hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}