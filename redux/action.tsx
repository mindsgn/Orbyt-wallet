import Web3 from 'web3';
import { ACCOUNT } from './constants';
const web3 = new Web3("ws://localhost:7545");
import realm from "../data/database";
const { v4: uuidv4 } = require('uuid');

//check if user has stored account
export function getAccount() {
  return async (dispatch) => {
    try{
      const data = realm.objects('User');
      if(data.length == 0){
        let response = {
          account: false
        }
        dispatch(updateAccount(response));
      }else{
        let response = {
          account: true
        }
        dispatch(updateAccount(response));
      }
    }
    catch (error) {
      let response = {
        isauth:false,
        error: true
      }
      dispatch(updateAccount(response));
    }
  };
}

//check if user has stored account
export function createAccount() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  };
}

//Delete Account From user
export function deleteAccount() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  }
}

export function updateAccount(data) {
  return {
    type: ACCOUNT,
    payload: data,
  };
}




