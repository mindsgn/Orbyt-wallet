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

import { Provider } from 'react-redux';

import Home from './screens/Home';
import Load from './screens/Load';
import Help from './screens/Help';
import Send from './screens/Send';
import Charts from './screens/Charts';
import Settings from './screens/Settings';

import store from './utils/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Load" component={Load} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
