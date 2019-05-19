import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';
import Layout from '../components/layout';
import Header from '../components/header';
import FontAwesomeIcons from '../font-awesome';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  FontAwesomeIcons.init();
  return (
    <Layout>
      <Header />
      <div>{Posts}</div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
