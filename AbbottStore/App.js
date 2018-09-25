/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Login from './src/component/Login';
import Home from './src/component/Home';
import {createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator({
    login: {screen: Login},
    home: {screen: Home},
  },{
    initialRouteName: 'login',
  }
);

export default class App extends Component {
  render(){
    return(
      <RootStack />
    )
  }
}
