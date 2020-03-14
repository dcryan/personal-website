import React from 'react';
import styles from '../styles/hacking-dialog.module.css';

export default function HackingDialog() {
  return (
    <div className={[styles.dialog, styles.flash].join(' ')}>
      <h3 className={styles.dialogTitle}>WARNING</h3>
      Hacking in progress...
    </div>
  );
}
