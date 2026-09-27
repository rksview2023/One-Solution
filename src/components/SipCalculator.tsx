import React, { useState, useMemo } from 'react';
import { calculateSip, formatINR, formatINRCompact } from '../utils/formatters';
import { Calculator, ArrowRight, MessageCircle, AlertCircle, Sparkles, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface SipCalculatorProps {
  onPlanThisSip: (details: { monthly: number; years: number; returnRate: number; expectedValue: number }) => void;
}

export const SipCalculator: React.FC<SipCalculatorProps> = ({ onPlanThisSip }) => {
  // Pre-filled as requested: ₹5,000 monthly, 15 years, 12% illustrative annual return
  const [monthlyAmount, setMonthlyAmount] = useState<number>(5000);
  const [years, setYears] = useState<number>(15);
  const [annualReturn, setAnnualReturn] = useState<number>(12);
  const [stepUpPercent, setStepUpPercent] = useState<number>(0);
  const [showYearlyTable, setShowYearlyTable] = useState<boolean>(false);
  const [calculatedKey, setCalculatedKey] = useState<number>(0);

  const results = useMemo(() => {
    return calculateSip({
      monthlyInvestment: monthlyAmount,
      years,
      annualReturnRate: annualReturn,
      annualStepUpPercent: stepUpPercent,
    });
  }, [monthlyAmount, years, annualReturn, stepUpPercent]);

  const investedPercent = results.totalValue > 0
    ? Math.round((results.totalInvested / results.totalValue) * 100)
    : 100;
  const growthPercent = Math.max(0, 100 - investedPercent);

  // Donut SVG calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const growthStrokeDashoffset = circumference - (circumference * growthPercent) / 100;

  const handleCalculateNow = () => {
    // Triggers a visual pulse recalculation
    setCalculatedKey((prev) => prev + 1);
    // Smooth scroll down to result card if on mobile
    const summaryCard = document.getElementById('sip-summary-card');
    if (summaryCard && window.innerWidth < 1024) {
      summaryCard.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanClick = () => {
    onPlanThisSip({
      monthly: monthlyAmount,
      years,
      returnRate: annualReturn,
      expectedValue: results.totalValue,
    });
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello One Solution,\n\nI was reviewing my SIP investment plan on your website:\n• Monthly SIP Amount: ${formatINR(monthlyAmount)}\n• Investment Period: ${years} Years\n• Expected Return: ${annualReturn}% p.a. (Illustrative)\n• Total Amount Invested: ${formatINR(results.totalInvested)}\n• Illustrative Estimated Value: ${formatINR(results.totalValue)}\n• Illustrative Growth: ${formatINR(results.estimatedReturns)}\n\nCould you please guide me on how to start this disciplined SIP for my goals?`
    );
    window.open(`https://wa.me/919962205989?text=${text}`, '_blank');
  };

  return (
    <section id="sip-calculator" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#00843D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive SIP Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1D37] tracking-tight">
            SIP Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover how systematic monthly investments turn financial discipline into long-term wealth for your milestones.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
              
              {/* Input 1: Monthly SIP Amount */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="sip-monthly-slider" className="text-sm font-bold text-[#0A1D37]">
                    Monthly SIP Amount
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-500 font-mono font-bold">₹</span>
                    <input
                      id="sip-monthly-slider"
                      type="number"
                      min={500}
                      max={200000}
                      step={500}
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Math.max(0, Number(e.target.value)))}
                      className="w-32 px-3 py-1.5 text-right text-base font-black text-[#0A1D37] bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00843D]"
                    />
                  </div>
                </div>

                <input
                  aria-label="Monthly SIP Amount Slider"
                  type="range"
                  min={1000}
                  max={100000}
                  step={500}
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00843D]"
                />

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[2500, 5000, 10000, 15000, 25000, 50000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setMonthlyAmount(preset)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                        monthlyAmount === preset
                          ? 'bg-[#00843D] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {formatINRCompact(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Investment Period in Years */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="sip-years-slider" className="text-sm font-bold text-[#0A1D37]">
                    Investment Period (Years)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id="sip-years-slider"
                      type="number"
                      min={1}
                      max={35}
                      value={years}
                      onChange={(e) => setYears(Math.max(1, Math.min(35, Number(e.target.value))))}
                      className="w-20 px-3 py-1.5 text-right text-base font-black text-[#0A1D37] bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00843D]"
                    />
                    <span className="text-xs font-bold text-slate-600">Years</span>
                  </div>
                </div>

                <input
                  aria-label="Investment Period Slider"
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00843D]"
                />

                {/* Years Presets */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[3, 5, 10, 15, 20, 25].map((presetYear) => (
                    <button
                      key={presetYear}
                      type="button"
                      onClick={() => setYears(presetYear)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                        years === presetYear
                          ? 'bg-[#00843D] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {presetYear} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 3: Expected Annual Return */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="sip-return-slider" className="text-sm font-bold text-[#0A1D37]">
                    Expected Annual Return (% p.a.)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      id="sip-return-slider"
                      type="number"
                      min={5}
                      max={20}
                      step={0.5}
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Math.max(1, Math.min(25, Number(e.target.value))))}
                      className="w-20 px-3 py-1.5 text-right text-base font-black text-[#00843D] bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00843D]"
                    />
                    <span className="text-xs font-bold text-slate-600">%</span>
                  </div>
                </div>

                <input
                  aria-label="Expected Return Rate Slider"
                  type="range"
                  min={8}
                  max={18}
                  step={0.5}
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00843D]"
                />

                <div className="flex flex-wrap gap-2 pt-1">
                  {[10, 12, 14, 15].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setAnnualReturn(rate)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                        annualReturn === rate
                          ? 'bg-[#00843D] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {rate}% p.a.
                    </button>
                  ))}
                </div>
              </div>

              {/* Step-up SIP (Optional Accelerator) */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00843D]" />
                    <span className="text-xs font-bold text-[#0A1D37]">
                      Annual Step-up SIP (Optional)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[0, 5, 10].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setStepUpPercent(rate)}
                        className={`text-xs px-2.5 py-1 rounded-md border font-bold transition-colors cursor-pointer ${
                          stepUpPercent === rate
                            ? 'bg-[#00843D] border-[#00843D] text-white'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {rate === 0 ? 'None' : `+${rate}%/yr`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prominent "Calculate Now" Button as explicitly requested */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCalculateNow}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-black text-white bg-[#00843D] hover:bg-[#007033] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-[0.99]"
                >
                  <Calculator className="w-4 h-4 text-emerald-200" />
                  <span>Calculate Now</span>
                </button>
              </div>

            </div>

            {/* Output Display Cards (Right 5 Cols) */}
            <div
              id="sip-summary-card"
              key={calculatedKey}
              className="lg:col-span-5 p-6 sm:p-10 bg-slate-50/90 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Results Breakdown ({years} Years)
                  </span>
                  <span className="text-xs font-bold text-[#00843D] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Illustrative @ {annualReturn}% p.a.
                  </span>
                </div>

                {/* 1. Total Amount Invested */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
                    Total Amount Invested
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1D37] mt-1">
                    {formatINR(results.totalInvested)}
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {investedPercent}% of maturity value
                  </span>
                </div>

                {/* 2. Illustrative Growth */}
                <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200/90 shadow-xs">
                  <span className="text-xs font-bold text-[#00843D] block uppercase tracking-wider">
                    Illustrative Growth
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#00843D] mt-1">
                    +{formatINR(results.estimatedReturns)}
                  </div>
                  <span className="text-xs font-bold text-[#00843D]">
                    {growthPercent}% compounding gain
                  </span>
                </div>

                {/* 3. Illustrative Estimated Value */}
                <div className="p-5 rounded-2xl bg-[#0A1D37] text-white shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                  <span className="text-xs font-bold text-emerald-300 block uppercase tracking-wider">
                    Illustrative Estimated Value
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1.5">
                    {formatINR(results.totalValue)}
                  </div>
                  <span className="text-xs text-slate-300 block mt-1">
                    At illustrative {annualReturn}% per annum over {years} years
                  </span>
                </div>

                {/* Visual SVG Donut Ratio */}
                <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 160 160">
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#cbd5e1"
                        strokeWidth="20"
                        fill="transparent"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#00843D"
                        strokeWidth="20"
                        strokeDasharray={circumference}
                        strokeDashoffset={growthStrokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute text-[10px] font-black text-[#0A1D37]">
                      {growthPercent}%
                    </div>
                  </div>

                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm bg-slate-400 shrink-0" />
                      <span className="text-slate-600">Invested: <strong>{formatINRCompact(results.totalInvested)}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#00843D] shrink-0" />
                      <span className="text-slate-900 font-bold">Growth: <strong>{formatINRCompact(results.estimatedReturns)}</strong></span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Actions & Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handlePlanClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#0A1D37] hover:bg-[#00843D] rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <span>Start this SIP with One Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#00843D] bg-white hover:bg-emerald-50 border border-emerald-300 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#00843D]" />
                  <span>Send this calculation on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowYearlyTable(!showYearlyTable)}
                  className="w-full flex items-center justify-center gap-1.5 py-1 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span>{showYearlyTable ? 'Hide yearly schedule' : 'View year-by-year schedule'}</span>
                  {showYearlyTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Exact Statutory Disclaimer as requested */}
              <div className="p-3.5 bg-amber-50 border border-amber-200/90 rounded-xl flex items-start gap-2.5 text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-tight font-medium">
                  This is an illustration only. Mutual fund investments are subject to market risks. Returns are not guaranteed.
                </p>
              </div>

            </div>

          </div>

          {/* Year-by-Year Milestone Table */}
          {showYearlyTable && (
            <div className="border-t border-slate-200 p-6 sm:p-8 bg-slate-50">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-[#0A1D37]">
                  Yearly Growth Milestone Breakdown
                </h4>
                <p className="text-xs text-slate-500">
                  Projected timeline based on {formatINR(monthlyAmount)} monthly SIP at an illustrative {annualReturn}% p.a.
                </p>
              </div>

              <div className="overflow-x-auto max-h-72 border border-slate-200 rounded-xl bg-white shadow-xs">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold sticky top-0 border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-4">Year</th>
                      <th className="py-2.5 px-4 text-right">Total Invested</th>
                      <th className="py-2.5 px-4 text-right">Illustrative Growth</th>
                      <th className="py-2.5 px-4 text-right">Illustrative Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {results.yearlyBreakdown.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50">
                        <td className="py-2 px-4 font-bold text-[#0A1D37]">Year {row.year}</td>
                        <td className="py-2 px-4 text-right">{formatINR(row.invested)}</td>
                        <td className="py-2 px-4 text-right text-[#00843D] font-bold">+{formatINR(row.returns)}</td>
                        <td className="py-2 px-4 text-right font-black text-[#0A1D37]">{formatINR(row.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
