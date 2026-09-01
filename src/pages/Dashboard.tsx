import React from 'react';
import { useApp } from '../context/AppContext';
import { Play, Lock, User } from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const { user, openPaymentModal, openVideoModal, openAuthModal, t } = useApp();

  if (!user.isLoggedIn) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <User className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-stone-900">Please Login to Access Your Dashboard</h2>
        <p className="text-stone-600 text-sm">Log in with your registered mobile number to view active subscriptions and session recordings.</p>
        <button
          onClick={openAuthModal}
          className="px-8 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition"
        >
          Login / Register
        </button>
      </div>
    );
  }

  const recordings = [
    { day: 1, title: "Awakening the Mind & Breath Orientation", duration: "48 mins", desc: "Foundational breath awareness (Pranayama) and internal stillness." },
    { day: 2, title: "Inner Silence (Mauna) & Body Scan", duration: "52 mins", desc: "Cultivating body-mind observation and overcoming mental chatter." },
    { day: 3, title: "Chakra Balance & Subtle Energy Awareness", duration: "45 mins", desc: "Understanding energy centers and balancing vital prana." },
    { day: 4, title: "Mantra Japa & Sound Frequency Meditation", duration: "50 mins", desc: "Using sacred sound vibrations for mental focus and emotional release." },
    { day: 5, title: "Emotional Cleansing & Forgiveness Practice", duration: "55 mins", desc: "Releasing subconscious tension and past emotional blockages." },
    { day: 6, title: "Expanding Pure Awareness (Sakshi Bhava)", duration: "47 mins", desc: "Practicing detached witness consciousness during daily life." },
    { day: 7, title: "Heart Center Opening (Anahata Dhyana)", duration: "51 mins", desc: "Cultivating unconditional compassion, love, and divine connection." },
    { day: 8, title: "Third Eye Clarity & Intuition Meditation", duration: "49 mins", desc: "Refining subtle perception, focus, and inner guidance." },
    { day: 9, title: "Self-Inquiry (Atma Vichara) Immersion", duration: "54 mins", desc: "Deep meditation on 'Who Am I?' and abiding in effortless presence." },
    { day: 10, title: "Integration of Wisdom into Modern Living", duration: "50 mins", desc: "Applying spiritual clarity in work, relationships, and daily challenges." },
    { day: 11, title: "Final Blessing, Samprokshana & Culmination", duration: "60 mins", desc: "Grand interactive culmination, Q&A, and personal practice roadmaps." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Welcome Banner & Active Plan Status */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-200 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              {t.dashboard.welcome}
            </span>
            <h1 className="font-serif text-3xl font-bold text-stone-900">
              {user.name}
            </h1>
            <p className="text-xs text-stone-500 font-mono">Mobile: +91 {user.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('profile')}
              className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition"
            >
              Account Settings
            </button>
          </div>
        </div>

        {/* Active Plan Card */}
        <div className={`p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
          user.subscription.hasActivePlan
            ? 'bg-gradient-to-r from-amber-500/10 via-amber-100/50 to-orange-500/10 border-amber-300'
            : 'bg-stone-100 border-stone-200'
        }`}>
          <div className="space-y-1">
            <span className="text-xs text-stone-500 uppercase font-semibold">{t.dashboard.activePlan}</span>
            <h3 className="font-serif font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>{user.subscription.planName}</span>
              {user.subscription.hasActivePlan ? (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] uppercase font-bold tracking-wider">
                  Active
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[10px] uppercase font-bold tracking-wider">
                  Inactive
                </span>
              )}
            </h3>
            <p className="text-xs text-stone-600 font-medium">
              {t.dashboard.validUntil}: <strong className="text-stone-900">{user.subscription.validUntil}</strong>
            </p>
          </div>

          {user.subscription.hasActivePlan ? (
            <button
              onClick={() => {
                const firstUnlocked = recordings.find(r => user.subscription.unlockedDays.includes(r.day));
                if (firstUnlocked) openVideoModal(firstUnlocked);
              }}
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{t.dashboard.continueLearning}</span>
            </button>
          ) : (
            <button
              onClick={() => openPaymentModal({ id: '11-day', name: "11-Day Spiritual Session Plan", price: 599, type: 'plan' })}
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition"
            >
              Purchase Subscription Plan
            </button>
          )}
        </div>
      </div>

      {/* My Recordings Matrix */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">{t.dashboard.myRecordings}</h2>
            <p className="text-xs text-stone-500">{t.dashboard.expiryInfo} September 30, 2026</p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
            {user.subscription.unlockedDays.length} / 11 Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recordings.map((rec) => {
            const isUnlocked = user.subscription.unlockedDays.includes(rec.day);

            return (
              <div
                key={rec.day}
                className={`p-5 rounded-2xl border transition-all ${
                  isUnlocked
                    ? 'bg-white border-amber-200 shadow-xs hover:shadow-md hover:border-amber-400'
                    : 'bg-stone-50 border-stone-200 opacity-80'
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="space-y-1">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase ${
                      isUnlocked ? 'bg-amber-100 text-amber-900' : 'bg-stone-200 text-stone-600'
                    }`}>
                      Day {rec.day}
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-base">{rec.title}</h4>
                    <p className="text-xs text-stone-600 leading-snug">{rec.desc}</p>
                    <span className="text-[11px] text-stone-400 font-mono block pt-1">Duration: {rec.duration}</span>
                  </div>

                  <div className="shrink-0 pt-1">
                    {isUnlocked ? (
                      <button
                        onClick={() => openVideoModal({ day: rec.day, title: rec.title, duration: rec.duration, desc: rec.desc })}
                        className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Watch</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveTab('plans')}
                        className="px-3.5 py-2 rounded-xl bg-stone-200 hover:bg-amber-100 text-stone-700 hover:text-amber-900 font-semibold text-xs transition flex items-center gap-1 border border-stone-300"
                        title="Plan required to unlock"
                      >
                        <Lock className="w-3.5 h-3.5 text-amber-700" />
                        <span>Locked</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
