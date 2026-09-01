import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, QrCode, CreditCard, Landmark, Smartphone, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

interface PaymentModalProps {
  onSuccessNavigate?: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ onSuccessNavigate }) => {
  const { isPaymentOpen, closePaymentModal, pendingPlan, completePayment, t } = useApp();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'qr' | 'card' | 'netbanking'>('qr');
  const [paymentState, setPaymentState] = useState<'form' | 'processing' | 'success'>('form');
  const [txnId, setTxnId] = useState('');

  if (!isPaymentOpen || !pendingPlan) return null;

  const handlePay = () => {
    setPaymentState('processing');
    const generatedTxn = 'TRIPURA-DEMO-' + Math.floor(100000 + Math.random() * 900000);
    setTxnId(generatedTxn);

    // Simulate 2 second secure payment processing
    setTimeout(() => {
      completePayment();
      setPaymentState('success');
    }, 2000);
  };

  const handleFinish = () => {
    closePaymentModal();
    setPaymentState('form');
    if (onSuccessNavigate) onSuccessNavigate();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-100 relative overflow-hidden">
        
        {/* Top Disclaimer Badge */}
        <div className="bg-amber-100 text-amber-900 text-[11px] font-bold tracking-wider uppercase py-1 px-4 text-center -mx-8 -mt-8 mb-6 border-b border-amber-200">
          {t.payment.demoDisclaimer}
        </div>

        {/* Close Button */}
        {paymentState !== 'processing' && (
          <button
            onClick={() => { closePaymentModal(); setPaymentState('form'); }}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* STATE 1: PAYMENT SELECTION FORM */}
        {paymentState === 'form' && (
          <div className="space-y-6">
            
            {/* Order Summary */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
              <h4 className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
                {t.payment.title}
              </h4>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-serif font-bold text-stone-900 text-base">{pendingPlan.name}</p>
                  <p className="text-xs text-stone-500">Includes live sessions & full recording access</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-amber-700 text-xl font-sans">₹{pendingPlan.price}</p>
                  <span className="text-[10px] text-emerald-600 font-semibold">Taxes Included</span>
                </div>
              </div>
            </div>

            {/* Payment Method Tabs */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                {t.payment.methodTitle}
              </label>
              
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qr')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition ${
                    paymentMethod === 'qr'
                      ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold shadow-xs'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-amber-600" />
                  <div>
                    <span className="block text-xs">UPI QR Code</span>
                    <span className="text-[10px] text-stone-500 font-normal">GPay / PhonePe</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition ${
                    paymentMethod === 'upi'
                      ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold shadow-xs'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-amber-600" />
                  <div>
                    <span className="block text-xs">UPI App</span>
                    <span className="text-[10px] text-stone-500 font-normal">Direct Mobile UPI</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition ${
                    paymentMethod === 'card'
                      ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold shadow-xs'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  <div>
                    <span className="block text-xs">Debit / Credit</span>
                    <span className="text-[10px] text-stone-500 font-normal">Visa / MasterCard</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition ${
                    paymentMethod === 'netbanking'
                      ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold shadow-xs'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Landmark className="w-5 h-5 text-amber-600" />
                  <div>
                    <span className="block text-xs">Net Banking</span>
                    <span className="text-[10px] text-stone-500 font-normal">All Major Indian Banks</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Method Details View */}
            {paymentMethod === 'qr' && (
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-2">
                <div className="bg-white p-3 inline-block rounded-xl shadow-sm border border-stone-200">
                  {/* Visual QR Code SVG placeholder */}
                  <svg className="w-36 h-36 mx-auto" viewBox="0 0 100 100" fill="none">
                    <rect width="100" height="100" fill="white" />
                    <path d="M10 10h30v30H10zM15 15v20h20V15zM20 20h10v10H20z" fill="#181411"/>
                    <path d="M60 10h30v30H60zM65 15v20h20V15zM70 20h10v10H70z" fill="#181411"/>
                    <path d="M10 60h30v30H10zM15 65v20h20V65zM20 70h10v10H20z" fill="#181411"/>
                    <rect x="45" y="10" width="10" height="20" fill="#d97706"/>
                    <rect x="45" y="45" width="20" height="10" fill="#181411"/>
                    <rect x="70" y="50" width="20" height="20" fill="#d97706"/>
                    <rect x="50" y="70" width="15" height="20" fill="#181411"/>
                    <rect x="75" y="80" width="15" height="10" fill="#181411"/>
                  </svg>
                </div>
                <p className="text-xs text-stone-600 font-medium">Scan QR with GPay / PhonePe / Paytm / BHIM</p>
                <p className="text-[10px] text-amber-700 font-semibold">UPI ID: tripuraspiritual@demo</p>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="yourname@upi"
                  defaultValue="user@gpay"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm font-mono focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
                />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-2.5 text-xs">
                <input type="text" placeholder="Card Number (4111 2222 3333 4444)" defaultValue="4111 •••• •••• 9876" className="w-full px-4 py-2 rounded-lg border text-sm font-mono border-stone-300" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="MM/YY (12/28)" defaultValue="12/28" className="px-3 py-2 rounded-lg border text-sm font-mono border-stone-300" />
                  <input type="password" placeholder="CVV (123)" defaultValue="123" className="px-3 py-2 rounded-lg border text-sm font-mono border-stone-300" />
                </div>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <select className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm">
                <option>State Bank of India (SBI)</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
              </select>
            )}

            {/* Submit Button */}
            <button
              onClick={handlePay}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-base shadow-lg shadow-amber-600/30 transition flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-amber-200" />
              <span>{t.payment.payButton} ₹{pendingPlan.price}</span>
            </button>
          </div>
        )}

        {/* STATE 2: PROCESSING SCREEN */}
        {paymentState === 'processing' && (
          <div className="py-12 text-center space-y-4">
            <Loader2 className="w-12 h-12 text-amber-600 animate-spin mx-auto" />
            <h4 className="font-serif text-xl font-bold text-stone-900">
              {t.payment.processing}
            </h4>
            <p className="text-xs text-stone-500 max-w-xs mx-auto">
              Connecting securely to Tripura Spiritual gateway. Please do not close or refresh this window.
            </p>
          </div>
        )}

        {/* STATE 3: PAYMENT SUCCESS RECEIPT */}
        {paymentState === 'success' && (
          <div className="py-6 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                {t.payment.successTitle}
              </h4>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                {t.payment.planActivated}
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-500">{t.payment.txnId}</span>
                <span className="font-bold text-stone-900">{txnId}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-500">Plan</span>
                <span className="font-bold text-amber-800">{pendingPlan.name}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-stone-500">Amount Paid</span>
                <span className="font-bold text-stone-900">₹{pendingPlan.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t.payment.validity}</span>
                <span className="font-bold text-stone-900">September 30, 2026</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-left flex items-start gap-2 text-xs text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>All 11 daily recordings have been unlocked in your dashboard!</span>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-md transition"
            >
              {t.payment.goToDashboard}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
