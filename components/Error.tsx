/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {
    let { authorised, uuid, state, wallets } = this.props;

    return(
      <View style={styles.View}>
        <Text>UUID: {uuid}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    padding: 10,
    backgroundColor: '#E9E9E9',
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
