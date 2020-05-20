/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {NativeModules, View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';

import  Card  from './Card';

const { HelloWorld } = NativeModules;

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
  }

  render() {
    let hasTransactions= false;
    let TransactionList;
    let { transactions } = this.props;

    if(transactions.length===0){
      transactionsList = <View
                            style={styles.NoTransactionCard}>
                          <Text>No Transactions</Text>
                        </View>;
    }else{
      transactionsList= transactions.map(function(item, index){
       if(transactions.length===0){
         return(
           <View style={styles.CardView}>
             <Text>No Transactions Yet.</Text>
           </View>
         )
       }else{
         return(
           <View style={styles.CardView}>
             <Text>{item.details}</Text>
             <Text>{item.amount}</Text>
           </View>)
       }
     });
    }

    return(
      <View style={styles.View}>
        <View>
          <Text style={styles.HeaderText}>Transactions</Text>
        </View>
        <View>
          {transactionsList}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    position: 'relative',
    flex:1,
    marginTop:30,
    padding:10,
  },
  CardView:{
    flex: 1,
    margin: 20,
  },
  HeaderText:{
    color: PRIMARY_COLOR,
    fontSize: 21
  },
  NoTransactionCard:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center'
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  transactions: state.states.transactions,
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
