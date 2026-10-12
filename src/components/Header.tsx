import React, { useState } from 'react';
import { NavigationPage } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenQuickQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: NavigationPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products & Machinery', page: 'products' },
    { label: 'Projects & Brands', page: 'projects' },
    { label: 'Exhibitions & Events', page: 'exhibitions' },
    { label: 'Request a Quote', page: 'quote' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Main Header - Simplified */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Brand */}
        <button
          onClick={() => handleNav('home')}
          className="text-left group flex items-center gap-2 cursor-pointer focus-visible:outline-none whitespace-nowrap shrink-0"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Phase Arts
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quote Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={() => handleNav('quote')}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNav('quote')}
            className="px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg cursor-pointer"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-3 sm:px-4 pt-3 pb-6 space-y-1">
          <div className="pb-3 border-b border-slate-800/80 mb-3 text-[10px] sm:text-xs text-slate-400">
            <span>Pan India Operations</span>
          </div>
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => handleNav('quote')}
              className="w-full text-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
