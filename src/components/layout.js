import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export const BoxContainer = ({ children }) => (
  <div className={styles.boxContainer}>{children}</div>
);
BoxContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
