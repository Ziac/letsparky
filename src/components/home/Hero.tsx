import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import VideoBackground from '../video/VideoBackground';
import GlowingOrbs from '../effects/GlowingOrbs';
import ParticleField from '../effects/ParticleField';
import NeonText from '../common/NeonText';
import CyberButton from '../common/CyberButton';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <VideoBackground />
      <GlowingOrbs />
      <ParticleField />

      <Container className="relative z-20 pt-32 pb-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/20 animate-float">
            <Shield className="text-orange-500" size={20} />
            <NeonText color="orange">{t('hero.smartBarrier')}</NeonText>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <NeonText color="orange" className="leading-tight">
              {t('hero.title')}
            </NeonText>
            <span className="block text-white mt-2 animate-float" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-6 justify-center animate-float" style={{ animationDelay: '0.6s' }}>
            <CyberButton
              variant="primary"
              onClick={onGetStarted}
              className="group backdrop-blur-sm"
            >
              <span className="flex items-center">
                {t('common.getStarted')}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </CyberButton>
            <CyberButton
              variant="secondary"
              className="backdrop-blur-sm"
            >
              {t('hero.watchDemo')}
            </CyberButton>
          </div>
        </div>
      </Container>
    </div>
  );
}