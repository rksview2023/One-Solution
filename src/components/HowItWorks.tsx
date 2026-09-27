import React from 'react';
import { Target, CalendarCheck, SlidersHorizontal, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';

interface InvestmentJourneyProps {
  onStartEnquiry: () => void;
}

export const HowItWorks: React.FC<InvestmentJourneyProps> = ({ onStartEnquiry }) => {
  const journeySteps = [
    {
      step: '01',
      title: 'Share Your Goal',
      icon: Target,
      tagline: 'Define your family dreams',
      description:
        'Tell us what you want to achieve—saving for your child’s college education, retirement, down payment for a home, or creating long-term family wealth.',
      keyTakeaway: 'No paperwork needed to begin the discussion',
      accentColor: 'from-emerald-500 to-teal-600',
    },
    {
      step: '02',
      title: 'Understand Your Time Horizon',
      icon: CalendarCheck,
      tagline: 'Align timeline & risk comfort',
      description:
        'A 3-year goal requires safety, while a 15-year goal can harness equity compounding. We assess your investment timeline and comfort with short-term market movements.',
      keyTakeaway: 'Ensures short-term stability & long-term growth',
      accentColor: 'from-blue-600 to-indigo-600',
    },
    {
      step: '03',
      title: 'Plan Your Investment',
      icon: SlidersHorizontal,
      tagline: 'Optimal monthly SIP budget',
      description:
        'We tailor a monthly SIP allocation across suitable mutual fund schemes matching your cashflow. We guide you through 100% digital KYC and bank mandate setup.',
      keyTakeaway: 'Transparent regular mutual fund distribution',
      accentColor: 'from-teal-600 to-emerald-700',
    },
    {
      step: '04',
      title: 'Start & Review Regularly',
      icon: RefreshCw,
      tagline: 'Disciplined compounding with reviews',
      description:
        'Your monthly SIP invests automatically on your chosen date. We conduct periodic milestone reviews to evaluate performance and rebalance as goals near maturity.',
      keyTakeaway: 'Hands-on review support through market cycles',
      accentColor: 'from-[#0A1D37] to-slate-800',
    },
  ];

  return (
    <section id="investment-journey" className="py-16 md:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#00843D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Four-Step Visual Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1D37] tracking-tight">
            Investment Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            From your very first conversation to regular milestone reviews, here is how we partner with you on your wealth creation path.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-[#00843D] tracking-tighter">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00843D] flex items-center justify-center group-hover:bg-[#00843D] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#0A1D37] mb-1 group-hover:text-[#00843D] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-xs font-bold text-[#00843D] mb-3">
                    {step.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <span className="text-[#00843D]">✓</span>
                  <span>{step.keyTakeaway}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner under journey */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onStartEnquiry}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-black text-white bg-[#00843D] hover:bg-[#007033] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Take Step 1: Share Your Goal Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
