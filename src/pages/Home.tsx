import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, ChevronRight, CheckCircle2, ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const { t, openPaymentModal } = useApp();

  return (
    <div className="space-y-20 pb-20 bg-[#FAF7F0] text-[#2C2421]">
      
      {/* HERO SECTION — Matching reference screenshot exactly */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-stone-900">
        
        {/* Background Landscape Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-scale duration-1000 scale-105"
          style={{ backgroundImage: `url('/hero.jpg')` }}
        >
          {/* Subtle Warm Overlay for Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30"></div>
        </div>

        {/* Right Faint Sacred Geometric Mandala Overlay */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] opacity-25 pointer-events-none text-amber-200">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="30" />
            <path d="M100 10 L100 190 M10 100 L190 100" />
            <path d="M36 36 L164 164 M36 164 L164 36" />
            <ellipse cx="100" cy="100" rx="90" ry="40" />
            <ellipse cx="100" cy="100" rx="40" ry="90" />
          </svg>
        </div>

        {/* Hero Main Content Box */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-stone-200">
              {t.hero.tagline}
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
              {t.hero.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons — Matching golden tan & outline pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('sessions')}
                className="px-8 py-4 rounded-full bg-[#D1A559] hover:bg-[#C29548] text-[#201812] font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase shadow-lg transition transform hover:scale-102 flex items-center justify-center gap-2"
              >
                <span>{t.hero.exploreSessions}</span>
              </button>

              <button
                onClick={() => setActiveTab('demo')}
                className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase border border-white/80 transition flex items-center justify-center gap-2"
              >
                <span>{t.hero.watchDemo}</span>
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* 2. ABOUT TRIPURA SPIRITUAL - Simple, Peaceful, Large Text for Senior Seekers */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-[#FAF7F0] rounded-3xl p-8 sm:p-14 border border-[#E6E0D2] shadow-xs text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E34]">
            {t.aboutSection.motto}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2421]">
            {t.aboutSection.title}
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
            {t.aboutSection.desc}
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('about')}
              className="inline-flex items-center gap-2 font-semibold text-xs tracking-[0.15em] uppercase text-[#8B5E34] hover:text-[#5C3D1E] group"
            >
              <span>{t.aboutSection.learnMore}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. FEATURED UPCOMING SESSION */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E34]">
            Featured Immersion
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#2C2421]">
            {t.upcomingSessions.title}
          </h2>
          <p className="text-stone-600 text-sm">{t.upcomingSessions.subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E0D2] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F3EDE0] text-[#8B5E34] text-xs font-semibold tracking-wider uppercase">
                {t.upcomingSessions.statusLive}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C2421]">
                {t.upcomingSessions.session11Title}
              </h3>
              <p className="text-[#8B5E34] font-medium text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{t.upcomingSessions.dates}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-stone-700 text-sm font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t.upcomingSessions.liveGuidance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t.upcomingSessions.recordingsIncluded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t.upcomingSessions.languages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>30-Day Recording Access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6E0D2] text-center space-y-4">
              <span className="text-xs text-[#7A7067] uppercase tracking-wider font-semibold">11-Day Plan</span>
              <div className="text-3xl font-serif text-[#2C2421]">
                ₹599 <span className="text-xs font-sans text-stone-500">/ 11 Days</span>
              </div>
              <button
                onClick={() => setActiveTab('session-details')}
                className="w-full py-3.5 rounded-full bg-[#3B234A] hover:bg-[#2C1838] text-white font-semibold text-xs tracking-[0.15em] uppercase shadow-sm transition"
              >
                {t.upcomingSessions.viewDetails}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DEMO CLASS */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-[#3B234A] text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold tracking-widest uppercase">
                {t.demoSection.title}
              </span>
              <h3 className="font-serif text-3xl font-light">{t.demoSection.demoClassTitle}</h3>
              <p className="text-stone-200 text-sm font-light leading-relaxed">{t.demoSection.subtitle}</p>
              <div className="flex items-center gap-4 text-xs text-amber-200 font-mono pt-1">
                <span>⏱ {t.demoSection.duration}</span>
                <span>•</span>
                <span>Price: {t.demoSection.price}</span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => setActiveTab('demo')}
                className="w-full py-3.5 rounded-full bg-[#D1A559] hover:bg-[#C29548] text-[#201812] font-semibold text-xs tracking-widest uppercase shadow-md transition"
              >
                {t.demoSection.watchPreview}
              </button>
              <button
                onClick={() => openPaymentModal({ id: 'demo-class', name: t.demoSection.demoClassTitle, price: 99, type: 'demo' })}
                className="w-full py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs tracking-widest uppercase transition"
              >
                {t.demoSection.buyDemo}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANS PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E34]">Subscriptions</span>
            <h2 className="font-serif text-3xl font-normal text-[#2C2421]">{t.plansSection.title}</h2>
          </div>
          <button
            onClick={() => setActiveTab('plans')}
            className="text-[#8B5E34] hover:text-[#5C3D1E] font-semibold text-xs tracking-[0.15em] uppercase flex items-center gap-1"
          >
            <span>{t.plansSection.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E6E0D2] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5E34]">11 Days</span>
              <h3 className="font-serif text-xl font-normal text-[#2C2421]">{t.plansSection.plan11.name}</h3>
              <div className="text-3xl font-serif text-[#2C2421]">{t.plansSection.plan11.price}</div>
              <ul className="space-y-2.5 text-xs text-stone-600 font-light">
                {t.plansSection.plan11.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openPaymentModal({ id: '11-day', name: t.plansSection.plan11.name, price: 599, type: 'plan' })}
              className="mt-6 w-full py-3.5 rounded-full bg-[#3B234A] hover:bg-[#2C1838] text-white font-semibold text-xs tracking-widest uppercase transition"
            >
              {t.plansSection.choosePlan}
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF7F0] rounded-3xl p-8 border-2 border-[#D1A559] shadow-sm relative flex flex-col justify-between">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#D1A559] text-[#201812] text-[10px] font-bold uppercase tracking-widest">
              {t.plansSection.popular}
            </span>
            <div className="space-y-4 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5E34]">21 Days</span>
              <h3 className="font-serif text-xl font-normal text-[#2C2421]">{t.plansSection.plan21.name}</h3>
              <div className="text-3xl font-serif text-[#2C2421]">{t.plansSection.plan21.price}</div>
              <ul className="space-y-2.5 text-xs text-stone-700 font-light">
                {t.plansSection.plan21.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5E34] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openPaymentModal({ id: '21-day', name: t.plansSection.plan21.name, price: 999, type: 'plan' })}
              className="mt-6 w-full py-3.5 rounded-full bg-[#D1A559] hover:bg-[#C29548] text-[#201812] font-semibold text-xs tracking-widest uppercase transition"
            >
              {t.plansSection.choosePlan}
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E6E0D2] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5E34]">On-Demand</span>
              <h3 className="font-serif text-xl font-normal text-[#2C2421]">{t.plansSection.recordingPlan.name}</h3>
              <div className="text-3xl font-serif text-[#2C2421]">{t.plansSection.recordingPlan.price}</div>
              <ul className="space-y-2.5 text-xs text-stone-600 font-light">
                {t.plansSection.recordingPlan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openPaymentModal({ id: 'recording', name: t.plansSection.recordingPlan.name, price: 599, type: 'plan' })}
              className="mt-6 w-full py-3.5 rounded-full bg-[#3B234A] hover:bg-[#2C1838] text-white font-semibold text-xs tracking-widest uppercase transition"
            >
              {t.plansSection.choosePlan}
            </button>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E34]">Seeker Stories</span>
          <h2 className="font-serif text-3xl font-normal text-[#2C2421]">Voices of Peace</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sowmya R.",
              city: "Hyderabad",
              text: "The sessions brought deep calmness to my daily routine. The simple Telugu audio instructions made it very comfortable to follow."
            },
            {
              name: "Rajesh Varma",
              city: "Bengaluru",
              text: "Very clear and simple website. I can easily watch the daily video recordings at my own pace after work."
            },
            {
              name: "Priyanka N.",
              city: "Visakhapatnam",
              text: "Wonderful, peaceful platform. The 1-on-1 session helped me resolve many personal questions with real guidance."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E6E0D2] shadow-xs space-y-3">
              <div className="flex gap-1 text-[#D1A559]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D1A559]" />
                ))}
              </div>
              <p className="text-stone-700 text-sm font-light leading-relaxed italic">"{item.text}"</p>
              <div className="pt-2 border-t border-[#E6E0D2]">
                <span className="block font-serif text-[#2C2421] text-sm font-normal">{item.name}</span>
                <span className="text-xs text-stone-500">{item.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
