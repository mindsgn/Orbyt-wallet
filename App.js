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
import Home from './components/Home';
import Start from './components/start';
import Phone from './components/start/Phone';
import Settings from './components/Settings';
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
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="Error" component={Error} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
