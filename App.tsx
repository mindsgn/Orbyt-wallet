/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "./shim";
import './global';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Home from './view/home';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
