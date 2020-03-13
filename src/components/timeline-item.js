import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/timeline-item.module.css';

export default function TimeLineItem({ placeRight = false, children }) {
  return (
    <div
      className={
        placeRight
          ? [styles.timeContainer, styles.fadeIn].join(' ')
          : [styles.timeContainer, styles.fadeIn, styles.contentRight].join(' ')
      }
    >
      <div
        className={
          !placeRight
            ? styles.leftColumn
            : [styles.leftColumn, styles.emptyColumn].join(' ')
        }
      >
        {!placeRight && children}
      </div>
      <div className={styles.center}>
        <svg className={styles.line}>
          <line x1="50%" y1="0%" x2="50%" y2="100%" />
        </svg>
        <svg className={styles.circleContainer}>
          <circle cx="50%" cy="50%" r="7px" className={styles.circle} />
          <circle
            cx="50%"
            cy="50%"
            r="10px"
            className={[styles.circle, styles.pulse].join(' ')}
          />
        </svg>
      </div>
      <div
        className={
          placeRight
            ? styles.rightColumn
            : [styles.rightColumn, styles.emptyColumn].join(' ')
        }
      >
        {placeRight && children}
      </div>
    </div>
  );
}

TimeLineItem.propTypes = {
  placeRight: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
