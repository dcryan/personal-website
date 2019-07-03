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
          to="blog"
          activeClassName={styles.active}
          className={styles.header}
        >
          Blog
        </Link>
        <Link
          to="contact"
          activeClassName={styles.active}
          className={styles.header}
        >
          Contact
        </Link>
      </div>
      <div className={styles.social} style={{ fontSize: '1.5em' }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/dcryan"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} color="lime-green" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/dcryan22"
        >
          <FontAwesomeIcon
            icon={['fab', 'twitter-square']}
            color="lime-green"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/dcryan22"
        >
          <FontAwesomeIcon
            icon={['fab', 'facebook-square']}
            color="lime-green"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/dcryan22/"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} color="lime-green" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dcryan"
        >
          <FontAwesomeIcon icon={['fab', 'github-square']} color="lime-green" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackoverflow.com/users/2997363/dcryan22"
        >
          <FontAwesomeIcon
            icon={['fab', 'stack-overflow']}
            color="lime-green"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1fvPQO4fVGjo1OBmwrrR7e7kwJpeliLkxMNuVwpDHzpc/edit?usp=sharing"
        >
          <FontAwesomeIcon icon="file-download" />
        </a>
      </div>
    </div>
  );
}
