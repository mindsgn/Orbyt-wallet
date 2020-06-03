/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';
import {PRIMARY_COLOR} from './../utils/constants';

class Error extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <View style={styles.View}>
        <View
          style={{width: 200, height:200}}>
          <Image
            style={{width: 200, height:200}}
            source={require('./../assets/images/error.png')} />
        </View>
        <View>
          <Text>There Seems to be a problem</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(Error)
