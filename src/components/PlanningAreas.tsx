import React, { useState } from 'react';
import { ArrowRight, GraduationCap, Landmark, TrendingUp, Compass, CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';
import childEducationImg from '../assets/images/child_education_planning_1790520194772.jpg';
import retirementImg from '../assets/images/retirement_planning_lifestyle_1790520211429.jpg';
import wealthCreationImg from '../assets/images/wealth_creation_growth_1790520227218.jpg';
import futureGoalsImg from '../assets/images/future_goals_home_1790520240225.jpg';

interface GoalPlanningProps {
  onSelectGoal: (goalName: string) => void;
}

interface GoalCardData {
  id: string;
  title: string;
  badge: string;
  image: string;
  tagline: string;
  icon: React.ElementType;
  horizon: string;
  description: string;
  keyBenefits: string[];
}

export const PlanningAreas: React.FC<GoalPlanningProps> = ({ onSelectGoal }) => {
  const [activeModal, setActiveModal] = useState<GoalCardData | null>(null);

  const goalCards: GoalCardData[] = [
    {
      id: 'child-education',
      title: 'CHILD EDUCATION PLANNING',
      badge: 'Family & Education',
      image: childEducationImg,
      tagline: "Build a disciplined investment plan for your child's future education expenses.",
      icon: GraduationCap,
      horizon: '7 to 18 Years',
      description:
        "College and higher education inflation consistently grows faster than regular retail inflation. Starting a goal-based mutual fund SIP early helps accumulate college fees systematically without needing costly education loans or distress borrowing.",
      keyBenefits: [
        'Mitigate double-digit higher education tuition inflation',
        'Systematic monthly allocation matching your family budget',
        'Transition to lower-risk capital protection before college admission',
      ],
    },
    {
      id: 'retirement-planning',
      title: 'RETIREMENT PLANNING',
      badge: 'Financial Independence',
      image: retirementImg,
      tagline: 'Start early and build a long-term investment plan for a financially prepared retirement.',
      icon: Landmark,
      horizon: '10 to 30 Years',
      description:
        "With increased life expectancy and escalating healthcare expenses, living comfortably without an active salary requires a planned nest egg. Systematic investing harnesses decades of compounding to construct a self-reliant retirement corpus.",
      keyBenefits: [
        'Protect your accustomed standard of living after retirement',
        'Beat inflation over 15 to 30 years through equity mutual fund compounding',
        'Disciplined wealth preservation through regular portfolio rebalancing',
      ],
    },
    {
      id: 'wealth-creation',
      title: 'WEALTH CREATION',
      badge: 'Long-Term Growth',
      image: wealthCreationImg,
      tagline: 'Build long-term wealth through disciplined investing aligned with your financial goals.',
      icon: TrendingUp,
      horizon: '5 to 15+ Years',
      description:
        "True wealth creation is not about guessing short-term market tops or bottoms. It comes from patient, disciplined monthly SIPs across well-diversified mutual fund categories that grow alongside India’s economic growth.",
      keyBenefits: [
        'Rupee-cost averaging reduces the impact of short-term market volatility',
        'Personalized risk-profile matching from conservative to aggressive',
        'Systematic compounding over 5, 10, or 20-year horizons',
      ],
    },
    {
      id: 'future-goals',
      title: 'FUTURE GOALS',
      badge: 'Life Milestones',
      image: futureGoalsImg,
      tagline: "Plan ahead for major goals such as a home, travel, children's milestones and other future needs.",
      icon: Compass,
      horizon: '3 to 10 Years',
      description:
        "Every major ambition—purchasing a new home, funding wedding celebrations, travel, or career transitions—deserves its own ring-fenced financial runway. Aligning specific mutual fund schemes to exact dates ensures peace of mind.",
      keyBenefits: [
        'Distinct milestone allocation so emergency funds are never touched',
        'Customized hybrid and equity portfolios matching exact timelines',
        'Clarity and confidence in making life milestone commitments',
      ],
    },
  ];

  return (
    <section id="goal-planning" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-[#00843D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Financial Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1D37] tracking-tight">
            Goal Planning Cards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Disciplined, goal-oriented mutual fund distribution planned around your family&apos;s most vital financial aspirations.
          </p>
        </div>

        {/* 4 Attractive Image-Based Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {goalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image with Horizon & Category Badges */}
                  <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37]/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-white/95 backdrop-blur-md text-[#0A1D37] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        {card.badge}
                      </span>
                      <span className="bg-[#00843D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        {card.horizon}
                      </span>
                    </div>

                    {/* Overlay Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#00843D] flex items-center justify-center shadow-md shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-sm">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* User Provided Tagline Quote */}
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      &ldquo;{card.tagline}&rdquo;
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 text-xs text-slate-600">
                      {card.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModal(card)}
                    className="text-xs font-bold text-slate-600 hover:text-[#00843D] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectGoal(card.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0A1D37] hover:bg-[#00843D] px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Start Planning</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal Exploration */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00843D] flex items-center justify-center shadow-xs">
                  <activeModal.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0A1D37]">{activeModal.title}</h3>
                  <span className="text-xs text-[#00843D] font-bold">Horizon: {activeModal.horizon}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900 italic bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-100 text-xs sm:text-sm">
                  &ldquo;{activeModal.tagline}&rdquo;
                </p>

                <div>
                  <h4 className="font-bold text-[#0A1D37] mb-1.5 text-xs uppercase tracking-wider">Strategic Overview</h4>
                  <p className="leading-relaxed text-xs sm:text-sm">{activeModal.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0A1D37] mb-2 text-xs uppercase tracking-wider">Key Benefits</h4>
                  <ul className="space-y-2">
                    {activeModal.keyBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
                  Mutual fund schemes are selected strictly based on your individual risk tolerance and investment timeframe. Mutual fund investments are subject to market risks.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const goal = activeModal.title;
                    setActiveModal(null);
                    onSelectGoal(goal);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-lg shadow-sm cursor-pointer"
                >
                  Plan {activeModal.title}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
