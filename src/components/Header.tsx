import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MusicControl } from './MusicControl';
import { Menu, X, User, Shield } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t, user, openAuthModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#E6E0D2] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Matching reference image "T R I P U R A ." */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.25em] text-[#2C2421] group-hover:text-[#8B5E34] transition">
              TRIPURA
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#D1A559] ml-1">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition ${
                activeTab === 'home' ? 'text-[#8B5E34] border-b-2 border-[#8B5E34] pb-1' : 'text-[#5C534E] hover:text-[#2C2421]'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              onClick={() => handleNavClick('sessions')}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition ${
                activeTab === 'sessions' ? 'text-[#8B5E34] border-b-2 border-[#8B5E34] pb-1' : 'text-[#5C534E] hover:text-[#2C2421]'
              }`}
            >
              {t.nav.sessions}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition ${
                activeTab === 'about' ? 'text-[#8B5E34] border-b-2 border-[#8B5E34] pb-1' : 'text-[#5C534E] hover:text-[#2C2421]'
              }`}
            >
              {t.nav.about}
            </button>

            <button
              onClick={() => handleNavClick('plans')}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition ${
                activeTab === 'plans' ? 'text-[#8B5E34] border-b-2 border-[#8B5E34] pb-1' : 'text-[#5C534E] hover:text-[#2C2421]'
              }`}
            >
              {t.nav.plans}
            </button>

            <button
              onClick={() => handleNavClick('onetoone')}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition ${
                activeTab === 'onetoone' ? 'text-[#8B5E34] border-b-2 border-[#8B5E34] pb-1' : 'text-[#5C534E] hover:text-[#2C2421]'
              }`}
            >
              {t.nav.oneToOne}
            </button>
          </nav>

          {/* Right Header Controls */}
          <div className="hidden sm:flex items-center gap-5">
            
            {/* Simple Language Switcher EN | తెలుగు */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#5C534E]">
              <button
                onClick={() => setLanguage('en')}
                className={`transition ${language === 'en' ? 'text-[#2C2421] font-bold underline underline-offset-4' : 'hover:text-[#2C2421]'}`}
              >
                EN
              </button>
              <span className="text-[#B5ACA3]">|</span>
              <button
                onClick={() => setLanguage('te')}
                className={`transition ${language === 'te' ? 'text-[#2C2421] font-bold underline underline-offset-4' : 'hover:text-[#2C2421]'}`}
              >
                తెలుగు
              </button>
            </div>

            {/* Ambient Music Toggle Button ♪ AMBIENT */}
            <MusicControl />

            {/* Admin link */}
            <button
              onClick={() => handleNavClick('admin')}
              className="text-[#7A7067] hover:text-[#2C2421] p-1.5 rounded-full transition"
              title="Admin Portal"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* LOGIN / DASHBOARD Button - Matching reference purple button `#3B234A` */}
            {user.isLoggedIn ? (
              <button
                onClick={() => handleNavClick('dashboard')}
                className="px-6 py-2.5 rounded-full bg-[#3B234A] hover:bg-[#2C1838] text-white font-semibold text-xs tracking-[0.15em] uppercase shadow-sm transition flex items-center gap-2"
              >
                <User className="w-3.5 h-3.5" />
                <span>{user.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={openAuthModal}
                className="px-7 py-2.5 rounded-full bg-[#3B234A] hover:bg-[#2C1838] text-white font-semibold text-xs tracking-[0.15em] uppercase shadow-sm transition"
              >
                {t.nav.login}
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-3">
            <MusicControl />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2C2421] hover:bg-[#EFE9DD] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F8F5EE] border-b border-[#E6E0D2] px-6 pt-4 pb-6 space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center pb-3 border-b border-[#E6E0D2]">
            <span className="text-xs font-semibold text-[#7A7067] uppercase tracking-wider">Language</span>
            <div className="flex gap-3 text-xs font-semibold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full ${language === 'en' ? 'bg-[#3B234A] text-white' : 'text-[#5C534E]'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 rounded-full ${language === 'te' ? 'bg-[#3B234A] text-white' : 'text-[#5C534E]'}`}
              >
                తెలుగు
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {['home', 'sessions', 'about', 'plans', 'onetoone', 'admin'].map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition ${
                  activeTab === id ? 'bg-[#EFE9DD] text-[#3B234A]' : 'text-[#2C2421]'
                }`}
              >
                {t.nav[id as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          <div className="pt-2">
            {user.isLoggedIn ? (
              <button
                onClick={() => handleNavClick('dashboard')}
                className="w-full py-3 rounded-full bg-[#3B234A] text-white font-bold text-xs tracking-widest uppercase text-center"
              >
                {t.nav.dashboard} ({user.name})
              </button>
            ) : (
              <button
                onClick={() => { openAuthModal(); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-full bg-[#3B234A] text-white font-bold text-xs tracking-widest uppercase text-center"
              >
                {t.nav.login}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
