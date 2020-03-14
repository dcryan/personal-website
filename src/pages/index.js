import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';
import CursorLine from '../components/cursor-line';
import HackingDialog from '../components/hacking-dialog';
import FontAwesomeIcons from '../font-awesome';

export default function Index() {
  FontAwesomeIcons.init();
  const [header1, setHeader1] = useState('');
  const [cursorDisplay1, setCursorDisplay1] = useState('off');
  const [header2, setHeader2] = useState('');
  const [cursorDisplay2, setCursorDisplay2] = useState('off');
  const [showHackingDialog, setShowHackingDialog] = useState(false);

  useEffect(() => {
    async function init() {
      const visited = sessionStorage.getItem('visited');
      if (visited) {
        setHeader1('Hello.');
        setCursorDisplay1('off');
        setHeader2('Nice to meet you');
        setCursorDisplay2('blink');
      } else {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        const cursorLine1 = async () => {
          const text = 'Hello.';
          setCursorDisplay1('on');

          for (let i = 1; i <= text.length; i += 1) {
            await sleep(50);
            setHeader1(text.slice(0, i));
          }

          await sleep(500);
          setCursorDisplay1('blink');
        };

        const cursorLine2 = async () => {
          const text = 'Nice to meet you';
          setCursorDisplay2('on');

          for (let i = 1; i <= text.length; i += 1) {
            await sleep(50);
            setHeader2(text.slice(0, i));
          }

          await sleep(500);

          setCursorDisplay2('blink');
        };

        await sleep(500);
        await cursorLine1();
        await sleep(1000);
        setCursorDisplay1('off');
        await cursorLine2();
        await sleep(500);

        sessionStorage.setItem('visited', true);
      }

      setShowHackingDialog(true);
    }
    init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Hello I'm Daniel 👋</title>
        <meta name="description" content="Hello I'm Daniel 👋" />
      </Helmet>
      <Layout>
        <CursorLine text={header1} display={cursorDisplay1} />
        <CursorLine text={header2} display={cursorDisplay2} />

        {showHackingDialog && <HackingDialog />}
      </Layout>
    </>
  );
}
