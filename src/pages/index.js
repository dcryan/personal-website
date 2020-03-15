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
  const [cursorLineActive2, setCursorLineActive2] = useState(false);
  const [header3, setHeader3] = useState('');
  const [cursorDisplay3, setCursorDisplay3] = useState('off');
  const [cursorLineActive3, setCursorLineActive3] = useState(false);

  const [showHackingDialog, setShowHackingDialog] = useState(false);
  const [showHomeLinks, setShowHomeLinks] = useState(false);

  useEffect(() => {
    async function init() {
      const visited = sessionStorage.getItem('visited');
      const text1 = 'Hello.';
      const text2 = 'Nice to meet you.';
      const text3 = 'JK :)';
      const text4 = 'Please, have a look around.';

      if (visited) {
        setHeader1(text1);
        setHeader2(text2);
        setHeader3(text4);
        setCursorDisplay3('blink');
        setCursorLineActive2(true);
        setCursorLineActive3(true);
        setShowHomeLinks(true);
      } else {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        const cursorLine = async (
          text,
          setCursorLineActive,
          setCursorDisplay,
          setHeader
        ) => {
          setCursorLineActive(true);
          setCursorDisplay('on');

          for (let i = 1; i <= text.length; i += 1) {
            await sleep(50);
            setHeader(text.slice(0, i));
          }

          await sleep(500);

          setCursorDisplay('blink');
        };

        const deleteCursorLine = async (text, setCursorDisplay, setHeader) => {
          setCursorDisplay('on');

          for (let i = 1; i <= text.length; i += 1) {
            await sleep(100);
            setHeader(text.slice(0, text.length - i));
          }

          await sleep(500);

          setCursorDisplay('blink');
        };

        await sleep(500);
        await cursorLine(text1, () => {}, setCursorDisplay1, setHeader1);
        await sleep(1000);
        setCursorDisplay1('off');
        await cursorLine(
          text2,
          setCursorLineActive2,
          setCursorDisplay2,
          setHeader2
        );
        setShowHackingDialog(true);
        setTimeout(() => setShowHackingDialog(false), 3000);
        await sleep(3000);
        setCursorDisplay2('off');
        await cursorLine(
          text3,
          setCursorLineActive3,
          setCursorDisplay3,
          setHeader3
        );
        await sleep(300);
        await deleteCursorLine(text3, setCursorDisplay3, setHeader3);
        await sleep(500);
        await cursorLine(
          text4,
          setCursorLineActive3,
          setCursorDisplay3,
          setHeader3
        );
        await sleep(300);

        setShowHomeLinks(true);

        sessionStorage.setItem('visited', true);
      }
    }
    init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Hello. 👋</title>
        <meta name="description" content="Hello. I'm Daniel 👋" />
      </Helmet>
      <Layout hideHeader color="green">
        <CursorLine text={header1} display={cursorDisplay1} active />
        <CursorLine
          text={header2}
          display={cursorDisplay2}
          active={cursorLineActive2}
        />
        <CursorLine
          text={header3}
          display={cursorDisplay3}
          active={cursorLineActive3}
        />

        {showHackingDialog && <HackingDialog />}

        {showHomeLinks && <HomeLinks />}
      </Layout>
    </>
  );
}
