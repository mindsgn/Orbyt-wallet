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
import  QRCode from 'react-native-qrcode-svg';
import  Navbar from './Navbar';

const { HelloWorld } = NativeModules;

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    //this.props.actions.getAccount();
    /*try {
      const message = await HelloWorld.sayHello();
        alert(message);
    } catch(e) {
      alert(e);
    }*/
  }

  render() {
    let { authorised, uuid, state, wallets, balance } = this.props;

    return(
      <View style={styles.View}>
        <Navbar
          title={'Recieve'}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: '#E9E9E9',
  },
  HomeView:{
    backgroundColor: PRIMARY_COLOR,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  HomeView2:{
    justifyContent:'center',
    flexDirection: 'row',
    margin: -30,
  },
  HomeButton:{
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 30,
  },
  HomeCards:{
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    padding: 20,
  },
  HomeCardsText:{
    color: 'black',
  },
  TextHome:{
    color:'white',
    fontSize: 41,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
