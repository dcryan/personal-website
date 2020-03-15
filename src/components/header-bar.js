import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/header-bar.module.css';

export default function HeaderBar({ color }) {
  const classes = [styles.headerBar];
  switch (color) {
    default:
    case 'green':
      classes.push(styles.green);
      break;
    case 'yellow':
      classes.push(styles.yellow);
      break;
    case 'blue':
      classes.push(styles.blue);
      break;
    case 'red':
      classes.push(styles.red);
      break;
  }
  return <div className={classes.join(' ')}></div>;
}

HeaderBar.propTypes = {
  color: PropTypes.string,
};
