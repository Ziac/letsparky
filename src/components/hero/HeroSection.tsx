import React from 'react';
import { Shield, Cpu, ChevronRight } from 'lucide-react';
import HeroStats from './HeroStats';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-orange-500 rounded-full blur opacity-30 animate-pulse" />
            <div className="relative flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
              <Shield className="text-orange-500" size={24} />
              <Cpu className="text-orange-400" size={24} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
              Next-Gen Parking
            </span>
            <span className="block text-4xl md:text-6xl mt-2 text-white">
              For The Future
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl">
            Revolutionary smart barrier system with integrated IoT capabilities.
            Designed for the modern electric vehicle ecosystem.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25">
              Get Started
              <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-orange-500/20 text-orange-500 hover:bg-orange-500/10 rounded-xl font-semibold backdrop-blur-sm transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <HeroStats />
      </div>
    </div>
  );
}