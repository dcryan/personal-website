import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';
import HeaderBar from '../components/header-bar';
import styles from '../styles/contact.module.css';
import FontAwesomeIcons from '../font-awesome';

export default function contact() {
  FontAwesomeIcons.init();
  return (
    <>
      <HeaderBar />
      <Layout>
        <Helmet>
          <title>Daniel | Contact Page</title>
          <meta name="description" content="Daniel | Contact Page" />
        </Helmet>
        <Header />
        <div className={styles.container}>
          <form
            className={styles.contact}
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
          >
            <h3>Say Hi! 👋</h3>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor>
              name*
              <input placeholder="Your name" name="name" type="text" required />
            </label>
            <label htmlFor>
              email*
              <input
                placeholder="Your email address"
                name="email"
                type="email"
                required
              />
            </label>
            <label htmlFor>
              phone number
              <input
                placeholder="Your phone number"
                type="tel"
                name="phone-number"
              />
            </label>
            <label htmlFor>
              message*
              <textarea
                placeholder="Type your message here..."
                name="message"
                required
              />
            </label>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
