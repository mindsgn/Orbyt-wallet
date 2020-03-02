/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Appbar, Button, Modal, Portal } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { Keypair } from "stellar-sdk";


//components
import TransactionCard from './../components/TransactionCards';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isReady: false,
      balance:0.00,
      ConvertBalance:20.00,
      isActivated: false,
      transactionData:[],
      WalletAddress: null,
      WalletSecret: null,
      UserId: null,
    }
  }

  //create user account
  GetAccount = async () => {
    try {
      const value = await AsyncStorage.getItem('@UserData')
      if(value !== null) {
        // value previously stored
      }else{
        this.CreateUserId();
        const pair = Keypair.random();
        pair.secret();
        pair.publicKey();
        this.setState({WalletAddress: pair.publicKey(), WalletSecret: pair.secret()});
      }
    } catch(e) {

    }
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@UserData', {WalletAddress: this.state.WalletAddress, WalletSecret: this.state.WalletSecret, UserId: this.state.UserId, TransactionData:[]})
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


  //check If I have transaction with the given address
  renderTransactionList(){
    /*return this.state.transactionData.map((item, index) => {
      return <TransactionCard />
    });*/
  }

  render() {
    return (
        <View style={styles.View}>

        </View>
    );
  }
};

const styles = StyleSheet.create({
    View:{
      flex:1
    },
    Header:{
      backgroundColor: '#6078EA',
    },
    ViewOptionsCard:{
      position: 'absolute',
      padding: 20,
      backgroundColor:'white',
      top: '32%',
      borderRadius: 50,
      left: 0,
      right: 0,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
	       width: 0,
	       height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 10
    },
    ViewCardBalance:{
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#6078EA',
      height:'30%',
    },
    ViewCardBalanceText1:{
      color:'white',
      fontSize: 21,
    },
    ViewCardBalanceText2:{
      color:'white',
    },
    ViewTransactions:{
      marginTop: 50,
      marginLeft: 20,
      marginRight: 20,
      justifyContent: 'center'
    },
    ViewCardTransactions:{
      flexDirection: "row",
      marginTop:10,
      backgroundColor: 'white',
      padding: 20,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
	       width: 0,
	       height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    ViewCardInfomation:{
      marginTop:10,
      backgroundColor: 'white',
      padding: 20,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
	       width: 0,
	       height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    ViewOptionsCardButtons:{
      margin: 5,
      marginLeft: 10,
      marginRight: 10
    }
});

export default Home;
s
