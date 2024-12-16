import React from 'react';
import { Shield, Cpu, Cloud, Settings, Activity, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Shield className="text-orange-500" size={32} />,
      title: t('features.smartAuth.title'),
      description: t('features.smartAuth.description')
    },
    {
      icon: <Cpu className="text-blue-500" size={32} />,
      title: t('features.iotIntegration.title'),
      description: t('features.iotIntegration.description')
    },
    {
      icon: <Cloud className="text-purple-500" size={32} />,
      title: t('features.cloudManagement.title'),
      description: t('features.cloudManagement.description')
    },
    {
      icon: <Settings className="text-green-500" size={32} />,
      title: t('features.automatedControl.title'),
      description: t('features.automatedControl.description')
    },
    {
      icon: <Activity className="text-red-500" size={32} />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: <Lock className="text-yellow-500" size={32} />,
      title: t('features.security.title'),
      description: t('features.security.description')
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
            {t('features.title')}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-900/50 border border-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}