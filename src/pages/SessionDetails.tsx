import React from 'react';
import { useApp } from '../context/AppContext';
import { Lock, Play, Calendar, CheckCircle2 } from 'lucide-react';

interface SessionDetailsProps {
  setActiveTab: (tab: string) => void;
}

export const SessionDetails: React.FC<SessionDetailsProps> = ({ setActiveTab }) => {
  const { user, openPaymentModal, openVideoModal } = useApp();

  const daysSchedule = [
    { day: 1, title: "Awakening the Mind & Breath Orientation", duration: "48 mins", desc: "Foundational breath awareness (Pranayama) and establishing daily internal stillness." },
    { day: 2, title: "Inner Silence (Mauna) & Body Scan", duration: "52 mins", desc: "Cultivating body-mind observation and overcoming mental chatter." },
    { day: 3, title: "Chakra Balance & Subtle Energy Awareness", duration: "45 mins", desc: "Understanding energy centers and balancing vital prana." },
    { day: 4, title: "Mantra Japa & Sound Frequency Meditation", duration: "50 mins", desc: "Using sacred sound vibrations for mental focus and emotional release." },
    { day: 5, title: "Emotional Cleansing & Forgiveness Practice", duration: "55 mins", desc: "Releasing subconscious tension and past emotional blockages." },
    { day: 6, title: "Expanding Pure Awareness (Sakshi Bhava)", duration: "47 mins", desc: "Practicing detached witness consciousness during daily life activities." },
    { day: 7, title: "Heart Center Opening (Anahata Dhyana)", duration: "51 mins", desc: "Cultivating unconditional compassion, love, and divine connection." },
    { day: 8, title: "Third Eye Clarity & Intuition Meditation", duration: "49 mins", desc: "Refining subtle perception, focus, and inner guidance." },
    { day: 9, title: "Self-Inquiry (Atma Vichara) Immersion", duration: "54 mins", desc: "Deep meditation on 'Who Am I?' and abiding in effortless presence." },
    { day: 10, title: "Integration of Wisdom into Modern Living", duration: "50 mins", desc: "Applying spiritual clarity in work, relationships, and daily challenges." },
    { day: 11, title: "Final Blessing, Samprokshana & Culmination", duration: "60 mins", desc: "Grand interactive culmination, Q&A, and personal practice roadmaps." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header Info */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-200 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              ● Live Immersion Program
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              September 11-Day Spiritual Intensive Session
            </h1>
            <p className="text-stone-600 text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>September 1 – September 11 • Available in English & తెలుగు</span>
            </p>
          </div>

          <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-center space-y-2 min-w-[200px]">
            <span className="text-xs text-stone-500 uppercase font-semibold">11-Day Access Plan</span>
            <div className="text-3xl font-bold font-sans text-stone-900">₹599</div>
            <button
              onClick={() => openPaymentModal({ id: '11-day', name: "11-Day Spiritual Session Plan", price: 599, type: 'plan' })}
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Benefits bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-amber-200/60 text-xs font-medium text-stone-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Daily 6:30 AM Live Practice Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>24/7 Full HD Recording Access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>30-Day Validity Post Completion</span>
          </div>
        </div>
      </div>

      {/* Daily Schedule & Recording Access Matrix */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Session Curriculum & Recordings</h2>
            <p className="text-xs text-stone-500">Day 1 to Day 11 Guided Lessons</p>
          </div>
          {!user.subscription.hasActivePlan && (
            <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
              🔒 Lock State Active (Purchase Plan to Unlock All)
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {daysSchedule.map((item) => {
            const isUnlocked = user.subscription.unlockedDays.includes(item.day);

            return (
              <div
                key={item.day}
                className={`p-5 rounded-2xl border transition-all ${
                  isUnlocked
                    ? 'bg-white border-amber-200 shadow-xs hover:border-amber-400'
                    : 'bg-stone-50/80 border-stone-200 opacity-90'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-start gap-4">
                    <span className={`w-10 h-10 rounded-full font-serif font-bold text-sm flex items-center justify-center shrink-0 ${
                      isUnlocked ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-stone-200 text-stone-600'
                    }`}>
                      D{item.day}
                    </span>

                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                        <span>{item.title}</span>
                        {!isUnlocked && (
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <Lock className="w-3 h-3" /> Locked
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-stone-600 max-w-2xl">{item.desc}</p>
                      <span className="text-[11px] text-stone-400 font-mono">Duration: {item.duration}</span>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto text-right">
                    {isUnlocked ? (
                      <button
                        onClick={() => openVideoModal({ day: item.day, title: item.title, duration: item.duration, desc: item.desc })}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Watch Recording</span>
                      </button>
                    ) : (
                      <div className="space-y-1">
                        <button
                          onClick={() => setActiveTab('plans')}
                          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-stone-200 hover:bg-amber-100 text-stone-700 hover:text-amber-900 font-semibold text-xs transition flex items-center justify-center gap-1.5 border border-stone-300"
                        >
                          <Lock className="w-3.5 h-3.5 text-amber-700" />
                          <span>View Plans to Unlock</span>
                        </button>
                      </div>
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
