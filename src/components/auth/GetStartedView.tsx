import React from 'react';
import { Mail, User, Building2, Phone, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Button from '../common/Button';

export default function GetStartedView() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Container className="max-w-4xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
                {t('auth.startJourney')}
              </span>
            </h2>
            <p className="text-gray-400 mb-8">
              {t('hero.description')}
            </p>

            <div className="space-y-6 bg-gray-900/50 p-6 rounded-xl border border-orange-500/20">
              {[
                {
                  title: t('features.smartAuth.title'),
                  description: t('features.smartAuth.description')
                },
                {
                  title: t('features.iotIntegration.title'),
                  description: t('features.iotIntegration.description')
                },
                {
                  title: t('features.analytics.title'),
                  description: t('features.analytics.description')
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-6 text-white">{t('auth.createAccount')}</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">{t('auth.fullName')}</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-orange-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    placeholder={t('auth.enterName')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">{t('auth.companyName')}</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-orange-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    placeholder={t('auth.enterCompany')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">{t('auth.email')}</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      className="w-full bg-black/30 border border-orange-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                      placeholder={t('auth.enterEmail')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">{t('auth.phone')}</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="tel"
                      className="w-full bg-black/30 border border-orange-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                      placeholder={t('auth.enterPhone')}
                    />
                  </div>
                </div>
              </div>

              <Button variant="primary" className="w-full group">
                {t('common.getStarted')}
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              {t('auth.haveAccount')}{' '}
              <a href="#" className="text-orange-500 hover:text-orange-400">{t('auth.signIn')}</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}