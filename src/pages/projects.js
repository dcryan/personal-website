import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import FontAwesomeIcons from '../font-awesome';
import Portfolio from '../components/portfolio';

export default function Resume() {
  FontAwesomeIcons.init();
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Projects" />
      </Helmet>
      <Layout>
        <Portfolio />
      </Layout>
    </>
  );
}
