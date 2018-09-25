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
import OverViewList from './src/component/OverViewList';
import ProductLists from './src/component/ProductLists';
import UserProfile from './src/component/UserProfile';

import {createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator({
    login: {screen: Login},
    home: {screen: Home},
    overViewList: {screen: OverViewList},
    userProfile: {screen: UserProfile},
    productLists: {screen: ProductLists}
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
