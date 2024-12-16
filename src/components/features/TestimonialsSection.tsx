import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "EV Fleet Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "SmartBarrier transformed our charging station management. The IoT integration is seamless and the analytics are invaluable."
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      company: "Future Parking Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "The most reliable parking barrier system we've implemented. The predictive maintenance feature has saved us countless hours."
    },
    {
      name: "Emma Davis",
      role: "Facility Manager",
      company: "GreenCharge Inc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "Outstanding security features and customer support. Our EV charging stations have never been more efficiently managed."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
            Trusted by Industry Leaders
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-orange-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}