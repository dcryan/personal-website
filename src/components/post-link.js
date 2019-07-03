import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from '../styles/post-link.module.css';

const PostLink = ({ post }) => (
  <div className={styles.container}>
    <Link to={post.frontmatter.path}>
      <h2 className={styles.blogTitle}>{post.frontmatter.title}</h2>
    </Link>
    <p className={styles.blogDate}>{post.frontmatter.date}</p>
    <p className={styles.blogExcerpt}>{post.excerpt}</p>
  </div>
);

PostLink.propTypes = {
  post: PropTypes.object,
};

export default PostLink;
