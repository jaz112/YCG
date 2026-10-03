/** Relevance filters, not eligibility decisions. */
export const journeyFilters: Record<string,string> = {
  "senior": "audience=senior",
  "preparing": "category=life",
  "arrived": "audience=newcomer",
  "settling": "category=community",
  "permanent-resident": "audience=permanent-resident",
  "refugee": "audience=refugee",
  "claimant": "audience=claimant",
  "student": "category=education",
  "worker": "audience=worker",
  "family": "audience=parent",
  "parent": "audience=parent",
  "youth": "audience=youth",
  "woman": "audience=woman",
  "francophone": "audience=francophone",
  "business": "category=money",
  "professional": "need=employment&need=education",
  "jobseeker": "need=employment"
};
