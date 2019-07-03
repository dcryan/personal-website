import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/404.module.css';
import FontAwesomeIcons from '../font-awesome';

export default function success() {
  FontAwesomeIcons.init();
  return (
    <Layout>
      <Helmet>
        <title>Daniel | Contact Page</title>
        <meta name="description" content="Daniel | Contact Page" />
      </Helmet>
      <Header />
      <div className={styles.text}>
        <h3>How'd you get here?</h3>
        <h4>¯\_(ツ)_/¯</h4>
      </div>
    </Layout>
  );
}
