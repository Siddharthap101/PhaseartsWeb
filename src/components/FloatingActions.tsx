import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { NavigationPage } from '../types';

interface FloatingActionsProps {
  onNavigate: (page: NavigationPage) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onNavigate }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Actions at bottom right */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 shadow-lg hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent('Hello Phase Arts, I want to inquire about signage for my business.')}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs shadow-xl shadow-emerald-500/20 transition-all transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Fast Desk</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Strip (capped under 15% mobile viewport height) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-2 sm:py-2.5 px-3 sm:px-4 flex items-center justify-between gap-2">
        <a
          href={`tel:${COMPANY_INFO.supportPhoneRaw}`}
          className="flex-1 py-1.5 sm:py-2 text-center text-[10px] sm:text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent('Hello Phase Arts, I have a signage inquiry.')}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-1.5 sm:py-2 text-center text-[10px] sm:text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => {
            onNavigate('quote');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 py-1.5 sm:py-2 text-center text-[10px] sm:text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg"
        >
          Quote
        </button>
      </div>
    </>
  );
};
