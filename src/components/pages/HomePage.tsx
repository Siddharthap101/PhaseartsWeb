import React from 'react';
import { NavigationPage } from '../../types';
import { COMPANY_INFO, SIGNAGE_PRODUCTS, CLIENT_BRANDS, OFFICE_LOCATIONS, MACHINERY_LIST } from '../../data/companyData';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectProductForQuote?: (productName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProductForQuote }) => {
  const featuredProducts = SIGNAGE_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium text-amber-400">
                <span>Phase Arts Signage Manufacturing</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">Pan India Operations</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Precision Signage Engineering & Architectural Elevation
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
                We manufacture premium liquid acrylic letters, trimcap and trimless channel letters, heavy-duty stainless steel signage, and turnkey ACP elevation works. Serving architects, retail chains, and corporate brands across India.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('quote')}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-lg shadow-amber-400/10 whitespace-nowrap"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent('Hello Phase Arts, I would like to inquire about signage manufacturing and quotes.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-3 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore Machinery & Materials
                </button>
              </div>

              {/* Proof kicker */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  In-House CNC & Fiber Laser
                </span>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  Direct CDR File Audits
                </span>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  Turnkey Rigging & Installation
                </span>
              </div>
            </div>

            {/* Right Column: High-Fidelity Focal Carrier */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src="/src/assets/images/hero_signage_factory_1791795584841.jpg"
                  alt="Phase Arts Signage Manufacturing Facility and Letter Fabrication"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Visual badge inside image */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3.5 bg-slate-950/90 backdrop-blur-md rounded-lg sm:rounded-xl border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-[10px] sm:text-xs">
                    <div>
                      <span className="text-white font-semibold block">Phase Arts Production Facility</span>
                      <span className="text-slate-400"> Savlaj Taluka: Tasgaon, District: Sangli, Maharashtra</span>
                    </div>
                    <span className="text-amber-400 font-mono text-[10px] sm:text-[11px] font-semibold">Best Quality Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column Infrastructure & Regional Presence Strip */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="group p-3 sm:p-4 md:p-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono tabular-nums group-hover:text-amber-400 transition-colors">Pan India</span>
              <p className="text-[10px] sm:text-xs text-amber-400 font-medium mt-1.5 sm:mt-2">Nationwide Operations</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Regional coordination, fabrication, and customer desks across India</p>
            </div>

            <div className="group p-3 sm:p-4 md:p-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono tabular-nums group-hover:text-amber-400 transition-colors">16+ Brands</span>
              <p className="text-[10px] sm:text-xs text-amber-400 font-medium mt-1.5 sm:mt-2">Approved Client Portfolio</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Samsung, Jio, Jockey, Adani, Allen Solly, L'Oréal</p>
            </div>

            <div className="group p-3 sm:p-4 md:p-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono tabular-nums group-hover:text-amber-400 transition-colors">100% In-House</span>
              <p className="text-[10px] sm:text-xs text-amber-400 font-medium mt-1.5 sm:mt-2">Machinery & Tooling</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">CNC Routers, Auto Benders, Fiber Laser, UV Curing</p>
            </div>

            <div className="group p-3 sm:p-4 md:p-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono tabular-nums group-hover:text-amber-400 transition-colors">Total Project</span>
              <p className="text-[10px] sm:text-xs text-amber-400 font-medium mt-1.5 sm:mt-2">Sucessful Projects</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">10k+ Project Completed </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Signage Product Categories */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
              Signage Manufacturing Spectrum
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              Engineered Letter Profiles & Dimensional Signage
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <span>View All Categories & Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-950">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  <span className="absolute top-2 sm:top-3 right-2 sm:right-3 text-[10px] sm:text-[11px] font-mono bg-amber-500/90 text-slate-950 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-semibold shadow-lg">
                    {product.name.includes('Liquid') ? 'Seamless Gloss' : 'Precision CNC'}
                  </span>
                </div>

                <div className="p-4 sm:p-5 space-y-3 sm:space-y-4 relative">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {product.tagline}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-[11px]">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>{product.specifications['Letter Height Range'] || 'Custom Scaled'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>XSYIP 67 12V LED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 relative">
                <button
                  onClick={() => {
                    if (onSelectProductForQuote) onSelectProductForQuote(product.name);
                    onNavigate('quote');
                  }}
                  className="w-full py-2.5 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer text-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. In-House Machinery & Advanced Tooling */}
      <section className="bg-slate-900/40 border-y border-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="text-[10px] sm:text-xs font-semibold text-amber-400 tracking-wider uppercase">
                Manufacturing Infrastructure
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                Equipped with Industrial CNC, Laser & Liquid Curing Systems
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Phase Arts operates industrial machinery ensuring sub-millimeter cutting accuracy, automated letter bending, and rapid photopolymer liquid curing without manual imperfections.
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-2 text-[10px] sm:text-xs">
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Automatic CNC Profile Benders</span>
                    <span className="text-slate-400">Notches and forms aluminum and SS returns in seconds directly from vector files.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Fiber Laser & Heavy Spindle Routers</span>
                    <span className="text-slate-400">Clean dross-free metal cutting and precise step-grooving on cast acrylic & ACP sheets.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">UV Liquid Resin Curing Tunnel</span>
                    <span className="text-slate-400">Uniform degassing and wavelength curing delivering glass-grade clarity.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  View Complete Machinery Inventory
                </button>
              </div>
            </div>

            {/* Visual machinery image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src="/src/assets/images/machinery_cnc_laser_1791795622601.jpg"
                  alt="Automatic CNC Signage Letter Bending and Fiber Laser Machine"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-[10px] sm:text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-800">
                  <span>In-House Metal Fabrication & Letter Flange Forming</span>
                  <span className="text-amber-400 font-mono font-medium">±0.025 mm Precision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACP Works as per Requirement Spotlight */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src="/src/assets/images/acp_cladding_elevation_1791795639245.jpg"
                alt="Architectural ACP Sheet Elevation and Storefront Fascia"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-[10px] sm:text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-800">
                <span className="font-semibold text-white block">Commercial Elevation Transformation</span>
                <span className="text-slate-400">Eurobond & Alstone PVDF Grade ACP Cladding with Integrated Lighting</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-5">
            <div className="text-[10px] sm:text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Section 5 · Architectural Cladding
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              ACP Works & Building Elevation as per Requirement
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Phase Arts undertakes customized Aluminium Composite Panel (ACP) works tailored to client specifications across Pune, Kolhapur, and Sangli. We engineer the complete package from structural iron framing to sheet routing and final signage mounting.
            </p>

            <ul className="space-y-2 sm:space-y-2.5 text-[10px] sm:text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>Customized ACP signage and retail fascia fabrication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>Precision CNC sheet V-grooving for seamless 90° corners</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>High-durability structural MS sub-framing with anti-corrosion primer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>Supply, transportation, and safe certified on-site facade installation</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  if (onSelectProductForQuote) onSelectProductForQuote('Custom ACP Works & Elevation');
                  onNavigate('quote');
                }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Request ACP Elevation Quote
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-medium text-slate-300 hover:text-white border border-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Consult Regional Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Approved Brand Client Portfolio (16 Brands) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
            Approved Client References & Brands
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Trusted by Leading Corporate & Retail Brands
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Signage fabrication and rollout references across telecom, apparel, automotive, electronics, and food enterprises.
          </p>
        </div>

        {/* 16 Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {CLIENT_BRANDS.map((brand) => (
            <div
              key={brand}
              onClick={() => onNavigate('projects')}
              className="p-3 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-amber-400/50 rounded-lg text-center transition-all cursor-pointer group flex flex-col items-center justify-center min-h-[70px]"
            >
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                {brand}
              </span>
              <span className="text-[10px] text-slate-500 group-hover:text-amber-400 mt-0.5">
                Verified Signage
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <span>Explore Completed Projects Gallery & Brand Installations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. Tri-City Office Footprint (Pune · Kolhapur · Sangli) */}
      <section className="bg-slate-900/30 border-t border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                Maharashtra Operational Reach
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Three Dedicated Offices in Pune, Kolhapur & Sangli
              </h2>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>View Full Addresses & Interactive Maps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICE_LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{loc.city} Office</span>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      Maharashtra
                    </span>
                  </div>
                  <p className="text-xs text-amber-400/90 font-medium">{loc.tag}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{loc.address}</p>

                  <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <div>
                      <span className="text-slate-500">Direct Phone: </span>
                      <a href={`tel:${loc.phoneRaw}`} className="text-white hover:text-amber-400 font-mono">
                        {loc.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500">Email: </span>
                      <a href={`mailto:${loc.email}`} className="text-white hover:text-amber-400 font-mono">
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/60 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${loc.whatsappRaw}?text=${encodeURIComponent(`Hello Phase Arts ${loc.city} office, I have a project inquiry.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 text-center text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-800/40 rounded-lg transition-colors"
                  >
                    WhatsApp {loc.city}
                  </a>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="py-2 px-3 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/60 rounded-lg cursor-pointer"
                  >
                    View Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Conversion Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Direct B2B & B2C Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Have a Design or Signage Requirement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Upload your CDR vector file or describe your signage dimensions. Our technical team prepares instant quotations and structural drawings within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-md"
            >
              Submit Design / Get Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.supportPhoneRaw}`}
              className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center"
            >
              Call {COMPANY_INFO.supportPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
