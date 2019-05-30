import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/timeline-item-details.module.css';
import { BoxContainer } from './layout';

export default function TimeLineItemDetails({
  url,
  title,
  compensation,
  softwareType,
  technologies,
  details,
}) {
  return (
    <BoxContainer>
      <h1 className={styles.title}>
        <a href={url} className={styles.url}>
          {title}
        </a>
      </h1>
      <h4 className={styles.compensation}>{compensation}</h4>
      <h4 className={styles.softwareType}>{softwareType}</h4>
      <h4 className={styles.technologies}>Technologies Used: {technologies}</h4>
      <p className={styles.details}>{details}</p>
    </BoxContainer>
  );
}

TimeLineItemDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  compensation: PropTypes.string,
  softwareType: PropTypes.string,
  technologies: PropTypes.string,
  details: PropTypes.string,
};
