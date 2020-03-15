import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';
import CursorLine from '../components/cursor-line';
import HackingDialog from '../components/hacking-dialog';
import FontAwesomeIcons from '../font-awesome';
import HomeLinks from '../components/home-links';

export default function Index() {
  FontAwesomeIcons.init();
  const [header1, setHeader1] = useState('');
  const [cursorDisplay1, setCursorDisplay1] = useState('off');
  const [header2, setHeader2] = useState('');
  const [cursorDisplay2, setCursorDisplay2] = useState('off');
  const [header3, setHeader3] = useState('');
  const [cursorDisplay3, setCursorDisplay3] = useState('off');

  const [header4, setHeader4] = useState('');
  const [cursorDisplay4, setCursorDisplay4] = useState('off');

  const [showHackingDialog, setShowHackingDialog] = useState(false);

  useEffect(() => {
    async function init() {
      const visited = sessionStorage.getItem('visited');
      const text1 = 'Hello.';
      const text2 = 'Nice to meet you';
      const text3 = 'JK';
      const text4 = 'Have a look around :)';

      if (visited) {
        setHeader1(text1);
        setHeader2(text2);
        setHeader3(text3);
        setHeader4(text4);
        setCursorDisplay4('blink');
      } else {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        const cursorLine = async (text, setCursorDisplay, setHeader) => {
          setCursorDisplay('on');

          for (let i = 1; i <= text.length; i += 1) {
            await sleep(50);
            setHeader(text.slice(0, i));
          }

          await sleep(500);

          setCursorDisplay('blink');
        };

        await sleep(500);
        await cursorLine(text1, setCursorDisplay1, setHeader1);
        await sleep(1000);
        setCursorDisplay1('off');
        await cursorLine(text2, setCursorDisplay2, setHeader2);
        await sleep(500);
        setCursorDisplay2('off');
        await cursorLine(text3, setCursorDisplay3, setHeader3);
        await sleep(500);

        sessionStorage.setItem('visited', true);
        setShowHackingDialog(true);
        setTimeout(() => setShowHackingDialog(false), 3000);
      }
    }
    init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Hello I'm Daniel 👋</title>
        <meta name="description" content="Hello I'm Daniel 👋" />
      </Helmet>
      <Layout hideHeader>
        <CursorLine text={header1} display={cursorDisplay1} />
        <CursorLine text={header2} display={cursorDisplay2} />
        <CursorLine text={header3} display={cursorDisplay3} />
        <CursorLine text={header4} display={cursorDisplay4} />

        {showHackingDialog && <HackingDialog />}

        <HomeLinks />
      </Layout>
    </>
  );
}
