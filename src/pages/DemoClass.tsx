import React from 'react';
import { useApp } from '../context/AppContext';
import { Play, CheckCircle2 } from 'lucide-react';

export const DemoClass: React.FC = () => {
  const { openPaymentModal, openVideoModal } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          Experience Before You Begin
        </span>
        <h1 className="font-serif text-4xl font-bold text-stone-900">
          Demo Spiritual Session
        </h1>
        <p className="text-stone-600 text-base">
          Watch a full sample spiritual class and experience our guided meditation, pranayama, and teaching methodology.
        </p>
      </div>

      {/* Main Video Demo Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-2xl space-y-8">
        
        <div className="relative aspect-video bg-stone-950 rounded-2xl overflow-hidden flex items-center justify-center border border-amber-500/30 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-950 via-stone-900 to-orange-950 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-4xl shadow-2xl shadow-amber-500/40 mb-4 animate-float">
              🪷
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Introduction to Inner Silence & Prana</h3>
            <p className="text-xs text-amber-200 font-mono mt-1">Duration: 45 Minutes • HD 1080p</p>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => openVideoModal({ day: 0, title: "Demo Class: Introduction to Inner Silence", duration: "45 mins", desc: "Sample introductory class introducing Tripura Spiritual guided meditation." })}
            className="z-10 px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-2xl flex items-center gap-3 transition transform hover:scale-105"
          >
            <Play className="w-6 h-6 fill-white" />
            <span>Watch Free Preview (10 Mins)</span>
          </button>
        </div>

        {/* Pricing & Full Purchase */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 bg-amber-50/80 rounded-2xl border border-amber-200">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Full Demo Access</span>
            <h4 className="font-serif font-bold text-stone-900 text-xl">Unlock Complete 45-Min Class</h4>
            <p className="text-xs text-stone-600">Includes downloadable practice summary sheet</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold font-sans text-stone-900">₹99</span>
            <button
              onClick={() => openPaymentModal({ id: 'demo-class', name: "Demo Spiritual Class Access", price: 99, type: 'demo' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-md transition"
            >
              Buy Demo Access (₹99)
            </button>
          </div>
        </div>

        {/* Features included */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-stone-700">
          <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl border border-amber-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Complete 45-Min Video Access</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl border border-amber-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>English & Telugu Audio Tracks</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl border border-amber-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>₹99 Credited towards Full Plan</span>
          </div>
        </div>

      </div>

    </div>
  );
};
