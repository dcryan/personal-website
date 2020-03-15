import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import styles from '../styles/contact.module.css';
import FontAwesomeIcons from '../font-awesome';

export default function contact() {
  FontAwesomeIcons.init();
  return (
    <>
      <Helmet>
        <title>Daniel | Contact Page</title>
        <meta name="description" content="Come say hello :)" />
      </Helmet>
      <Layout color="red">
        <div className={styles.container}>
          <form
            className={styles.contact}
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
          >
            <h3>Hello world! 👋</h3>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">
              name*
              <input placeholder="Your name" name="name" type="text" required />
            </label>
            <label htmlFor="email">
              email*
              <input
                placeholder="Your email address"
                name="email"
                type="email"
                required
              />
            </label>
            <label htmlFor="phone-number">
              phone number
              <input
                placeholder="Your phone number"
                type="tel"
                name="phone-number"
              />
            </label>
            <label htmlFor="message">
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
              submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
