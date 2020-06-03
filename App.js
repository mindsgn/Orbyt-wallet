/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Load from './components/Load';
import Home from './components/navigation/Index.tsx';
import WalletList from './components/WalletList';
import Send from './components/Send';
import Recieve from './components/Recieve';
import Error from './components/Error';

//redux
import { Provider } from 'react-redux';
import configureStore from './utils/store/';
const store = configureStore()

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Load" component={Load} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Coins" component={WalletList} />
          <Stack.Screen name="Recieve" component={Recieve} />
          <Stack.Screen name="Send" component={Send} />
          <Stack.Screen name="Error" component={Error} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
