import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';
import Layout from '../components/layout';
import Header from '../components/header';
import FontAwesomeIcons from '../font-awesome';
import styles from '../styles/blog.module.css';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ));

  FontAwesomeIcons.init();
  return (
    <Layout>
      <Header />
      <div className={styles.container}>{posts}</div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
