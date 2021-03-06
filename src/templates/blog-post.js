import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import FontAwesomeIcons from '../font-awesome';
import SEO from '../components/seo';
import styles from '../styles/blog-post.module.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  FontAwesomeIcons.init();
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  const { previous, next } = pageContext;
  return (
    <>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    </>
  );
}

Template.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
