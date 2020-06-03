/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './../Home';
import Transactions from './../Transactions';
import Wallets from './../Wallets';
import Inbox from './../Inbox';
import Settings from './../Settings';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function tabs() {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Settings') {
                iconName = focused
                ? 'ios-settings'
                : 'ios-settings';
            } else if (route.name === 'Wallets') {
                iconName = focused
                ? 'ios-wallet'
                : 'ios-wallet';
            } else if (route.name === 'Inbox') {
                iconName = focused
                ? 'ios-chatboxes'
                : 'ios-chatboxes';
            }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Wallets" component={Wallets} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}
