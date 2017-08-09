// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './SecondPage.scss';
import SecondComponent from '../components/SecondComponent';
import * as testActions from '../actions/testActions';

class SecondPage extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <SecondComponent history={this.props.history} item={this.props.test.item} setitem={this.props.setItem} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.testReducers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(testActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
