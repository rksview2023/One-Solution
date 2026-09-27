/**
 * Format Indian currency with rupees symbol and Lakhs/Crores
 */
export function formatINR(val: number): string {
  if (isNaN(val)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}

export function formatINRCompact(val: number): string {
  if (isNaN(val)) return '₹0';
  const abs = Math.abs(val);
  if (abs >= 10000000) {
    const cr = val / 10000000;
    return `₹${cr.toFixed(2)} Cr`;
  }
  if (abs >= 100000) {
    const lk = val / 100000;
    return `₹${lk.toFixed(2)} Lakh`;
  }
  if (abs >= 1000) {
    const k = val / 1000;
    return `₹${k.toFixed(1)}k`;
  }
  return formatINR(val);
}

/**
 * Standard SIP Compounding Formula:
 * FV = P * [ (1 + i)^n - 1 ] * (1 + i) / i
 * where:
 * P = Monthly investment
 * i = monthly interest rate (r / 12 / 100)
 * n = total months (years * 12)
 */
export function calculateSip({
  monthlyInvestment,
  years,
  annualReturnRate,
  annualStepUpPercent = 0,
}: {
  monthlyInvestment: number;
  years: number;
  annualReturnRate: number;
  annualStepUpPercent?: number;
}): {
  totalInvested: number;
  estimatedReturns: number;
  totalValue: number;
  yearlyBreakdown: Array<{
    year: number;
    invested: number;
    value: number;
    returns: number;
  }>;
} {
  const months = years * 12;
  const monthlyRate = annualReturnRate / 12 / 100;

  if (annualStepUpPercent <= 0) {
    const totalInvested = monthlyInvestment * months;
    if (monthlyRate === 0) {
      return {
        totalInvested,
        estimatedReturns: 0,
        totalValue: totalInvested,
        yearlyBreakdown: [],
      };
    }

    const fvFactor = Math.pow(1 + monthlyRate, months);
    const totalValue = monthlyInvestment * ((fvFactor - 1) / monthlyRate) * (1 + monthlyRate);
    const estimatedReturns = Math.max(0, totalValue - totalInvested);

    // Generate yearly milestones
    const yearlyBreakdown = [];
    for (let y = 1; y <= years; y++) {
      const m = y * 12;
      const inv = monthlyInvestment * m;
      const val = monthlyInvestment * ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate);
      yearlyBreakdown.push({
        year: y,
        invested: Math.round(inv),
        value: Math.round(val),
        returns: Math.round(Math.max(0, val - inv)),
      });
    }

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(totalValue),
      yearlyBreakdown,
    };
  }

  // With Step-up SIP:
  let totalInvested = 0;
  let runningBalance = 0;
  let currentMonthly = monthlyInvestment;
  const yearlyBreakdown = [];

  for (let m = 1; m <= months; m++) {
    if (m > 1 && (m - 1) % 12 === 0) {
      currentMonthly = currentMonthly * (1 + annualStepUpPercent / 100);
    }
    totalInvested += currentMonthly;
    runningBalance = (runningBalance + currentMonthly) * (1 + monthlyRate);

    if (m % 12 === 0) {
      const yearNum = m / 12;
      yearlyBreakdown.push({
        year: yearNum,
        invested: Math.round(totalInvested),
        value: Math.round(runningBalance),
        returns: Math.round(Math.max(0, runningBalance - totalInvested)),
      });
    }
  }

  return {
    totalInvested: Math.round(totalInvested),
    estimatedReturns: Math.round(Math.max(0, runningBalance - totalInvested)),
    totalValue: Math.round(runningBalance),
    yearlyBreakdown,
  };
}
