import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar } from 'lucide-react';

interface SessionsProps {
  setActiveTab: (tab: string) => void;
}

export const Sessions: React.FC<SessionsProps> = ({ setActiveTab }) => {
  const { t, openPaymentModal } = useApp();

  const sessionsList = [
    {
      id: '11-day-september',
      title: "September 11-Day Spiritual Session",
      dates: "September 1 – September 11",
      status: "Live Session",
      desc: "Our signature immersion program covering foundational breathwork, mantra chanting, chakra alignment, and inner silence.",
      days: 11,
      price: 599,
      languages: "English & Telugu",
      planId: '11-day'
    },
    {
      id: '21-day-october',
      title: "21-Day Advanced Consciousness Practice",
      dates: "October 1 – October 21",
      status: "Upcoming Session",
      desc: "An extended deep-dive for practitioners seeking higher meditative states, daily discipline, and personalized guidance.",
      days: 21,
      price: 999,
      languages: "English & Telugu",
      planId: '21-day'
    },
    {
      id: 'demo-intro',
      title: "Demo Spiritual Introductory Class",
      dates: "Available On-Demand",
      status: "Instant Access",
      desc: "A 45-minute comprehensive introduction to experience the teaching style, meditation techniques, and audio quality.",
      days: 1,
      price: 99,
      languages: "English & Telugu",
      planId: 'demo-class'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Guided Immersions</span>
        <h1 className="font-serif text-4xl font-bold text-stone-900">{t.nav.sessions}</h1>
        <p className="text-stone-600 text-sm">
          Explore upcoming live spiritual sessions and access complete recording archives.
        </p>
      </div>

      {/* Sessions Grid */}
      <div className="space-y-6">
        {sessionsList.map((session) => (
          <div key={session.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-md hover:shadow-lg transition">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    ● {session.status}
                  </span>
                  <span className="text-xs text-amber-800 font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{session.dates}</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-900">{session.title}</h3>
                <p className="text-stone-600 text-sm">{session.desc}</p>

                <div className="flex flex-wrap gap-4 text-xs text-stone-500 font-medium pt-1">
                  <span>⏱ {session.days} Days Intensive</span>
                  <span>•</span>
                  <span>🌐 {session.languages}</span>
                  <span>•</span>
                  <span>📹 HD Recordings Included</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center text-right">
                <div className="text-left lg:text-right">
                  <span className="text-xs text-stone-500 block">Immersion Fee</span>
                  <span className="text-2xl font-bold font-sans text-amber-700">₹{session.price}</span>
                </div>

                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => setActiveTab('session-details')}
                    className="flex-1 py-3 rounded-xl bg-white hover:bg-stone-50 border border-amber-300 text-amber-900 font-bold text-xs shadow-xs transition text-center"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => openPaymentModal({ id: session.planId, name: session.title, price: session.price, type: 'plan' })}
                    className="flex-1 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition text-center"
                  >
                    Join Session
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
