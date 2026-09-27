import React from 'react';
import { Target, TrendingUp, Repeat, ShieldCheck, Check, Sparkles, Phone, MessageCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const cards = [
    {
      icon: Target,
      title: 'Goal-Based Planning',
      highlight: 'Every rupee has a defined mission',
      description:
        'We never recommend generic mutual fund products. We map your monthly investments directly to tangible life aspirations—such as your child’s college degree, dream home, or early retirement fund.',
      benefits: ['Precise target corpus calculation', 'Time-linked portfolio derisking', 'Eliminates aimless investing'],
      accentColor: 'from-emerald-500/10 to-teal-500/5',
      badgeColor: 'bg-emerald-50 text-[#00843D]',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Wealth Creation',
      highlight: 'Harness the true power of compounding',
      description:
        'Short-term market timing is futile. We help you stay disciplined through market bull runs and corrections, capturing the long-term expansion of the Indian economy.',
      benefits: ['Time-tested compounding mindset', 'Protection from emotional market panic', '5 to 20+ year wealth accumulation'],
      accentColor: 'from-blue-500/10 to-indigo-500/5',
      badgeColor: 'bg-blue-50 text-blue-800',
    },
    {
      icon: Repeat,
      title: 'SIP-Focused Planning',
      highlight: 'Disciplined monthly accumulation',
      description:
        'Systematic Investment Plans (SIPs) make investing effortless. By investing a fixed amount each month, you buy more units during market dips and average out your overall acquisition costs.',
      benefits: ['Automated bank mandate execution', 'Rupee-cost averaging advantage', 'Fits naturally into monthly cashflow'],
      accentColor: 'from-emerald-500/10 to-green-500/5',
      badgeColor: 'bg-emerald-50 text-[#00843D]',
    },
    {
      icon: ShieldCheck,
      title: 'Simple & Transparent Guidance',
      highlight: 'Zero jargon, honest AMFI distribution',
      description:
        'Clear, straightforward guidance with zero high-pressure sales pitches. We clearly explain product features, risk profiles, and disclosures so you always know what you own.',
      benefits: ['AMFI-registered distributor ethics', 'Plain-English communication', 'Regular review checkpoints'],
      accentColor: 'from-slate-500/10 to-slate-500/5',
      badgeColor: 'bg-slate-100 text-slate-800',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-[#00843D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Advisory Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1D37] tracking-tight">
            Why One Solution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Disciplined guidance rooted in clarity, patience, and transparent partnership for your family&apos;s financial journey.
          </p>
        </div>

        {/* Four Attractive Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Background soft gradient corner */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${card.accentColor} rounded-bl-full pointer-events-none transition-transform group-hover:scale-110`}
                />

                <div className="relative space-y-4">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00843D] flex items-center justify-center shadow-xs group-hover:bg-[#00843D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${card.badgeColor}`}>
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0A1D37] group-hover:text-[#00843D] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {card.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-4 h-4 text-[#00843D] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00843D]">
                  <span>Tailored for your family goals</span>
                  <div className="w-2 h-2 rounded-full bg-[#00843D]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0A1D37] via-[#0e2748] to-[#0A1D37] text-white rounded-2xl p-7 sm:p-10 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              One Solution Commitment
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              No High-Pressure Sales. Just Genuine Financial Guidance.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We never promise unrealistic shortcuts or guaranteed returns. We focus on building disciplined habits that stand the test of time.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919962205989"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700 px-4 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 9962205989</span>
            </a>

            <a
              href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20schedule%20a%20personalized%20financial%20discussion."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] px-5 py-3 rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Discussion</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
