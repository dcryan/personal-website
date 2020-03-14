import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/pill.module.css';

export default function Pill({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Pill.propTypes = {
  children: PropTypes.string,
};
