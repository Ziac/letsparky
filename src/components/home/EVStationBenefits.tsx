import React from 'react';
import { ShieldCheck, Zap, Timer, Ban } from 'lucide-react';
import Container from '../common/Container';

export default function EVStationBenefits() {
  const benefits = [
    {
      icon: <Ban className="text-red-500" size={32} />,
      title: "ICE Vehicle Prevention",
      description: "Smart detection system prevents non-EV vehicles from occupying charging spots"
    },
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: "Optimized Charging",
      description: "Maximize station utilization with intelligent access control"
    },
    {
      icon: <Timer className="text-blue-500" size={32} />,
      title: "Time Management",
      description: "Automated overstay prevention and turnover optimization"
    },
    {
      icon: <ShieldCheck className="text-green-500" size={32} />,
      title: "Revenue Protection",
      description: "Secure your charging revenue by ensuring spots for actual EV users"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
            Maximize Your Charging Station ROI
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black/50 border border-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}