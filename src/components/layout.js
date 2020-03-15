import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/layout.module.css';
import Header from './header';
import HeaderBar from './header-bar';

export default function Layout({ children, hideHeader = false }) {
  return (
    <>
      <HeaderBar />
      <div className={styles.layout}>
        {!hideHeader && <Header />}
        <div className={styles.fadeIn}>{children}</div>
      </div>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  hideHeader: PropTypes.bool,
};

export const BoxContainer = ({ children }) => (
  <div className={styles.boxContainer}>{children}</div>
);
BoxContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
