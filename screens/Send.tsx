/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Appbar, TextInput, Button } from 'react-native-paper';

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
          <Appbar style={styles.Header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          </Appbar>
          <View style={styles.MainCardView}>
            <Text>{(0).toFixed(5)} xml</Text>
            <Text>R {(0).toFixed(2)}</Text>
          </View>
          <View style={styles.MainView}>
            <View style={styles.MainViewInput}>
              <TextInput
                label='Wallet Address'/>
            </View>
            <View style={styles.MainViewInput}>
              <TextInput
                label='Amount'/>
            </View>
            <View style={styles.MainViewInput}>
              <Button style={styles.MainViewButton} mode="contained" onPress={() => console.log('Pressed')}>
                Send
              </Button>
            </View>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
  },
  Header:{
    backgroundColor: '#6078EA',
  },
  MainCardView:{
    height: '30%',
    backgroundColor: '#6078EA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainView:{
    padding: 10,
  },
  MainViewInput:{
    marginTop: 10,
  },
  MainViewButton:{
      backgroundColor: '#6078EA',
  }
});

export default Home;
