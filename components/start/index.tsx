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

class Load extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    //this.props.actions.getAccount();
    
    //check if user is connected tointernet
  }

  createWallet(){
    this.props.actions.createNewAccount();
  }

  render() {
    let {authorised, uuid, state, Network } = this.props;

    if(authorised){
      this.props.navigation.navigate('Home');
    }

    return(
      <View style={styles.View}>
        <Text style={styles.ViewText}>
          ORBYT WALLET
        </Text>

        <TouchableOpacity
          onPress={() => this.createWallet()}
          style={styles.StartButton}>
          <Text style={styles.StartButtonText}>GET STARTED</Text>
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
