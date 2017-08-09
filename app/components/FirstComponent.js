// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FirstComponent.scss';
import { RaisedButton } from 'material-ui';

export default class FirstComponent extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Hello</h2>
        <RaisedButton primary={true} label="Next page" onTouchTap={() => this.props.history.push('/secondpage')} />
      </div>
    );
  }
}
