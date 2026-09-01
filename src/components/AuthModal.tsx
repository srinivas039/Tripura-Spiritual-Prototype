import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Smartphone, KeyRound, CheckCircle2, UserCheck, Lock } from 'lucide-react';

interface AuthModalProps {
  onSuccessRedirect?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onSuccessRedirect }) => {
  const { isAuthOpen, closeAuthModal, login, t } = useApp();
  const [mobile, setMobile] = useState('');
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  if (!isAuthOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '123456' || otp.length === 6) {
      login(mobile);
      closeAuthModal();
      if (onSuccessRedirect) onSuccessRedirect();
    } else {
      setError('Invalid OTP. Use Demo OTP: 123456');
    }
  };

  const handleQuickLogin = (phone: string) => {
    login(phone);
    closeAuthModal();
    if (onSuccessRedirect) onSuccessRedirect();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-amber-100 relative overflow-hidden">
        
        {/* Decorative Top Ambient Accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-3">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            {t.auth.title}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Tripura Spiritual Account Authentication
          </p>
        </div>

        {/* Step 1: Mobile Form */}
        {step === 'mobile' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t.auth.mobileLabel}
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-stone-500 font-medium text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="9999999999"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-stone-900 font-semibold text-sm outline-none transition"
                />
              </div>
            </div>

            {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md shadow-amber-600/20 transition flex items-center justify-center gap-2"
            >
              <span>{t.auth.sendOtp}</span>
            </button>
          </form>
        ) : (
          /* Step 2: OTP Form */
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <span className="text-xs text-stone-600 block">OTP Sent to +91 {mobile}</span>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-amber-600 text-white text-xs font-bold tracking-wider">
                {t.auth.demoOtpNotice}
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t.auth.enterOtp}
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  maxLength={6}
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-stone-900 font-mono tracking-widest text-center text-lg font-bold outline-none transition"
                />
              </div>
            </div>

            {error && <p className="text-xs text-rose-600 font-medium text-center">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md shadow-amber-600/20 transition flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.auth.verifyOtp}</span>
            </button>

            <button
              type="button"
              onClick={() => setStep('mobile')}
              className="w-full text-xs text-stone-500 hover:text-stone-800 underline text-center"
            >
              Change Mobile Number
            </button>
          </form>
        )}

        {/* Quick Prototype Login Buttons */}
        <div className="mt-6 pt-5 border-t border-stone-200 space-y-2">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 text-center">
            {t.auth.quickDemoUsers}
          </p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => handleQuickLogin('9999999999')}
              className="w-full py-2 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.auth.loginSubscribed}</span>
              </span>
              <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[10px]">Active</span>
            </button>

            <button
              onClick={() => handleQuickLogin('8888888888')}
              className="w-full py-2 px-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold hover:bg-rose-100 transition flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-rose-600" />
                <span>{t.auth.loginRestricted}</span>
              </span>
              <span className="bg-rose-600 text-white px-1.5 py-0.5 rounded text-[10px]">Locked</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
