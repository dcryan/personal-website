import React, { useState } from 'react';
import styles from '../styles/portfolio.module.css';
import TimeLineItem from './timeline-item';
import TimeLineItemDetails from './timeline-item-details';
import {
  freelancing,
  fulltimePositions,
  sideProjects,
  education,
} from '../portfolio-data';

const FREELANCE = 'FREELANCE';
const FULLTIME = 'FULLTIME';
const SIDEPROJECTS = 'SIDEPROJECTS';
const EDUCATION = 'EDUCATION';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(FREELANCE);

  const freelanceClicked = () => setActiveTab(FREELANCE);
  const fulltimeClicked = () => setActiveTab(FULLTIME);
  const sideProjectsClicked = () => setActiveTab(SIDEPROJECTS);
  const educationClicked = () => setActiveTab(EDUCATION);

  const freelanceClass =
    activeTab === FREELANCE
      ? [styles.tab, styles.active].join(' ')
      : styles.tab;

  const fulltimeClass =
    activeTab === FULLTIME ? [styles.tab, styles.active].join(' ') : styles.tab;

  const sideProjectsClass =
    activeTab === SIDEPROJECTS
      ? [styles.tab, styles.active].join(' ')
      : styles.tab;

  const educationClass =
    activeTab === EDUCATION
      ? [styles.tab, styles.active].join(' ')
      : styles.tab;

  return (
    <div>
      <div className={styles.tabContainer}>
        <button
          type="button"
          className={freelanceClass}
          onClick={freelanceClicked}
        >
          <div>Freelance</div>
        </button>
        <button
          type="button"
          className={fulltimeClass}
          onClick={fulltimeClicked}
        >
          <div>Full-time Positions</div>
        </button>
        <button
          type="button"
          className={sideProjectsClass}
          onClick={sideProjectsClicked}
        >
          <div>Side Projects</div>
        </button>
        <button
          type="button"
          className={educationClass}
          onClick={educationClicked}
        >
          <div>Education</div>
        </button>
      </div>

      {activeTab === FREELANCE &&
        freelancing.map((project, index) => (
          <TimeLineItem placeRight={index % 2 === 1}>
            <TimeLineItemDetails
              url={project.url}
              title={project.title}
              compensation={project.compensation}
              softwareType={project.softwareType}
              technologies={project.technologies}
              details={project.details}
            />
          </TimeLineItem>
        ))}

      {activeTab === FULLTIME &&
        fulltimePositions.map((project, index) => (
          <TimeLineItem placeRight={index % 2 === 1}>
            <TimeLineItemDetails
              url={project.url}
              title={project.title}
              positions={project.positions}
              technologies={project.technologies}
              details={project.details}
            />
          </TimeLineItem>
        ))}

      {activeTab === SIDEPROJECTS &&
        sideProjects.map((project, index) => (
          <TimeLineItem placeRight={index % 2 === 1}>
            <TimeLineItemDetails
              url={project.url}
              title={project.title}
              compensation={project.compensation}
              softwareType={project.softwareType}
              technologies={project.technologies}
              details={project.details}
            />
          </TimeLineItem>
        ))}

      {activeTab === EDUCATION &&
        education.map((project, index) => (
          <TimeLineItem placeRight={index % 2 === 1}>
            <TimeLineItemDetails
              url={project.url}
              title={project.title}
              details={project.details}
            />
          </TimeLineItem>
        ))}
    </div>
  );
}
