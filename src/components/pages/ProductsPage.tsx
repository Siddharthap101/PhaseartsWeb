import React, { useState } from 'react';
import { NavigationPage } from '../../types';
import { SIGNAGE_PRODUCTS, MACHINERY_LIST, COMPANY_INFO } from '../../data/companyData';
import { 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Settings, 
  Package, 
  Building2,
  FileCheck2,
  Info
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectProductForQuote?: (productName: string) => void;
}

type TabType = 'all' | 'letters' | 'machinery' | 'acp' | 'materials' | 'services';

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onNavigate, 
  onSelectProductForQuote 
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedMachineModal, setSelectedMachineModal] = useState<string | null>(null);

  const tabs: { key: TabType; label: string; count: number }[] = [
    { key: 'all', label: 'All Offerings', count: SIGNAGE_PRODUCTS.length + MACHINERY_LIST.length },
    { key: 'letters', label: 'Signage Letters (5 Types)', count: SIGNAGE_PRODUCTS.filter(p => p.category === 'letters').length },
    { key: 'machinery', label: 'Machinery & Equipment (7 Units)', count: MACHINERY_LIST.length },
    { key: 'acp', label: 'ACP Architectural Works', count: SIGNAGE_PRODUCTS.filter(p => p.category === 'acp').length },
    { key: 'materials', label: 'Materials & Rolls', count: SIGNAGE_PRODUCTS.filter(p => p.category === 'materials').length },
    { key: 'services', label: 'Installation Services', count: SIGNAGE_PRODUCTS.filter(p => p.category === 'services').length },
  ];

  const filteredProducts = activeTab === 'all'
    ? SIGNAGE_PRODUCTS
    : SIGNAGE_PRODUCTS.filter((p) => p.category === activeTab);

  const showMachinery = activeTab === 'all' || activeTab === 'machinery';

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <span>Products, Machinery & Capabilities</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Section 3, 4 & 5 Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Precision Signage, Advanced Machinery & Turnkey Fabrication
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          From optical-grade liquid letters and heavy stainless steel profiles to automatic CNC bending machinery, raw trimcap coils, and structural ACP elevation works.
        </p>

        {/* Clean segmented filter control */}
        <div className="pt-4 flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`ml-1.5 text-[10px] ${activeTab === tab.key ? 'text-slate-800 font-bold' : 'text-slate-500'}`}>
                ({tab.count})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 2. Signage Letters & Core Products Section */}
      {filteredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-900 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Signage Profiles & Architectural Facade Works
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Showing {filteredProducts.length} Items
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-72 bg-slate-950 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-950/90 text-amber-400 border border-slate-800 backdrop-blur-sm">
                        {product.category.toUpperCase()}
                      </span>
                      {product.isPopular && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400 text-slate-950">
                          High Demand
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white tracking-tight">{product.name}</h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1">{product.tagline}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block">
                        Engineering Highlights
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {product.keyFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications Table */}
                    <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase block">
                        Technical Specifications
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {Object.entries(product.specifications).map(([key, val]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-[11px] text-slate-500">{key}:</span>
                            <span className="text-slate-200 font-medium font-mono">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Finishes if available */}
                    {product.finishes && (
                      <div className="space-y-1.5">
                        <span className="text-xs font-semibold text-slate-400 block">Available Finishes:</span>
                        <div className="flex flex-wrap gap-1.5 text-xs">
                          {product.finishes.map((f, idx) => (
                            <span key={idx} className="text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span>Direct Inquiries: Pune · Kolhapur · Sangli</span>
                  </div>
                  <button
                    onClick={() => {
                      if (onSelectProductForQuote) onSelectProductForQuote(product.name);
                      onNavigate('quote');
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Machinery & Equipment Section (Section 4) */}
      {showMachinery && (
        <section className="bg-slate-900/30 border-y border-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span>Section 4 · Industrial Machinery</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">In-House Production & Equipment Supply</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Machinery & Fabrication Equipment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Phase Arts operates industrial letter-making machinery. As specified in company guidelines, machines are deployed for in-house contract fabrication, customer project execution, and approved commercial demonstrations.
              </p>
              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Management Clarification Note:</strong> Equipment is utilized for internal high-volume manufacturing and contract fabrication for sign makers. Inquiries for machine purchase, tooling supply, or live factory demonstrations are handled via our Kolhapur and Pune engineering desks.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MACHINERY_LIST.map((machine) => (
                <div
                  key={machine.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wide">
                        {machine.category} equipment
                      </span>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {machine.commercialStatus === 'Commercial Supply & Demonstrations' ? 'Demo / Supply' : 'In-House Core'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug">
                      {machine.name}
                    </h3>
                    <p className="text-xs text-amber-300 font-medium leading-relaxed">
                      {machine.capability}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {machine.description}
                    </p>

                    {/* Tech specs */}
                    <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300 space-y-1.5 font-mono">
                      {machine.techSpecs.workingArea && (
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500 font-sans">Bed Area:</span>
                          <span className="text-slate-300">{machine.techSpecs.workingArea}</span>
                        </div>
                      )}
                      {machine.techSpecs.powerLaser && (
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500 font-sans">Power/Spindle:</span>
                          <span className="text-slate-300">{machine.techSpecs.powerLaser}</span>
                        </div>
                      )}
                      {machine.techSpecs.materialsHandled && (
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500 font-sans">Materials:</span>
                          <span className="text-slate-300 text-right truncate max-w-[180px]">{machine.techSpecs.materialsHandled}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        if (onSelectProductForQuote) onSelectProductForQuote(`Machinery / Contract: ${machine.name}`);
                        onNavigate('quote');
                      }}
                      className="w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-slate-950 bg-slate-800 hover:bg-amber-400 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Inquire on Machine / Job Work
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. ACP Works as per Requirement Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Section 5 Detail · ACP Works as per Requirement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Customized ACP Signage, Sheet Fabrication & Elevation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We communicate transparently with clients that Phase Arts undertakes ACP-related work according to customized customer requirements, subject to site feasibility, structural framing drawings, and approved service capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
              <span className="text-sm font-bold text-white block">Custom Fascia & Canopy</span>
              <p className="text-xs text-slate-400">Storefront fascias, showroom entrance portals, and weather-sealed overhangs.</p>
            </div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
              <span className="text-sm font-bold text-white block">Sheet V-Grooving</span>
              <p className="text-xs text-slate-400">Automated CNC V-groove scoring allowing sharp 90-degree folding without paint cracking.</p>
            </div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
              <span className="text-sm font-bold text-white block">Structural Sub-Framing</span>
              <p className="text-xs text-slate-400">Rigid MS box section tubular framing with anti-corrosion primer and wind load safety.</p>
            </div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
              <span className="text-sm font-bold text-white block">Supply & Installation</span>
              <p className="text-xs text-slate-400">Complete end-to-end execution across Pune (PCMC), Kolhapur, and Sangli regions.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                if (onSelectProductForQuote) onSelectProductForQuote('Custom ACP Works as per Requirement');
                onNavigate('quote');
              }}
              className="px-5 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Request ACP Elevation Site Quote
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent('Hello Phase Arts, I want to discuss ACP elevation works.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 rounded-lg transition-colors"
            >
              Chat with Elevation Team on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
