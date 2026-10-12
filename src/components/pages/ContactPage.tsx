import React, { useState } from 'react';
import { NavigationPage } from '../../types';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../../data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Send, 
  ExternalLink,
  Building,
  Navigation
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [selectedOfficeCity, setSelectedOfficeCity] = useState<'Pune' | 'Kolhapur' | 'Sangli'>('Pune');
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Pune');
  const [message, setMessage] = useState('');

  const activeOffice = OFFICE_LOCATIONS.find((o) => o.city === selectedOfficeCity) || OFFICE_LOCATIONS[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setContactFormSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <span>Section 9 · Three Official Maharashtra Offices</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Direct Contact & Maps</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Connect with Phase Arts in Pune, Kolhapur & Sangli
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Whether you need a site measurement visit in Pimpri-Chinchwad, factory inspection in Shiroli MIDC Kolhapur, or retail elevation in Sangli, our dedicated regional teams are ready to assist.
        </p>
      </section>

      {/* 2. Three Office Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICE_LOCATIONS.map((loc) => {
            const isSelected = selectedOfficeCity === loc.city;
            return (
              <div
                key={loc.city}
                onClick={() => setSelectedOfficeCity(loc.city)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 ring-1 ring-amber-400/50 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-white block">{loc.city} Office</span>
                      <span className="text-xs text-amber-400 font-medium">{loc.tag}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                      {loc.state}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                    {loc.address}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <a href={`tel:${loc.phoneRaw}`} className="text-white hover:text-amber-400 font-mono font-medium">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <a href={`mailto:${loc.email}`} className="text-slate-300 hover:text-amber-400 font-mono">
                        {loc.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-[11px]">{loc.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${loc.whatsappRaw}?text=${encodeURIComponent(`Hello Phase Arts ${loc.city} team, I am contacting you regarding a project inquiry.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2 text-center text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-800/40 rounded-lg transition-colors"
                  >
                    WhatsApp {loc.city}
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedOfficeCity(loc.city)}
                    className="py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
                  >
                    Active Map
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Interactive Office Detail & Google Map Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl font-bold text-white">
                  {activeOffice.city} Location & Navigation Map
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeOffice.address}
              </p>
            </div>

            {/* Quick city switcher */}
            <div className="flex items-center gap-2">
              {OFFICE_LOCATIONS.map((o) => (
                <button
                  key={o.city}
                  onClick={() => setSelectedOfficeCity(o.city)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedOfficeCity === o.city
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {o.city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Map Area (8 Cols) */}
            <div className="lg:col-span-8 relative h-80 sm:h-96 lg:h-[450px] bg-slate-950">
              <iframe
                title={`${activeOffice.city} Office Map`}
                src={activeOffice.mapEmbedUrl}
                className="w-full h-full border-0 filter invert contrast-125 opacity-90"
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 p-3 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                <span className="font-semibold text-white block">{activeOffice.city} Office</span>
                <span className="text-slate-400 text-[11px]">{activeOffice.landmark}</span>
              </div>
            </div>

            {/* Office Scope & Driving Directions (4 Cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 bg-slate-950/60 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                    Regional Scope & Services
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    What this office handles:
                  </h3>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {activeOffice.servicesHandled.map((serv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{serv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 block">Office Working Hours:</span>
                    <span className="text-slate-200 font-medium">{activeOffice.workingHours}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Direct Assistance:</span>
                    <a href={`tel:${activeOffice.phoneRaw}`} className="text-amber-400 font-mono font-semibold">
                      {activeOffice.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activeOffice.city} ${activeOffice.address}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps App</span>
                </a>

                <a
                  href={`https://wa.me/${activeOffice.whatsappRaw}?text=${encodeURIComponent(`Hello Phase Arts ${activeOffice.city} office, I need to schedule a meeting / inquiry.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp {activeOffice.city} Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Direct Contact Message Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Send a Direct Message to Any Office
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Have a general inquiry or wish to schedule a physical factory visit? Drop your details below.
            </p>
          </div>

          {contactFormSubmitted ? (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-center space-y-2">
              <span className="text-emerald-400 font-bold text-sm block">Message Received</span>
              <p className="text-xs text-slate-300">
                Our {city} office coordinator will call you back on {phone} within 2 hours.
              </p>
              <button
                onClick={() => setContactFormSubmitted(false)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Shinde"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 block">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98220 54321"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 block">Route to Office</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white"
                  >
                    <option value="Pune">Pune (PCMC Desk)</option>
                    <option value="Kolhapur">Kolhapur (Works & MIDC)</option>
                    <option value="Sangli">Sangli (Regional Office)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 block">Message / Inquiry Details</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you would like to discuss (signage letters, elevation works, machine visit)..."
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Inquiry to {city} Office</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
