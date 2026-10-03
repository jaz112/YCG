import type { Resource } from './models';

export interface ResourceFilters { query: string; category: string; province: string; city: string; type: string; needs?:string[]; audiences?:string[]; }
const stopWords = new Set(['how','do','i','a','an','the','to','in','can','my','is','what','where','get','me','for','with','of','help','does','it','this','near','am','need','want','please','ask','m','looking','some','about']);
const synonyms: Record<string,string> = { finding:'find', findingwork:'job', jobs:'job', employment:'job', working:'job', studying:'study', schools:'school', renting:'rent', banking:'bank', scams:'scam', documents:'document', plans:'plan', taxes:'tax', buses:'bus', babies:'baby' };
export function normalize(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
/** All geographic/category filters intersect; national information remains available. */
export function matchesResource(resource: Resource, filters: ResourceFilters, organizationName: string, organizationType: string): boolean {
  if (filters.needs?.length && !filters.needs.some(need=>resource.service.needs?.includes(need))) return false;
  if (filters.audiences?.length && !filters.audiences.some(audience=>resource.service.audiences?.includes(audience))) return false;
  if (filters.category && !resource.service.categories.includes(filters.category)) return false;
  if (filters.type && filters.type !== organizationType) return false;
  if (filters.province && (resource.location.excludedProvinces?.includes(filters.province) || (resource.location.provinces.length && !resource.location.provinces.includes(filters.province)))) return false;
  if (filters.city && resource.location.cities.length && !resource.location.cities.some(city=>normalize(city).includes(normalize(filters.city)))) return false;
  if (filters.city && !resource.location.cities.length && resource.location.regions?.length && !resource.location.regions.some(region=>normalize(region).includes(normalize(filters.city)))) return false;
  const tokens = normalize(filters.query).split(' ').filter(token=>token && !stopWords.has(token) && !['find','open','apply','learn','finding','opening','learning'].includes(token)).map(token=>synonyms[token]??token);
  const haystack = normalize([resource.title,resource.description,organizationName,resource.service.audience,...resource.keywords,...resource.service.categories,...(resource.service.services??[]),resource.location.label,...(resource.location.neighbourhoods??[])].join(' '));
  return tokens.every(token=>haystack.includes(token));
}
