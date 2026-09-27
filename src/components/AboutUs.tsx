import React from 'react';
import { ShieldCheck, MapPin, Award, Users, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid: Left Brand Story & Right Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#00843D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5" />
              <span>About One Solution</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
                Empowering Families to Plan with Clarity &amp; Confidence
              </h2>
              <p className="text-lg font-bold text-[#00843D]">
                Plan Today &amp; Build Tomorrow
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based in <strong>Tambaram Sanatorium, Chennai</strong>, <strong>ONE SOLUTION</strong> is a dedicated mutual fund distribution and goal-based investment planning practice. We were founded on a simple conviction: <em>genuine financial peace of mind comes from disciplined habits, not short-term speculation.</em>
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We work closely with working professionals, business owners, and parents planning for their children’s higher education and their own dignified retirement. We believe in transparent, client-first partnership with no aggressive sales quotas and no jargon.
            </p>

            {/* Credibility Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-[#00843D] font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>AMFI Registered</span>
                </div>
                <p className="text-xs text-slate-500">
                  Compliant mutual fund distribution across all registered AMCs in India.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-[#0A1D37] font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-[#00843D]" />
                  <span>Chennai Roots</span>
                </div>
                <p className="text-xs text-slate-500">
                  Accessible in-person consultations in Tambaram Sanatorium &amp; digital PAN-India.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk with an Investment Specialist</span>
              </a>
            </div>

          </div>

          {/* Right Column: Values & Practice Commitment */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-[#0A1D37]">
                  Our Advisory Principles
                </h3>
                <span className="text-xs font-bold text-[#00843D] bg-emerald-50 px-2.5 py-1 rounded-full">
                  Investor First
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#00843D] flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A1D37]">Zero High-Pressure Sales</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We never push products to meet distributor targets. Every scheme recommendation is strictly vetted against your time horizon and risk profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0A1D37] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A1D37]">Family Financial Literacy</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We take the time to explain asset allocation, compounding, and market cycles so both spouses and family decision-makers feel confident.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#00843D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A1D37]">Regular Milestone Tracking</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Investing is a marathon. We schedule periodic check-ins to evaluate fund performance, asset allocation, and life event adjustments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                <strong>Statutory Notice:</strong> One Solution operates as a Mutual Fund Distributor (MFD). Mutual fund investments are subject to market risks, read all scheme related documents carefully.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
