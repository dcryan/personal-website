import React from 'react';
import HomeLink from './home-link';
import styles from '../styles/home-links.module.css';

export default function HomeLinks() {
  return (
    <div className={[styles.container, styles.fadeIn].join(' ')}>
      <HomeLink to="projects" color="yellow">
        projects
      </HomeLink>
      <HomeLink to="blog" color="blue">
        blog
      </HomeLink>
      <HomeLink to="contact" color="red">
        contact
      </HomeLink>
    </div>
  );
}
