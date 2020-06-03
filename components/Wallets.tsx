/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';
import {PRIMARY_COLOR} from './../utils/constants';
import { Appbar, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      modal:false
    }
  }

  async componentDidMount(){}

  async showModal(){
    this.setState({modal: true})
  }

  render() {
    let { wallets, currency} = this.props;

    let walletList=null;

    if(wallets.length===0){
      walletList =  <View>
                            <Text>No Transactions</Text>
                          </View>;
    }else{
      walletList = wallets.map(function(item, index){
        let balance = null;
        let address = null;
        let image = null;

        address = (item.address).substring(0,10) + '...';

        if(item.type==='ethereum'){
          image = require('cryptocurrency-icons/32/icon/eth.png')
        }

        else if(item.type==='bitcoin'){
          image = require('cryptocurrency-icons/32/icon/btc.png')
        }

        balance = 0.00;

        return(
          <View style={styles.WalletCard} key={index}>
            <View style={{padding: 10}}>
              <Image
                source={image} />
            </View>
            <View style={{flex:1}}>
              <Text style={{color:'black'}}>{item.type}</Text>
              <Text>{address}</Text>
            </View>
            <View>
              <Text style={{fontSize: 40}}>{currency} {balance}</Text>
            </View>
          </View>
        )
      })
    }

    return(
      <View style={styles.View}>
      <Appbar.Header style={styles.ViewBar}>
        <Appbar.BackAction
        onPress={() => this.props.navigation.goBack()}/>
        <Appbar.Content
        title={'Wallets'}/>

        <Appbar.Action
          icon='dots-vertical'
          onPress={() => this.props.navigation.navigate('Coins')} />
      </Appbar.Header>

        <View style={styles.WalletList}>
        {walletList}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: '#E9E9E9',
  },
  ViewBar:{
    backgroundColor: PRIMARY_COLOR
  },
  WalletCard:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  WalletList:{
    padding: 10,
  }
});

const mapStateToProps = state => ({
  wallets: state.states.wallets,
  currency:state.states.currency
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
