// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SecondComponent.scss';

export default class SecondComponent extends Component {
  componentDidMount() {
    this.props.setitem('Sup');
  }
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>This is page 2. Prop says {this.props.item}</h2>
        <Link to="/">back to first page</Link>
      </div>
    );
  }
}
