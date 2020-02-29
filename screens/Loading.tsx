/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//import 'react-native-gesture-handler';
import  Functions  from './../utilities/Functions';
//import firebase from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.View}>
        <Image source={require('./../assets/logo.png')} width={100} height={100}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    View:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
});

export default App;
