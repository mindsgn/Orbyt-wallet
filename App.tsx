/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import "./shim"
import './global';
import React from 'react';
import { Text, View } from 'react-native';
import Web3 from 'web3';


function App(){
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  const account = web3.eth.accounts.create();

  console.log();

  return (
    <View>
      <Text>{account.address}</Text>
    </View>);
};

export default App;
