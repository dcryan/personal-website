import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/timeline-item.module.css';

export default function TimeLineItem({ children }) {
  return (
    <div className={[styles.timeContainer, styles.fadeIn].join(' ')}>
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
      <div className={styles.rightColumn}>{children}</div>
    </div>
  );
}

TimeLineItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
