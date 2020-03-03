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


import Home from './screens/Home';
import Load from './screens/Load';
import Help from './screens/Help';
import Send from './screens/Send';
import Charts from './screens/Charts';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Charts" component={Charts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
