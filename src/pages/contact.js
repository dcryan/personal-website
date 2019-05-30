import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';

export default function contact() {
  return (
    <Layout>
      <Helmet>
        <title>Daniel | Contact Page</title>
        <meta name="description" content="Daniel | Contact Page" />
      </Helmet>
      <Header />
      <form
        method="post"
        action="#"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="contact"
      >
        <div className="field half first">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <div className="field half first">
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <div className="field half">
          <label htmlFor="email">
            Email
            <input type="text" name="email" id="email" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="message">
            Message
            <textarea name="message" id="message" rows="6" />
          </label>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
      </form>
    </Layout>
  );
}
