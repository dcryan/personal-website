import React from 'react';
import Layout, { BoxContainer } from '../components/layout';
import Header from '../components/header';
import FontAwesomeIcons from '../font-awesome';

export default function Portfolio() {
  FontAwesomeIcons.init();

  return (
    <Layout>
      <Header />

      <h1>Freelancing</h1>

      <BoxContainer>
        <h1>
          <a href="https://fimarge.com">Fimarge</a>
        </h1>
        <h4>Contract</h4>
        <h4>Technologies Used: React, Redux, Cordova</h4>
        <p>
          A PWA where clients view fund portfolios and converse with advisors.
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>Suds</h1>
        <h4>Contract</h4>
        <h4>Technologies Used: React, Redux, D3.js</h4>
        <p>A business analytics dashboard for car wash dealers</p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://www.risingsunsoberliving.com/">
            Rising Sun Sober Living
          </a>
        </h1>
        <h4>Contract</h4>
        <h4>
          Technologies Used: Ionic 3, Firebase, Google Cloud Functions, Google
          Cloud Storage
        </h4>
        <p>
          Communication app to manage and analyze residents of 40+ locations
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://gamenightlive.com">Game Night Live! Website</a>
        </h1>
        <h4>Contract</h4>
        <h4>Technologies used: WordPress, Figma</h4>
        <p>Designed and devloped their business website.</p>
      </BoxContainer>

      <BoxContainer>
        <h1>Cravly</h1>
        <h4>Contract - Not Completed</h4>
        <h4>
          Technologies Used: Angular 7, Google Firestore, Google Cloud Functions
        </h4>
        <p>
          Restaurant directory service with a focus on food photography as
          search criteria.
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://epimoniapp.com/">Epimoni</a>
        </h1>
        <h4>Contract - Not Completed</h4>
        <h4>Technologies Used: Ionic 3</h4>
        <p>Automated banking peer-to-peer lending platform.</p>
      </BoxContainer>

      <hr />

      <h1>Full-time Positions</h1>

      <BoxContainer>
        <h1>
          <a href="https://tsheets.com">TSheets</a>
        </h1>
        <h4>Mobile Software Engineer (iOS & Android): Oct '15 - Jan '19</h4>
        <h4>
          Technologies Used: Objective C, Swift, Java 6, XML, SQLite, XCode,
          Android Studio
        </h4>
        <p>
          <ul>
            <li>
              Lead engineer for designing and developing a location engine that
              would monitor a user’s location while on the clock. Used by
              approximately 12k unique users a day.
            </li>
            <li>
              Improved the reliability of the sync engine between mobile and
              backend databases.
            </li>
            <li>
              Worked with a team to develop a scheduling feature that provided
              $30k of revenue within the first year.
            </li>
            <li>
              Advocated and spearheaded the migration of SVN to Git. Educated
              the mobile team in Git workflow.
            </li>
            <li>
              Designed and implemented a filter bar, the most requested feature,
              for one of our most used pages.
            </li>
          </ul>
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://whitecloud.com">WhiteCloud Analytics</a>
        </h1>
        <h4>Frontend Software Engineer: Mar '14 - Oct '15</h4>
        <h4>Full-stack Software Engineer: Mar '12 - Mar '14</h4>
        <h4>
          Technologies Used: Angular 1, D3.js, LESS, Java 6, MySQL, Jasmine
        </h4>
        <p>
          <ul>
            <li>
              Led a frontend team to design and implement a charting library
              using D3 (see D3 Chart Library below).
            </li>
            <li>
              Co-developed a Population Health single page application in
              Angular 1 to pioneer its use in the future.
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
              Co-developed a Gulp build system, running JS linting, jasmine
              tests, etc helping maintain code quality.
            </li>
          </ul>
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://sap.com">SAP - Advantage Database Team</a>
        </h1>
        <h4>Software Intern: Mar '11 - Mar '12</h4>
        <h4>
          Technologies Used: Advantage Database Server, Advantage Web Server
        </h4>
        <h4>
          Acquainted with: oData, dataJS, jQuery, jQuery UI, jQuery Mobile, and
          Apache Web Service
        </h4>
        <p>
          <ul>
            <li>
              Designed and implemented a web-based configuration utility that
              configures a database using oData calls to communicate between the
              client and server.
            </li>
          </ul>
        </p>
      </BoxContainer>

      <hr />
      <h1>Side Projects</h1>

      <BoxContainer>
        <h1>Frontend Dev Meetup</h1>
        <p>
          Co-hosted meet up to educate engineers in the local area of frontend
          technologies.
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>TacoGato</h1>
        <h4>Technologies used: Ionic 1, Firebase</h4>
        <p>A socially competitive taco counting app.</p>
      </BoxContainer>

      <BoxContainer>
        <h1>Boise Code Club</h1>
        <p>Educated and mentored junior high students in web development.</p>
      </BoxContainer>

      <BoxContainer>
        <h1>D3.js Chart Library</h1>
        <p>
          An open source, dynamic, and customizable charting layer using D3.js.
          Includes: An API, iPad gesture support, data filters, and
          modern/mobile/IE7 & 8 browser support.
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>Boise Art Hunt</h1>
        <h4>3rd Place</h4>
        <h4>Technologies used: Angular, Heroku, Google Maps Api (JS)</h4>
        <p>
          A scavenger hunt game using geofencing to claim 600+ public art pieces
          rewarding the user with badges. The app was seeded with the Boise GIS
          data
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://treefortmusicfest.com">
            Treefort Music Fest Mobile App
          </a>
        </h1>
        <h4>Technologies used: Ionic, AWS, DynamoDB</h4>
        <p>
          Artist, music, and scheduling app for Treefort Music Fest, built by a
          team of 10 volunteer developers.
        </p>
      </BoxContainer>

      <BoxContainer>
        <h1>
          <a href="https://treefortmusicfest.com">
            Line-o-meter App for Treefort
          </a>
        </h1>
        <h4>Technologies used: Angular, Cordova</h4>
        <p>
          A line status app for Boise Treefort Music Fest, used to provide line
          length to venue goers so they can predict whether or not to see a
          particular show. This project gave us permission to take over the
          mobile app the following year.
        </p>
      </BoxContainer>

      <hr />
      <h1>Education</h1>

      <BoxContainer>
        <h1>
          <a href="https://boisestate.edu">Boise State University</a>
        </h1>
        <h4>Bachelor's in Computer Science</h4>
        <h4>Fall 2008 - Spring 2012</h4>
        <h4>Dean's List (GPA > 3.75) - Fall 2008</h4>
      </BoxContainer>
    </Layout>
  );
}
