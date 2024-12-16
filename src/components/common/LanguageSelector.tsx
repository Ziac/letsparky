import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import Button from './Button';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2"
    >
      <Globe size={16} />
      <span>{i18n.language.toUpperCase()}</span>
    </Button>
  );
}