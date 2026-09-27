import React from 'react';
import { Calculator, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroFamilyImg from '../assets/images/hero_family_financial_1790520176138.jpg';

interface HeroProps {
  onCalculateClick: () => void;
  onEnquiryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCalculateClick, onEnquiryClick }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white via-slate-50/50 to-white pt-8 pb-14 md:pt-12 md:pb-20 overflow-hidden border-b border-slate-100">
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean 2-column layout: Left text & CTA / Right visual investment image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT SIDE (7 cols): Headline, Description, Action Buttons, Trust Points */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* AMFI Registered Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/90 text-[#00843D] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#00843D] shrink-0" />
              <span>Mutual Fund Distributor | AMFI Registered</span>
            </div>

            {/* Headline (No duplicate "ONE SOLUTION" text) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1D37] tracking-tight leading-[1.18]">
                Plan Today &amp; <span className="text-[#00843D]">Build Tomorrow</span>
              </h1>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal max-w-xl">
              Simple, goal-based investment planning for SIP, wealth creation, retirement and your family&apos;s future goals.
            </p>

            {/* Three Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-3.5">
              {/* Button 1: Calculate Your SIP */}
              <button
                type="button"
                onClick={onCalculateClick}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-emerald-200" />
                <span>Calculate Your SIP</span>
              </button>

              {/* Button 2: Start Your Enquiry */}
              <button
                type="button"
                onClick={onEnquiryClick}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm font-bold text-white bg-[#0A1D37] hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start Your Enquiry</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              {/* Button 3: Chat on WhatsApp */}
              <a
                href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20chat%20about%20starting%20a%20goal-based%20investment%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-bold text-[#0A1D37] bg-white hover:bg-emerald-50 border-2 border-emerald-600/30 rounded-xl shadow-xs hover:shadow transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#00843D] fill-[#00843D]/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Pillars */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span>Goal-Based Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span>Long-Term Discipline</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span>Periodic Reviews</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (5 cols): Visual Financial Planning Lifestyle Image */}
          <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end pt-2 lg:pt-0">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100">
                <img
                  src={heroFamilyImg}
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero_family_financial_1790520176138.jpg';
                  }}
                  alt="Family financial planning and goal-based investing with One Solution"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-84 md:h-96 lg:h-[430px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
