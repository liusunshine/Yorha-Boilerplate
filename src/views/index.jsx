import React, { Component } from 'react';
import styles from '@/assets/css/demoStyle.scss';
import intlGet from '@/intl';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.title}>
        <span className={styles.index}>{intlGet.getViewIndexTitle()}</span>
      </div>
    );
  }
}
