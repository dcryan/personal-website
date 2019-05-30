import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/timeline-item.module.css';

export default function TimeLineItem({ placeRight = false, children }) {
  return (
    <div className={[styles.timeContainer, styles.fadeIn].join(' ')}>
      <svg className={styles.center}>
        <line x1="50%" y1="0%" x2="50%" y2="100%" className={styles.line} />
        <circle cx="50%" cy="50%" r="7px" className={styles.circle} />
        <circle
          cx="50%"
          cy="50%"
          r="10px"
          className={[styles.circle, styles.pulse].join(' ')}
        />
      </svg>
      {!placeRight && <div className={styles.leftColumn}>{children}</div>}
      {placeRight && (
        <div className={styles.rightColumn}>{placeRight && children}</div>
      )}
    </div>
  );
}

TimeLineItem.propTypes = {
  placeRight: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
