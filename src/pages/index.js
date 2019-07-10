import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/index.module.css';
import CursorLine from '../components/cursor-line';
import FontAwesomeIcons from '../font-awesome';
import Portfolio from '../components/portfolio';

export default class Index extends Component {
  state = {
    header1: '',
    cursorDisplay1: 'off',
    header2: '',
    cursorDisplay2: 'off',
    header3: '',
    cursorDisplay3: 'off',
    displayPortfolio: false,
  };

  componentWillMount() {
    FontAwesomeIcons.init();
  }

  async componentDidMount() {
    const visited = sessionStorage.getItem('visited');

    if (visited) {
      this.setState({
        header1: 'Hello.',
        cursorDisplay1: 'off',
        header2: 'I am Daniel',
        cursorDisplay2: 'off',
        header3: 'Nice to meet you',
        cursorDisplay3: 'blink',
        displayPortfolio: true,
      });

      return;
    }

    await this.cursorLine1();
    await this.sleep(2000);
    await this.setState({ cursorDisplay1: 'off' });
    await this.cursorLine2();
    await this.sleep(1500);
    await this.setState({ cursorDisplay2: 'off' });
    await this.cursorLine3();
    await this.sleep(500);
    await this.setState({ displayPortfolio: true });

    sessionStorage.setItem('visited', true);
  }

  cursorLine1 = async () => {
    const text = 'Hello.';
    this.setState({ cursorDisplay1: 'on' });

    for (let i = 1; i <= text.length; i += 1) {
      await this.sleepRand();
      this.setState({ header1: text.slice(0, i) });
    }

    await this.sleep(500);
    this.setState({ cursorDisplay1: 'blink' });
  };

  cursorLine2 = async () => {
    const text = 'I am Daniel';
    this.setState({ cursorDisplay2: 'on' });

    for (let i = 1; i <= text.length; i += 1) {
      await this.sleepRand();
      this.setState({ header2: text.slice(0, i) });
    }

    await this.sleep(500);
    this.setState({ cursorDisplay2: 'blink' });
  };

  cursorLine3 = async () => {
    const text = 'Nice to meet you';
    this.setState({ cursorDisplay3: 'on' });

    for (let i = 1; i <= text.length; i += 1) {
      await this.sleepRand();
      this.setState({ header3: text.slice(0, i) });
    }

    await this.sleep(500);

    this.setState({ cursorDisplay3: 'blink' });
  };

  sleepRand = () => {
    const ms = Math.random() * 500;
    return this.sleep(ms);
  };

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  render() {
    const {
      header1,
      cursorDisplay1,
      header2,
      cursorDisplay2,
      header3,
      cursorDisplay3,
      displayPortfolio,
    } = this.state;

    return (
      <Layout>
        <Helmet>
          <title>Hello I'm Daniel 👋</title>
          <meta name="description" content="Hello I'm Daniel 👋" />
        </Helmet>
        <Header />

        <div className={styles.animatedText}>
          <CursorLine text={header1} display={cursorDisplay1} />
          <CursorLine text={header2} display={cursorDisplay2} />
          <CursorLine text={header3} display={cursorDisplay3} />
        </div>

        <div className={!displayPortfolio ? styles.hide : ''}>
          <hr />
          <Portfolio />
        </div>
      </Layout>
    );
  }
}
