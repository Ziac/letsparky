import React from 'react';
import { BatteryCharging, Shield, Zap, Timer } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7')] bg-cover bg-center opacity-10" />
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="animate-pulse">
            <Zap size={64} className="text-blue-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Smart Barrier
            <span className="block text-3xl md:text-5xl mt-2">EV Charging Solutions</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl">
            Revolutionary parking management system designed specifically for electric vehicle charging stations.
            Secure, efficient, and future-ready.
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: <BatteryCharging className="text-green-500" size={32} />,
              title: "Smart Charging",
              description: "Intelligent power distribution and real-time monitoring of charging status"
            },
            {
              icon: <Shield className="text-blue-500" size={32} />,
              title: "Secure Access",
              description: "Advanced authentication and automated barrier control system"
            },
            {
              icon: <Timer className="text-purple-500" size={32} />,
              title: "Time Management",
              description: "Efficient scheduling and optimal charging slot allocation"
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-800/70 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}