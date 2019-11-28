/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/component/Login';
import Hello from './src/component/Hello';

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: Login },
  HelloScreen: { screen: Hello }
});

const App = createAppContainer(MainNavigator);

export default App;


