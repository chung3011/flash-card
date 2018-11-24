import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import firebase from 'react-native-firebase'
import LoginScreen from './LoginScreen';
import MyCardScreen from './MyCardScreen';
import AddCardScreen from './AddCardScreen';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
const store = createStore(rootReducer)

class App extends Component {
  state = {}

  componentDidMount() {
    console.log(firebase)
  }


  render() {
    return (
      <Provider style={{ flex: 1 }} store={store}>
        <AddCardScreen />
      </Provider>
    );
  }
}

export default App;