/** Publish only approved people and supplied personal details. */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string | null;
  photoAlt: string;
  shortBio: string;
  storyTitle: string;
  story: string[];
  responsibilities?: string[];
  quote?: string;
  languages?: string[];
  location?: string;
  links?: { label: string; url: string }[];
  status: 'confirmed';
  priority: number;
}
export interface FutureRole {
  id: string;
  role: string;
  description: string;
  icon: string;
  status: 'Future Role';
}
export const team: TeamMember[] = [
  {
    id: 'founder', name: 'Mary C. Nwosu', role: 'Founder & Executive Director',
    photo: '/images/team/founder-photo.jpg', photoAlt: 'Mary C. Nwosu, Founder & Executive Director of Your Canada Guide',
    shortBio: 'Mother of two, IT professional by background, and a lifelong learner turning newcomer experience into clearer beginnings for others.',
    storyTitle: 'A clearer beginning for the next person',
    story: [
      'Mary C. Nwosu is a mother of two and an IT professional by background. Her newcomer journey began almost from the moment she arrived at the airport — navigating unfamiliar systems, searching for reliable information and learning how everyday life worked in a new country.',
      'Arriving while pregnant made that transition even more demanding. Through resilience, curiosity and a willingness to keep asking questions, Mary gradually discovered resources, services and information that made the journey easier. That experience became part of the inspiration for Your Canada Guide.',
      'Mary believes that useful knowledge should not be difficult to find or understand. She is passionate about learning, sharing what she learns and helping people feel more informed and confident as they build their lives in Canada.',
      'As Founder & Executive Director, she hopes to turn lessons learned through personal experience into something that can make another newcomer’s journey a little clearer.',
    ],
    status: 'confirmed', priority: 1,
  },
  {
    id: 'grace-okoye', name: 'Grace Okoye', role: 'Director of Community Engagement & Partnerships',
    photo: '/images/team/grace-okoye.jpg', photoAlt: 'Grace Okoye, Director of Community Engagement & Partnerships at Your Canada Guide',
    shortBio: 'Young mother, community advocate, and passionate believer in connecting people with the support they may not know exists.',
    storyTitle: 'A Little About Me — Why This Matters to Me',
    story: [
      'Sometimes, life does not give us the support system we need, and trying to navigate everything on our own can feel overwhelming. I understand that because I have lived it.',
      'As a young mother raising my daughter in Canada without family nearby, I know what it feels like to search for help, have questions, and sometimes not know where to turn.',
      'Along the way, I discovered that support does exist. Organizations such as Jessie’s Centre, Rosalie Hall, and pregnancy care centers have supported me through different parts of motherhood — from baby essentials and groceries to practical guidance and community support.',
      'Those experiences made me realize how many people may be struggling simply because they do not know where help exists or how to find it.',
      'That is what makes the mission behind Your Canada Guide so meaningful to me.',
      'I want to help make useful resources easier to discover and help individuals and families feel more connected to the support available around them.',
      'Sometimes, one connection, one resource, or one helping hand can make a real difference.',
      'Through my role at YCG, I hope to help build stronger connections between people, communities, and the resources that can support them.',
    ],
    status: 'confirmed', priority: 2,
  },
];
export const futureRoles: FutureRole[] = [
  {id:'technology',role:'Technology & Product Lead',description:'Help shape and support the digital experience and technology behind YCG.',icon:'compass',status:'Future Role'},
  {id:'content',role:'Content & Resource Lead',description:'Help make practical information clear, useful and grounded in reliable sources.',icon:'book',status:'Future Role'},
  {id:'programs',role:'Community Programs Lead',description:'Help shape programs around the needs and experiences of the community.',icon:'people',status:'Future Role'},
  {id:'operations',role:'Operations Lead',description:'Help build thoughtful processes that support the work behind the scenes.',icon:'briefcase',status:'Future Role'},
  {id:'communications',role:'Communications & Marketing',description:'Help people discover YCG and understand the support it brings together.',icon:'chat',status:'Future Role'},
  {id:'advisors',role:'Advisors',description:'Bring relevant experience and considered guidance as YCG grows.',icon:'compass',status:'Future Role'},
  {id:'contributors',role:'Community Contributors / Volunteers',description:'Contribute local perspectives and useful knowledge to a shared purpose.',icon:'heart',status:'Future Role'},
];
