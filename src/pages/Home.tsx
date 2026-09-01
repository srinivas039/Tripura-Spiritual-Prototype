import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Calendar, Video, Clock, ChevronRight, CheckCircle2, Star, Heart, Award, ArrowRight } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const { t, openPaymentModal } = useApp();

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 spiritual-gradient-hero border-b border-amber-100/60">
        
        {/* Soft Glowing Aura Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-300/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                <span>TRIPURA SPIRITUAL • A CONSCIOUS PLATFORM</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight tracking-tight">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('sessions')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-base shadow-xl shadow-amber-600/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>{t.hero.exploreSessions}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setActiveTab('demo')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 hover:bg-white text-stone-800 hover:text-amber-800 font-semibold text-base border border-amber-200 shadow-md transition flex items-center justify-center gap-2"
                >
                  <Video className="w-5 h-5 text-amber-600" />
                  <span>{t.hero.watchDemo} (₹99)</span>
                </button>
              </div>

              {/* Feature Highlights Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-left">
                {[
                  { text: t.hero.liveSessions, icon: Calendar },
                  { text: t.hero.recordedClasses, icon: Video },
                  { text: t.hero.flexibleLearning, icon: Clock },
                  { text: t.hero.personalGuidance, icon: Heart }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-amber-200/60 shadow-xs flex flex-col gap-1.5">
                    <item.icon className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-medium text-stone-800 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Artwork */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-amber-400 via-orange-300 to-amber-100 p-2 shadow-2xl animate-float">
                <div className="w-full h-full rounded-full bg-amber-50/90 backdrop-blur-md flex flex-col items-center justify-center p-6 border-4 border-white/80 text-center relative overflow-hidden mandala-bg">
                  <span className="text-7xl sm:text-8xl mb-3 animate-glow">🪷</span>
                  <h3 className="font-serif font-bold text-xl text-stone-900 tracking-wider">
                    TRIPURA SPIRITUAL
                  </h3>
                  <p className="text-xs text-amber-800 font-medium mt-1">
                    English & Telugu Guided Immersion
                  </p>
                  <span className="absolute bottom-4 px-3 py-1 bg-amber-600 text-white text-[10px] font-bold uppercase rounded-full tracking-widest shadow-xs">
                    Live Platform Demo
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-spiritual relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                {t.aboutSection.motto}
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                {t.aboutSection.title}
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                {t.aboutSection.desc}
              </p>
              <button
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center gap-2 font-semibold text-amber-700 hover:text-amber-800 text-sm group"
              >
                <span>{t.aboutSection.learnMore}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-amber-100/60 border border-amber-300/60 text-center space-y-2">
                <Award className="w-10 h-10 text-amber-700 mx-auto" />
                <span className="block font-serif font-bold text-lg text-stone-900">Authentic Lineage</span>
                <p className="text-xs text-stone-600">Rooted in classical wisdom tailored for modern practitioners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING SESSIONS HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Featured Session</span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">{t.upcomingSessions.title}</h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">{t.upcomingSessions.subtitle}</p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                ● {t.upcomingSessions.statusLive}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {t.upcomingSessions.session11Title}
              </h3>
              <p className="text-amber-800 font-semibold text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>{t.upcomingSessions.dates}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-stone-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.upcomingSessions.liveGuidance}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.upcomingSessions.recordingsIncluded}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.upcomingSessions.languages}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>30-Day Recording Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/90 p-6 rounded-2xl border border-amber-200 shadow-md text-center space-y-4">
              <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Special Immersion</span>
              <div className="text-3xl font-bold font-sans text-stone-900">
                ₹599 <span className="text-xs font-normal text-stone-500">/ 11 Days</span>
              </div>
              <button
                onClick={() => setActiveTab('session-details')}
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition"
              >
                {t.upcomingSessions.viewDetails}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEMO CLASS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                {t.demoSection.title}
              </span>
              <h3 className="font-serif text-3xl font-bold">{t.demoSection.demoClassTitle}</h3>
              <p className="text-stone-300 text-sm leading-relaxed">{t.demoSection.subtitle}</p>
              <div className="flex items-center gap-4 text-xs text-amber-300 font-mono">
                <span>⏱ {t.demoSection.duration}</span>
                <span>•</span>
                <span>🏷 Demo Price: {t.demoSection.price}</span>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => setActiveTab('demo')}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-lg transition"
              >
                {t.demoSection.watchPreview}
              </button>
              <button
                onClick={() => openPaymentModal({ id: 'demo-class', name: t.demoSection.demoClassTitle, price: 99, type: 'demo' })}
                className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition"
              >
                {t.demoSection.buyDemo}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Subscriptions</span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">{t.plansSection.title}</h2>
          </div>
          <button
            onClick={() => setActiveTab('plans')}
            className="text-amber-700 hover:text-amber-800 font-bold text-sm flex items-center gap-1"
          >
            <span>{t.plansSection.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: 11-Day Plan */}
          <div className="glass-card rounded-3xl p-6 border border-amber-200 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Starter Immersion</span>
              <h3 className="font-serif text-xl font-bold text-stone-900">{t.plansSection.plan11.name}</h3>
              <div className="text-3xl font-bold text-stone-900 font-sans">{t.plansSection.plan11.price}</div>
              <ul className="space-y-2.5 text-xs text-stone-600">
                {t.plansSection.plan11.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openPaymentModal({ id: '11-day', name: t.plansSection.plan11.name, price: 599, type: 'plan' })}
              className="mt-6 w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition"
            >
              {t.plansSection.choosePlan}
            </button>
          </div>

          {/* Card 2: 21-Day Plan (Featured) */}
          <div className="glass-card rounded-3xl p-6 border-2 border-amber-500 shadow-xl relative flex flex-col justify-between bg-amber-50/40">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
              {t.plansSection.popular}
            </span>
            <div className="space-y-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Deep Practice</span>
              <h3 className="font-serif text-xl font-bold text-stone-900">{t.plansSection.plan21.name}</h3>
              <div className="text-3xl font-bold text-stone-900 font-sans">{t.plansSection.plan21.price}</div>
              <ul className="space-y-2.5 text-xs text-stone-700 font-medium">
                {t.plansSection.plan21.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openPaymentModal({ id: '21-day', name: t.plansSection.plan21.name, price: 999, type: 'plan' })}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-lg transition"
            >
              {t.plansSection.choosePlan}
            </button>
          </div>

          {/* Card 3: Recording Access Plan */}
          <div className="glass-card rounded-3xl p-6 border border-amber-200 shadow-md hover:shadow-xl transition flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">On-Demand Archive</span>
              <h3 className="font-serif text-xl font-bold text-stone-900">{t.plansSection.recordingPlan.name}</h3>
              <div className="text-3xl font-bold text-stone-900 font-sans">{t.plansSection.recordingPlan.price}</div>
              <ul className="space-y-2.5 text-xs text-stone-600">
                {t.plansSection.recordingPlan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openPaymentModal({ id: 'recording', name: t.plansSection.recordingPlan.name, price: 599, type: 'plan' })}
              className="mt-6 w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition"
            >
              {t.plansSection.choosePlan}
            </button>
          </div>

        </div>
      </section>

      {/* 6. ONE-TO-ONE GUIDANCE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Private Mentorship</span>
              <h3 className="font-serif text-3xl font-bold text-stone-900">{t.oneToOne.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{t.oneToOne.subtitle}</p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-stone-800">
                <span className="px-3 py-1.5 bg-amber-100/80 rounded-lg">30 Mins — ₹499</span>
                <span className="px-3 py-1.5 bg-amber-100/80 rounded-lg">60 Mins — ₹899</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <button
                onClick={() => setActiveTab('onetoone')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition"
              >
                {t.oneToOne.bookSession}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (SAMPLE DEMO CONTENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Seeker Experiences</span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">Transformative Stories</h2>
          <p className="text-stone-500 text-xs uppercase tracking-wider">(Sample Demonstration Testimonials)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sowmya Reddy",
              city: "Hyderabad",
              text: "The 11-day session brought profound stillness to my hectic work routine. Having recordings available in Telugu was deeply personal.",
              rating: 5
            },
            {
              name: "Rajesh Varma",
              city: "Bengaluru",
              text: "The structured daily meditation and recordings allowed me to practice whenever I found time. Truly authentic spiritual guidance.",
              rating: 5
            },
            {
              name: "Priyanka N.",
              city: "Visakhapatnam",
              text: "Booking a 1-on-1 session helped clarify many meditation questions I carried for years. Grateful for Tripura Spiritual.",
              rating: 5
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-amber-100 shadow-sm space-y-3">
              <div className="flex gap-1 text-amber-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 text-sm italic">"{item.text}"</p>
              <div className="pt-2 border-t border-amber-100">
                <span className="block font-serif font-bold text-stone-900 text-sm">{item.name}</span>
                <span className="text-xs text-stone-500">{item.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
