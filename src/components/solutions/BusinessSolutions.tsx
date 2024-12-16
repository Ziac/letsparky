import React from 'react';
import { Building2, Users, BarChart3, Shield } from 'lucide-react';
import SolutionCard from './SolutionCard';

export default function BusinessSolutions() {
  const solutions = [
    {
      icon: <Building2 className="text-blue-500" size={32} />,
      title: "Enterprise Management",
      description: "Centralized control for multiple locations with real-time monitoring and analytics"
    },
    {
      icon: <Users className="text-purple-500" size={32} />,
      title: "Access Control",
      description: "Role-based access management with detailed audit trails"
    },
    {
      icon: <BarChart3 className="text-green-500" size={32} />,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and insights for business optimization"
    },
    {
      icon: <Shield className="text-yellow-500" size={32} />,
      title: "Security Protocols",
      description: "Enterprise-grade security with encryption and authentication"
    }
  ];

  return (
    <section id="business" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Business Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}