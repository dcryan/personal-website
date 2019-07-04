import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/contact.module.css';
import FontAwesomeIcons from '../font-awesome';

export default function contact() {
  FontAwesomeIcons.init();
  return (
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
            Name
            <input placeholder="Your name" name="name" type="text" required />
          </label>
          <label htmlFor>
            Email
            <input
              placeholder="Your Email Address"
              name="email"
              type="email"
              required
            />
          </label>
          <label htmlFor>
            Phone Number (optional)
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              name="phone-number"
              required
            />
          </label>
          <label htmlFor>
            Message
            <textarea
              placeholder="Type your message here...."
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
  );
}
