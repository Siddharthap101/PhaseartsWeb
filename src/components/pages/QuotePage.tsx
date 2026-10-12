import React, { useState, useEffect } from 'react';
import { NavigationPage, QuoteInquiry } from '../../types';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../../data/companyData';
import { 
  CheckCircle2, 
  Upload, 
  FileText, 
  Phone, 
  MessageSquare, 
  Calculator, 
  HelpCircle, 
  ArrowRight, 
  Trash2, 
  FileCheck, 
  AlertCircle,
  Copy,
  Download
} from 'lucide-react';

interface QuotePageProps {
  initialSignageType?: string;
  onNavigate: (page: NavigationPage) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ 
  initialSignageType,
  onNavigate 
}) => {
  // Form State (10 fields from Section 7)
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [projectLocation, setProjectLocation] = useState('Pune');
  const [signageType, setSignageType] = useState(initialSignageType || 'Liquid Acrylic Letters');
  const [hasDesignFile, setHasDesignFile] = useState<boolean>(true);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>({
    name: 'signage_elevation_vector_v1.cdr',
    size: '4.8 MB',
  });
  const [projectDescription, setProjectDescription] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');

  // Form feedback & errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<QuoteInquiry | null>(null);
  const [inquiryHistory, setInquiryHistory] = useState<QuoteInquiry[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);

  // Estimator Calculator state
  const [estimatorType, setEstimatorType] = useState('liquid');
  const [letterHeightInches, setLetterHeightInches] = useState(12);
  const [letterCount, setLetterCount] = useState(8);
  const [hasBacklit, setHasBacklit] = useState(true);
  const [estimatedMin, setEstimatedMin] = useState(0);
  const [estimatedMax, setEstimatedMax] = useState(0);

  useEffect(() => {
    if (initialSignageType) {
      setSignageType(initialSignageType);
    }
  }, [initialSignageType]);

  // Load inquiries from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('phasearts_inquiries');
      if (stored) {
        setInquiryHistory(JSON.parse(stored));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Compute estimate
  useEffect(() => {
    let ratePerInch = 110;
    if (estimatorType === 'liquid') ratePerInch = 140;
    if (estimatorType === 'trimcap') ratePerInch = 100;
    if (estimatorType === 'trimless') ratePerInch = 125;
    if (estimatorType === 'ss') ratePerInch = 160;
    if (estimatorType === 'acp') ratePerInch = 90;

    const illuminationFactor = hasBacklit ? 1.25 : 1.0;
    const base = letterHeightInches * letterCount * ratePerInch * illuminationFactor;
    setEstimatedMin(Math.round(base * 0.95));
    setEstimatedMax(Math.round(base * 1.15));
  }, [estimatorType, letterHeightInches, letterCount, hasBacklit]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) {
      errs.customerName = 'Customer Name is required';
    }
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!projectLocation.trim()) {
      errs.projectLocation = 'Project Location is required';
    }
    if (!signageType.trim()) {
      errs.signageType = 'Please select the type of signage';
    }
    if (hasDesignFile && !uploadedFile) {
      errs.uploadedFile = 'Please select or upload a CDR / Vector design file';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileUploadSim = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setUploadedFile({
        name: file.name,
        size: `${sizeMb} MB`,
      });
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.uploadedFile;
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newId = `PA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const inquiry: QuoteInquiry = {
        id: newId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        customerName: customerName.trim(),
        companyName: companyName.trim() || undefined,
        mobileNumber: mobileNumber.trim(),
        emailAddress: emailAddress.trim() || undefined,
        projectLocation: projectLocation.trim(),
        signageType: signageType,
        hasDesignFile: hasDesignFile,
        fileName: hasDesignFile && uploadedFile ? uploadedFile.name : undefined,
        fileSize: hasDesignFile && uploadedFile ? uploadedFile.size : undefined,
        projectDescription: projectDescription.trim() || undefined,
        preferredContactMethod: preferredContactMethod,
        estimatedCostRange: `₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}`,
        status: 'Pending Review',
      };

      const updatedHistory = [inquiry, ...inquiryHistory];
      setInquiryHistory(updatedHistory);
      try {
        localStorage.setItem('phasearts_inquiries', JSON.stringify(updatedHistory));
      } catch (err) {
        // ignore
      }

      setSubmittedInquiry(inquiry);
      setIsSubmitting(false);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 700);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Signage Quotation Inquiry - Phase Arts*
Name: ${customerName || 'Inquirer'}
Company: ${companyName || 'N/A'}
Phone: ${mobileNumber || 'N/A'}
Location: ${projectLocation}
Signage: ${signageType}
CDR File Available: ${hasDesignFile ? 'Yes' : 'No'}
Contact Preference: ${preferredContactMethod}
Details: ${projectDescription || 'Standard commercial quote request'}`;
    return `https://wa.me/${COMPANY_INFO.supportWhatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleApplyEstimate = () => {
    let name = 'Liquid Acrylic Letters';
    if (estimatorType === 'trimcap') name = 'Trimcap Channel Letters';
    if (estimatorType === 'trimless') name = 'Trimless Acrylic Letters';
    if (estimatorType === 'ss') name = 'SS (Stainless Steel) Letters';
    if (estimatorType === 'acp') name = 'Custom ACP Works & Elevation';
    setSignageType(name);
    setProjectDescription(`Estimated ${letterCount} letters at ${letterHeightInches} inches height. Illumination: ${hasBacklit ? 'LED Illuminated' : 'Non-lit'}. Indicative budget: ₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}`);
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <span>Section 7 · Customer Inquiry & Quotation Workflow</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Pune · Kolhapur · Sangli</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Request a Signage Quotation & CDR File Submission
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Submit your design files, letter heights, and site locations. Our engineering teams in Pune, Kolhapur, and Sangli review drawings and provide official BOQs within 24 hours.
        </p>
      </section>

      {/* 2. Success Modal / State */}
      {submittedInquiry && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quotation Request Successfully Registered</h3>
                  <p className="text-xs text-emerald-400 font-mono">Reference ID: {submittedInquiry.id} · {submittedInquiry.date}</p>
                </div>
              </div>
              <button
                onClick={() => setSubmittedInquiry(null)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>

            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-slate-500 block">Customer / Company:</span>
                <span className="font-semibold text-white">{submittedInquiry.customerName} {submittedInquiry.companyName && `(${submittedInquiry.companyName})`}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Phone & Contact:</span>
                <span className="font-mono text-white">{submittedInquiry.mobileNumber} · Via {submittedInquiry.preferredContactMethod}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Project Location:</span>
                <span className="text-white">{submittedInquiry.projectLocation}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Signage Category:</span>
                <span className="text-amber-400 font-medium">{submittedInquiry.signageType}</span>
              </div>
              {submittedInquiry.fileName && (
                <div className="sm:col-span-2">
                  <span className="text-slate-500 block">Uploaded Design File:</span>
                  <span className="font-mono text-emerald-300">{submittedInquiry.fileName} ({submittedInquiry.fileSize})</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify Sales Desk on WhatsApp Directly</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.supportPhoneRaw}`}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Central Desk ({COMPANY_INFO.supportPhone})</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Grid: 10-Field Form + Interactive Cost Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: 10-Field Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Customer Inquiry & Specifications Form
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fields marked with <span className="text-amber-400">*</span> are mandatory for BOQ preparation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Field 1 & 2: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    1. Customer Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ramesh Kulkarni"
                    className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                      errors.customerName ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.customerName && (
                    <p className="text-[11px] text-rose-400">{errors.customerName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    2. Company Name <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Kulkarni Retail or Architect Studio"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Field 3 & 4: Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    3. Mobile Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="e.g. +91 98220 12345"
                    className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-lg text-white font-mono focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                      errors.mobileNumber ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-[11px] text-rose-400">{errors.mobileNumber}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    4. Email Address <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="e.g. contact@client.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Field 5 & 6: Location & Type of Signage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    5. Project Location <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="Pune">Pune & Pimpri-Chinchwad (PCMC)</option>
                    <option value="Kolhapur">Kolhapur & Shiroli Region</option>
                    <option value="Sangli">Sangli, Miraj & Kupwad</option>
                    <option value="Satara">Satara & Karad</option>
                    <option value="Solapur">Solapur Region</option>
                    <option value="Mumbai">Mumbai & Navi Mumbai</option>
                    <option value="Other Maharashtra">Other Maharashtra Location</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    6. Type of Letters / Signage <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={signageType}
                    onChange={(e) => setSignageType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="Liquid Acrylic Letters">Liquid Acrylic Letters (Gloss Optical)</option>
                    <option value="Trimcap Channel Letters">Trimcap Letters (Heavy Commercial)</option>
                    <option value="Trimless Acrylic Letters">Trimless Letters (Architectural Flush)</option>
                    <option value="3D Acrylic Letters">3D Dimensional Letters (Halo/Edge-Lit)</option>
                    <option value="SS (Stainless Steel) Letters">SS Marine Letters (SS 304/316 PVD)</option>
                    <option value="Custom ACP Works & Elevation">Custom ACP Elevation & Fascia Works</option>
                    <option value="Trimcap / Trimless Rolls & Raw Materials">Raw Materials & Trimcap Rolls Supply</option>
                    <option value="Machinery Job Work & Contract Fabrication">Machinery Job Work & CNC Fabrication</option>
                  </select>
                </div>
              </div>

              {/* Field 7 & 8: CDR / Design File Available & Upload */}
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-xs font-medium text-slate-200 block">
                      7. CDR / Design File Available? <span className="text-amber-400">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">Do you have vector files (.cdr, .ai, .eps, .pdf, .dxf)?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setHasDesignFile(true)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        hasDesignFile
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      Yes, Available
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setHasDesignFile(false);
                        setUploadedFile(null);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        !hasDesignFile
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      No File Yet
                    </button>
                  </div>
                </div>

                {/* Conditional Field 8: File Upload */}
                {hasDesignFile && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                      <span>8. Design File Submission (.cdr, .ai, .pdf, .dxf)</span>
                      <span className="text-[11px] text-amber-400">Accepted: CDR, AI, PDF, EPS</span>
                    </label>

                    {uploadedFile ? (
                      <div className="flex items-center justify-between p-3 bg-slate-900 border border-slate-700/80 rounded-lg">
                        <div className="flex items-center gap-2.5">
                          <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                          <div>
                            <span className="text-xs font-mono text-white block">{uploadedFile.name}</span>
                            <span className="text-[11px] text-slate-400">{uploadedFile.size} · Verified Vector File</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setUploadedFile(null)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-800 hover:border-amber-400/60 rounded-xl cursor-pointer bg-slate-900/40 hover:bg-slate-900/80 transition-all">
                        <Upload className="w-6 h-6 text-amber-400 mb-2" />
                        <span className="text-xs font-semibold text-slate-200">Click to Select or Drag CDR / Design File</span>
                        <span className="text-[11px] text-slate-500 mt-0.5">Maximum file size: 50MB</span>
                        <input
                          type="file"
                          accept=".cdr,.ai,.eps,.pdf,.dxf,.zip"
                          onChange={handleFileUploadSim}
                          className="hidden"
                        />
                      </label>
                    )}
                    {errors.uploadedFile && (
                      <p className="text-[11px] text-rose-400">{errors.uploadedFile}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Field 9: Project Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  9. Project Description / Dimensions <span className="text-slate-500">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Specify length & height of board, letter heights in inches, front-lit or halo back-lit, or any site details..."
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Field 10: Preferred Contact Method */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-300 block">
                  10. Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPreferredContactMethod(method)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                        preferredContactMethod === method
                          ? 'bg-amber-400/10 border-amber-400 text-amber-400 font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 disabled:opacity-50 rounded-xl transition-colors cursor-pointer shadow-lg shadow-amber-400/10 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry & Receive Official Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Interactive Cost Estimator & WhatsApp Utility (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Estimator Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>Instant Dimension & Cost Estimator</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400 uppercase">Indicative</span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Calculate an indicative price range in INR (₹) based on letter heights, profile category, and illumination.
              </p>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Letter Category:</label>
                  <select
                    value={estimatorType}
                    onChange={(e) => setEstimatorType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white"
                  >
                    <option value="liquid">Liquid Acrylic Letters (Gloss Optical)</option>
                    <option value="trimcap">Trimcap Channel Letters (Standard)</option>
                    <option value="trimless">Trimless Letters (Flush Modern)</option>
                    <option value="ss">SS Marine Stainless Steel (SS 304/316)</option>
                    <option value="acp">ACP Elevation Works / Fascia</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Letter Height (Inches):</label>
                    <select
                      value={letterHeightInches}
                      onChange={(e) => setLetterHeightInches(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white font-mono"
                    >
                      <option value={8}>8 Inches</option>
                      <option value={10}>10 Inches</option>
                      <option value={12}>12 Inches (1 Foot)</option>
                      <option value={15}>15 Inches</option>
                      <option value={18}>18 Inches (1.5 Feet)</option>
                      <option value={24}>24 Inches (2 Feet)</option>
                      <option value={36}>36 Inches (3 Feet)</option>
                      <option value={48}>48 Inches (4 Feet)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Total Letter Count:</label>
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={letterCount}
                      onChange={(e) => setLetterCount(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white font-mono"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-slate-300">LED Illumination:</span>
                  <button
                    type="button"
                    onClick={() => setHasBacklit(!hasBacklit)}
                    className={`px-3 py-1 text-[11px] font-semibold rounded cursor-pointer ${
                      hasBacklit ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {hasBacklit ? 'Illuminated (Samsung LED)' : 'Non-Illuminated'}
                  </button>
                </div>

                {/* Estimate Result */}
                <div className="p-4 bg-slate-950 border border-amber-500/20 rounded-xl space-y-1 text-center">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wide">
                    Estimated Fabrication Cost
                  </span>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                    ₹{estimatedMin.toLocaleString('en-IN')} – ₹{estimatedMax.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    *Excludes GST, framing & high-rise scaffolding where applicable.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleApplyEstimate}
                  className="w-full py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Apply Estimated Dimensions to Form
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Instant Inquiry Generator */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer immediate messaging? Generate a pre-formatted message directly to Phase Arts central WhatsApp desk:
              </p>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors text-center"
              >
                <span>Launch WhatsApp with My Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="text-[11px] text-slate-500 flex items-center justify-between">
                <span>Official WhatsApp: {COMPANY_INFO.supportWhatsapp}</span>
                <span>Active 9:30 AM – 7:30 PM</span>
              </div>
            </div>

            {/* Tri-Office Rapid Response SLA */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 text-xs text-slate-400 space-y-2">
              <span className="text-white font-semibold block">Phase Arts Turnaround Commitments</span>
              <ul className="space-y-1 text-[11px]">
                <li className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>CDR audit feedback within 4 working hours</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>On-site physical site visit in Pune, Kolhapur & Sangli</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Comprehensive BOQ with illumination LUX estimates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Inquiries History Tracker if any exists */}
      {inquiryHistory.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900">
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-white block">Recent Submitted Inquiries on this Device</span>
                <span className="text-xs text-slate-400">Stored locally for your reference</span>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('phasearts_inquiries');
                  setInquiryHistory([]);
                }}
                className="text-xs text-slate-500 hover:text-rose-400 cursor-pointer"
              >
                Clear History
              </button>
            </div>

            <div className="divide-y divide-slate-800">
              {inquiryHistory.slice(0, 3).map((item) => (
                <div key={item.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-amber-400 font-semibold">{item.id}</span>
                      <span className="text-slate-300 font-medium">{item.signageType}</span>
                      <span className="text-slate-500">· {item.projectLocation}</span>
                    </div>
                    <span className="text-slate-500 text-[11px] block mt-0.5">
                      Submitted on {item.date} by {item.customerName}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-medium text-[11px] bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40 w-fit">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
