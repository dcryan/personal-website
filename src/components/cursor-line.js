import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/cursor-line.module.css';
import Cursor from './cursor';

export default function CursorLine({ display, text, active }) {
  return (
    <div className={styles.container}>
      {active && <span className={styles.chevron}>></span>}
      <span className={styles.text}>
        {text}

        <Cursor display={display} />
      </span>
    </div>
  );
}

CursorLine.propTypes = {
  display: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
};
