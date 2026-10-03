/** Navigation tags describe relevance, never guaranteed eligibility. */
export const needs = [
  ['pregnancy','Pregnancy'], ['prenatal','Prenatal support'], ['newborn','Newborn care'],
  ['postpartum','Postpartum support'], ['parenting','Parenting support'], ['development','Child development'],
  ['earlyon','EarlyON & early years'], ['childcare','Childcare'], ['subsidy','Childcare subsidies'],
  ['school','School registration'], ['food','Food & baby supplies'], ['housing','Housing'],
  ['mental-health','Mental health & counselling'], ['feeding','Infant feeding'], ['healthcare','Doctors & healthcare'],
  ['birth-documents','Birth registration'], ['benefits','Benefits & financial support'], ['community','Community programs'],
  ['settlement','Settlement services'], ['employment','Employment'], ['education','Education'],
  ['transport','Transport & driving'], ['phone','Phone plans'], ['winter','Weather & winter'], ['taxes','Tax returns'],
  ['language','Language learning'], ['legal','Legal help'], ['safety','Safety'], ['disability','Disability support'],
].map(([id,label])=>({id,label}));

export const audiences = [
  ['newcomer','New to Canada'], ['pregnant','Pregnant'], ['young-mom','Young mom'],
  ['young-parent','Young parent'], ['parent','Parent or caregiver'], ['single-parent','Parenting alone'],
  ['father','Father'], ['student','Student'], ['refugee','Refugee'], ['claimant','Refugee claimant'],
  ['permanent-resident','Permanent resident'], ['worker','Temporary worker'], ['youth','Youth'],
  ['woman','Woman'], ['senior','Senior'], ['francophone','Francophone'], ['disability','Person with a disability'],
  ['indigenous','Indigenous family'], ['black','Black family'],
].map(([id,label])=>({id,label}));

export const categoryNeeds: Record<string,string[]> = {
  life:['community'], work:['employment'], housing:['housing'], health:['healthcare'],
  documents:[], money:[], education:['education'], family:[], community:['community'], safety:['safety'],
};
