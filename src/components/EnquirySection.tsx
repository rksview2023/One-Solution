import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, PhoneCall, MessageCircle, AlertCircle, Sparkles, Lock, ShieldCheck } from 'lucide-react';

interface EnquirySectionProps {
  initialGoal?: string;
  initialBudget?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialGoal,
  initialBudget,
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [budget, setBudget] = useState('₹5,000–₹10,000');
  const [goal, setGoal] = useState('Wealth Creation');
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [note, setNote] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const budgetOptions = [
    '₹2,000–₹5,000',
    '₹5,000–₹10,000',
    '₹10,000–₹25,000',
    '₹25,000+',
  ];

  const goalOptions = [
    'Child Education',
    'Retirement',
    'Wealth Creation',
    'Future Goal',
    'Other',
  ];

  useEffect(() => {
    if (initialGoal) {
      if (initialGoal.toLowerCase().includes('child') || initialGoal.toLowerCase().includes('education')) {
        setGoal('Child Education');
      } else if (initialGoal.toLowerCase().includes('retirement')) {
        setGoal('Retirement');
      } else if (initialGoal.toLowerCase().includes('wealth')) {
        setGoal('Wealth Creation');
      } else if (initialGoal.toLowerCase().includes('future')) {
        setGoal('Future Goal');
      } else {
        setGoal(initialGoal);
      }
    }
  }, [initialGoal]);

  useEffect(() => {
    if (initialBudget) {
      setBudget(initialBudget);
    }
  }, [initialBudget]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile / WhatsApp number.');
      return;
    }
    if (!age || Number(age) < 18 || Number(age) > 100) {
      setErrorMsg('Please enter a valid age (18 to 100).');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Save submission locally for audit
      try {
        const existing = JSON.parse(localStorage.getItem('onesolution_enquiries') || '[]');
        const newRecord = {
          id: Date.now(),
          name,
          mobile,
          age,
          budget,
          goal,
          contactMethod,
          note,
          date: new Date().toISOString(),
        };
        localStorage.setItem('onesolution_enquiries', JSON.stringify([newRecord, ...existing]));
      } catch (err) {
        console.error('Local save error', err);
      }
    }, 500);
  };

  const handleSendToWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello One Solution,\n\nI have requested a financial consultation via your website:\n• Name: ${name}\n• Age: ${age}\n• Mobile: ${mobile}\n• Goal: ${goal}\n• Monthly SIP Budget: ${budget}\n• Preferred Contact: ${contactMethod}${
        note ? `\n• Notes: ${note}` : ''
      }\n\nPlease contact me to discuss my personalized investment plan.`
    );
    window.open(`https://wa.me/919962205989?text=${text}`, '_blank');
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-gradient-to-br from-[#0A1D37] via-[#0d2342] to-[#0A1D37] text-white relative overflow-hidden">
      {/* Decorative ambient color circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personalized Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Start Your SIP Enquiry
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Share your goal and monthly investment budget. We will connect with you to review your timelines and formulate a structured mutual fund plan.
          </p>
        </div>

        {/* Premium Form Card */}
        <div className="bg-slate-800/95 rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {submitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. We have received your request for <strong>{goal}</strong> with a monthly budget of <strong>{budget}</strong>. Our team will reach out via <strong>{contactMethod}</strong> shortly.
                </p>
              </div>

              {/* Direct WhatsApp Acceleration Button */}
              <div className="pt-2 max-w-md mx-auto space-y-3">
                <button
                  type="button"
                  onClick={handleSendToWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send instantly on WhatsApp (+91 9962205989)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setMobile('');
                    setAge('');
                    setNote('');
                  }}
                  className="text-xs text-slate-400 hover:text-slate-200 underline pt-2 block mx-auto cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>

              <div className="text-[11px] text-slate-400 border-t border-slate-700/70 pt-4">
                Statutory note: Mutual fund investments are subject to market risks. Returns are not guaranteed.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-3.5 bg-red-900/50 border border-red-500/70 rounded-xl flex items-center gap-2.5 text-red-200 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-name" className="text-xs font-bold text-slate-300 block">
                    Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00843D] focus:border-transparent font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="enquiry-mobile" className="text-xs font-bold text-slate-300 block">
                    Mobile / WhatsApp Number <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-slate-400 text-xs font-bold">
                      +91
                    </span>
                    <input
                      id="enquiry-mobile"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 text-sm bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00843D] focus:border-transparent font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Age & Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-age" className="text-xs font-bold text-slate-300 block">
                    Age <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="enquiry-age"
                    type="number"
                    min={18}
                    max={100}
                    required
                    placeholder="e.g. 35"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00843D] focus:border-transparent font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 block">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setContactMethod(method)}
                        className={`py-3 px-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          contactMethod === method
                            ? 'bg-[#00843D] border-emerald-500 text-white shadow-xs'
                            : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-700/60'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monthly SIP Budget */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">
                  Monthly SIP Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBudget(opt)}
                      className={`py-3 px-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                        budget === opt
                          ? 'bg-[#00843D] border-emerald-400 text-white ring-2 ring-emerald-400/40 shadow-sm'
                          : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-700/60'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Goal */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">
                  Investment Goal
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {goalOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setGoal(opt)}
                      className={`py-3 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                        goal === opt
                          ? 'bg-[#00843D] border-emerald-400 text-white ring-2 ring-emerald-400/40 shadow-sm'
                          : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-700/60'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label htmlFor="enquiry-notes" className="text-xs font-bold text-slate-300 block">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  id="enquiry-notes"
                  rows={2}
                  placeholder="e.g. Planning for my daughter's engineering college in 12 years..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00843D] focus:border-transparent font-medium"
                />
              </div>

              {/* Prominent "Request a Call" Button as requested */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-base font-black text-white bg-[#00843D] hover:bg-[#007033] active:bg-[#006028] rounded-xl shadow-xl hover:shadow-emerald-900/50 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-5 h-5 text-emerald-200" />
                  <span>{submitting ? 'Submitting Request...' : 'Request a Call'}</span>
                  {!submitting && <Send className="w-4 h-4 ml-1 opacity-80" />}
                </button>
              </div>

              {/* Privacy Assurance */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your information is protected. We never spam or sell your data.</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
