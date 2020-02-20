/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import './shim.js'
// ...the rest of your code
import crypto from 'crypto'
import Bitcoin from 'react-native-bitcoinjs-lib'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const keypair = Bitcoin.ECPair.makeRandom();

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Text>{crypto.randomBytes(32).toString('hex')}</Text>
        <Text>{keypair.getAddress()}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({ });

export default App;
