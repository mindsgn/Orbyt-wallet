/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Keypair } from "stellar-sdk";

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
        //alert("got data");
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
    this.GetAccount();
  }

  render() {
    return(
        <View style={styles.View}>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: '#6078EA'
  }
});

export default Home;
