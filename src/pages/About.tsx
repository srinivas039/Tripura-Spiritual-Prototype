import React from 'react';
import { Sparkles, Compass, ShieldCheck, Sun, BookOpen } from 'lucide-react';

export const About: React.FC = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fadeIn">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Our Vision & Philosophy</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
          About Tripura Spiritual
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
          Bridging ancient meditative wisdom with modern living to nurture clarity, inner peace, and spiritual awakening.
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-3xl border border-amber-200 shadow-md text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">1. Learn</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Gain authentic knowledge from structured daily sessions, guided literature, and clear spiritual principles in English & Telugu.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-amber-200 shadow-md text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
            <Sun className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">2. Practice</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Engage in daily pranayama, dhyana (meditation), and mindfulness techniques tailored to fit your daily schedule.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-amber-200 shadow-md text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
            <Compass className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">3. Transform</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Experience lasting mental stillness, emotional resilience, and a deeper connection with your true self.
          </p>
        </div>
      </div>

      {/* Detailed Philosophy & Why Choose */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-amber-200 shadow-xl space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Spiritual Foundation</span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">Why Tripura Spiritual?</h2>
          <p className="text-stone-700 text-base leading-relaxed">
            Tripura Spiritual was created to fulfill the need for authentic, accessible, and structured spiritual learning. We believe that true spiritual practice should be clear, practical, and non-sectarian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {[
            { title: "Bilingual Accessibility", desc: "Complete instruction and recordings available in both English and Telugu for genuine comprehension." },
            { title: "Flexible Recording Access", desc: "Never miss a day. Access HD session recordings at your own pace with subscription validity." },
            { title: "1-on-1 Personal Mentorship", desc: "Private sessions for individualized guidance, answering personal spiritual questions directly." },
            { title: "Peaceful Digital Sanctuary", desc: "Ad-free, calm interface with soothing ambient music designed to encourage contemplation." }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/80 border border-amber-100 shadow-xs space-y-1">
              <span className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>{item.title}</span>
              </span>
              <p className="text-stone-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
