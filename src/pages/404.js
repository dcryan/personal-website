import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import styles from '../styles/404.module.css';
import FontAwesomeIcons from '../font-awesome';

export default function success() {
  FontAwesomeIcons.init();
  return (
    <>
      <Helmet>
        <title>danielryan.xyz | 404</title>
        <meta name="description" content="danielryan.xyz | 404" />
      </Helmet>
      <Layout>
        <div className={styles.text}>
          <h3>How'd you get here?</h3>
          <h4>¯\_(ツ)_/¯</h4>
        </div>
      </Layout>
    </>
  );
}
