import React, { Component } from 'react';
import {
  Text, TouchableOpacity, Image,
  View,
} from 'react-native';

import firebase from 'react-native-firebase'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'


import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen'
import FirstScreen from './FirstScreen'
import MyCardScreen from './MyCardScreen';
import AddCardScreen from './AddCardScreen';
import LearnScreen from './LearnScreen'
import DiscoveryScreen from './DiscoveryScreen';
import OwnCardScreen from './OwnCardScreen';
import OtherCard from './OtherCard'

import { primaryColorCore, secondaryColorCore } from '../style';

const store = createStore(rootReducer)

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Navigation = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'User Info',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore
      },
      headerRight:
        <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: primaryColorCore,
            marginEnd: 20,
          }}>
            Add Card
          </Text>
        </TouchableOpacity >
    })
  },
  Topics: {
    screen: MyCardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Topics',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore

      },
    })
  },
  AddCard: {
    screen: AddCardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Card',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore

      },

    })
  },
  OwnCard: {
    screen: OwnCardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Own Card',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore

      },
    })
  },
  Learn: {
    screen: LearnScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Learn',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore

      },
    })
  },
  Discovery: {
    screen: DiscoveryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Discovery',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore

      },
    })
  },
  OtherCard: {
    screen: OtherCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Other Card',
      headerTintColor: primaryColorCore,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColorCore

      },
    })
  },
})

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: Navigation
})

const HandlerNavigation = createAppContainer(SwitchNavigation)

class App extends Component {
  state = {}

  render() {
    return (

      <Provider style={{ flex: 1 }} store={store}>
        <HandlerNavigation />
      </Provider>
    );
  }
}

export default App;