import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from '../styles/post-link.module.css';

const PostLink = ({ post }) => (
  <div className={styles.container}>
    <Link to={post.frontmatter.path} className={styles.blogTitle}>
      <div>{post.frontmatter.title}</div>
    </Link>
    <p className={styles.blogDate}>{post.frontmatter.date}</p>
  </div>
);

PostLink.propTypes = {
  post: PropTypes.object,
};

export default PostLink;
