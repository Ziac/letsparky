import React from 'react';

export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "50K+", label: "Active Users" },
            { value: "1M+", label: "Charging Sessions" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}