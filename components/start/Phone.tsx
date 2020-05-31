/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../../utils/actions';
import { PRIMARY_COLOR } from './../..//utils/constants';
import { TextInput, Snackbar } from 'react-native-paper';

class Load extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phone:'',
      message:null,
      error: null,
    }
  }

  onChange(){
  }

  async auth(){
      const phone = this.state.phone;
      try{
        if(phone===''){
          this.setState({message:'phone number empty'})
        }
        else if(phone===null){
          this.setState({message:'phone number empty'})
        }
        else{
          this.setState({message:'Pending'})
          this.props.actions.createNewAccount(phone);
        }
      }catch(e){
        console.log(e)
      }
  }

  render() {
    let {authorised, uuid, state, Network } = this.props;

    if(authorised){
      this.props.navigation.navigate('Home');
    }

    return(
      <View style={styles.View}>
        <Text>{this.state.message}</Text>
        <View>
          <TextInput
            onChangeText={phone => this.setState({phone:phone})}
            maxLength={10}
            keyboardType={'phone-pad'}
            placeholder={'phone'}/>
        </View>
        <View
          style={{position: 'absolute', bottom: 0, width: '100%', justifyContent: 'center', alignItems:'center'}}>
          <TouchableOpacity
            onPress={() => this.createNewWallet()}
            style={styles.StartButton}>
            <Text style={styles.StartButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <Snackbar
          visible={false}
        >
        {this.state.error}
        </Snackbar>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    padding: 10
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
