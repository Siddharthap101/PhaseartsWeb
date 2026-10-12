import React, { useState } from 'react';
import { NavigationPage, ProjectEntry } from '../../types';
import { PROJECTS_GALLERY, CLIENT_BRANDS, COMPANY_INFO } from '../../data/companyData';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Filter,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectProductForQuote?: (productName: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ 
  onNavigate, 
  onSelectProductForQuote 
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectEntry | null>(null);

  const cities = ['All', 'Pune', 'Kolhapur', 'Sangli'];
  const signageTypes = ['All', 'Liquid Acrylic', 'Trimcap', 'Trimless', 'SS Stainless Steel', 'ACP Fascia'];

  const filteredProjects = PROJECTS_GALLERY.filter((project) => {
    const matchesCity = selectedCity === 'All' || project.location.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesType = selectedType === 'All' || project.signageType.toLowerCase().includes(selectedType.toLowerCase().replace(' acrylic', '').replace(' stainless steel', ''));
    return matchesCity && matchesType;
  });

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header & Brand Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <span>Section 6 · Portfolio & Approved Client References</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">16 Major Brands</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Completed Signage Projects & Approved Brand References
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Explore our installations executed for national retail chains, corporate infrastructure, and regional flagships across Pune, Kolhapur, Sangli, and Maharashtra.
        </p>

        {/* Legal notice requirement from Section 6 */}
        <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Editorial & Brand Disclosure:</strong> All displayed project references correspond to signage fabrication, channel letter manufacturing, or ACP facade works undertaken for or on behalf of approved client brands. Client trade names and logos remain the registered trademarks of their respective proprietors.
          </span>
        </div>
      </section>

      {/* 2. Approved Brand Roster (16 Brands) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-6 space-y-4">
          <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider block">
            Approved Brand Relationships & Signage Deployments
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {CLIENT_BRANDS.map((brand) => (
              <div
                key={brand}
                className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-center flex flex-col items-center justify-center min-h-[64px]"
              >
                <span className="text-xs font-bold text-slate-200">{brand}</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Approved Signage</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filter Bar & Projects Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          {/* City filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              City:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCity === city
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {city === 'All' ? 'All Locations' : city}
              </button>
            ))}
          </div>

          {/* Type filters */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              Signage Type:
            </span>
            {signageTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedType === type
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="relative h-60 bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.clientBrand} signage by Phase Arts`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white bg-slate-950/90 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-800">
                      {project.clientBrand}
                    </span>
                    <span className="text-[11px] font-mono text-amber-400 bg-slate-950/90 px-2 py-0.5 rounded border border-slate-800">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.signageType}
                    </h3>
                    <span className="text-[11px] text-amber-400 font-medium block mt-0.5">
                      Category: {project.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Dimensions:</span>
                      <span className="text-slate-300 font-mono font-medium">{project.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Illumination:</span>
                      <span className="text-slate-300 truncate max-w-[180px]">{project.illumination}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  View Details & Specs
                </button>
                <button
                  onClick={() => {
                    if (onSelectProductForQuote) onSelectProductForQuote(`${project.clientBrand} Style: ${project.signageType}`);
                    onNavigate('quote');
                  }}
                  className="py-2 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Quote Similar Sign
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 text-sm">No projects matching your selected filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCity('All');
                setSelectedType('All');
              }}
              className="text-xs font-semibold text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Interactive Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-64 bg-slate-950">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.clientBrand}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/90 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-white block">{activeModalProject.clientBrand}</span>
                  <span className="text-xs text-amber-400">{activeModalProject.signageType}</span>
                </div>
                <span className="text-xs font-mono text-slate-400">{activeModalProject.location}</span>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  Project Execution Brief
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block">Dimensions:</span>
                  <span className="text-white font-mono font-semibold">{activeModalProject.dimensions}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Year of Installation:</span>
                  <span className="text-white font-mono font-semibold">{activeModalProject.year}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Lighting System:</span>
                  <span className="text-white font-medium">{activeModalProject.illumination}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Industry Sector:</span>
                  <span className="text-white font-medium">{activeModalProject.category}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">Materials Deployed:</span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.materials.map((m, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/60">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const brand = activeModalProject.clientBrand;
                    const type = activeModalProject.signageType;
                    setActiveModalProject(null);
                    if (onSelectProductForQuote) onSelectProductForQuote(`${brand} Style: ${type}`);
                    onNavigate('quote');
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Request Quote for Similar Signage
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
