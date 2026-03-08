export type WorkExperience = {
  url?: string;
  company: string;
  role: string;
  type: "Part-time" | "Freelance" | "Contract" | "Full-time" | "Intern";
  period: string;
  location?: string;
  technologies: string[];
  summary?: string;
  details: string[];
};

export type SideProject = {
  url?: string;
  title: string;
  softwareType?: string;
  technologies?: string[];
  details: string;
};

export type Volunteer = {
  organization: string;
  role: string;
  period: string;
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

export const experience: WorkExperience[] = [
  {
    url: "https://zerrtech.com/",
    company: "Zerrtech",
    role: "Software Engineer",
    type: "Part-time",
    period: "Nov 2020 - Present",
    location: "Boise, Idaho",
    technologies: [
      "Python",
      "React",
      "Next.js",
      "AWS Lambda",
      "Terraform",
      "Expo React Native",
      "PostgreSQL",
      "AWS",
      "Django",
      "Django REST Framework",
      "AWS CloudFormation",
      "React Native",
      "Full-Stack Development",
      "Business Process Automation",
    ],
    summary:
      "Zerrtech is a software consulting company based in Idaho, delivering custom-built digital solutions for businesses of all sizes — from local startups to enterprise clients. We specialize in full-stack development, cloud infrastructure, and intelligent automation.",
    details: [
      "Engineered LifeRaft, a secure client management platform for financial advisors featuring asset tracking, document management, PDF report generation, and two-factor authentication. Deployed on AWS with Terraform-managed infrastructure.",
      "Built a production-ready Python SDK for the Harvest API (published to PyPI) alongside AWS Lambda automations with Slack integration. Automated daily timesheet validation and project categorization to prevent billing errors.",
      "Co-developed a multilingual Contentful CMS and e-commerce site serving 5 countries, engineered with Next.js (SSR/SSG) and deployed on Netlify for strong SEO performance.",
      "Built business analytics dashboards and reporting suites using React, D3, Django, and Pandas — including Suds, a real-time analytics platform for car wash dealers.",
      "Revamped a React Native application to Expo and Expo Application Services for faster deployment cycles, paired with a Detox end-to-end testing suite.",
      "Developed a Next.js quiz platform with Firebase backend featuring module licensing, group distribution, anonymous completion tracking, and role-based access control.",
      "Built a web-scraping bot to monitor and track product price history across major retail stores for market analysis.",
    ],
  },
  {
    url: "https://risingsunsoberliving.com/",
    company: "Rising Sun Sober Living",
    role: "Freelance Software Engineer",
    type: "Freelance",
    period: "Jan 2014 - Present",
    location: "Boise, Idaho (Remote)",
    technologies: [
      "AWS",
      "Next.js",
      "Expo React Native",
      "NestJS",
      "Amazon Cognito",
      "Amazon ECS",
      "Amazon RDS",
    ],
    summary:
      "Sole developer of a full-stack residential management platform for sober living facilities across the Pacific Northwest, managing 6,500+ residents across 50+ locations.",
    details: [
      "Led a complete platform migration from Angular/Ionic + Firebase to a modern stack when performance limitations and desktop requirements demanded a new architecture.",
      "Built manager and admin tools including rent collection, curfew compliance monitoring, UA drug testing workflows with photo documentation, secure document storage, automated mass SMS, and work order tracking.",
      "Created a private, read-only parole officer portal scoped to assigned residents with access to records, UA documentation, and activity history.",
      "Implemented fully automated CI/CD across three platforms — web via AWS Amplify, API via AWS ECS, and mobile via Fastlane to TestFlight — orchestrated through GitHub Actions.",
    ],
  },
  {
    url: "https://clouding.io",
    company: "Clouding.io",
    role: "Freelance Software Engineer",
    type: "Freelance",
    period: "Jan 2019 - Dec 2025",
    location: "Barcelona, Spain (Remote)",
    technologies: [
      "JavaScript",
      "PHP",
      "Webpack",
      "Handlebars.js",
      "SCSS/CSS",
      "jQuery",
      "WordPress",
      "Zendesk",
      "Node.js",
      "Google Tag Manager",
      "reCAPTCHA",
    ],
    summary:
      "Sole software engineer for Clouding.io, a cloud hosting provider, independently designing and delivering the company's full web presence from the ground up.",
    details: [
      "Built the marketing website end-to-end with multi-language support (Spanish, English, Catalan), a dynamic pricing calculator, and integrations with Zendesk, Google reCAPTCHA, and Google Tag Manager.",
      "Developed a self-hosted internet speed test application using PHP and Vanilla JavaScript with Web Workers — multi-threaded, multi-server architecture with download, upload, ping, and jitter measurement.",
      "Customised the Zendesk Help Centre with a fully bespoke theme — 22 Handlebars templates, 5,500+ lines of custom CSS, and client-side JavaScript.",
      "Maintained the company WordPress blog with a custom theme, WP Rocket caching, and Advanced Custom Fields.",
    ],
  },
  {
    company: "AIML Score",
    role: "Freelance Software Engineer",
    type: "Freelance",
    period: "Dec 2023 - Oct 2025",
    location: "Cape Town, South Africa (Remote)",
    technologies: [
      "Next.js",
      "AWS Lambda",
      "API Gateways",
      "React",
      "TypeScript",
      "Amazon DynamoDB",
      "Turborepo",
      "Tailwind CSS",
      "Terraform",
      "FinTech",
      "Emerging Markets",
    ],
    summary:
      "Built and maintained the full frontend platform for an AI-powered lending and credit scoring solution serving the African market, initially launched in Uganda.",
    details: [
      "Architected a Next.js 15 / React 19 monorepo using Turborepo, delivering three production applications: a loan management portal, a role-based analytics dashboard, and an S3-backed document reporting system.",
      "Implemented secure, multi-role authentication using NextAuth.js integrated with AWS Cognito, supporting approver workflows and access-gated reporting views.",
      "Built interactive analytics dashboards with Recharts to visualise loan portfolio metrics including offer conversion rates, repayment performance, and risk exposure.",
      "Contributed to backend development using AWS serverless architecture — Lambda functions behind API Gateway with DynamoDB.",
      "Deployed infrastructure on AWS using Terraform and AWS Amplify with multi-environment support.",
    ],
  },
  {
    url: "https://www.idearoom.com/",
    company: "IdeaRoom",
    role: "Contract Software Engineer",
    type: "Contract",
    period: "Jun 2020 - Aug 2021",
    location: "Boise, Idaho (Remote)",
    technologies: ["Node.js", "React", "Three.js", "PandaDoc"],
    summary:
      "Contracted to extend IdeaRoom's SaaS platform — a 3D configurator used by 300+ shed, carport, and building vendors across the US, UK, Canada, and Australia.",
    details: [
      "Built an automated document signing pipeline integrating PandaDoc for invoice generation and e-signature workflows, reducing manual processing overhead.",
      "Implemented 3D measurement/dimension lines within IdeaRoom's WYSIWYG building designer, enhancing spatial accuracy during customization.",
    ],
  },
  {
    company: "EarthLab AI Systems",
    role: "Contract Software Engineer",
    type: "Contract",
    period: "Jun 2020 - Aug 2020",
    location: "Barcelona, Spain (Remote)",
    technologies: ["Flask", "React", "Google Cloud Platform (GCP)"],
    details: [
      "Built the core platform — an interactive Mapbox-based tool where users draw regions of interest, manage GeoJSON data, and receive satellite image updates for those areas.",
    ],
  },
  {
    url: "https://www.linkedin.com/company/avanoo/",
    company: "Avanoo",
    role: "Freelance Software Engineer",
    type: "Contract",
    period: "Apr 2020 - Jun 2020",
    location: "San Francisco Bay Area (Remote)",
    technologies: ["React Native", "TypeScript"],
    summary:
      "Built and maintained mobile features for Avanoo's AI-driven employee engagement platform — a micro-learning app used by enterprise teams at Toyota, Cisco, and KPMG.",
    details: [
      "Developed React Native mobile features for daily 3-minute video programs driving culture change, leadership development, and behavioral growth.",
    ],
  },
  {
    url: "https://fimarge.com/",
    company: "Fimarge",
    role: "Freelance Software Engineer",
    type: "Freelance",
    period: "Jan 2019 - Dec 2019",
    location: "Barcelona, Spain (Remote)",
    technologies: [
      "React",
      "Apache Cordova",
      "Redux.js",
      "Redux-Form",
      "SCSS/CSS",
      "Webpack",
      "Axios",
    ],
    summary:
      "Core team member on a React-based fintech platform giving investors and financial advisors real-time visibility into portfolios, fund performance, and investment history.",
    details: [
      "Integrated Apache Cordova to package the web app as a native iOS and Android application, managing the full App Store and Google Play submission pipeline.",
      "Overhauled client-side navigation to correctly restore session state on page reload using SessionStorage and redux-persist.",
      "Implemented Chart.js doughnut and bar chart components with positive/negative colour coding for investment performance data.",
      "Added cross-browser compatibility fixes including Promise polyfills for IE and Firefox rendering bug resolutions.",
    ],
  },
  {
    url: "https://tsheets.com",
    company: "TSheets (Intuit)",
    role: "Senior Mobile Engineer",
    type: "Full-time",
    period: "Oct 2015 - Jan 2018",
    location: "Boise, Idaho",
    technologies: [
      "Swift",
      "Objective-C",
      "Java",
      "SQLite",
      "Xcode",
      "Android Studio",
    ],
    summary:
      "TSheets is the cloud-based time tracking and scheduling solution used by 500,000+ users in over 100 countries. Acquired by Intuit in 2018.",
    details: [
      "Designed, built, and maintained native iOS and Android applications as a senior mobile developer.",
      "Led cross-team collaboration to coordinate the release of bug fixes and features.",
    ],
  },
  {
    url: "https://whitecloud.com",
    company: "WhiteCloud Analytics (Relias)",
    role: "Frontend Software Engineer",
    type: "Full-time",
    period: "Mar 2013 - Oct 2015",
    location: "Boise, Idaho",
    technologies: [
      "AngularJS",
      "Backbone",
      "D3.js",
      "jQuery",
      "LESS",
      "JavaScript",
      "CSS",
      "Gulp",
    ],
    summary:
      "Collaborative team development using Angular and Spring to build data analysis applications for Health Systems.",
    details: [
      "Led a frontend team to design and implement a reusable D3.js charting library.",
      "Co-developed a Population Health single page application in AngularJS.",
      "Co-developed a Jasmine testing framework to maintain code quality.",
      "Spearheaded the migration from vanilla CSS to LESS and mentored a team of 10 engineers.",
      "Co-developed a Gulp build system running JS linting, Jasmine tests, and asset compilation.",
    ],
  },
  {
    url: "https://whitecloud.com",
    company: "WhiteCloud Analytics (Relias)",
    role: "Full Stack Software Engineer",
    type: "Full-time",
    period: "Mar 2012 - Mar 2013",
    location: "Boise, Idaho",
    technologies: [
      "JavaScript",
      "Java Spring",
      "jQuery",
      "MySQL",
    ],
    summary: "",
    details: [],
  },
  {
    url: "https://sap.com",
    company: "iAnywhere (SAP)",
    role: "Software Engineer Intern",
    type: "Intern",
    period: "Mar 2011 - Mar 2012",
    location: "Boise, Idaho",
    technologies: [
      "jQuery",
      "jQuery Mobile",
      "oData",
      "dataJS",
      "Apache Web Service",
    ],
    details: [
      "Created a web-based configuration utility that configures a database using oData calls to communicate between client and server.",
      "Created multiple tests to exploit and fix bugs in Advantage Database Server and Web Server.",
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "LexiTales",
    softwareType: "Mobile App",
    technologies: [
      "Expo React Native",
      "TypeScript",
      "AWS Lambda",
      "Terraform",
      "FastAPI",
      "PostgreSQL",
      "GitHub Actions",
      "OpenAI API",
      "In-App Purchases",
    ],
    details:
      "Bilingual English/Spanish interactive storytelling app with branching narratives, chapter narration audio, and a freemium subscription model. Backend on AWS Lambda + PostgreSQL deployed via Terraform, with an AI-assisted story generation pipeline. Published on iOS and Android via automated CI/CD.",
  },
  {
    title: "Urban Interval Timer",
    softwareType: "Mobile App",
    technologies: [
      "Expo React Native",
      "TypeScript",
      "iOS Development",
      "Android Development",
    ],
    details:
      "Cross-platform HIIT interval timer for iOS and Android. Features background-safe countdowns, audio cues with smart music ducking, configurable work/rest intervals, haptic feedback, and light/dark mode. Published via EAS Build.",
  },
  {
    url: "https://danielryan.xyz/",
    title: "DanielRyan.xyz",
    softwareType: "Website",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    details: "This personal website and portfolio.",
  },
  {
    url: "https://www.filamidaho.org/",
    title: "Fil-Am Website",
    softwareType: "Website",
    details:
      "Built and maintained a website for a local organization, showcasing members, events, announcements, and interests.",
  },
  {
    url: "https://tacogato.app/",
    title: "TacoGato",
    softwareType: "Mobile App",
    technologies: ["Ionic", "Firebase", "Firebase Auth"],
    details:
      "A socially competitive taco counting app. Join a league and compete with friends.",
  },
  {
    title: "D3.js Chart Library",
    softwareType: "Open Source Library",
    technologies: ["D3.js"],
    details:
      "Dynamic, customizable charting layer with API, iPad gesture support, data filters, and cross-browser support.",
  },
  {
    title: "Boise Art Hunt",
    softwareType: "Web App",
    technologies: ["Angular", "Heroku", "Google Maps API"],
    details:
      "Hackathon project — a scavenger hunt game using geofencing to discover 600+ public art pieces in Boise.",
  },
];

export const volunteer: Volunteer[] = [
  {
    organization: "Treefort Music Fest",
    role: "Software Engineer",
    period: "Feb 2014 - Mar 2017",
    details:
      "Built the festival mobile app with a team of 10 volunteer developers, implementing music streaming playback, artist biographies, and a real-time line status web app for venue-goers.",
  },
  {
    organization: "Boise Frontend Meetup",
    role: "Co-organizer & Speaker",
    period: "Jan 2016 - Apr 2017",
    details:
      "Co-hosted meetup to educate engineers in the local area on frontend technologies.",
  },
  {
    organization: "Boise Code Camp",
    role: "Student Mentor",
    period: "Jan 2014",
    details:
      "Mentored junior and high school students in programming fundamentals and web development.",
  },
];

export const education: Education[] = [
  {
    url: "https://boisestate.edu",
    title: "Boise State University",
    degree: "Bachelor's in Computer Science",
    period: "Fall 2008 - Spring 2012",
    honors: "Dean's List (GPA > 3.75) — Fall 2008",
    courses:
      "Data Structures and Algorithms, Software Engineering, Operating Systems, Distributed Systems, Parallel Computing, Programming Languages, Cryptology, Computer Networks, Artificial Intelligence, Theory of Computation",
  },
];
