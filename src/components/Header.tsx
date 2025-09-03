import React from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Language, Translation } from '../types';

interface HeaderProps {
  onSearch: (query: string) => void;
  onAuthClick: (type: 'login' | 'register') => void;
  isAuthenticated: boolean;
  user: any;
  onLogout: () => void;
  searchQuery: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onclickNoti: () => void;
  t: Translation;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  onAuthClick,
  isAuthenticated,
  user,
  onLogout,
  searchQuery,
  mobileMenuOpen,
  setMobileMenuOpen,
  currentLanguage,
  onLanguageChange,
  onclickNoti,
  t
}) => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-700 tracking-tight">{t.blogVerse}</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Auth & Language */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {t.welcome}, {user?.name || 'User'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onAuthClick('login')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t.login}
                </button>
                <button
                  onClick={() => onAuthClick('register')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {t.signUp}
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden">
            {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between px-2">
                <LanguageSwitcher
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />
                  <button className="flex items-center justify-center w-9 h-9 bg-[#E2E2E2] rounded-full hover:bg-gray-300 transition" onClick={onclickNoti}>
                    <i className="bi bi-bell-fill text-black"></i>
                  </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder={t.searchPlaceholderMobile}
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              

              {/* Mobile Auth */}
              <div className="flex flex-col space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-2 px-2">
                      <User className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">{t.welcome}, {user?.name || 'User'}</span>
                    </div>
                    <button
                      onClick={onLogout}
                      className="text-left px-2 py-2 text-gray-700 hover:text-blue-600"
                    >
                      {t.logout}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onAuthClick('login')}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium mx-2 "
                    >
                      {t.login}
                    </button>
                    <button
                      onClick={() => onAuthClick('register')}
                      className="text-left px-2 py-2 text-gray-700 hover:text-blue-600"
                    >
                      {t.signUp}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;