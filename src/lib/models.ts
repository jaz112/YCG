/** Public descriptions are separate from eligibility decisions and personal data. */
export interface ReviewDate {
  checkedAt: string | null;
  sourceUpdatedAt: string | null;
  nextReviewAt: string | null;
  method: 'source-page-check' | 'pending';
}
export interface Source { url: string; publisher: string; review: ReviewDate }
export interface Eligibility { summary: string; decisionBy: string; }
export interface Location { country?: string; provinces: string[]; excludedProvinces?: string[]; cities: string[]; regions?: string[]; neighbourhoods?: string[]; postalCoverage?: string[]; serviceArea?: string; label: string }
export interface Organization {
  id: string; name: string; type: 'government' | 'public-library' | 'public-agency' | 'nonprofit';
  website: string; phone: string | null; address: string | null; email?: string | null;
}
export interface Service {
  categories: string[]; audience: string; eligibility: Eligibility;
  delivery: 'Online resource' | 'Contact provider';
  cost: 'Free information' | 'Free service' | 'Check with provider';
  languages: string[];
  needs?: string[];
  audiences?: string[];
  services?: string[];
  ageCriteria?: string | null;
  immigrationStatus?: string | null;
  referral?: string | null;
  appointment?: string | null;
  deliveryMethods?: ('Online' | 'In person' | 'Phone' | 'Home visits')[];
}
export interface Resource {
  id: string; organizationId: string; title: string; description: string;
  nextStep: string; beforeOpening: string; keywords: string[];
  location: Location; service: Service; source: Source;
  supportingSources?: { label: string; url: string }[];
  contact?: { phone?: string; email?: string; address?: string };
}
export interface Category { id: string; title: string; question: string; description: string; icon: string; nextStep: string; }
export interface Journey { id: string; title: string; description: string; categories: string[]; note: string; }
export interface Checklist { id: string; title: string; description: string; tasks: { label: string; href: string; linkLabel: string }[]; }
export interface FAQ { question: string; answer: string }
