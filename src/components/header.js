import React from 'react';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="" activeClassName={styles.active} className={styles.header}>
          Daniel
        </Link>
        <Link
          to="portfolio"
          activeClassName={styles.active}
          className={styles.header}
        >
          Portfolio
        </Link>
        <a href="mailto: d@nielryan.com" className={styles.header}>
          Contact
        </a>
      </div>
      <div className={styles.social}>
        <a
          className={styles.resume}
          href="https://docs.google.com/document/d/1fvPQO4fVGjo1OBmwrrR7e7kwJpeliLkxMNuVwpDHzpc/edit?usp=sharing"
        >
          Resume
          <FontAwesomeIcon icon="file-download" style={{ marginLeft: 8 }} />
        </a>
        <a href="https://github.com/dcryan" className={styles.header}>
          <FontAwesomeIcon icon={['fab', 'github']} color="lime-green" />
        </a>
        <a href="https://twitter.com/dcryan22" className={styles.header}>
          <FontAwesomeIcon icon={['fab', 'twitter']} color="lime-green" />
        </a>
        <a href="https://www.instagram.com/dcryan22/" className={styles.header}>
          <FontAwesomeIcon icon={['fab', 'instagram']} color="lime-green" />
        </a>
        <a
          href="https://stackoverflow.com/users/2997363/dcryan22"
          className={styles.header}
        >
          <FontAwesomeIcon
            icon={['fab', 'stack-overflow']}
            color="lime-green"
          />
        </a>
      </div>
    </div>
  );
}
