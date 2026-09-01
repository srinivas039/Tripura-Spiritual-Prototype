import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const Plans: React.FC = () => {
  const { openPaymentModal, t } = useApp();

  const plans = [
    {
      id: '11-day',
      name: t.plansSection.plan11.name,
      price: 599,
      period: "30 Days Validity",
      popular: false,
      desc: "Perfect for beginners entering our 11-day spiritual immersion.",
      features: t.plansSection.plan11.features
    },
    {
      id: '21-day',
      name: t.plansSection.plan21.name,
      price: 999,
      period: "60 Days Validity",
      popular: true,
      desc: "Our most comprehensive immersion for sustained daily practice.",
      features: t.plansSection.plan21.features
    },
    {
      id: 'recording',
      name: t.plansSection.recordingPlan.name,
      price: 599,
      period: "30 Days Validity",
      popular: false,
      desc: "Dedicated on-demand recording archive access for flexible hours.",
      features: t.plansSection.recordingPlan.features
    },
    // {
    //   id: 'new-user',
    //   name: t.plansSection.newUserPlan.name,
    //   price: 1000,
    //   period: "90 Days Validity",
    //   popular: false,
    //   desc: "All-inclusive lifetime intro package with private 1-on-1 discount.",
    //   features: t.plansSection.newUserPlan.features
    // }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">

      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          {t.plansSection.prototypeNotice}
        </span>
        <h1 className="font-serif text-4xl font-bold text-stone-900">{t.plansSection.title}</h1>
        <p className="text-stone-600 text-sm">{t.plansSection.subtitle}</p>
      </div>

      {/* Grid of Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`glass-card rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${plan.popular
                ? 'border-2 border-amber-500 shadow-xl bg-amber-50/50 transform lg:-translate-y-2'
                : 'border-amber-200 shadow-md hover:shadow-lg'
              }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                {t.plansSection.popular}
              </span>
            )}

            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                {plan.period}
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                {plan.name}
              </h3>
              <p className="text-xs text-stone-500">{plan.desc}</p>

              <div className="pt-2 border-t border-amber-100">
                <span className="text-3xl font-bold text-stone-900 font-sans">₹{plan.price}</span>
                <span className="text-xs text-stone-500 font-normal"> / plan</span>
              </div>

              <ul className="space-y-2.5 text-xs text-stone-700 font-medium pt-2">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => openPaymentModal({ id: plan.id, name: plan.name, price: plan.price, type: 'plan' })}
              className={`mt-6 w-full py-3 rounded-xl font-bold text-sm transition shadow-md ${plan.popular
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-amber-600/30'
                  : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
            >
              {t.plansSection.choosePlan}
            </button>
          </div>
        ))}
      </div>

      {/* Trust Notice */}
      <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-center max-w-xl mx-auto space-y-2 text-xs text-stone-600">
        <p className="font-semibold text-stone-900 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>All Plans Include Instant Unlocking of Available Recordings</span>
        </p>
        <p>Selecting any plan will launch the prototype payment gateway where you can simulate a successful UPI QR / Card transaction.</p>
      </div>

    </div>
  );
};
