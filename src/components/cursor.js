import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/cursor.module.css';

export default function Cursor({ display }) {
  const classes = [styles.cursor];
  switch (display) {
    case 'off':
      classes.push(styles.hide);
      break;
    case 'blink':
      classes.push(styles.blink);
      break;
    default:
  }

  return <span className={classes.join(' ')}>|</span>;
}

Cursor.propTypes = {
  display: PropTypes.string, // 'on', 'off', 'blink'
};
