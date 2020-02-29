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
import { Appbar } from 'react-native-paper';

class App extends React.Component {
  render() {
    return (
        <View styles={styles.View}>
          <Text>reac-native-paper</Text>
          <Text>stellar</Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
    View:{
      flex:1,
    },
    Header:{
      flex:1,
      backgroundColor: '#6078EA'
    },
    ViewCardBalance:{
      height:'40%',
      backgroundColor: '#6078EA'
    }
});

export default App;
