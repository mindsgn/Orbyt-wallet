import { GET_ACCOUNT } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { v4 as uuidv4 } from 'uuid';
var Web3 = require('web3');
var Accounts = require('web3-eth-accounts');

import { Keypair } from "stellar-sdk";

export function updateData(data) {
  return {
    type: GET_ACCOUNT,
    payload: data,
  };
}

export function getAccount() {
  return async (dispatch) => {
    try{
      let value = await AsyncStorage.getItem('userdata')
      if(value !== null) {
        value = JSON.parse(value);
        this.DeleteAccount();
        value['authorised'] = true;
        console.log(value);
        await dispatch(updateData(value));
      }else{
        console.log("account not found")
        //this.createNewAccount();
      }
    }
    catch (error) {
      console.error(error);
    }
  };
}

export function createNewAccount() {
  return async (dispatch) => {
    try{

      let data = {
          uuid: uuidv4(),
          password:'',
      };

      data = JSON.stringify(data);
      //console.log("creating new Account");
      //await AsyncStorage.setItem('userdata', data)
      console.log(Accounts.create());
      //this.getAuth();

    }
    catch (error) {
      console.error(error);
    }
  };
}

export function DeleteAccount() {
  return async (dispatch) => {
    try{
      await AsyncStorage.clear()
      value={};
      value['authorised'] = false;
      console.log("account cleared")
      await dispatch(updateData(value));
    }
    catch (error) {
      console.error(error);
    }
  };
}

export function UpdateStorage() {
  return async (dispatch) => {
    try{
      //await AsyncStorage.clear()
      //console.log("account cleared")
      //await dispatch(updateData("false"));
    }
    catch (error) {
      //console.error(error);
    }
  };
}

export function getWallets() {
  return async (dispatch) => {
    try{
      //await AsyncStorage.clear()
      //console.log("account cleared")
      //await dispatch(updateData("false"));
    }
    catch (error) {
      //console.error(error);
    }
  };
}

export function createEthereumWallet() {
  return async (dispatch) => {
    try{
      //await AsyncStorage.clear()
      //console.log("account cleared")
      //await dispatch(updateData("false"));
    }
    catch (error) {
      //console.error(error);
    }
  };
}
