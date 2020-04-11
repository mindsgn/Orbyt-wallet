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
import AsyncStorage from '@react-native-community/async-storage';
import { Keypair } from "stellar-sdk";
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Card extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.actions.getAccount();
  }

  render() {
    let {authorised, uuid, state } = this.props;

    if(authorised){
      console.log(this.props.navigation.navigate('Home'));
    }
      return(
        <View style={styles.View}>
          <Text style={styles.ViewText}>ORBYT WALLET</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
  View1:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent:'center'
  },
  ViewText:{
    color: 'black',
    fontSize: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)
