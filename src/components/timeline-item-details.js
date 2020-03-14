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
      <h5 key={position} className={styles.position}>
        {position}
      </h5>
    ));
  }

  let technologySection;
  if (technologies) {
    const technologyPills = technologies.map(technology => (
      <Pill key={technology}>{technology}</Pill>
    ));
    technologySection = (
      <>
        <h5 className={styles.technologies}>Technologies:</h5>
        <div className={styles.technologyPills}>{technologyPills}</div>
      </>
    );
  }

  let compensationElem;
  if (compensation) {
    compensationElem = (
      <h5 className={styles.compensation}>Project Type: {compensation}</h5>
    );
  }

  let softwareTypeElem;
  if (softwareType) {
    softwareTypeElem = (
      <h5 className={styles.softwareType}>Software overview: {softwareType}</h5>
    );
  }

  let detailsElem;
  if (details) {
    if (Array.isArray(details)) {
      const listItems = details.map(detail => <li key={detail}>{detail}</li>);
      detailsElem = (
        <div className={styles.details}>
          <ul>{listItems}</ul>
        </div>
      );
    }
  }

  return (
    <BoxContainer>
      <h2 className={styles.title}>{titleElem}</h2>

      {compensationElem}
      {positionsElem}
      {softwareTypeElem}
      {technologySection}
      {detailsElem}
    </BoxContainer>
  );
}

TimeLineItemDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  compensation: PropTypes.string,
  positions: PropTypes.array,
  softwareType: PropTypes.string,
  technologies: PropTypes.array,
  details: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
