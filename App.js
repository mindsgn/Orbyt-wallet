/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import Home from './screens/Home';;

const Stack = createStackNavigator();

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  NativeModules
} from 'react-native';

import './shim.js'
// ...the rest of your code
import crypto from 'crypto'
import Bitcoin from 'react-native-bitcoinjs-lib'

const keypair = Bitcoin.ECPair.makeRandom();

class App extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <Text>Hex from crypto {crypto.randomBytes(32).toString('hex')}</Text>
          <Text>{keypair.getAddress()}</Text>
          <Button title="button" onPress={() => {NativeModules.Ethereum.Test("1234", (err) => {console.log(err)}, (msg) => {alert(msg)} );}}></Button>
      </SafeAreaView>
    </>
  );
  }

};

const styles = StyleSheet.create({ });

export default App;
