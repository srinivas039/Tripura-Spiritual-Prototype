import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MusicControl } from './MusicControl';
import { Menu, X, User, Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t, user, openAuthModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'sessions', label: t.nav.sessions },
    { id: 'demo', label: t.nav.demoClass },
    { id: 'plans', label: t.nav.plans },
    { id: 'onetoone', label: t.nav.oneToOne },
  ];

  if (user.isLoggedIn) {
    navItems.push({ id: 'dashboard', label: t.nav.dashboard });
  }

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel shadow-sm border-b border-amber-100/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-300 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-serif">🪷</span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-stone-900 group-hover:text-amber-700 transition">
                {t.nav.brand}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-600 font-semibold -mt-1">
                tripuraspiritual.com
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-amber-100/80 text-amber-900 font-semibold shadow-xs'
                    : 'text-stone-700 hover:text-amber-800 hover:bg-stone-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === 'admin'
                  ? 'bg-stone-900 text-amber-300'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300/80'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              <span>Admin</span>
            </button>
          </nav>

          {/* Right Header Widgets: Music, Language Switcher, User Auth */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Music */}
            <MusicControl />

            {/* Language Switcher */}
            <div className="flex items-center bg-stone-100/90 rounded-full p-1 border border-stone-200 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full font-semibold transition ${
                  language === 'en'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-2.5 py-1 rounded-full font-semibold transition ${
                  language === 'te'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                తెలుగు
              </button>
            </div>

            {/* User Account / Login Button */}
            {user.isLoggedIn ? (
              <button
                onClick={() => handleNavClick('dashboard')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium text-sm shadow-md shadow-amber-600/20 transition group"
              >
                <User className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
                <span className="max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                {user.subscription.hasActivePlan && (
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                )}
              </button>
            ) : (
              <button
                onClick={openAuthModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm shadow-sm transition"
              >
                <User className="w-4 h-4" />
                <span>{t.nav.login}</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <MusicControl />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-amber-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-amber-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Language Switcher Mobile */}
          <div className="flex justify-between items-center pb-3 border-b border-amber-100">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Language</span>
            <div className="flex bg-stone-100 rounded-full p-1 border border-stone-200 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full font-semibold transition ${
                  language === 'en' ? 'bg-amber-600 text-white' : 'text-stone-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 rounded-full font-semibold transition ${
                  language === 'te' ? 'bg-amber-600 text-white' : 'text-stone-600'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>

          {/* Nav items mobile */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm transition ${
                  activeTab === item.id
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'text-stone-800 hover:bg-amber-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm bg-stone-900 text-amber-300 flex items-center justify-between"
            >
              <span>{t.nav.admin}</span>
              <Shield className="w-4 h-4" />
            </button>
          </div>

          {/* Auth Button Mobile */}
          <div className="pt-2">
            {user.isLoggedIn ? (
              <button
                onClick={() => handleNavClick('dashboard')}
                className="w-full py-3 rounded-xl bg-amber-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <User className="w-4 h-4" />
                <span>{t.nav.dashboard} ({user.name})</span>
              </button>
            ) : (
              <button
                onClick={() => { openAuthModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-xl bg-amber-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <User className="w-4 h-4" />
                <span>{t.nav.login}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
