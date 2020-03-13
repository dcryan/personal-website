import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/projects.module.css';
import FontAwesomeIcons from '../font-awesome';
import Portfolio from '../components/portfolio';
import HeaderBar from '../components/header-bar';

export default function Resume() {
  FontAwesomeIcons.init();
  return (
    <>
      <HeaderBar></HeaderBar>
      <Layout>
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="Projects" />
        </Helmet>
        <Header />

        <div>
          <hr />
          <Portfolio />
        </div>
      </Layout>
    </>
  );
}
