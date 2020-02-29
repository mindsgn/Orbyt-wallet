/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';

class App extends React.Component {
  render() {
    return (
      <PaperProvider style={styles.View}>
        <Home />
       </PaperProvider>
    );
  }
};

const styles = StyleSheet.create({
    View:{
      flex:1,
    }
});

export default App;
