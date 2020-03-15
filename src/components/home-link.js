import React from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import styles from '../styles/home-link.module.css';

export default function HomeLink({ to, children, color }) {
  const classes = [styles.container];
  switch (color) {
    case 'red':
      classes.push(styles.red);
      break;
    case 'blue':
      classes.push(styles.blue);
      break;
    case 'yellow':
      classes.push(styles.yellow);
      break;
    default:
  }
  return (
    <Link className={classes.join(' ')} to={to}>
      {children}
    </Link>
  );
}

HomeLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string,
};
