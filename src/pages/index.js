import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import styles from '../styles/index.module.css';
import CursorLine from '../components/cursor-line';
import FontAwesomeIcons from '../font-awesome';

export default class Index extends Component {
  state = {
    header1: '',
    cursorDisplay1: 'off',
    header2: '',
    cursorDisplay2: 'off',
    header3: '',
    cursorDisplay3: 'off',
  };

  async componentDidMount() {
    FontAwesomeIcons.init();

    await this.cursorLine1();
    await this.sleep(3000);
    await this.setState({ cursorDisplay1: 'off' });
    await this.cursorLine2();
    await this.sleep(3000);
    await this.setState({ cursorDisplay2: 'off' });
    await this.cursorLine3();
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
    } = this.state;

    return (
      <Layout>
        <Header isActive="daniel" />

        <div className={styles.animatedText}>
          <CursorLine text={header1} display={cursorDisplay1} />
          <CursorLine text={header2} display={cursorDisplay2} />
          <CursorLine text={header3} display={cursorDisplay3} />
        </div>
      </Layout>
    );
  }
}
