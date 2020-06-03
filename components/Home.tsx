/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {NativeModules, View, StyleSheet, Text, Button, TouchableOpacity, Appbar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';

import  Card  from './Card';
import  Transactions from './Transactions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { HelloWorld } = NativeModules;

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let { authorised, uuid, state, wallets, balance } = this.props;

    return(
      <View style={styles.View}>
        <View style={styles.HomeView}>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Wallets')}>
          <Text style={styles.TextHome}>R {balance.toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.HomeView2}>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Send')}
            style={styles.HomeButton}>
            <Text> <Ionicons name='ios-arrow-round-up' size={19}/> Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Recieve')}
            style={styles.HomeButton}>
              <Text> <Ionicons name='ios-arrow-round-down' size={19}/> Recieve</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <Transactions />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: 'white',
  },
  HomeView:{
    backgroundColor: PRIMARY_COLOR,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  HomeView2:{
    justifyContent:'center',
    flexDirection: 'row',
    margin: -30,
  },
  HomeButton:{
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  HomeCards:{
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    padding: 20,
  },
  HomeCardsText:{
    color: 'black',
  },
  TextHome:{
    color:'white',
    fontSize: 41,
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid,
  balance: state.states.balance,
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
