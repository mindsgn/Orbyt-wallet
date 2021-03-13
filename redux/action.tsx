import { GET_ACCOUNT, LINK, ERROR } from './constants';
const axios = require('axios');

//create new account
export function createNewAccount() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  };
}

export function DeleteAccount() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  };
}

export function UpdateStorage() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  };
}

export function getWallets() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  };
}

export function createEthereumWallet() {
  return async (dispatch) => {
    try{
    }
    catch (error) {
    }
  };
}

export function addPhone(data) {
  return async (dispatch) => {
    try{
    }
    catch (error) {
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
    }
    catch (error) {
    }
  };
}