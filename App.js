import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search Restaurant'
  }
})

export default createAppContainer(navigator)

