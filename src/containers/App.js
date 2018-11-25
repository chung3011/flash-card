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

const store = createStore(rootReducer)

const Navigation = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'User Info',
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      headerRight:
        <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#e60073',
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
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      headerLeft:
        <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
          <Image
            style={{ height: 30, width: 30, marginEnd: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }} />
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#e60073',
            marginEnd: 20,
          }}>
            Add Card
        </Text>
        </TouchableOpacity >
    })
  },
  AddCard: {
    screen: AddCardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Card',
      headerTintColor: '#e60073',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },

    })
  },
  OwnCard: {
    screen: OwnCardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Own Card',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })
  },
  Learn: {
    screen: LearnScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Learn',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })
  },
  Discovery: {
    screen: DiscoveryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Learn',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })
  },
  OtherCard: {
    screen: OtherCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Learn',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
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