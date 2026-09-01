import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const OneToOne: React.FC = () => {
  const { openPaymentModal, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('spiritual');
  const [selectedDuration, setSelectedDuration] = useState<30 | 60>(30);
  const [preferredDate, setPreferredDate] = useState('2026-09-05');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');

  const categories = [
    { id: 'spiritual', label: t.oneToOne.categories.spiritual, desc: "Clarify spiritual philosophy, self-inquiry, and internal obstacles." },
    { id: 'meditation', label: t.oneToOne.categories.meditation, desc: "Personalized pranayama, posture alignment, and deep dhyana guidance." },
    { id: 'personal', label: t.oneToOne.categories.personal, desc: "Applying spiritual wisdom to family, career, and life transitions." },
    { id: 'special', label: t.oneToOne.categories.special, desc: "Intensive energy awakening, mantra initiation, and individualized practice." }
  ];

  const price = selectedDuration === 30 ? 499 : 899;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const catObj = categories.find(c => c.id === selectedCategory);
    openPaymentModal({
      id: `1on1-${selectedCategory}-${selectedDuration}`,
      name: `1-on-1 ${catObj?.label || 'Guidance'} (${selectedDuration} Mins)`,
      price,
      type: '1on1',
      details: `Scheduled for ${preferredDate} at ${preferredTime}`
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          Private Mentorship
        </span>
        <h1 className="font-serif text-4xl font-bold text-stone-900">{t.oneToOne.title}</h1>
        <p className="text-stone-600 text-sm">{t.oneToOne.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Category & Duration Selection Form */}
        <form onSubmit={handleBooking} className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-xl space-y-6">
          
          {/* Step 1: Category */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-800">
              1. Select Session Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-2xl border text-left transition ${
                    selectedCategory === cat.id
                      ? 'border-amber-500 bg-amber-50 text-amber-950 font-semibold shadow-xs'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span className="block text-sm font-serif font-bold text-stone-900 mb-1">{cat.label}</span>
                  <span className="text-xs text-stone-500 block leading-snug">{cat.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Duration */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-800">
              2. Choose Session Duration
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedDuration(30)}
                className={`p-4 rounded-2xl border text-center font-bold text-sm transition ${
                  selectedDuration === 30
                    ? 'border-amber-500 bg-amber-600 text-white shadow-md'
                    : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                }`}
              >
                <span>30 Minutes</span>
                <span className="block text-xs font-normal mt-1 opacity-90">₹499</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDuration(60)}
                className={`p-4 rounded-2xl border text-center font-bold text-sm transition ${
                  selectedDuration === 60
                    ? 'border-amber-500 bg-amber-600 text-white shadow-md'
                    : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                }`}
              >
                <span>60 Minutes</span>
                <span className="block text-xs font-normal mt-1 opacity-90">₹899</span>
              </button>
            </div>
          </div>

          {/* Step 3: Date & Slot picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Date</label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm font-semibold focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Time Slot</label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm font-semibold focus:border-amber-500 outline-none"
              >
                <option>08:00 AM</option>
                <option>10:00 AM</option>
                <option>02:00 PM</option>
                <option>06:00 PM</option>
                <option>08:00 PM</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-base shadow-lg shadow-amber-600/30 transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Book & Proceed to Payment (₹{price})</span>
          </button>
        </form>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-amber-200 space-y-4">
            <h4 className="font-serif font-bold text-stone-900 text-lg">What to Expect</h4>
            <ul className="space-y-3 text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Private 1-on-1 HD Zoom/Google Meet video session.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Personalized meditation roadmap tailored to your energy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Confidential environment for personal life questions.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};
