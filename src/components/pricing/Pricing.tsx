import React from 'react';
import { Check } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      period: "/month",
      features: [
        "Up to 10 barriers",
        "Basic IoT monitoring",
        "Email support",
        "Standard analytics",
        "Cloud storage"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      popular: true,
      features: [
        "Up to 50 barriers",
        "Advanced IoT features",
        "24/7 phone support",
        "Advanced analytics",
        "Priority maintenance",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited barriers",
        "Full IoT suite",
        "Dedicated support",
        "Custom development",
        "White-label options",
        "API access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
            Simple, Transparent Pricing
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/20'
                  : 'bg-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-2xl font-bold text-white mb-2">{plan.name}</div>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-orange-500">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="text-orange-500 mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}