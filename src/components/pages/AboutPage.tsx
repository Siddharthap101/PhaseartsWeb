import React from 'react';
import { NavigationPage } from '../../types';
import { COMPANY_INFO, OFFICE_LOCATIONS, TESTIMONIALS } from '../../data/companyData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  Cpu, 
  MapPin, 
  Users, 
  Award, 
  Clock, 
  ArrowRight,
  Hammer
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 lg:space-y-24 py-8">
      {/* 1. Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <span>About Phase Arts</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Company Profile & Engineering Scope</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Architectural Signage with Industrial Discipline
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Phase Arts Signage Manufacturing Company is an industrial signage fabrication enterprise headquartered in Maharashtra, operating active customer coordination and manufacturing facilities in Pune, Kolhapur, and Sangli.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Capabilities Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Precision Letter Bending to Turnkey Commercial Elevation
            </h2>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Founded to bridge the gap between hand-crafted sign making and automated industrial manufacturing, Phase Arts has built a state-of-the-art facility equipped with high-precision CNC routers, fiber laser cutters, automated channel letter benders, and proprietary liquid resin UV curing ovens.
              </p>
              <p>
                We collaborate closely with corporate procurement directors, principal architects, retail interior designers, and independent business owners to translate visual identities into durable, weatherproof physical installations.
              </p>
              <p>
                With full-service presence across Pune (PCMC), Kolhapur, and Sangli, our engineering teams provide localized site audits, structural wind-load planning, CDR vector auditing, and on-site certified crane rigging.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs font-medium text-amber-400 block">Quality Standard</span>
                <span className="text-base font-bold text-white mt-1 block">Zero Hotspot Illumination</span>
                <p className="text-xs text-slate-400 mt-1">Wide-angle IP67 Samsung LED modules calibrated to exact kelvin color temperatures.</p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs font-medium text-amber-400 block">Metal Standard</span>
                <span className="text-base font-bold text-white mt-1 block">Marine Grade SS 304/316</span>
                <p className="text-xs text-slate-400 mt-1">Laser welded profiles with zero outdoor corrosion and salt-spray resistance.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={`${import.meta.env.BASE_URL}images/hero_signage_factory_1791795584841.jpg`}
                alt="Phase Arts Signage Factory Floor"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover"
              />
              <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono text-amber-400 font-semibold">In-House Manufacturing Works</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every letterform is CNC grooved, automatically bent, and cured under controlled wavelength parameters before leaving our factory floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. B2B & B2C Audience Spectrum (From Planning Doc Section 8) */}
      <section className="bg-slate-900/40 border-y border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Target Clients & Market Spectrum
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Built for Both Institutional B2B & Retail B2C Customers
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Tailored services and workflows designed for corporate procurement scale as well as local commercial agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B2B Card */}
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white block">B2B Institutional Solutions</span>
                  <span className="text-xs text-amber-400 font-medium">Architects · Builders · Corporate Retail Chains</span>
                </div>
                <Building className="w-8 h-8 text-amber-400" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive support for multi-outlet rollouts, architectural blueprints, bill-of-quantities (BOQ), and turnkey ACP elevation cladding.
              </p>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Architects & Interior Designers:</strong> Direct 3D shop drawings, lighting Lux calculations, and bespoke material sampling.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Retail Chains & Brands:</strong> Multi-city synchronous rollouts across Maharashtra with unified color accuracy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Signage Dealers & Resellers:</strong> Bulk fabricated letter supplies, trimcap coils, and wholesale contract fabrication.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Builders & Infrastructure:</strong> Structural steel canopy signage, highway totems, and residential entrance monuments.</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Request B2B Corporate Consultation
                </button>
              </div>
            </div>

            {/* B2C Card */}
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white block">B2C Commercial Solutions</span>
                  <span className="text-xs text-amber-400 font-medium">Shop Owners · Restaurants · Local Showrooms</span>
                </div>
                <Users className="w-8 h-8 text-amber-400" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Direct-to-business personalized sign design, measurement visits, and budget-friendly illuminated letter options that elevate storefront curb appeal.
              </p>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Retail Storefront Owners:</strong> High-impact front-lit letters and clean ACP fascia designed to attract footfall.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Restaurants & Lounges:</strong> Warm halo-lit lettering, neon flex accents, and aesthetic entrance signboards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Clinics & Professional Offices:</strong> Crisp brushed stainless steel plaques, frosted acrylic boards, and directional signs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>On-Site Measurement:</strong> Our Pune, Kolhapur, and Sangli teams visit your location for accurate site dimensions.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent('Hello Phase Arts, I need a new signage board for my shop.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center py-2.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-800/40 rounded-lg transition-colors"
                >
                  Chat with Local Store Signage Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tri-City Footprint Details (Pune, Kolhapur, Sangli) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
            Regional Presence & Operations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Official Operational Presence
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Phase Arts operates verified offices and coordination facilities across Maharashtra to provide swift service without intermediate delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICE_LOCATIONS.map((office) => (
            <div key={office.city} className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-white">{office.city} Office</span>
                <MapPin className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-xs text-amber-400/90 font-medium">{office.tag}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{office.address}</p>

              <div className="space-y-1 pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-500 block font-medium">Core Responsibilities:</span>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  {office.servicesHandled.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{office.phone}</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  View Details & Map →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials / Verified Case Evidence */}
      <section className="bg-slate-900/20 border-t border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Client Feedback & References
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Project Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-800/80 pt-4">
                  <span className="text-xs font-bold text-white block">{t.author}</span>
                  <span className="text-[11px] text-amber-400 block">{t.role}</span>
                  <span className="text-[11px] text-slate-500 block">{t.firm}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
