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
import Icon from 'react-native-vector-icons/FontAwesome';
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
        CreateUserId();

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
      await AsyncStorage.setItem('@UserData', {WalletAddress: this.state.WalletAddress, WalletSecret: this.state.WalletSecret, USerId: this.state.UserId, TransactionData:[]})
    } catch (e) {
      // saving error
    }
  }

  CreateUserId(){
      return null;
  }

  componentDidMount(){
    this.GetAccount();
  }

  /*
  //get account if I have one
  CreateNewAccount() = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      } else {
        // error reading value
        const pair = Keypair.random();
        pair.secret();
        pair.publicKey();

        //connect to bot
      }
    } catch(e) {

    }
  }
  */

  //check If I have transaction with the given address
  renderTransactionList(){
    /*return this.state.transactionData.map((item, index) => {
      return <TransactionCard />
    });*/
  }

  render() {
    return (
        <View style={styles.View}>
          <Appbar style={styles.Header}/>
          <View style={styles.ViewCardBalance}>
            <Text style={styles.ViewCardBalanceText1}>{(this.state.balance).toFixed(5)} xlm</Text>
            <Text style={styles.ViewCardBalanceText2}>R {(this.state.ConvertBalance).toFixed(2)}</Text>
          </View>

          <View style={styles.ViewOptionsCard}>
            <TouchableOpacity style={styles.ViewOptionsCardButtons}>
              <Icon name="send" size={21} color="#6078EA" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewOptionsCardButtons}>
              <Icon name="download" size={21} color="#6078EA" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewOptionsCardButtons}>
              <Icon name="camera" size={21} color="#6078EA" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewOptionsCardButtons}>
              <Icon name="chart" size={21} color="#6078EA" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewOptionsCardButtons}>
              <Icon name="settings" size={21} color="#6078EA" />
            </TouchableOpacity>
          </View>

          <View style={styles.ViewTransactions}>
            <View style={styles.ViewCardInfomation}>
              <Text>If you would like to get started using your accont: deposit a minimum of R10 and a maximum of R100 to the following</Text>
              <Text>Bank Details</Text>
              <Text>Bank: Nedbank</Text>
              <Text>Account Number: </Text>
            </View>

            {this.renderTransactionList()}

            {/*<View style={styles.ViewCardTransactions}>
              <View>
                <Icon name="rocket" size={21} color="#07877D" />
              </View>
              <View>
                <Text>Deposit of R100 recevied</Text>
                <Text>20-01-2020 9:90pm</Text>
              </View>
              <View>
              </View>
            </View>

            <View style={styles.ViewCardTransactions}>
              <View>
                <Icon name="rocket" size={21} color="#07877D" />
              </View>
              <View>
                <Text>Deposit of R100 recevied</Text>
                <Text>20-01-2020 9:90pm</Text>
              </View>
              <View>
              </View>
            </View>

            <View style={styles.ViewCardTransactions}>
              <View>
                <Icon name="rocket" size={21} color="#07877D" />
              </View>
              <View>
                <Text>sent 0.00234 @ 0.909</Text>
                <Text>20-01-2020 9:90pm</Text>
              </View>
              <View>
              </View>
            </View>*/}

          </View>
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
