import React from 'react';
import { Wifi, Cpu, Cloud, Settings, Activity, Lock } from 'lucide-react';
import IoTCard from './IoTCard';

export default function IoTFeatures() {
  const features = [
    {
      icon: <Wifi className="text-blue-500" size={32} />,
      title: "Real-time Connectivity",
      description: "Constant communication between barriers and central system"
    },
    {
      icon: <Cpu className="text-purple-500" size={32} />,
      title: "Edge Computing",
      description: "Local processing for faster response times"
    },
    {
      icon: <Cloud className="text-green-500" size={32} />,
      title: "Cloud Integration",
      description: "Seamless data synchronization and backup"
    },
    {
      icon: <Settings className="text-yellow-500" size={32} />,
      title: "Remote Management",
      description: "Control and configure barriers from anywhere"
    },
    {
      icon: <Activity className="text-red-500" size={32} />,
      title: "Predictive Maintenance",
      description: "AI-powered maintenance scheduling"
    },
    {
      icon: <Lock className="text-indigo-500" size={32} />,
      title: "Secure Protocol",
      description: "End-to-end encryption for all communications"
    }
  ];

  return (
    <section id="iot" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          IoT Platform Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <IoTCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}