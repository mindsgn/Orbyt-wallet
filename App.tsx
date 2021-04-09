/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  *
  * @format
  * @flow strict-local
  **/

import "./shim";
import './global';
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Home from './view/home';
import Load from './view/load';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/*screen loading*/}
          <Stack.Screen
            name="Load"
            component={Load}
            options={{headerShown:false}}/>
            
          {/*screen home*/}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
