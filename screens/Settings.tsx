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
import { Appbar, Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';

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
            <TouchableOpacity>
              <Icon name='ios-arrow-round-back' />
            </TouchableOpacity>
          </Appbar>
          <View style={styles.MainView}>
            <View style={styles.MainViewList}>
              <Text>UserId</Text>
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
  MainView:{
    flex:1
  },
  MainViewList:{

  },
  MainViewListLeft:{

  },
  MainViewListRight:{

  }
});

export default Home;
