import { GET_ACCOUNT, LINK, ERROR } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { v4 as uuidv4 } from 'uuid';
const axios = require('axios');

//create new account
export function createNewAccount() {
  return async (dispatch) => {
    try{
      axios.get('https://orbyt.herokuapp.com/new/ethereum')
      .then(function (response) {
        if(response.data){
          let data = {
            uuid: uuidv4(),
            wallet:[{type:'ethereum', address:response.data.account.address, privatekey:response.data.account.privateKey, createdAt:new Date()}]
          };
          const _data =JSON.stringify(data);
          data['authorised'] = true;
          console.log(data)
          //AsyncStorage.setItem('@mydata', _data)
          dispatch(updateData(data));
          /*const storeData = async () => {
            try{
              console.log('workssdds')
              const _data =JSON.stringify(data);
              await AsyncStorage.setItem('@mydata', _data)
              data['authorised'] = true;
              console.log(_data);
            }catch(e){
              let data = {
                error:true,
                errorMessage: 'error'
              }
              console.log('error');
              dispatch(updateError(data));
            }
          }*/
        }else{
          let data = {
            error:true,
            errorMessage: 'error creating accounts'
          }
          dispatch(updateError(data));
        }
      })
      .catch(function (error) {
        // handle error
        let data = {
          error:true,
          errorMessage: error
        }
        dispatch(updateError(data));
      })
      .finally(function () {
        // always executed
      });
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

export function addPhone(data) {
  return async (dispatch) => {
    try{
      axios.get('http://192.168.43.101:3000/', {data})
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
    catch (error) {
      console.log(response);
    }
  };
}

//old
export function updateData(data) {
  return {
    type: GET_ACCOUNT,
    payload: data,
  };
}

export function updateError(data) {
  return {
    type: ERROR,
    payload: data,
  };
}

export function getAccount() {
  return async (dispatch) => {
    try{
      console.log('opening')
      let value = await AsyncStorage.getItem('@mydata')
      if(value !== null) {
        value = JSON.parse(value);
        value['authorised'] = true;
        console.log(value);
        await dispatch(updateData(value));
      }else{
        console.log('creating new account')
        this.createNewAccount();
      }
    }
    catch (error) {
      console.error(error);
    }
  };
}
