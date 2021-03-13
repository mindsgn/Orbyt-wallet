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
import Web3 from 'web3';

import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './view/home'


function App(){
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  const account = web3.eth.accounts.create();

  console.log();

  return (
    <Provider store={store}>
      <Home />
    </Provider>);
};

export default App;
