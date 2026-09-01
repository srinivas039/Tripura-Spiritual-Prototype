import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Globe, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { t, language, setLanguage } = useApp();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-xl">
                🪷
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-white">
                {t.nav.brand}
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>tripuraspiritual.com</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-white font-semibold text-base mb-4 tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['home', 'about', 'sessions', 'demo', 'plans', 'onetoone'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => { setActiveTab(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {t.nav[item as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div>
            <h4 className="font-serif text-white font-semibold text-base mb-4 tracking-wider">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Tripura Spiritual Privacy Policy: All demo data remains local to your browser session."); }} className="hover:text-amber-400 transition">{t.footer.privacy}</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); alert("Tripura Spiritual Terms & Conditions: Prototype evaluation license."); }} className="hover:text-amber-400 transition">{t.footer.terms}</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); alert("Contact Support: support@tripuraspiritual.com"); }} className="hover:text-amber-400 transition">{t.footer.contact}</a></li>
              <li>
                <button onClick={() => { setActiveTab('admin'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-amber-400 hover:underline flex items-center gap-1 mt-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{t.nav.admin}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Language & Disclaimer */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-semibold text-base mb-2 tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Language / భాష</span>
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold border transition ${
                  language === 'en'
                    ? 'bg-amber-600 border-amber-500 text-white'
                    : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('te')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold border transition ${
                  language === 'te'
                    ? 'bg-amber-600 border-amber-500 text-white'
                    : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
                }`}
              >
                తెలుగు
              </button>
            </div>
            
            <div className="p-3 rounded-lg bg-stone-800/80 border border-stone-700/60 text-xs text-stone-400 space-y-1">
              <p className="font-semibold text-amber-400 uppercase tracking-wider text-[10px]">Client Demo Prototype</p>
              <p>Simulated state, payment gateways, and recording access for presentation purposes.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Tripura Spiritual (tripuraspiritual.com). All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Spiritual Awakening
          </p>
        </div>
      </div>
    </footer>
  );
};
