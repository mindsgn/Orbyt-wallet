import Web3 from 'web3';
import { ACCOUNT } from './constants';
const web3 = new Web3("ws://localhost:7545");
import Realm from "realm";
import realm from "../data/database";
const { v4: uuidv4 } = require('uuid');

//check if user has stored account
export function getAccount() {
  return async (dispatch) => {
    try{
      const data = realm.objects('user');
      console.log(data);
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
export function createAccount(data) {
  return async (dispatch) => {
    try{
      const date = Date(); 
      const uuid = uuidv4();
      const response = realm.objects('user');
      realm.write(() => {
        if(response.length == 0){
          realm.write(() => {
            const write = realm.create("user", {uuid: uuid, password: data.password});
          });
        }else{
          
        }
      })
    }
    catch (error) {
      console.log(error)
    }
  };
}

//Delete Account From user
export function deleteAccount() {
  return async (dispatch) => {
    try{
      let user = realm.objects('User');
      realm.delete(user);
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




