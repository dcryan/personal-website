import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/success.module.css';
import FontAwesomeIcons from '../font-awesome';

export default function success() {
  FontAwesomeIcons.init();
  return (
    <Layout>
      <Helmet>
        <title>Daniel | Contact Page</title>
        <meta name="description" content="Daniel | Contact Page" />
      </Helmet>
      <div className={styles.text}>
        <h3>Thank you for your message!</h3>
        <h4>I'll get back to you shortly :)</h4>
      </div>
    </Layout>
  );
}
