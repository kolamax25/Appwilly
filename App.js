import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookTransactions from './screens/BookTransactions'
import  SearchScreen  from './screens/SearchScreen'

export default class App extends React.Component{
  render(){
 return (
   <AppContainer/>
  );
  }
 
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: BookTransactions},
  Search : {screen: SearchScreen}
})

var AppContainer = createAppContainer(TabNavigator)