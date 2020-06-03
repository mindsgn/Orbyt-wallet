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
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';
import { Appbar } from 'react-native-paper';

class Recieve extends React.Component {
  constructor(props){
    super(props)
  }

  async goBack(){
    alert('sss')
  }

  render() {
    return(
      <View style={styles.View}>
      <Appbar.Header style={styles.ViewBar}>
        <Appbar.BackAction
        onPress={() => this.props.navigation.goBack()}/>
        <Appbar.Content
        title={'Send'}/>
      </Appbar.Header>
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
    backgroundColor: PRIMARY_COLOR,
  },
});

const mapStateToProps = state => ({});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recieve)
