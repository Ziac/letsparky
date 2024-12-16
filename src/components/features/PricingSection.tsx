import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small parking lots",
      features: [
        "Up to 50 parking spots",
        "Basic IoT integration",
        "Real-time monitoring",
        "Email support",
        "Basic analytics"
      ]
    },
    {
      name: "Business",
      price: "$799",
      period: "per month",
      description: "Ideal for medium businesses",
      features: [
        "Up to 200 parking spots",
        "Advanced IoT features",
        "24/7 monitoring",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large scale operations",
      features: [
        "Unlimited parking spots",
        "Full IoT suite",
        "24/7 premium support",
        "Custom development",
        "White-label solution",
        "API access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
            Simple Pricing
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
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-orange-500">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="text-orange-500 mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}