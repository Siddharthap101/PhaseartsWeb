export type NavigationPage = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'projects' 
  | 'quote' 
  | 'contact' 
  | 'exhibitions';

export interface SignageProduct {
  id: string;
  name: string;
  category: 'letters' | 'machinery' | 'materials' | 'acp' | 'services';
  tagline: string;
  description: string;
  keyFeatures: string[];
  specifications: Record<string, string>;
  finishes?: string[];
  applications: string[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface MachineryItem {
  id: string;
  name: string;
  category: 'fabrication' | 'cutting' | 'curing' | 'printing';
  capability: string;
  description: string;
  techSpecs: {
    workingArea?: string;
    powerLaser?: string;
    speed?: string;
    materialsHandled?: string;
    accuracy?: string;
  };
  commercialStatus: 'In-House Production & Contract Fabrication' | 'Commercial Supply & Demonstrations';
  imageUrl: string;
}

export interface ProjectEntry {
  id: string;
  clientBrand: string;
  category: string;
  location: string;
  signageType: string;
  year: string;
  description: string;
  dimensions: string;
  materials: string[];
  illumination: string;
  imageUrl: string;
  approvedReference: boolean;
}

export interface OfficeLocation {
  city: 'Pune' | 'Kolhapur' | 'Sangli';
  tag: string;
  state: string;
  address: string;
  landmark: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  workingHours: string;
  servicesHandled: string[];
  mapEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface QuoteInquiry {
  id: string;
  date: string;
  customerName: string;
  companyName?: string;
  mobileNumber: string;
  emailAddress?: string;
  projectLocation: string;
  signageType: string;
  hasDesignFile: boolean;
  fileName?: string;
  fileSize?: string;
  projectDescription?: string;
  preferredContactMethod: 'WhatsApp' | 'Phone Call' | 'Email';
  estimatedCostRange?: string;
  status: 'Pending Review' | 'Quotation In Progress' | 'Contacted';
}
