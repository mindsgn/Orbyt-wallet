/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {NativeModules, View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';

import  Card  from './Card';
import  Transactions from './Transactions';
import { Appbar } from 'react-native-paper';

const { HelloWorld } = NativeModules;

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  async goBack(){
    try{
      this.props.navigation.navigate('Home');
    }catch(error){
      console.log(error)
    }
  }

  async componentDidMount(){
    try {
      //const message = await HelloWorld.sayHello();
      //alert(message);
      console.log(this.props);
    } catch(e) {
      //alert(e);
    }
  }

  render() {
    console.log('console',this.props)
    let { authorised, uuid, state, wallets, balance } = this.props;

    return(
      <Appbar.Header style={styles.View}>
        <Appbar.BackAction
          onPress={this.props.goBack}/>
        <Appbar.Content
          title={this.props.title}/>
      {/*s<Appbar.Content
        title="Title"
        subtitle="Subtitle"
      />
      <Appbar.Action icon="magnify" onPress={this._handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />*/}
    </Appbar.Header>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    backgroundColor: PRIMARY_COLOR
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid,
  balance: state.states.balance,
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
