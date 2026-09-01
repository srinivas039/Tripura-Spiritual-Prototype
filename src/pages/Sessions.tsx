import React from 'react';
import { useApp } from '../context/AppContext';

interface SessionsProps {
  setActiveTab: (tab: string) => void;
}

export const Sessions: React.FC<SessionsProps> = ({ setActiveTab }) => {
  const { t, openPaymentModal } = useApp();

  const offerings = [
    {
      id: '11-day',
      image: '/hero.jpg',
      tag: t.offeringsGrid.card1.tag,
      category: t.offeringsGrid.card1.category,
      title: t.offeringsGrid.card1.title,
      desc: t.offeringsGrid.card1.desc,
      meta: t.offeringsGrid.card1.meta,
      price: t.offeringsGrid.card1.price,
      numPrice: 599,
      action: 'session-details'
    },
    {
      id: '21-day',
      image: '/card2.jpg',
      tag: t.offeringsGrid.card2.tag,
      category: t.offeringsGrid.card2.category,
      title: t.offeringsGrid.card2.title,
      desc: t.offeringsGrid.card2.desc,
      meta: t.offeringsGrid.card2.meta,
      price: t.offeringsGrid.card2.price,
      numPrice: 999,
      action: 'plans'
    },
    {
      id: 'hanuman-kriya',
      image: '/card3.jpg',
      tag: t.offeringsGrid.card3.tag,
      category: t.offeringsGrid.card3.category,
      title: t.offeringsGrid.card3.title,
      desc: t.offeringsGrid.card3.desc,
      meta: t.offeringsGrid.card3.meta,
      price: t.offeringsGrid.card3.price,
      numPrice: 499,
      action: 'onetoone'
    },
    {
      id: 'night-ritual',
      image: '/card4.jpg',
      tag: t.offeringsGrid.card4.tag,
      category: t.offeringsGrid.card4.category,
      title: t.offeringsGrid.card4.title,
      desc: t.offeringsGrid.card4.desc,
      meta: t.offeringsGrid.card4.meta,
      price: t.offeringsGrid.card4.price,
      numPrice: 299,
      action: 'demo'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16 animate-fadeIn text-[#2C2421]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8B5E34]">Guided Immersions</span>
        <h1 className="font-serif text-4xl font-normal text-[#2C2421]">{t.nav.sessions}</h1>
        <p className="text-stone-600 text-sm font-light leading-relaxed">
          Explore our gentle guided immersions, healing practices, and evening spiritual rituals.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {offerings.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (item.action === 'session-details') setActiveTab('session-details');
              else if (item.action === 'plans') setActiveTab('plans');
              else if (item.action === 'onetoone') setActiveTab('onetoone');
              else if (item.action === 'demo') setActiveTab('demo');
              else openPaymentModal({ id: item.id, name: item.title, price: item.numPrice, type: 'plan' });
            }}
            className="group bg-white rounded-2xl overflow-hidden border border-[#E6E0D2] shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2C2421] text-[10px] font-semibold tracking-widest uppercase shadow-xs">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8B5E34]">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#2C2421] group-hover:text-[#8B5E34] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-[11px] font-semibold text-[#7A7067] tracking-wider uppercase">
              <span>{item.meta}</span>
              <span className="text-sm font-serif text-[#2C2421] font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
