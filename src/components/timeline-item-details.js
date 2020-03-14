import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/timeline-item-details.module.css';
import { BoxContainer } from './layout';
import Pill from './pill';

export default function TimeLineItemDetails({
  url,
  title,
  compensation,
  positions,
  softwareType,
  technologies,
  details,
}) {
  let titleElem = title;

  if (url) {
    titleElem = (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className={styles.url}
      >
        {title}
        <FontAwesomeIcon className={styles.externalLink} icon="external-link" />
      </a>
    );
  }

  let positionsElem;

  if (positions) {
    positionsElem = positions.map(position => (
      <h4 className={styles.position}>{position}</h4>
    ));
  }

  let technologySection;
  if (technologies) {
    const technologyPills = technologies.map(technology => (
      <Pill key={technology}>{technology}</Pill>
    ));
    technologySection = (
      <>
        <h4 className={styles.technologies}>Technologies:</h4>
        <div className={styles.technologyPills}>{technologyPills}</div>
      </>
    );
  }

  return (
    <BoxContainer>
      <h2 className={styles.title}>{titleElem}</h2>
      <h4 className={styles.compensation}>{compensation}</h4>

      {positionsElem}

      <h4 className={styles.softwareType}>{softwareType}</h4>
      {technologySection}
      <div className={styles.details}>{details}</div>
    </BoxContainer>
  );
}

TimeLineItemDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  compensation: PropTypes.string,
  positions: PropTypes.array,
  softwareType: PropTypes.string,
  technologies: PropTypes.string,
  details: PropTypes.string,
};
