import React from 'react';
import { NavigationPage } from '../types';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../data/companyData';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Upper Offices Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-white">Phase Arts</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              </div>
              <span className="text-xs text-amber-400 font-medium tracking-wide uppercase">Signage Manufacturing Company</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial signage manufacturing, optical liquid letters, CNC profile bending, fiber laser cutting, and turnkey architectural ACP elevation across India.
            </p>
            <div className="pt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <span className="text-amber-400 text-xs font-mono">WEB</span>
                </div>
                <a href={`https://${COMPANY_INFO.domain}`} target="_blank" rel="noreferrer" className="text-white hover:text-amber-400 font-mono text-xs transition-colors">
                  {COMPANY_INFO.domain}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <a href={`tel:${COMPANY_INFO.supportPhoneRaw}`} className="text-white hover:text-amber-400 font-mono text-xs transition-colors">
                  {COMPANY_INFO.supportPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href={`mailto:${COMPANY_INFO.generalEmail}`} className="text-white hover:text-amber-400 font-mono text-xs transition-colors">
                  {COMPANY_INFO.generalEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Pune Office */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold pb-2 border-b border-slate-800/50">
              <div className="p-1.5 bg-amber-500/10 rounded-lg">
                <MapPin className="w-4 h-4 text-amber-400" />
              </div>
              <span>Pune Office</span>
            </div>
            <div className="p-4 bg-slate-900/30 rounded-xl border border-slate-800/50 space-y-3 hover:border-amber-500/30 transition-colors">
              <p className="text-xs text-slate-400 leading-relaxed">
                {OFFICE_LOCATIONS[0].address}
              </p>
              <div className="space-y-2 text-xs">
                <a href={`tel:${OFFICE_LOCATIONS[0].phoneRaw}`} className="flex items-center gap-2 text-slate-200 hover:text-amber-400 font-mono transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  {OFFICE_LOCATIONS[0].phone}
                </a>
                <a href={`mailto:${OFFICE_LOCATIONS[0].email}`} className="flex items-center gap-2 text-slate-200 hover:text-amber-400 font-mono transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {OFFICE_LOCATIONS[0].email}
                </a>
              </div>
              <p className="text-amber-400/80 text-[11px] pt-2 font-medium">
                Regional Hub · Project Consultation
              </p>
            </div>
          </div>

          {/* Col 3: Kolhapur & Sangli Offices */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold pb-2 border-b border-slate-800/50">
              <div className="p-1.5 bg-amber-500/10 rounded-lg">
                <MapPin className="w-4 h-4 text-amber-400" />
              </div>
              <span>Regional Offices</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-slate-900/30 rounded-xl border border-slate-800/50 space-y-2 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-2 text-white font-medium text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Kolhapur Works</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                  {OFFICE_LOCATIONS[1].address}
                </p>
                <a href={`tel:${OFFICE_LOCATIONS[1].phoneRaw}`} className="text-slate-200 hover:text-amber-400 font-mono text-[11px] transition-colors">
                  {OFFICE_LOCATIONS[1].phone}
                </a>
              </div>

              <div className="p-3 bg-slate-900/30 rounded-xl border border-slate-800/50 space-y-2 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-2 text-white font-medium text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Sangli Office</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                  {OFFICE_LOCATIONS[2].address}
                </p>
                <a href={`tel:${OFFICE_LOCATIONS[2].phoneRaw}`} className="text-slate-200 hover:text-amber-400 font-mono text-[11px] transition-colors">
                  {OFFICE_LOCATIONS[2].phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Action */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold pb-2 border-b border-slate-800/50">
              <div className="p-1.5 bg-amber-500/10 rounded-lg">
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </div>
              <span>Quick Links</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer text-left group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                  Signage Letters & CNC Machinery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer text-left group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                  Custom ACP Elevation & Fascia Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer text-left group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                  Approved Brand Projects (16 Brands)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('exhibitions')} 
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer text-left group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                  Exhibitions & Machinery Demos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer text-left group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                  Office Maps & Location Details
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('quote')}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all duration-300 cursor-pointer shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Phase Arts Signage Manufacturing Company. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>B2B Commercial & B2C Turnkey Signage</span>
            <span aria-hidden="true">·</span>
            <span>Pan India Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
