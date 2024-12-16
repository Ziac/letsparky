import React from 'react';
import { Battery, Ban, TrendingUp } from 'lucide-react';
import Container from '../common/Container';

export default function StationMetrics() {
  const metrics = [
    {
      icon: <Battery className="text-green-500" size={32} />,
      value: "98%",
      label: "Station Availability"
    },
    {
      icon: <Ban className="text-red-500" size={32} />,
      value: "95%",
      label: "ICE Prevention Rate"
    },
    {
      icon: <TrendingUp className="text-orange-500" size={32} />,
      value: "2.5x",
      label: "Revenue Increase"
    }
  ];

  return (
    <section className="py-12 bg-black/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 rounded-xl bg-black/30 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-white text-center mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-center">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}