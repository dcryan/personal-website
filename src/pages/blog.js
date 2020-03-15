import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PostLink from '../components/post-link';
import Layout from '../components/layout';
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
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Thoughts and ideas of yours truly." />
      </Helmet>
      <Layout color="blue">
        <div className={styles.container}>{posts}</div>
      </Layout>
    </>
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
            date
            path
            title
          }
        }
      }
    }
  }
`;
