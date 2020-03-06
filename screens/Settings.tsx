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
import { Appbar, Divider, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './../components/Header';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
        <View style={styles.View}>
          <Header
            IconName='ios-arrow-round-back'
            ScreenName="Settings"
          />
          <View style={styles.MainView}>
            <View style={styles.MainViewList}>
              <View style={styles.MainViewListLeft}>
                <Text style={styles.MainViewListFont}>Wallet ID</Text>
              </View>
              <View style={styles.MainViewListRight}>
                <Text style={styles.MainViewListFont}>User number</Text>
              </View>
            </View>
            <Divider />
            <View style={styles.MainViewList}>
              <View style={styles.MainViewListLeft}>
                <Text style={styles.MainViewListFont}>Currency</Text>
              </View>
              <View style={styles.MainViewListRight}>
                <Text>R</Text>
              </View>
            </View>
            <Divider />
            <View style={styles.MainViewList}>
              <View style={styles.MainViewListLeft}>
                <Text style={styles.MainViewListFont}>2 Way Auth</Text>
              </View>
              <View style={styles.MainViewListRight}>
                <Switch/>
              </View>
            </View>
            <Divider />
            <View style={styles.MainViewList}>
              <View style={styles.MainViewListLeft}>
                <Text style={styles.MainViewListFont}>Freeze Wallet</Text>
              </View>
              <View style={styles.MainViewListRight}>
                <Switch/>
              </View>
            </View>
            <Divider />

            <View style={styles.MainViewList}>
              <View style={styles.MainViewListLeft}>
                <TouchableOpacity>
                  <Text style={styles.MainViewListFontRed}>Delete Account</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Divider />
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
  HeaderButton:{
    padding: 10
  },
  MainView:{
    flex:1
  },
  MainViewList:{
    padding: 10,
    flexDirection: 'row',
    width:'100%',
    position:'relative',
    paddingTop: 50
  },
  MainViewListLeft:{
    position: 'absolute',
    left: 0,
    padding: 20,
  },
  MainViewListRight:{
    position: 'absolute',
    right:0,
    padding: 20,
  },
  MainViewListFont:{
    fontSize:18,
  },
  MainViewListFontRed:{
    fontSize:18,
    color:'red',
  },
  HeaderFont:{
    color: "white",
    fontSize:18,
  }
});

export default Home;
