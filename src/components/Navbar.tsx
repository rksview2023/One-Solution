import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenEnquiry: (goal?: string) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'SIP Calculator', href: '#sip-calculator' },
    { label: 'Goal Planning', href: '#goal-planning' },
    { label: 'Why One Solution', href: '#why-us' },
    { label: 'Investment Journey', href: '#investment-journey' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Professional Regulatory & Quick Support Banner */}
      <div className="bg-[#0A1D37] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-600/40 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              AMFI Registered Mutual Fund Distributor
            </span>
            <span className="hidden md:inline text-slate-400 text-[11px]">
              · Tambaram Sanatorium, Chennai
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919962205989"
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 9962205989</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline font-mono text-[11px] text-emerald-400/90 font-medium">
              onesolutioninvestments.in
            </span>
          </div>
        </div>
      </div>

      {/* Main Premium Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with exact original identity */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center py-1 transition-opacity hover:opacity-90"
              aria-label="One Solution - Home"
            >
              <Logo size="md" imgClassName="h-10 sm:h-11 md:h-12" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold text-slate-700 hover:text-[#00843D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#00843D] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side Buttons: WhatsApp Us + Start Enquiry */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20know%20more%20about%20starting%20a%20goal-based%20SIP."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Us</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0A1D37] hover:bg-slate-800 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>Start Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center lg:hidden gap-2">
              <a
                href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20discuss%20an%20investment%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-[#00843D] rounded-lg shadow-xs"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#00843D] hover:bg-emerald-50/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20discuss%20an%20investment%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us (+91 9962205989)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Calculate Your SIP
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-bold text-white bg-[#0A1D37] hover:bg-slate-800 rounded-lg shadow-xs"
              >
                Start Your Enquiry
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
