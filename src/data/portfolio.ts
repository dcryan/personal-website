export type FreelanceProject = {
  url?: string;
  title: string;
  compensation: string;
  softwareType: string;
  technologies: string[];
  details: string;
};

export type FullTimePosition = {
  url?: string;
  title: string;
  positions: string[];
  technologies: string[];
  details: string[];
};

export type SideProject = {
  url?: string;
  title: string;
  compensation?: string;
  softwareType?: string;
  technologies?: string[];
  details: string;
};

export type Education = {
  url?: string;
  title: string;
  degree: string;
  period: string;
  honors?: string;
  courses?: string;
};

export const freelancing: FreelanceProject[] = [
  {
    url: "https://clouding.io",
    title: "Clouding.io Website",
    compensation: "Contract",
    softwareType: "Website/Blog/Knowledge Base",
    technologies: ["ES6", "Webpack", "Handlebars", "jQuery"],
    details:
      "Built out a static site generator for an IaaS (Infrastructure as a Service) company.",
  },
  {
    url: "https://itunes.apple.com/us/app/fimarge/id1386638498?mt=8",
    title: "Fimarge",
    compensation: "Contract",
    softwareType: "Android/iOS/PWA",
    technologies: ["React", "Redux", "Cordova"],
    details:
      "Built mobile apps for a private brokerage firm. Deployed to Android, iOS, and as a Progressive Web App.",
  },
  {
    title: "NCS Proforma Builder",
    compensation: "Contract - in progress",
    softwareType: "Web App",
    technologies: ["Laravel", "Google Maps API", "jQuery", "Puppeteer"],
    details:
      "Building a car wash proforma builder that generates PDF reports with location data and financial projections.",
  },
  {
    title: "Suds Dashboard",
    compensation: "Contract",
    softwareType: "Web App",
    technologies: ["D3.js", "React", "Redux"],
    details:
      "Built an analytics dashboard for car wash dealers to track and visualize key business metrics.",
  },
  {
    url: "https://itunes.apple.com/us/app/rising-sun-sober-living/id1274620239?mt=8",
    title: "Rising Sun Sober Living",
    compensation: "Contract",
    softwareType: "Mobile App",
    technologies: [
      "Ionic 3",
      "Typescript",
      "Firebase",
      "Google Cloud Functions",
      "Google Cloud Storage",
    ],
    details:
      "Built a rehab housing management app for tracking residents, payments, and house operations.",
  },
  {
    url: "https://gamenightlive.com",
    title: "Game Night Live!",
    compensation: "Contract",
    softwareType: "Website",
    technologies: ["Wordpress", "Divi", "Figma"],
    details:
      "Designed and built a website for an entertainment company specializing in live game show events.",
  },
];

export const fullTimePositions: FullTimePosition[] = [
  {
    url: "https://tsheets.com",
    title: "TSheets Inc. an Intuit Company",
    positions: ["Mobile Software Engineer (iOS & Android): Oct '15 - Jan '19"],
    technologies: [
      "Objective C",
      "Swift",
      "Java 6",
      "XML",
      "SQLite",
      "XCode",
      "Android Studio",
    ],
    details: [
      "Rebuilt the location engine used by ~12k users/day to track GPS locations in the background.",
      "Improved the sync engine to handle large data sets more efficiently.",
      "Built the scheduling feature that generated $30k in revenue in the first month.",
      "Led the migration from SVN to Git for the mobile team.",
      "Built the filter bar feature for quickly searching and filtering time entries.",
    ],
  },
  {
    url: "https://whitecloud.com",
    title: "WhiteCloud Analytics a Relias Company",
    positions: [
      "Frontend Software Engineer: Mar '14 - Oct '15",
      "Full-stack Software Engineer: Mar '12 - Mar '14",
    ],
    technologies: ["AngularJS", "Backbone", "LESS", "Java Spring"],
    details: [
      "Built a reusable D3.js charting library used across multiple applications.",
      "Developed the Angular-based Population Health application.",
      "Introduced and set up the Jasmine testing framework for frontend code.",
      "Led the migration from raw CSS to LESS for better style maintainability.",
      "Set up the Gulp build system for frontend asset compilation.",
    ],
  },
  {
    url: "https://sap.com",
    title: "SAP - Advantage Database Team",
    positions: ["Software Intern: Mar '11 - Mar '12"],
    technologies: [
      "jQuery",
      "jQuery Mobile",
      "oData",
      "dataJS",
      "Apache Web Service",
      "Advantage Database Server",
      "Advantage Web Server",
    ],
    details: [
      "Built a web-based configuration utility for the Advantage Database Server.",
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    url: "https://github.com/dcryan/dcryan.github.io",
    title: "Personal Website",
    softwareType: "Website",
    technologies: ["Gatsby", "React", "GraphQL"],
    details: "My personal website and portfolio built with modern web technologies.",
  },
  {
    title: "Frontend Dev Meetup",
    details:
      "Co-hosted and organized a local frontend development meetup group.",
  },
  {
    url: "https://tacogato.app/",
    title: "TacoGato",
    softwareType: "Mobile App",
    technologies: ["Ionic 1", "Firebase", "Firebase Auth"],
    details:
      "A competitive taco counting app. Track and compare taco consumption with friends.",
  },
  {
    title: "Boise Code Club",
    compensation: "Volunteer",
    details:
      "Mentored junior high students in programming fundamentals and web development.",
  },
  {
    title: "D3.js Chart Library",
    compensation: "Open Source Library",
    technologies: ["D3.js"],
    details:
      "Built a dynamic charting layer on top of D3.js for reusable, configurable chart components.",
  },
  {
    title: "Boise Art Hunt",
    compensation: "Hack-a-thon",
    softwareType: "Web App",
    technologies: ["Angular", "Heroku", "Google Maps API"],
    details:
      "A scavenger hunt app with geofencing that guides users to public art installations around Boise.",
  },
  {
    title: "Treefort Music Fest Mobile App",
    compensation: "Volunteer",
    softwareType: "Mobile App",
    technologies: ["Ionic 1", "AWS DynamoDB"],
    details:
      "Built a festival scheduling app for attendees to browse and save events at Treefort Music Fest.",
  },
  {
    title: "Line-o-meter App for Treefort",
    compensation: "Volunteer",
    softwareType: "Responsive Web App",
    technologies: ["Angular", "Cordova"],
    details:
      "A line status app that let festival-goers check wait times at venues in real time.",
  },
];

export const education: Education[] = [
  {
    url: "https://boisestate.edu",
    title: "Boise State University",
    degree: "BS Computer Science",
    period: "Fall 2008 - Spring 2012",
    honors: "Dean's List GPA > 3.75 Fall 2008",
    courses:
      "Artificial Intelligence, Distributed Systems, Operating Systems, Cryptology, Networks",
  },
];
