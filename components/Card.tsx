/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR, ETHEREUM_LOGO} from './../utils/constants';

class Card extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render() {
      return(
        <View style={styles.View}>
          <View style={styles.Icon}>
            <Image source={ETHEREUM_LOGO} />
          </View>

          <View>
            <Text>Ethereum</Text>
            <Text>Wallet Name</Text>
            <Text>wallet address</Text>

            <Text>R6034.43</Text>
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  View:{
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    height: '80%'
  },
  Icon:{
    backgroundColor: PRIMARY_COLOR,
    width: 50,
    height: 50,
    borderRadius: 50
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)
