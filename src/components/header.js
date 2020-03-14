import React from 'react';

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.mainHeader}>
        <Link to="" className={styles.header}>
          {'<danielryan.xyz />'}
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link
            to="projects"
            activeClassName={styles.active}
            className={styles.header}
          >
            projects
          </Link>
          <span className={styles.headerDivider}>|</span>
          <Link
            to="blog"
            activeClassName={styles.active}
            className={styles.header}
          >
            blog
          </Link>
          <span className={styles.headerDivider}>|</span>
          <Link
            to="contact"
            activeClassName={styles.active}
            className={styles.header}
          >
            contact
          </Link>
        </div>
        <div className={styles.social} style={{ fontSize: '1.5em' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/dcryan"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/dcryan22"
          >
            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/dcryan22"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dcryan22/"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dcryan"
          >
            <FontAwesomeIcon icon={['fab', 'github-square']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/2997363/dcryan22"
          >
            <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
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
      <hr />
    </>
  );
}
