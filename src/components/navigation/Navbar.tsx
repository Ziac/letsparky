import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import LanguageSelector from '../common/LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-orange-500/20">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="text-orange-500" size={24} />
            <span className="text-orange-500 font-bold text-xl">Let's Parky</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['features', 'solutions', 'pricing', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                {t(`common.${item}`)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/login')}
            >
              {t('common.login')}
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => navigate('/get-started')}
            >
              {t('common.getStarted')}
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-orange-500" />
            ) : (
              <Menu className="text-orange-500" />
            )}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-black/95 p-4 border-t border-orange-500/20">
          <div className="flex flex-col space-y-4">
            {['features', 'solutions', 'pricing', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                {t(`common.${item}`)}
              </a>
            ))}
            <LanguageSelector />
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate('/login')}
            >
              {t('common.login')}
            </Button>
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => navigate('/get-started')}
            >
              {t('common.getStarted')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}