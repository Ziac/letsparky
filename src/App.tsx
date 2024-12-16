import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Hero from './components/home/Hero';
import StationMetrics from './components/home/StationMetrics';
import EVStationBenefits from './components/home/EVStationBenefits';
import Features from './components/features/Features';
import Solutions from './components/solutions/Solutions';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import LoginView from './components/auth/LoginView';
import GetStartedView from './components/auth/GetStartedView';
import './i18n';

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <StationMetrics />
      <EVStationBenefits />
      <Features />
      <Solutions />
      <Pricing />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/get-started" element={<GetStartedView />} />
      </Routes>
    </Router>
  );
}

export default App;