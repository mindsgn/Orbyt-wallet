/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../../utils/actions';
import { PRIMARY_COLOR } from './../..//utils/constants';

class Load extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phone:null,
    }
  }

  onChange(){

  }

  createNewWallet(phone){
      try{
        var originalPhoneNumber = phone;
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = originalPhoneNumber.replace(/\D/g, "");

        if(phoneRe.test(digits)){
          console.log(true)
        }else{
          console.log(false)
        }
      }catch(e){
        console.log(e)
      }
      finally {
        this.props.navigation.navigate('Home')
      }
  }

  render() {
    let {authorised, uuid, state, Network } = this.props;

    if(authorised){
      this.props.navigation.navigate('Home');
    }

    return(
      <View style={styles.View}>
        <Text>Add Your Phone Number</Text>
        <TextInput
          maxLength={10}
          onChange={phone => this.setState({phone}  )}
          keyboardType={'phone-pad'}
          placeholder={'(xxx) xxx xxxx'}/>

          <TouchableOpacity
            onPress={() => this.createNewWallet(this.state.phone)}
            style={styles.StartButton}>
            <Text style={styles.StartButtonText}>NEXT</Text>
          </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
  ViewText:{
    color: PRIMARY_COLOR,
    fontSize: 40,
    fontWeight: 'bold'
  },
  StartButton:{
    backgroundColor: PRIMARY_COLOR,
    position: 'absolute',
    width: '90%',
    padding: 10,
    bottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  StartButtonText:{
    color: 'white',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Load)
