import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
            Get in Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <Mail />, text: "contact@letsparky.com" },
                { icon: <Phone />, text: "+1 (555) 123-4567" },
                { icon: <MapPin />, text: "123 Innovation Drive, Tech City" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 text-gray-400">
                  <div className="text-orange-500">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-900 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-900 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-900 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-gray-900 border border-orange-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
            <Button variant="primary" className="w-full">Send Message</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}