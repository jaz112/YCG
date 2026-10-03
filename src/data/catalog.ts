import type { Category, Journey, Checklist, FAQ } from '../lib/models';

export const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];

export const categories: Category[] = [
  { id:'life', title:'Life in Canada', question:"I'm new to Canada", icon:'compass', description:'Everyday questions, local services, language learning, and finding your footing.', nextStep:'Pick one immediate need. A settlement service or library can help you identify local starting points.' },
  { id:'work', title:'Work & Careers', question:'I need a job', icon:'briefcase', description:'Job searching, Canadian workplaces, and making sense of your qualifications.', nextStep:'Browse employment resources and check the requirements for your occupation. A job listing does not establish permission to work.' },
  { id:'housing', title:'Housing', question:'I need somewhere to live', icon:'home', description:'Rental searches, questions to ask, and where to find the rules for your province.', nextStep:'Read the renting overview, then confirm local tenancy rules before making a commitment.' },
  { id:'health', title:'Healthcare', question:'I need healthcare', icon:'heart', description:'Find the right starting point for health coverage and access to care.', nextStep:'Check your province or territory’s health coverage rules. Do not assume arrival or immigration status alone establishes coverage.' },
  { id:'documents', title:'Immigration & Documents', question:'I need help with documents', icon:'document', description:'Find official starting points for your SIN and immigration-related questions.', nextStep:'Identify the document you need and follow the responsible department’s instructions. Never enter your SIN into YCG.' },
  { id:'money', title:'Money & Banking', question:'I need help with money', icon:'wallet', description:'Banking, taxes, benefits, and questions to ask before choosing a service.', nextStep:'Start with the official explanation and check the conditions for your situation. A benefit search result is not an approval.' },
  { id:'education', title:'Education', question:"I'm studying in Canada", icon:'book', description:'School systems, learning opportunities, and language resources.', nextStep:'Use the education overview to identify the relevant school system. Confirm enrolment requirements with the school or institution.' },
  { id:'family', title:'Parents & Families', question:"I'm here with my family", icon:'people', description:'Pregnancy, young parenting, childcare, learning and everyday family support.', nextStep:'List your family’s priorities, then ask local providers about age, location, eligibility, and appointment requirements.' },
  { id:'community', title:'Community & Support', question:'I need community support', icon:'chat', description:'Settlement organizations, libraries, and people who can help explain the next step.', nextStep:'Contact the organization before visiting. Ask which services, languages, and eligibility rules apply to you.' },
  { id:'safety', title:'Safety & Support', question:"I need to feel safe", icon:'shield', description:'Find crisis support, safety resources, workplace protections and official fraud guidance.', nextStep:'Pause before responding to pressure. Use an independently found official contact to check a request, and consult the Anti-Fraud Centre’s guidance.' },
];

export const journeys: Journey[] = [
  {id:'senior',title:'Newcomer senior',description:'Find everyday support and community connections.',categories:['health','community','money'],note:'Ask providers about age requirements, accessible services, and language support.'},
  {id:'preparing',title:'Preparing to arrive',description:'Turn the unknowns into a small, practical plan.',categories:['documents','housing','life'],note:'Pre-arrival programs have their own conditions. Check them before registering.'},
  {id:'arrived',title:'Recently arrived',description:'Find your essentials and people who can help.',categories:['life','health','documents'],note:'Start with your immediate needs; the suggested sequence is not a government deadline.'},
  {id:'settling',title:'Settling in',description:'Build on what you know, at your own pace.',categories:['work','community','money'],note:'You can still look for support after your first months. Each program sets its own rules.'},
  {id:'permanent-resident',title:'Permanent resident',description:'Find settlement information and check program access.',categories:['community','work','health'],note:'Permanent residence does not automatically establish eligibility for every service; some programs have time limits.'},
  {id:'refugee',title:'Refugee or protected person',description:'Locate settlement and community starting points.',categories:['community','housing','health'],note:'Resettled refugees, protected persons, and claimants can have different service eligibility.'},
  {id:'claimant',title:'Refugee / asylum claimant',description:'Find organizations to ask about your specific circumstances.',categories:['community','health','documents'],note:'Do not assume IRCC-funded settlement eligibility. Ask a provider which programs serve claimants.'},
  {id:'student',title:'International student',description:'Connect school life with everyday needs.',categories:['education','housing','money'],note:'Use your institution’s support office and confirm each service’s rules. Student status is not blanket eligibility.'},
  {id:'worker',title:'Temporary worker',description:'Find work-related information and everyday support.',categories:['work','documents','housing'],note:'Work authorization and program eligibility must be checked with the responsible authority.'},
  {id:'family',title:'Family or sponsored newcomer',description:'Plan the next steps for your household.',categories:['family','education','health'],note:'Check the conditions for each family member separately.'},
  {id:'parent',title:'Newcomer parent',description:'Start with schools, family needs, and support.',categories:['family','education','community'],note:'School and family service requirements vary by location and program.'},
  {id:'youth',title:'Newcomer youth',description:'Discover learning and community connections.',categories:['education','community'],note:'Check age ranges and registration requirements with providers.'},
  {id:'woman',title:'Newcomer woman',description:'Find community support and questions to ask providers.',categories:['community','safety','work'],note:'Ask providers about women-focused support; this is not a verified specialist-service list.'},
  {id:'francophone',title:'Francophone newcomer',description:'Find starting points for French-language support.',categories:['community','education'],note:'Confirm the language of the actual service, not just the language of its website.'},
  {id:'business',title:'Entrepreneur / business newcomer',description:'Start with documents, money, and official information.',categories:['money','documents'],note:'Business-specific guidance is still being developed; these are general starting points.'},
  {id:'professional',title:'Internationally trained professional',description:'Find information about recognition and licensing.',categories:['work','education'],note:'Requirements differ by occupation and jurisdiction. Contact the relevant regulator.'},
  {id:'jobseeker',title:'Looking for employment',description:'Find job-search tools and career support.',categories:['work','community'],note:'Employment services and permission to work are separate matters.'},
];

export const checklists: Checklist[] = [
  {id:'24-hours',title:'Your first 24 hours',description:'A place to rest. A way to connect. Start with the essentials.',tasks:[
    {label:'Confirm where I will stay and how to get there',href:'/topics/housing/',linkLabel:'Understand housing starting points'},
    {label:'Make a plan for staying connected and getting local help',href:'/topics/life/',linkLabel:'Find everyday-life resources'},
    {label:'Keep my documents and important contacts together',href:'/guides/find-your-starting-point/',linkLabel:'Make a starting plan'},
  ]},
  {id:'first-week',title:'Your first week',description:'Find the right sources for documents, coverage, and daily life.',tasks:[
    {label:'Check whether I need a SIN and how to apply',href:'/resources/sin/',linkLabel:'Understand the SIN resource'},
    {label:'Check my health coverage options',href:'/topics/health/',linkLabel:'Find health coverage information'},
    {label:'Compare banking needs and identification requirements',href:'/resources/banking/',linkLabel:'Read the banking resource explanation'},
    {label:'Find a local organization and check whether it can help me',href:'/resources/?category=community',linkLabel:'Find settlement help'},
  ]},
  {id:'first-month',title:'Your first month',description:'Build routines and ask the questions that matter to your household.',tasks:[
    {label:'Understand the rental rules where I live',href:'/topics/housing/',linkLabel:'Find renting information'},
    {label:'Ask about school enrolment if relevant to my family',href:'/resources/education/',linkLabel:'Understand schooling resources'},
    {label:'Explore employment or credential recognition resources',href:'/topics/work/',linkLabel:'Find career starting points'},
    {label:'Find a library or community connection',href:'/topics/community/',linkLabel:'Find community support'},
  ]},
  {id:'three-months',title:'Your first 3 months',description:'Review what is working and what support you still need.',tasks:[
    {label:'Learn about taxes and check benefit eligibility',href:'/resources/cra/',linkLabel:'Understand the CRA newcomer resource'},
    {label:'Review account fees and questions about money',href:'/topics/money/',linkLabel:'Find money and banking resources'},
    {label:'Explore language-learning and community opportunities',href:'/resources/?category=community',linkLabel:'Find organizations to ask'},
  ]},
];

export const faqs: FAQ[] = [
  {question:'Is YCG a government website?',answer:'No. YCG is an independent initiative. We explain and link to government and community resources, and distinguish those sources from our own guidance.'},
  {question:'Does a recommendation mean I qualify?',answer:'No. Journeys and filters help you find relevant information. The responsible organization decides eligibility using its current rules.'},
  {question:'Can I speak to someone at YCG?',answer:'YCG does not yet operate a chat, phone line, or appointment service. The resource directory links to organizations you can contact directly.'},
];
