import type { Organization, Resource } from '../lib/models';
export const everydayOrganizations: Organization[] = [
  {
    "id": "211-national",
    "name": "211 Canada",
    "type": "nonprofit",
    "website": "https://211.ca/",
    "phone": "211",
    "address": null
  },
  {
    "id": "988",
    "name": "9-8-8 Suicide Crisis Helpline",
    "type": "nonprofit",
    "website": "https://988.ca/",
    "phone": "988",
    "address": null
  },
  {
    "id": "sheltersafe",
    "name": "ShelterSafe — Women’s Shelters Canada",
    "type": "nonprofit",
    "website": "https://sheltersafe.ca/",
    "phone": null,
    "address": null
  },
  {
    "id": "crtc",
    "name": "Canadian Radio-television and Telecommunications Commission",
    "type": "government",
    "website": "https://crtc.gc.ca/",
    "phone": null,
    "address": null
  }
];
export const everydayResources: Resource[] = [
  {
    "id": "211-canada",
    "organizationId": "211-national",
    "title": "Find local support anywhere in Canada",
    "description": "Find community services for food, housing, family support and other everyday needs through your regional 211 service.",
    "nextStep": "Choose your province or territory, then ask about the help you need.",
    "beforeOpening": "Hours, languages and contact options vary by region. Listed services set their own eligibility and availability.",
    "keywords": [
      "211",
      "food",
      "bank",
      "shelter",
      "local",
      "help"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "community",
        "housing",
        "family",
        "life"
      ],
      "needs": [
        "food",
        "housing",
        "community",
        "settlement"
      ],
      "audiences": [
        "newcomer",
        "parent",
        "senior"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Hours, languages and contact options vary by region. Listed services set their own eligibility and availability.",
        "decisionBy": "211 Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://211.ca/",
      "publisher": "211 Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "crisis-988",
    "organizationId": "988",
    "title": "Talk to someone about suicide concerns",
    "description": "Call or text 9-8-8 if you are thinking about suicide, worried about someone else, or unsure whether what you are experiencing is related to suicide.",
    "nextStep": "Call or text 988 to reach the helpline, available 24 hours a day, every day.",
    "beforeOpening": "This is a crisis support service. If there is an immediate threat to life, contact local emergency services.",
    "keywords": [
      "suicide",
      "crisis",
      "distress",
      "urgent"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "health",
        "safety"
      ],
      "needs": [
        "mental-health",
        "safety"
      ],
      "audiences": [],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "This is a crisis support service. If there is an immediate threat to life, contact local emergency services.",
        "decisionBy": "9-8-8 Suicide Crisis Helpline"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://988.ca/",
      "publisher": "9-8-8 Suicide Crisis Helpline",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    },
    "contact": {
      "phone": "988"
    }
  },
  {
    "id": "sheltersafe",
    "organizationId": "sheltersafe",
    "title": "Find shelter and support for violence at home",
    "description": "ShelterSafe connects women and their children experiencing violence with shelters and transition houses across Canada.",
    "nextStep": "Use the map to find a nearby service and contact it directly about safety planning and support.",
    "beforeOpening": "You can ask a shelter about support without staying there. If possible, use a device or phone the person harming you cannot access. ShelterSafe itself does not provide direct support.",
    "keywords": [
      "abuse",
      "domestic",
      "violence",
      "safe",
      "shelter"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "safety",
        "housing",
        "family"
      ],
      "needs": [
        "safety",
        "housing"
      ],
      "audiences": [
        "woman",
        "parent"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "You can ask a shelter about support without staying there. If possible, use a device or phone the person harming you cannot access. ShelterSafe itself does not provide direct support.",
        "decisionBy": "ShelterSafe — Women’s Shelters Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://sheltersafe.ca/get-help/",
      "publisher": "ShelterSafe — Women’s Shelters Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "tax-clinics",
    "organizationId": "cra",
    "title": "Find help with a simple tax return",
    "description": "Community volunteer tax clinics help eligible people with modest incomes and simple tax situations prepare returns.",
    "nextStep": "Read the conditions and find a clinic. Ask what documents to bring and whether an appointment is needed.",
    "beforeOpening": "Clinics decide whether they can help. Quebec has a separate volunteer program; a minimal fee may apply to the provincial return.",
    "keywords": [
      "tax",
      "taxes",
      "return",
      "clinic",
      "income",
      "free"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "money"
      ],
      "needs": [
        "taxes"
      ],
      "audiences": [
        "newcomer",
        "senior"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Clinics decide whether they can help. Quebec has a separate volunteer program; a minimal fee may apply to the provincial return.",
        "decisionBy": "Canada Revenue Agency"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program/need-a-hand-complete-your-tax-return.html",
      "publisher": "Canada Revenue Agency",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "worker-rights",
    "organizationId": "esdc",
    "title": "Understand your rights as a temporary foreign worker",
    "description": "Official guidance explains workplace protections and ways to report abuse for people in the Temporary Foreign Worker Program.",
    "nextStep": "Read the guide for your program and keep your employment documents somewhere you can access safely.",
    "beforeOpening": "The page links to separate guidance for the International Mobility Program. Rights information does not determine your authorization to work.",
    "keywords": [
      "worker",
      "job",
      "wages",
      "employment",
      "abuse",
      "rights"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "work",
        "safety"
      ],
      "needs": [
        "employment",
        "legal",
        "safety"
      ],
      "audiences": [
        "worker"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "The page links to separate guidance for the International Mobility Program. Rights information does not determine your authorization to work.",
        "decisionBy": "Employment and Social Development Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/employment-social-development/services/foreign-workers/protected-rights.html",
      "publisher": "Employment and Social Development Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "ifhp",
    "organizationId": "ircc",
    "title": "Check Interim Federal Health Program coverage",
    "description": "The IFHP provides limited, temporary health coverage for eligible groups, including some refugees, refugee claimants and protected persons.",
    "nextStep": "Check your eligibility and coverage documents, then find a registered IFHP provider before treatment.",
    "beforeOpening": "Not all people without provincial insurance qualify. Prescription and supplemental benefits can involve co-payments; ask about your costs before care.",
    "keywords": [
      "refugee",
      "claimant",
      "health",
      "insurance",
      "coverage",
      "IFHP"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "health"
      ],
      "needs": [
        "healthcare"
      ],
      "audiences": [
        "refugee",
        "claimant"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Not all people without provincial insurance qualify. Prescription and supplemental benefits can involve co-payments; ask about your costs before care.",
        "decisionBy": "Immigration, Refugees and Citizenship Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html",
      "publisher": "Immigration, Refugees and Citizenship Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "transport",
    "organizationId": "ircc",
    "title": "Get around your new community",
    "description": "A national introduction to public transit and other ways to travel within and between Canadian communities.",
    "nextStep": "Find your local transit authority. Check routes, fares, payment methods and accessibility before your first trip.",
    "beforeOpening": "Service, discounts and payment systems vary locally. Confirm current details with the operator.",
    "keywords": [
      "bus",
      "train",
      "transit",
      "transport",
      "travel",
      "commute"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "life"
      ],
      "needs": [
        "transport"
      ],
      "audiences": [
        "newcomer"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Service, discounts and payment systems vary locally. Confirm current details with the operator.",
        "decisionBy": "Immigration, Refugees and Citizenship Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/transportation.html",
      "publisher": "Immigration, Refugees and Citizenship Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "driving",
    "organizationId": "ircc",
    "title": "Understand driving and licence requirements",
    "description": "Start with the basics of driving, insurance and provincial or territorial licensing in Canada.",
    "nextStep": "Check the licensing authority for the province or territory where you will live.",
    "beforeOpening": "Foreign licence rules and exchange arrangements vary. Do not assume a licence valid in one place is sufficient after moving.",
    "keywords": [
      "drive",
      "driving",
      "licence",
      "license",
      "car",
      "insurance"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "life",
        "documents"
      ],
      "needs": [
        "transport"
      ],
      "audiences": [
        "newcomer"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Foreign licence rules and exchange arrangements vary. Do not assume a licence valid in one place is sufficient after moving.",
        "decisionBy": "Immigration, Refugees and Citizenship Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/driving.html",
      "publisher": "Immigration, Refugees and Citizenship Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "wireless",
    "organizationId": "crtc",
    "title": "Know what to check before choosing a phone plan",
    "description": "The CRTC Wireless Code explains consumer protections for mobile phone service contracts.",
    "nextStep": "Compare the total price, data allowance, cancellation terms and trial conditions before agreeing.",
    "beforeOpening": "Rules can differ for prepaid and postpaid services. Keep your agreement and ask the provider to explain unclear charges.",
    "keywords": [
      "phone",
      "mobile",
      "wireless",
      "cell",
      "contract",
      "internet",
      "data"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "life",
        "money"
      ],
      "needs": [
        "phone"
      ],
      "audiences": [],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Rules can differ for prepaid and postpaid services. Keep your agreement and ask the provider to explain unclear charges.",
        "decisionBy": "Canadian Radio-television and Telecommunications Commission"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://crtc.gc.ca/eng/phone/mobile/code.htm",
      "publisher": "Canadian Radio-television and Telecommunications Commission",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": "2026-08-14",
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "winter",
    "organizationId": "ircc",
    "title": "Prepare for the seasons where you live",
    "description": "Canada’s climate varies widely. This overview helps you understand local weather and prepare clothing for the seasons.",
    "nextStep": "Check the forecast for your community and plan suitable layers, winter footwear, gloves and a hat.",
    "beforeOpening": "Conditions differ by region and day. Follow local weather alerts rather than relying on a national seasonal average.",
    "keywords": [
      "winter",
      "weather",
      "cold",
      "snow",
      "climate",
      "clothes",
      "boots"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "life"
      ],
      "needs": [
        "winter"
      ],
      "audiences": [
        "newcomer"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "Conditions differ by region and day. Follow local weather alerts rather than relying on a national seasonal average.",
        "decisionBy": "Immigration, Refugees and Citizenship Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/land-climate.html",
      "publisher": "Immigration, Refugees and Citizenship Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "build-community",
    "organizationId": "ircc",
    "title": "Find small ways to feel at home",
    "description": "A newcomer guide to connecting through libraries, community centres, activities and volunteering.",
    "nextStep": "Choose one local activity that interests you. Ask about cost, registration, language and accessibility.",
    "beforeOpening": "This official guide opens as a PDF. Local opportunities and participation requirements vary.",
    "keywords": [
      "friends",
      "belonging",
      "volunteer",
      "library",
      "community",
      "loneliness"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "community",
        "life"
      ],
      "needs": [
        "community"
      ],
      "audiences": [
        "newcomer",
        "parent",
        "senior"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "This official guide opens as a PDF. Local opportunities and participation requirements vary.",
        "decisionBy": "Immigration, Refugees and Citizenship Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/content/dam/ircc/documents/pdf/english/corporate/publications-manuals/welcome_to_canada_build_your_community_e.pdf",
      "publisher": "Immigration, Refugees and Citizenship Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    }
  },
  {
    "id": "dental-plan",
    "organizationId": "service-canada",
    "title": "Check Canadian Dental Care Plan eligibility",
    "description": "Check whether you meet the Canadian Dental Care Plan’s insurance, income, tax filing and tax residency conditions.",
    "nextStep": "Read all eligibility criteria, then ask a provider about coverage and your share of the cost before treatment.",
    "beforeOpening": "The plan may not cover the full bill. Co-payments, charges above plan fees and uncovered services can leave costs to pay.",
    "keywords": [
      "dental",
      "dentist",
      "teeth",
      "insurance",
      "coverage"
    ],
    "location": {
      "country": "Canada",
      "provinces": [],
      "cities": [],
      "label": "Canada-wide information"
    },
    "service": {
      "categories": [
        "health",
        "money",
        "family"
      ],
      "needs": [
        "healthcare",
        "benefits"
      ],
      "audiences": [
        "parent",
        "senior"
      ],
      "audience": "People seeking information or support on this topic. Check each program’s conditions.",
      "eligibility": {
        "summary": "The plan may not cover the full bill. Co-payments, charges above plan fees and uncovered services can leave costs to pay.",
        "decisionBy": "Government of Canada"
      },
      "delivery": "Online resource",
      "cost": "Free information",
      "languages": []
    },
    "source": {
      "url": "https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html",
      "publisher": "Government of Canada",
      "review": {
        "checkedAt": "2026-10-03",
        "sourceUpdatedAt": null,
        "nextReviewAt": "2026-11-03",
        "method": "source-page-check"
      }
    },
    "supportingSources": [
      {
        "label": "Coverage and possible out-of-pocket costs",
        "url": "https://www.canada.ca/en/services/benefits/dental/dental-care-plan/coverage.html"
      }
    ]
  }
];
