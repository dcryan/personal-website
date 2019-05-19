import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/cursor.module.css';

export default class Cursor extends Component {
  render() {
    const { display } = this.props;
    const classes = [styles.cursor];
    switch (display) {
      case 'off':
        classes.push(styles.hide);
        break;
      case 'blink':
        classes.push(styles.blink);
        break;
      default:
    }

    const classNames = classes.join(' ');

    return (
      <div className={styles.container}>
        <div className={classNames} />
      </div>
    );
  }
}

Cursor.propTypes = {
  display: PropTypes.string, // 'on', 'off', 'blink'
};
