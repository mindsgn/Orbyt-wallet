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

//const Web3 = require('web3');
//const Accounts = require('Web3-rth-accounts');

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  GetAccount = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData')
      if(value !== null) {
        // value previously stored
        this.props.navigation.navigate('Home');
      }else{
        this.CreateUserId();
        const pair = Keypair.random();
        pair.secret();
        pair.publicKey();
        this.setState({WalletAddress: pair.publicKey(), WalletSecret: pair.secret()});
        this.storeData();
      }
    } catch(e) {

    }
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem('UserData', JSON.stringify({WalletAddress: this.state.WalletAddress, WalletSecret: this.state.WalletSecret, UserId: this.state.UserId, TransactionData:[]}))
    } catch (e) {
      // saving error
    }
  }

  CreateUserId(){
    this.setState({UserId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)});
  }

  componentDidMount(){
    //web3.eth.getAccounts().then(console.log);
    //this.GetAccount();
    //const web3 = new Web3(
    //  new Web3.providers.HttpProvider('https://mainnet.infura.io/')
    //);

    //console.log(web3.eth.getBlock('latest'));
  }

  render() {
    return(
        <LinearGradient colors={['#6078EA', '#192f6a']}  style={styles.View}>
          <Image width={150} height={150}/>
          <Text style={styles.ViewText}>Orbyt Wallet</Text>
        </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: '#6078EA',
    alignItems: 'center',
    justifyContent:'center'
  },
  ViewText:{
    color: 'white',
    fontSize: 20
  }
});

export default Home;
