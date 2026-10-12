import React from 'react';
import { NavigationPage } from '../../types';
import { EXHIBITIONS_AND_EVENTS, COMPANY_INFO } from '../../data/companyData';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Video, 
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';

interface ExhibitionsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ExhibitionsPage: React.FC<ExhibitionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-8">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <span>Section 10 · Exhibitions, Demos & Industry Events</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Signage Expo & Technical Sessions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Exhibition Highlights, Machinery Demonstrations & Events
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Phase Arts regularly participates in national signage expos, conducts live factory machinery demonstrations, and hosts technical sessions for architects and corporate branding directors.
        </p>

        {/* Management note */}
        <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Management Notice:</strong> Live factory demonstrations at Shiroli Works (Kolhapur) or Bhosari (Pune) are scheduled strictly by prior appointment for trade partners, builders, and corporate procurement teams.
          </span>
        </div>
      </section>

      {/* 2. Events & Demonstrations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EXHIBITIONS_AND_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded font-semibold">
                    {event.badge}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {event.dates}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-400 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{event.location}</span>
                </p>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {event.description}
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                    Session Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {event.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent(`Hello Phase Arts, I want to attend or inquire about ${event.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block py-2.5 px-3 text-center text-xs font-semibold text-slate-200 hover:text-slate-950 bg-slate-800 hover:bg-amber-400 rounded-lg transition-colors"
                >
                  Schedule Appointment for Event
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product Demonstrations & Video Walkthrough Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Manufacturing Video & Demo Archives
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Live Factory Machinery Demonstrations
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Watch how our automated channel letter bending equipment forms razor-sharp 3D returns in stainless steel and aluminum, followed by optical liquid resin UV curing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">CNC Letter Bender</span>
                    <span className="text-slate-500 text-[11px]">Sub-millimeter profile bending</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Liquid Resin Curing</span>
                    <span className="text-slate-500 text-[11px]">Bubble-free optical hardening</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
                <img
                  src="/src/assets/images/machinery_cnc_laser_1791795622601.jpg"
                  alt="Signage Machinery Demonstration"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent('Hello Phase Arts, please send video demonstrations of liquid letters and CNC bending.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 transition-transform transform hover:scale-110 shadow-lg cursor-pointer"
                    title="Request Demo Video"
                  >
                    <Play className="w-6 h-6 fill-current" />
                  </a>
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-center text-[11px] text-slate-300 bg-slate-950/80 py-1 rounded">
                  Request High-Res Video Walkthrough on WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
        <div className="p-8 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-4 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white">
            Schedule a Private Factory Walkthrough
          </h3>
          <p className="text-xs text-slate-400">
            Visit our Kolhapur or Pune facilities to see live letter fabrication, examine material samples, and test illumination colors with our engineers.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            Contact Regional Coordinator
          </button>
        </div>
      </section>
    </div>
  );
};
