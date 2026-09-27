import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: 'disclaimer' | 'privacy' | 'commission') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Brand Info & Primary Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                ONE SOLUTION
              </h3>
              <p className="text-xs font-bold text-emerald-400 tracking-wider uppercase mt-0.5">
                Plan Today &amp; Build Tomorrow
              </p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mutual Fund Distribution, SIP Planning, Goal-Based Investment Planning, Wealth Creation and Retirement Planning.
            </p>

            {/* Tagline as specified */}
            <div className="pt-2 text-xs font-semibold text-slate-300">
              SIP | Goal Planning | Wealth Creation | Retirement Planning
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919962205989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+91 9962205989 (WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sip-calculator"
                  onClick={(e) => handleScrollTo(e, '#sip-calculator')}
                  className="hover:text-white transition-colors"
                >
                  SIP Calculator
                </a>
              </li>
              <li>
                <a
                  href="#planning-areas"
                  onClick={(e) => handleScrollTo(e, '#planning-areas')}
                  className="hover:text-white transition-colors"
                >
                  Goal Planning
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleScrollTo(e, '#why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why One Solution
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleScrollTo(e, '#how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Chennai Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  No. 36/13, Chitlapakkam 2nd Main Road,<br />
                  Tambaram Sanatorium,<br />
                  Chennai – 600047, Tamil Nadu.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919962205989" className="hover:text-white transition-colors">
                  +91 9962205989
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:mailtoonesolution@gmail.com" className="hover:text-white transition-colors">
                  mailtoonesolution@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 font-mono">
                Website: onesolutioninvestments.in
              </li>
            </ul>
          </div>

        </div>

        {/* Section 10: Prominent Compliance & Regulatory Disclaimers */}
        <div className="border-t border-slate-800 pt-8 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Mandatory Statutory Compliance &amp; Risk Disclosure</span>
            </div>
            
            <p className="text-[12px] sm:text-xs text-slate-300 leading-relaxed font-normal">
              <strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</strong> Past performance is not indicative of future returns. Mutual fund units are market-linked instruments and their Net Asset Value (NAV) can fluctuate depending on prevailing equity and debt market conditions.
            </p>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong>One Solution</strong> is an AMFI-registered mutual fund distributor (MFD) offering regular mutual fund schemes. We do not provide guaranteed returns, assured returns, or risk-free products. None of the materials or calculation illustrations on this website constitute an assured forecast or promise of performance. Investors must independently assess suitability based on their individual financial situation and risk profile.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs pt-1 border-t border-slate-800 text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>AMFI Registered Mutual Fund Distributor</span>
              </div>
              <span>·</span>
              <button
                type="button"
                onClick={() => onOpenModal('commission')}
                className="hover:text-white underline transition-colors"
              >
                Commission Disclosure
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ONE SOLUTION. All rights reserved. Registered domain:{' '}
            <span className="font-mono text-slate-400">onesolutioninvestments.in</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenModal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Disclaimer
            </button>
            <span>·</span>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
