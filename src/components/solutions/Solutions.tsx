import React from 'react';
import Container from '../common/Container';
import BusinessSolutions from './BusinessSolutions';
import TechnicalSolutions from './TechnicalSolutions';
import IntegrationSolutions from './IntegrationSolutions';

export default function Solutions() {
  return (
    <section id="solutions" className="bg-black py-24">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
              Complete Solutions for EV Charging
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive smart barrier solutions designed to protect and optimize your EV charging infrastructure
          </p>
        </div>

        <div className="space-y-32">
          <BusinessSolutions />
          <TechnicalSolutions />
          <IntegrationSolutions />
        </div>
      </Container>
    </section>
  );
}