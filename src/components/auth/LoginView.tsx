import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import Button from '../common/Button';

export default function LoginView() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      <Container className="max-w-md mx-auto">
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-orange-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
                {t('auth.welcomeBack')}
              </span>
            </h2>
            <p className="text-gray-400">{t('auth.signIn')}</p>
          </div>

          <form className="space-y-6">
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
              <label className="text-sm text-gray-400">{t('auth.password')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="password"
                  className="w-full bg-black/30 border border-orange-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  placeholder={t('auth.enterPassword')}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-600 text-orange-500 focus:ring-orange-500" />
                <span className="text-sm text-gray-400">{t('auth.rememberMe')}</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-400">{t('auth.forgotPassword')}</a>
            </div>

            <Button variant="primary" className="w-full group">
              {t('auth.signIn')}
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            {t('auth.noAccount')}{' '}
            <a href="#" className="text-orange-500 hover:text-orange-400">{t('common.getStarted')}</a>
          </div>
        </div>
      </Container>
    </div>
  );
}