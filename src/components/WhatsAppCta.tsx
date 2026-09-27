import React from 'react';
import { MessageCircle, Clock, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

export const WhatsAppCta: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20chat%20about%20starting%20a%20goal-based%20investment%20or%20SIP%20plan.';

  return (
    <section className="py-14 bg-gradient-to-r from-[#00843D] via-[#007033] to-[#00843D] text-white relative overflow-hidden">
      {/* Decorative gradient blur accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-950/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950/40 border border-emerald-400/30 rounded-3xl p-7 sm:p-11 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm shadow-2xl">
          
          {/* Left Text */}
          <div className="space-y-3.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-200 border border-emerald-600/50 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Direct WhatsApp Desk · +91 9962205989</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Prefer a Quick Conversation on WhatsApp?
            </h3>

            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
              Connect directly with our investment specialists to ask questions about starting a new SIP, reviewing your existing mutual fund portfolio, or setting a plan for family milestones.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-emerald-200 font-semibold">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-300" />
                Prompt response during business hours
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Zero obligations &amp; no sales pressure
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-[#0A1D37] bg-white hover:bg-emerald-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 text-[#00843D] fill-[#00843D]/20" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#00843D]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
