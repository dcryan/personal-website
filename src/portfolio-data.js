import React from 'react';

export const freelancing = [
  {
    url: 'https://clouding.io',
    title: 'Clouding.io Website',
    compensation: 'Contract',
    softwareType: 'Website, Blog, and Knowledge Base',
    technologies: 'ES6, Webpack, Handlebars, jQuery',
    details:
      'Clouding.io is an Infrastructure as a Service company. I built a static site generator using Webpack and handlebars. Animations and actions (i.e., service fees calculator) are all done with custom JS.',
  },
  {
    url: 'https://itunes.apple.com/us/app/fimarge/id1456114142?mt=8',
    title: 'Fimarge',
    compensation: 'Contract',
    softwareType: 'Android and iOS Mobile App & PWA',
    technologies: 'React, Redux, Cordova',
    details:
      'Fimarge is a private brokerage based in Spain. I created iOS and Android mobile apps and a PWA providing clients full access to their investment funds. Includes a chat service with advisors.',
  },
  {
    title: 'NCS Proforma Builder',
    compensation: 'Contract - in progress',
    softwareType: 'Web App',
    technologies: 'Laravel, Google Maps API, jQuery, Puppeteer',
    details:
      'NCS is a company that creates proformas for new car wash locations. The proforma builder aggregates data from multiple sources and automatically formats a document in PDF format.',
  },
  {
    title: 'Suds Dashboard',
    compensation: 'Contract',
    softwareType: 'Web App',
    technologies: 'D3.js, React, Redux',
    details:
      'Suds is a data solution company for car wash dealers. I built an analytics dashboard that uses React and D3.js to provide regional level insight in real time.',
  },
  {
    url:
      'https://itunes.apple.com/us/app/rising-sun-sober-living/id1450655696?mt=8',
    title: 'Rising Sun Sober Living',
    compensation: 'Contract',
    softwareType: 'Mobile App',
    technologies:
      'Ionic 3, Typescript, Firebase, Google Cloud Functions, Google Cloud Storage',
    details:
      'Rising Sun Sober Living has rehabilitation housing with over 40 locations in the Pacific North West. This app allows managers to track data for their residents.',
  },
  {
    url: 'https://gamenightlive.com',
    title: 'Game Night Live!',
    compensation: 'Contract',
    softwareType: 'Website',
    technologies: 'Wordpress, Divi, Figma',
    details:
      'Game Night Live! is an entertainment company based out of Boise, Idaho that holds events nation wide. I designed and developed their public facing website. I drew the design in Figma, and implemented using WordPress and the Divi theme.',
  },
];

export const fulltimePositions = [
  {
    url: 'https://tsheets.com',
    title: 'TSheets Inc. an Intuit Company',
    positions: ["Mobile Software Engineer(iOS & Android): Oct '15 - Jan '19"],
    technologies:
      'Objective C, Swift, Java 6, XML, SQLite, XCode, Android Studio',
    details: (
      <ul>
        <li>
          Lead engineer for designing and developing a location engine that
          would monitor a user’s location while on the clock. Used by
          approximately 12k unique users a day.
        </li>
        <li>
          Improved the reliability of the sync engine between mobile and backend
          databases.
        </li>
        <li>
          Worked with a team to develop a scheduling feature that provided $30k
          of revenue within the first year.
        </li>
        <li>
          Advocated and spearheaded the migration of SVN to Git. Educated the
          mobile team in Git workflow.
        </li>
        <li>
          Designed and implemented a filter bar, the most requested feature, for
          one of our most used pages.
        </li>
      </ul>
    ),
  },

  {
    url: 'https://whitecloud.com',
    title: 'WhiteCloud Analytics a Relias Company',
    positions: [
      "Frontend Software Engineer: Mar '14 - Oct '15",
      "Full-stack Software Engineer: Mar '12 - Mar '14",
    ],
    details: (
      <ul>
        <li>
          Led a frontend team to design and implement a charting library using
          D3 (see D3 Chart Library below).
        </li>
        <li>
          Co-developed a Population Health single page application in Angular 1
          to pioneer its use in the future.
        </li>
        <li>
          Co-developed a testing framework in Jasmine to maintain a level of
          code quality within the product.
        </li>
        <li>
          Spearheaded the migration from vanilla CSS to LESS. Educated and
          mentored a team of 10 engineers.
        </li>
        <li>
          Co-developed a Gulp build system, running JS linting, jasmine tests,
          etc helping maintain code quality.
        </li>
      </ul>
    ),
  },

  {
    url: 'https://sap.com',

    title: 'SAP - Advantage Database Team',
    positions: ["Software Intern: Mar '11 - Mar '12"],
    technologies:
      'jQuery, jQuery Mobile, oData, dataJS, Apache Web Service, Advantage Database Server, Advantage Web Server',
    details: (
      <ul>
        <li>
          Designed and implemented a web-based configuration utility that
          configures a database using oData calls to communicate between the
          client and server.
        </li>
      </ul>
    ),
  },
];

export const sideProjects = [
  {
    url: 'https://github.com/dcryan/personal-website',
    title: 'Personal Website',
    softwareType: 'Website',
    technologies: 'Gatsby, React, GraphQL',
    details: 'My personal website with my portfolio and blog.',
  },
  {
    title: 'Frontend Dev Meetup',
    details:
      'Co-hosted meet up to educate engineers in the local area of frontend technologies',
  },
  {
    url: 'https://tacogato.app/',
    title: 'TacoGato',
    softwareType: 'Mobile App',
    technologies: 'Ionic 1, Firebase, Firebase Auth',
    details:
      'A socially competitive taco counting app. Join a league and compete with your closest friends.',
  },
  {
    title: 'Boise Code Club',
    compensation: 'Volunteer',
    details: 'Educated and mentored junior high students in web development.',
  },
  {
    title: 'D3.js Chart Library',
    softwareType: 'Open Source Library',
    details:
      'An open source, dynamic, and customizable charting layer using D3.js. Includes: An API, iPad gesture support, data filters, and modern/mobile/IE7 & 8 browser support.',
  },
  {
    url: '',
    title: 'Boise Art Hunt',
    compensation: 'Hack-a-thon',
    softwareType: 'Web App',
    technologies: 'Angular, Heroku, Google Maps API (JS)',
    details:
      'A scavenger hunt game using geofencing to claim 600+ public art pieces rewarding the user with badges. The app was seeded with the Boise GIS data',
  },
  {
    url: 'https://itunes.apple.com/us/app/treefort-music-fest/id608181277?mt=8',
    title: 'Treefort Music Fest Mobile App',
    compensation: 'Volunteer',
    softwareType: 'Mobile App',
    technologies: 'Ionic 1, AWS DynamoDB',
    details:
      'Artist, music, and scheduling app for Treefort Music Fest, built by a team of 10 volunteer developers.',
  },
  {
    url: 'https://treefortmusicfest.com',
    title: 'Line-o-meter App for Treefort',
    compensation: 'Volunteer',
    softwareType: 'Responsive Web App',
    technologies: 'Angular, Cordova',
    details:
      'A line status app for Boise Treefort Music Fest, used to provide line length to venue goers so they can predict whether or not to see a particular show. This project gave us permission to take over the mobile app the following year.',
  },
];

export const education = [
  {
    url: 'https://boisestate.edu',
    title: 'Boise State University',
    details: (
      <div>
        <h4>Bachelor's in Computer Science</h4>
        <h4>Fall 2008 - Spring 2012</h4>
        <h4>Dean's List (GPA > 3.75) - Fall 2008</h4>
        <h4>
          Classes: Artificial Intelligence, Distributed Systems, Operating
          Systems, Cryptology, Networks
        </h4>
      </div>
    ),
  },
];
