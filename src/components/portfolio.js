import React from 'react';
import styles from '../styles/portfolio.module.css';
import TimeLineItem from './timeline-item';
import TimeLineItemDetails from './timeline-item-details';
import {
  freelancing,
  fulltimePositions,
  sideProjects,
  education,
} from '../portfolio-data';

export default function Portfolio() {
  return (
    <div>
      <h1>Timeline</h1>

      <h1>Freelancing</h1>

      {freelancing.map((project, index) => (
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

      <hr />

      <h1>Full-time Positions</h1>

      {fulltimePositions.map((project, index) => (
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

      <hr />
      <h1>Side Projects</h1>

      {sideProjects.map((project, index) => (
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

      <hr />
      <h1>Education</h1>

      {education.map((project, index) => (
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
