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

import  Navbar from './Navbar';
import { TextInput, Snackbar } from 'react-native-paper';

const { HelloWorld } = NativeModules;

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state={
      from: null,
      to:null,
      amount:null
    }
  }

  async componentDidMount(){
    //this.props.actions.getAccount();
    /*try {
      const message = await HelloWorld.sayHello();
        alert(message);
    } catch(e) {
      alert(e);
    }*/
  }

  render() {
    let { authorised, uuid, state, wallets, balance } = this.props;

    return(
      <View style={styles.View}>
        <Navbar
          title={'Send'}/>
          <View>
          <View>
            <TextInput
              maxLength={10}
              onChange={phone => this.setState({phone}  )}
              keyboardType={'phone-pad'}
              placeholder={'to'}/>
            </View>


            <View>
              <TextInput
                maxLength={10}
                onChange={phone => this.setState({phone}  )}
                keyboardType={'phone-pad'}
                placeholder={'details'}/>
            </View>


              <View
                style={{position: 'relative', width: '100%',alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => this.createNewWallet(this.state.phone)}
                  style={styles.StartButton}>
                  <Text style={styles.StartButtonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
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
  StartButton:{
    backgroundColor: PRIMARY_COLOR,
    position: 'relative',
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
