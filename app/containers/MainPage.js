// @flow
import React, { Component } from 'react';
import FirstComponent from '../components/FirstComponent';
import styles from './MainPage.scss';

export default class MainPage extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <FirstComponent history={this.props.history} />
      </div>
    );
  }
}
