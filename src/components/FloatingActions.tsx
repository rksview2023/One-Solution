import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-800/90 text-white shadow-md hover:bg-slate-700 flex items-center justify-center transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+919962205989"
        className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3 py-2.5 rounded-full shadow-lg hover:bg-slate-800 transition-all border border-slate-700"
        title="Call One Solution"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400" />
        <span>+91 9962205989</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20know%20more%20about%20starting%20an%20investment%20plan."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
