export interface TopicPlan {title:string;step:string;ask:string;resourceIds:string[]}
export const topicPlans: Record<string,TopicPlan[]> = {
  "life": [
    {
      "title": "Set up the everyday essentials",
      "step": "Start with the trip you need to make and the services you will use this week.",
      "ask": "What will this cost each month, and can I use it where I live?",
      "resourceIds": [
        "transport",
        "wireless",
        "winter"
      ]
    },
    {
      "title": "Make your new place feel familiar",
      "step": "Try one local activity. You do not need to solve everything before you start meeting people.",
      "ask": "Is registration needed, and is there a free or low-cost option?",
      "resourceIds": [
        "build-community",
        "211-canada",
        "newcomer-portal"
      ]
    }
  ],
  "work": [
    {
      "title": "Begin a focused job search",
      "step": "Choose a role and location, then prepare the documents and qualifications that role requires.",
      "ask": "Is this occupation regulated in my province or territory?",
      "resourceIds": [
        "job-bank",
        "credentials",
        "sin"
      ]
    },
    {
      "title": "Know your rights before you agree",
      "step": "Read the terms, verify the employer and understand where to ask for help.",
      "ask": "Which employment program and local workplace rules apply to me?",
      "resourceIds": [
        "worker-rights",
        "fraud",
        "newcomer-services"
      ]
    }
  ],
  "housing": [
    {
      "title": "Before signing a lease",
      "step": "Understand the rental process and check the listing, landlord and payment request.",
      "ask": "What is included in the rent, and which provincial tenancy rules apply?",
      "resourceIds": [
        "renting",
        "fraud"
      ]
    },
    {
      "title": "When finding or keeping a home is difficult",
      "step": "Ask a local service about housing help and current options.",
      "ask": "What area do you serve, and is there an intake or waiting list?",
      "resourceIds": [
        "211-canada",
        "costi-housing",
        "legal-aid-ontario"
      ]
    }
  ],
  "health": [
    {
      "title": "Understand coverage before you need care",
      "step": "Check which plan applies and ask about costs before an appointment.",
      "ask": "Is this provider covered by my plan, and what would I pay?",
      "resourceIds": [
        "healthcare",
        "ohip",
        "ifhp"
      ]
    },
    {
      "title": "Find the right kind of support",
      "step": "Separate routine care, dental coverage and crisis support so you reach the right service.",
      "ask": "Where can I get help for the concern I have today?",
      "resourceIds": [
        "ontario-doctor",
        "dental-plan",
        "crisis-988"
      ]
    }
  ],
  "documents": [
    {
      "title": "Start with the document you actually need",
      "step": "Use the responsible government agency and read the required evidence before applying.",
      "ask": "Which application route matches my current documents and circumstances?",
      "resourceIds": [
        "sin",
        "service-canada",
        "ontario-birth"
      ]
    },
    {
      "title": "Check local rules and get help with uncertainty",
      "step": "Requirements for driving, health coverage and legal help depend on location and circumstances.",
      "ask": "Which province or territory is responsible for this application?",
      "resourceIds": [
        "driving",
        "ohip",
        "legal-aid-ontario"
      ]
    }
  ],
  "money": [
    {
      "title": "Put the basics in place",
      "step": "Understand banking costs, tax residency and the help available with a return.",
      "ask": "What fees apply, and which records should I keep?",
      "resourceIds": [
        "banking",
        "cra",
        "tax-clinics"
      ]
    },
    {
      "title": "Explore support you may qualify for",
      "step": "Start with the official criteria. A relevant listing is not a benefit approval.",
      "ask": "What are the income, residency and tax filing conditions?",
      "resourceIds": [
        "benefits",
        "ccb",
        "dental-plan"
      ]
    }
  ],
  "education": [
    {
      "title": "Find learning that fits your stage",
      "step": "School, language classes and professional licensing follow different routes.",
      "ask": "Who decides admission or eligibility, and which documents are required?",
      "resourceIds": [
        "education",
        "language-classes",
        "credentials"
      ]
    },
    {
      "title": "Make learning practical for your family",
      "step": "Ask about schedules, childcare and community learning opportunities.",
      "ask": "Are there costs or supports that affect whether I can attend?",
      "resourceIds": [
        "wwcc-family-learning",
        "library",
        "new-language-work"
      ]
    }
  ],
  "family": [
    {
      "title": "Choose one family need first",
      "step": "Our family hub groups pregnancy, baby care, childcare and school around practical next steps.",
      "ask": "Which service fits my child’s age and our current need?",
      "resourceIds": [
        "earlyon",
        "education",
        "ccb"
      ]
    },
    {
      "title": "Find people who can help you plan",
      "step": "Local programs can explain intake and connect you with other support.",
      "ask": "Do you serve my area, and can I contact you directly?",
      "resourceIds": [
        "211-canada",
        "jessies",
        "tph-prenatal"
      ]
    }
  ],
  "community": [
    {
      "title": "Build a connection close to home",
      "step": "Start with a library, activity or community service where you can return regularly.",
      "ask": "What can I join without a long commitment or a large cost?",
      "resourceIds": [
        "build-community",
        "211-canada",
        "library"
      ]
    },
    {
      "title": "Find settlement and language support",
      "step": "Choose the route for your destination, then check each service’s current conditions.",
      "ask": "Do you offer support in my preferred language and for my circumstances?",
      "resourceIds": [
        "newcomer-services",
        "quebec-support",
        "french-services"
      ]
    }
  ],
  "safety": [
    {
      "title": "If you need personal or emotional support",
      "step": "For an immediate threat to life, contact local emergency services. These resources offer different kinds of support.",
      "ask": "Can I use a safe device to contact the service I need?",
      "resourceIds": [
        "crisis-988",
        "sheltersafe",
        "211-canada"
      ]
    },
    {
      "title": "Check a request before acting on it",
      "step": "Pause before sharing identity documents, sending money or agreeing to unfamiliar terms.",
      "ask": "Can I independently verify who is asking and why?",
      "resourceIds": [
        "fraud",
        "worker-rights",
        "legal-aid-ontario"
      ]
    }
  ]
};
