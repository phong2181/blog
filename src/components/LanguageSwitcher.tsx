import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
        <Globe className="w-4 h-4 text-gray-600" />
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-2 py-1 rounded text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'en'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('vi')}
          className={`px-2 py-1 rounded text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'vi'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          VI
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;