import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/cursor-line.module.css';
import Cursor from './cursor';

export default function CursorLine({ display, text }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}> {text} </span>

      <Cursor display={display} />
    </div>
  );
}

CursorLine.propTypes = {
  display: PropTypes.string,
  text: PropTypes.string,
};
