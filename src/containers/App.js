import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import firebase from 'react-native-firebase'
import { createSwitchNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'


import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen'
import FirstScreen from './FirstScreen'
import HomeScreen from './HomeScreen'
import MyCardScreen from './MyCardScreen';
import AddCardScreen from './AddCardScreen';
import LearnScreen from './LearnScreen'
import DiscoveryScreen from './DiscoveryScreen';

const store = createStore(rootReducer)

class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <DiscoveryScreen />
      </Provider>
    );
  }
}

export default App;