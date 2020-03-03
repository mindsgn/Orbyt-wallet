/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Keypair } from "stellar-sdk";

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {
    return(
        <View style={styles.View}>
          <Text>Help</Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
  }
});

export default Home;
